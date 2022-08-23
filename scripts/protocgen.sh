#!/usr/bin/env bash

set -eo pipefail

rm -rf proto
mkdir -p proto
cp -r ../nibiru/proto/ proto/
echo "Copied protos"

protoc_gen_gocosmos() {
  if ! grep "github.com/gogo/protobuf => github.com/regen-network/protobuf" go.mod &>/dev/null; then
    echo -e "\tPlease run this command from somewhere inside the cosmos-sdk folder."
    return 1
  fi

  # get protoc executions
  go get github.com/regen-network/cosmos-proto/protoc-gen-gocosmos@latest 2>/dev/null
  # go get github.com/gogo/protobuf/proto 2>/dev/null
  # get cosmos sdk from github
  go get github.com/cosmos/cosmos-sdk@v0.45.6 2>/dev/null
}

skip_line() {
  printf "\n--------------------------------------------------\n"
}

echo "grabbing cosmos-sdk proto file locations from disk"
echo "current dir: $(pwd)"
cd ../nibiru;
protoc_gen_gocosmos
cosmos_sdk_dir=$(go list -f '{{ .Dir }}' -m github.com/cosmos/cosmos-sdk)

skip_line
echo "grab all of the proto directories"
echo "current dir: $(pwd)"
cd -;
echo "current dir: $(pwd)"
proto_dirs=$(find $cosmos_sdk_dir/proto $cosmos_sdk_dir/third_party/proto/ ./proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
echo "Proto Directories: "
for dir in $proto_dirs; do \
  echo $dir
done;

skip_line
OUT_DIR=./packages/api/src
echo "Clearing $OUT_DIR"
rm -rf $OUT_DIR/*

skip_line
for dir in $proto_dirs; do \
  # echo "generating $dir"
  string=$dir
  prefix=$HOME/go/pkg/mod/github.com
  prefix_removed_string=${string/#$prefix}
  echo "generating $prefix_removed_string ----------------------------------------" 
  # mkdir -p ./packages/api/src/${dir}; \
  protoc \
    --plugin=./node_modules/.bin/protoc-gen-ts_proto \
    -I "$cosmos_sdk_dir/third_party/proto" \
    -I "$cosmos_sdk_dir/proto" \
    -I proto/proto \
    --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages" \
    --ts_proto_out=$OUT_DIR \
    $(find "${dir}" -type f -name '*.proto')
done; \
rm -rf proto
