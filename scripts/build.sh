#!/bin/bash
set -e

# Disabled for EVM protos
git submodule init
# git submodule update

yarn gql-generate & yarn proto-gen
yarn build:tsc
yarn docgen
