#!/bin/bash

bury_copy() { mkdir -p `dirname $2` && cp "$1" "$2"; }

rm -r build-out/*

cp background.js build-out
cp extension.js build-out
cp -r resources build-out

rm -r build-out/resources/vendor

bury_copy resources/vendor/underscore-amd/underscore-min.js build-out/resources/vendor/underscore-amd/underscore-min.js
bury_copy resources/vendor/jquery/jquery.min.js             build-out/resources/vendor/jquery/jquery.min.js
bury_copy resources/vendor/requirejs/require.js             build-out/resources/vendor/requirejs/require.js

rm extension.zip
zip extension build-out/ -r
