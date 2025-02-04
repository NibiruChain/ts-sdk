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
PKG_OUT_DIR="./src/protojs"

# -----------------------------------------------------------------------------
# MAIN - Beginning of Script Execution
# -----------------------------------------------------------------------------
echo "Removing old src files"
rm -rf $PKG_OUT_DIR/
mkdir -p $PKG_OUT_DIR/

for dir in $(find $NIBIRU_REPO/proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | uniq | sort); do
  for file in $(find "${dir}" -maxdepth 1 -name '*.proto'); do
    echo "Generating ts proto code for $file"
    buf generate --template $NIBIRU_REPO/proto/buf.gen.ts.yaml -o $PKG_OUT_DIR $file
  done
done

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
rm $PKG_OUT_DIR/index.cosmos.msg.v1.ts
rm $PKG_OUT_DIR/index.cosmos.msg.ts

sed 's/export \* as gogoproto from \"\.\/index\.gogoproto\"\;//' $PKG_OUT_DIR/index.ts >tmpfile && mv tmpfile $PKG_OUT_DIR/index.ts
sed 's/export \* as amino from \"\.\/index\.amino\"\;//' $PKG_OUT_DIR/index.ts >tmpfile && mv tmpfile $PKG_OUT_DIR/index.ts
sed 's/export \* as google from \"\.\/index\.google\"\;//' $PKG_OUT_DIR/index.ts >tmpfile && mv tmpfile $PKG_OUT_DIR/index.ts
sed 's/export \* from \"\.\/google\/api\/annotations\"\;//' $PKG_OUT_DIR/index.google.api.ts >tmpfile && mv tmpfile $PKG_OUT_DIR/index.google.api.ts
sed 's/export \* as protobuf from \"\.\/index.google.protobuf\"\;//' $PKG_OUT_DIR/index.google.ts >tmpfile && mv tmpfile $PKG_OUT_DIR/index.google.ts
sed 's/export \* as msg from \"\.\/index.cosmos.msg\"\;//' $PKG_OUT_DIR/index.cosmos.ts >tmpfile && mv tmpfile $PKG_OUT_DIR/index.cosmos.ts

# Adding custom seds to fix golang & protojs types
sed -i 's/\(\s*\)message\.erc20Addr = reader\.string();/\1\/\/ Converting raw bytes to string\n\1const bytes = reader.bytes()\n\1message.erc20Addr = "0x" + Buffer.from(bytes).toString("hex");/' "$PKG_OUT_DIR/eth/evm/v1/evm.ts"
sed -i 's/\(\s*\)writer\.uint32(10)\.string(message\.toEthAddr);/\1\/\/ Converting string to raw bytes\n\1const bytes = new Uint8Array(\n\1message.toEthAddr.match(\/.{1,2}\/g)!.map((byte) => parseInt(byte, 16))\n\1)\n\1writer.uint32(10).bytes(bytes)/' "$PKG_OUT_DIR/eth/evm/v1/tx.ts"
