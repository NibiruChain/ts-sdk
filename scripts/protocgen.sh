#!/usr/bin/env bash

set -eo pipefail

# ---------------------------------------------------------------- 
# CONFIG
#
# NIBIRU_REPO: local directory for the NibiruChain/nibiru repo
NIBIRU_REPO="../nibiru"    
PKG_OUT_DIR="./packages/protojs/src" 
  # TODO create $PKG_OUT_DIR if it doesn't exist
  # mkdir -p ./packages/protojs/src/${dir}; \
SDK_VERSION="v0.45.10"
# ---------------------------------------------------------------- 

check_for_nibiru_repo() {
  if [ ! -d $NIBIRU_REPO/proto ]; then 
    echo "Missing Nibiru protos expected in the $NIBIRU_REPO/proto directory"
    echo "current dir: $(pwd)"
    return 1
  fi
}

create_pkg_out_dir() {
  if [ ! -d $PKG_OUT_DIR ]; then 
    echo "Creating PKG_OUT_DIR: $PKG_OUT_DIR"
    mkdir -p $PKG_OUT_DIR
    echo "current dir: $(pwd)"
    return 1
  fi
}

copy_protos_from_nibiru_repo() {
  echo "Copying protos from the 'nibiru' repo"
  rm -rf proto
  mkdir -p proto
  cp -r $NIBIRU_REPO/proto/ proto/
}

protoc_gen_gocosmos() {
  if ! grep "github.com/gogo/protobuf => github.com/regen-network/protobuf" go.mod &>/dev/null; then
    echo -e "\tPlease run this command from somewhere inside the cosmos-sdk folder."
    return 1
  fi

  # get protoc executions
  go get github.com/regen-network/cosmos-proto/protoc-gen-gocosmos@latest 2>/dev/null
  # go get github.com/gogo/protobuf/proto 2>/dev/null
  # get cosmos sdk from github
  go get github.com/cosmos/cosmos-sdk@$SDK_VERSION 2>/dev/null
}

skip_line() {
  printf "\n--------------------------------------------------\n"
}

# -----------------------------------------------------------------------------
# Beginning of Script Execution
# -----------------------------------------------------------------------------

check_for_nibiru_repo
copy_protos_from_nibiru_repo

echo "Grabbing cosmos-sdk proto file locations from disk"
echo "current dir: $(pwd)"
cd ../nibiru;
protoc_gen_gocosmos
cosmos_sdk_dir=$(go list -f '{{ .Dir }}' -m github.com/cosmos/cosmos-sdk)

skip_line
echo "Grabbing all of the Cosmos-SDK and third party protos"
echo "current dir: $(pwd)"
cd -;
echo "current dir: $(pwd)"
proto_dirs=$(find $cosmos_sdk_dir/proto $cosmos_sdk_dir/third_party/proto proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | uniq | sort)
echo "Proto Directories: "
for dir in $proto_dirs; do \
  echo $dir
done;

skip_line
create_pkg_out_dir
echo "Clearing PKG_OUT_DIR: $PKG_OUT_DIR"
rm -rf $PKG_OUT_DIR/*

skip_line
for dir in $proto_dirs; do \
  prefix=$HOME/go/pkg/mod/github.com
  prefix_removed_string=${dir/#$prefix}
  echo "generating $prefix_removed_string ----------------------------------------" 
  protoc \
    --plugin=./node_modules/.bin/protoc-gen-ts_proto \
    -I "$cosmos_sdk_dir/third_party/proto" \
    -I "$cosmos_sdk_dir/proto" \
    -I proto \
    --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages" \
    --ts_proto_out=$PKG_OUT_DIR \
    $(find "${dir}" -type f -name '*.proto')
done; \
rm -rf proto
