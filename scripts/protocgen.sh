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

if [ -d "../nibiru/" ]; then
  NIBIRU_REPO="../nibiru"
fi

PKG_OUT_DIR="./src/protojs"

# -----------------------------------------------------------------------------
# MAIN - Beginning of Script Execution
# -----------------------------------------------------------------------------
echo "Removing old src files"
rm -rf $PKG_OUT_DIR/
mkdir -p $PKG_OUT_DIR/

echo "Copying protos from the 'nibiru' repo"
rm -rf proto/
mkdir -p proto/
cp -r $NIBIRU_REPO/proto/ proto/

for dir in $(find ./proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | uniq | sort); do \
  for file in $(find "${dir}" -maxdepth 1 -name '*.proto'); do
    echo "Generating ts proto code for $file"
    buf generate --template proto/proto/buf.gen.ts.yaml -o $PKG_OUT_DIR $file
  done
done;

rm -rf proto/
yarn generate-barrels
# # the `descriptor.ts` file is only used for gogoproto, and it causes issues with TS-generated code
rm $PKG_OUT_DIR/google/protobuf/descriptor.ts
rm $PKG_OUT_DIR/index.google.protobuf.ts

# # Empty fles
rm -rf $PKG_OUT_DIR/amino
rm -rf $PKG_OUT_DIR/gogoproto
rm $PKG_OUT_DIR/google/api/annotations.ts
rm $PKG_OUT_DIR/index.gogoproto.ts
rm $PKG_OUT_DIR/index.amino.ts

sed 's/export \* as gogoproto from \"\.\/index\.gogoproto\"\;//' $PKG_OUT_DIR/index.ts > tmpfile && mv tmpfile $PKG_OUT_DIR/index.ts
sed 's/export \* from \"\.\/google\/api\/annotations\"\;//' $PKG_OUT_DIR/index.google.api.ts > tmpfile && mv tmpfile $PKG_OUT_DIR/index.google.api.ts
sed 's/export \* as protobuf from \"\.\/index.google.protobuf\"\;//' $PKG_OUT_DIR/index.google.ts > tmpfile && mv tmpfile $PKG_OUT_DIR/index.google.ts
