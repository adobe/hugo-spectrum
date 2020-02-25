<!--/*
*
*    ADOBE CONFIDENTIAL
*    ___________________
*
*    Copyright 2020 Adobe Systems Incorporated
*    All Rights Reserved.
*
*    NOTICE:  All information contained herein is, and remains
*    the property of Adobe Systems Incorporated and its suppliers,
*    if any.  The intellectual and technical concepts contained
*    herein are proprietary to Adobe Systems Incorporated and its
*    suppliers and are protected by all applicable intellectual property
*    laws, including trade secret and copyright laws.
*    Dissemination of this information or reproduction of this material
*    is strictly forbidden unless prior written permission is obtained
*    from Adobe Systems Incorporated.
*
*/-->
# Adobe Coral Spectrum hugo theme

Hugo theme using Adobe [coral-spectrum](https://opensource.adobe.com/coral-spectrum/dist/documentation/) Web Components following Spectrum design patterns.

# Usage

See [exampleSite](exampleSite/) for a sample docs website.

A live demo is available at: https://git.corp.adobe.com/pages/reef/hugo-spectrum


# Maintainers Notice

## Update `coral-spectrum` version

This theme is using [adobe/coral-spectrum](https://github.com/adobe/coral-spectrum) Web Components.

To upgrade `coral-spectrum` follow these steps:

```sh
set -e
#get the package tarball url
wget `npm view @adobe/coral-spectrum dist.tarball`
tar xzvf coral-spectrum-*.tgz
cp package/dist/css/coral.min.css static/css/coral.min.css
cp package/dist/js/coral.min.js* static/js/
cp package/dist/resources/spectrum-* static/resources/
rm -rf coral-spectrum-*.tgz package

# commit to git
git add .
git commit
```
See also https://opensource.adobe.com/coral-spectrum/dist/documentation/manual/manual.html#consuming for full details.

## Update `mermaid` version
This theme has support for [Mermaid](https://mermaid-js.github.io/mermaid/) diagrams. 
To upgrade `mermaid` follow these steps:

```sh
set -e
#get the package tarball url
wget `npm view mermaid dist.tarball`
tar xzvf mermaid-*.tgz
cp package/dist/mermaid.min.js* static/js/
rm -rf mermaid-*.tgz package

# commit to git
git add .
git commit
```

## Update `markdeep` version
This theme has support for [Markdeep](https://casual-effects.com/markdeep/features.md.html#diagramexamples) diagrams. 
To upgrade `markdeep` follow these steps:

```sh
set -e
#get js
wget https://casual-effects.com/markdeep/latest/markdeep.min.js -O static/js/markdeep.min.js

# commit to git
git add .
git commit
```

## Update `exampleSite` demo site
When updating hugo theme in this repository make sure you:

1. Update the `exampleSite` theme version:
    ```sh
    cd exampleSite
    git submodule update --remote --merge
    git commit themes/hugo-spectrum -m "Updated theme in exampleSite"
    git push
    ```

2. Generate and publish `exampleSite` in `gh-pages` branch

    Run [publish-to-gh-pages.sh](publish-to-gh-pages.sh)

# Contributing

Contributions are welcomed! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

# Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
