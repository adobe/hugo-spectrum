<!--/*
     *
     * Copyright 2020 Adobe
     * All Rights Reserved.
     *
     * NOTICE: Adobe permits you to use, modify, and distribute this file in
     * accordance with the terms of the Adobe license agreement accompanying
     * it. If you have received this file from a source other than Adobe,
     * then your use, modification, or distribution of it requires the prior
     * written permission of Adobe.
     *
     */-->
Sample docs website using `hugo-spectrum` theme

# Run locally

```sh
docker run --rm -i -t -p 1313:1313 --rm \
     -v "`pwd`/..":/src \
     -v `pwd`/..:/src/exampleSite/themes/hugo-spectrum \
     amuraru/hugo:0.67.1 \
     server -v \
     --source /src/exampleSite \
     --watch \
     --buildDrafts \
     --disableFastRender \
     --noHTTPCache \
     --enableGitInfo=false \
     --cleanDestinationDir \
     --forceSyncStatic \
     --path-warnings
```
# Update theme to the latest version

`hugo-spectrum` theme is added as hugo modules in [themes](themes) directory.

In order to update, run:
```
hugo mod get -u
```
