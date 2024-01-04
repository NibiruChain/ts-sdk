#!/bin/bash
set -e

cd packages/indexer-nibi
yarn install
cd ../..
cd packages/nibijs
yarn install
cd ../..
cd packages/protojs
yarn install
cd ../..