#!/bin/bash
set -e

cd ..
cd nibiru
git checkout releases/v0.21.x
cd ..
yarn gql-generate
yarn proto-gen
yarn build:tsc
yarn docgen
