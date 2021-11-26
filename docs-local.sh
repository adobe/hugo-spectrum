#!/bin/bash
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

HUGO_DOCKER_IMAGE="ghcr.io/amuraru/hugo:v0.89.4"

rm -rf site-pages/*

docker run --rm \
    -v "`pwd`":/src \
    -v "`pwd`":/src/exampleSite/themes/hugo-spectrum \
    -v "`pwd`/site-pages":/target \
    $HUGO_DOCKER_IMAGE \
    --source="/src/exampleSite" \
    --destination="/target" \
    --theme hugo-spectrum \
    --baseURL "http://localhost:1313/hugo-spectrum" \
    --cleanDestinationDir \
    --forceSyncStatic \
    --path-warnings \
    --ignoreCache

docker run --rm \
    -v "`pwd`/site-pages":/stork-input \
    -v "`pwd`/site-pages":/stork-output \
    ghcr.io/alexander-falca/stork:v1.2.1 \
    build --input /stork-input/index.toml --output /stork-output/stork/site-index.st

docker run --rm -i -t -p 1313:1313 \
     -v "`pwd`":/src \
     -v "`pwd`":/src/exampleSite/themes/hugo-spectrum \
     -v "`pwd`/site-pages":/target \
     $HUGO_DOCKER_IMAGE \
     server -v \
     --source /src/exampleSite \
     --destination="/target" \
     --theme hugo-spectrum \
     --watch \
     --buildDrafts \
     --disableFastRender \
     --noHTTPCache \
     --enableGitInfo=false \
     --path-warnings \
     --renderToDisk
