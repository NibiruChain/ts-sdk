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
#   SDK_VERSION: Golang version number for the Cosmos-SDK dependencies.
#     Ex: v0.45.12 means we expect to use that tagged version from 
#     the github.com/cosmos/cosmos-sdk repository.
NIBIRU_REPO="../nibiru"    
PKG_OUT_DIR="./packages/protojs/src" 
  # TODO (realu) create $PKG_OUT_DIR if it doesn't exist
  # mkdir -p ./packages/protojs/src/${dir}; \
SDK_VERSION="v0.45.12"
# ---------------------------------------------------------------- 

check_for_nibiru_repo() {
  if [ ! -d $NIBIRU_REPO/proto ]; then 
    echo "Missing Nibiru protos expected in the $NIBIRU_REPO/proto directory"
    echo_pwd
    return 1
  fi
}

create_pkg_out_dir() {
  if [ ! -d $PKG_OUT_DIR ]; then 
    echo "Creating PKG_OUT_DIR: $PKG_OUT_DIR"
    mkdir -p $PKG_OUT_DIR
    echo_pwd
    return 1
  fi
}

copy_protos_from_nibiru_repo() {
  echo "Copying protos from the 'nibiru' repo"
  rm -rf proto
  mkdir -p proto
  cp -r $NIBIRU_REPO/proto/ .
  # cp -r $NIBIRU_REPO/proto/ proto/
  cp $NIBIRU_REPO/go.mod go.mod
  cp $NIBIRU_REPO/go.sum go.sum
}

protoc_gen_gocosmos() {
  if ! grep "github.com/gogo/protobuf => github.com/regen-network/protobuf" go.mod &>/dev/null; then
    echo -e "\tPlease run this command from somewhere inside the cosmos-sdk folder."
    return 1
  fi

  if [ "$(basename "$PWD")" == "nibiru" ]; then
      echo "Happy - Current directory is 'nibiru'"
  else
      echo "Fail - Current directory is not 'nibiru'"
      exit 1  # Error exit status
  fi

  # Get protoc executions
  go get github.com/regen-network/cosmos-proto/protoc-gen-gocosmos@latest 

  # Get gogo/protobuf. This isn't always necessary. Newer versions of the CSDK
  #   keep a copy of dependencies in the proto/third_party directory.
  # go get github.com/gogo/protobuf/proto 2>/dev/null
  
  # Get Cosmos-SDK package from github
  go get github.com/cosmos/cosmos-sdk@$SDK_VERSION 2>/dev/null
}

echo_pwd() {
  echo "current dir: $(pwd)"
}

skip_line() {
  printf "\n--------------------------------------------------\n"
}

# code_gen (fn): Generates code in TypeScript based on the proto files from
#   the Cosmos-SDK (CSDK) and NibiruChain/nibiru repositories based on the 
#   dependencies in the go.mod of Nibiru.
code_gen() {
  echo "Grabbing cosmos-sdk proto file locations from disk"
  echo_pwd
  cd ../nibiru;
  protoc_gen_gocosmos
  local cosmos_sdk_dir=$(go list -f '{{ .Dir }}' -m github.com/cosmos/cosmos-sdk)
  echo "Happy: Found cosmos_sdk_dir: $cosmos_sdk_dir"

  skip_line
  echo "Grabbing all of the Cosmos-SDK and third party protos"
  echo_pwd
  cd -;
  echo_pwd

  local proto_dirs=$(find $cosmos_sdk_dir/proto $cosmos_sdk_dir/third_party/proto proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | uniq | sort)
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
    echo "generating $prefix_removed_string -----------------------------------" 
    protoc \
      --plugin=./node_modules/.bin/protoc-gen-ts_proto \
      -I "$cosmos_sdk_dir/third_party/proto" \
      -I "$cosmos_sdk_dir/proto" \
      -I proto \
      --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages" \
      --ts_proto_out=$PKG_OUT_DIR \
      $(find "${dir}" -type f -name '*.proto')
  done; \
}

# -----------------------------------------------------------------------------
# MAIN - Beginning of Script Execution
# -----------------------------------------------------------------------------

main () {
  check_for_nibiru_repo
  copy_protos_from_nibiru_repo
  code_gen

  rm go.mod go.sum
  rm -rf proto
}

main
