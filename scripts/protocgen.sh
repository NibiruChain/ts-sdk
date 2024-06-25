#!/usr/bin/env bash

set -eo pipefail

# ----------------------------------------------------------------
# CONFIG
#
# Globals:
#   NIBIRU_REPO: Local directory for the NibiruChain/nibiru repo.
#     This script currently assumes you have a local clone of the repo.
#   PKG_OUT_DIR: Output path where the generated code will go upon
#     successful execution.
NIBIRU_REPO="./nibiru"
COSMOS_SDK_REPO="./cosmos-sdk"
PKG_OUT_DIR="./src/protojs"

# -----------------------------------------------------------------------------
# MAIN - Beginning of Script Execution
# -----------------------------------------------------------------------------
echo "Removing old src files"
rm -rf $PKG_OUT_DIR/
mkdir -p $PKG_OUT_DIR/

for dir in $(find $NIBIRU_REPO/proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | uniq | sort); do \
  for file in $(find "${dir}" -maxdepth 1 -name '*.proto'); do
    echo "Generating ts proto code for $file"
    buf generate --template $NIBIRU_REPO/proto/buf.gen.ts.yaml -o $PKG_OUT_DIR $file
  done
done;

for dir in $(find $COSMOS_SDK_REPO/x/staking/proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | uniq | sort); do \
  for file in $(find "${dir}" -maxdepth 1 -name '*.proto'); do
    echo "Generating ts proto code for $file"
    buf generate --template $NIBIRU_REPO/proto/buf.gen.ts.yaml -o $PKG_OUT_DIR $file
  done
done;

yarn generate-barrels
# # the `descriptor.ts` file is only used for gogoproto, and it causes issues with TS-generated code
rm $PKG_OUT_DIR/google/protobuf/descriptor.ts
rm $PKG_OUT_DIR/index.google.protobuf.ts

# # Empty fles
rm -rf $PKG_OUT_DIR/amino
rm -rf $PKG_OUT_DIR/gogoproto
rm -rf $PKG_OUT_DIR/cosmos/msg
rm $PKG_OUT_DIR/google/api/annotations.ts
rm $PKG_OUT_DIR/index.gogoproto.ts
rm $PKG_OUT_DIR/index.amino.ts
rm $PKG_OUT_DIR/index.google.ts
rm $PKG_OUT_DIR/index.cosmos.msg.v1.ts
rm $PKG_OUT_DIR/index.cosmos.msg.ts
rm $PKG_OUT_DIR/index.cosmos.query.v1.ts
rm $PKG_OUT_DIR/index.cosmos.query.ts

sed 's/export \* as gogoproto from \"\.\/index\.gogoproto\"\;//' $PKG_OUT_DIR/index.ts > tmpfile && mv tmpfile $PKG_OUT_DIR/index.ts
sed 's/export \* as amino from \"\.\/index\.amino\"\;//' $PKG_OUT_DIR/index.ts > tmpfile && mv tmpfile $PKG_OUT_DIR/index.ts
sed 's/export \* as google from \"\.\/index\.google\"\;//' $PKG_OUT_DIR/index.ts > tmpfile && mv tmpfile $PKG_OUT_DIR/index.ts
sed 's/export \* from \"\.\/google\/api\/annotations\"\;//' $PKG_OUT_DIR/index.google.api.ts > tmpfile && mv tmpfile $PKG_OUT_DIR/index.google.api.ts
sed 's/export \* as msg from \"\.\/index.cosmos.msg\"\;//' $PKG_OUT_DIR/index.cosmos.ts > tmpfile && mv tmpfile $PKG_OUT_DIR/index.cosmos.ts
