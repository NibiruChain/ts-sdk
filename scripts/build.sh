#!/bin/bash
set -e

# Test for ./nibiru/ directory
if [ -d "./nibiru/" ]; then
  echo "The ./nibiru/ directory exists."
  cd nibiru
  git checkout main
  cd ..
else
  cd ../nibiru
  git checkout main
  git pull
  cd ../ts-sdk
fi

yarn gql-generate & yarn proto-gen
yarn build:tsc
yarn docgen
