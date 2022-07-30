#!/usr/bin/env sh
#
# Copyright 2021 Adobe
# All Rights Reserved.
#
# NOTICE: Adobe permits you to use, modify, and distribute this file in
# accordance with the terms of the Adobe license agreement accompanying
# it. If you have received this file from a source other than Adobe,
# then your use, modification, or distribution of it requires the prior
# written permission of Adobe.
#

set -ex

STORK_VERSION="v1.5.0"
mkdir -p static/stork

wget https://github.com/jameslittle230/stork/releases/download/$STORK_VERSION/stork.js -O static/js/stork.js
wget https://github.com/jameslittle230/stork/releases/download/$STORK_VERSION/stork.wasm -O static/stork/stork.wasm

