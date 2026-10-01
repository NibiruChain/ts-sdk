#!/bin/bash
set -e

git submodule init
git submodule update

yarn wagmi:generate
yarn gql-generate & yarn proto-gen
yarn build:tsc
yarn docgen
