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
NIBIRU_REPO="../nibiru"    
PKG_OUT_DIR="./packages/protojs/src" 

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
    npx buf generate --template proto/buf.gen.ts.yaml -o $PKG_OUT_DIR $file
  done
done;

rm -rf proto/