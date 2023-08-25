#!/bin/bash
set +e

if [ -z "$1" ]; then
    echo "Invalid version specified: \"$1\""
    exit 1
fi

echo "Building jest-transform-yaml" 

yarn build

echo "Running test for Jest version $1"

pushd ./e2e || exit 1

sed -i".bak" -e "s/JEST_VERSION/$1/g" package.json
yarn install

yarn test
sc=$?

mv package.json.bak package.json
rm -rf node_modules yarn.lock

popd || exit 1

exit $sc