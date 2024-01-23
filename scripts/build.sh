#!/bin/bash
set -e

# TODO: This assumes nibiru is a relative path in the current working directory, but this doesn't work locally
cd nibiru
git checkout releases/v0.21.x
cd ..
yarn gql-generate
yarn proto-gen
yarn build:tsc

echo "Fix path resolution"
dist_folder="./dist"
# Go through all ts and js files in the dist folder
find "$dist_folder" -type f \( -name "*.ts" -o -name "*.js" \) -exec sed -i 's|require("@/|require("src/|g' {} +

# yarn docgen
