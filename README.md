# Adobe Coral Spectrum hugo theme

Hugo theme using Adobe [coral-spectrum](https://opensource.adobe.com/coral-spectrum/dist/documentation/) Web Components following Spectrum design patterns.

# Usage

See [exampleSite](exampleSite/README.md) for a sample docs website.


### Maintainers Notice

When updating hugo theme in this repository make sure you:

1. Update the `exampleSite` theme version:

```sh
cd exampleSite
git submodule update --remote --merge
git commit themes/hugo-spectrum -m "Updated theme in exampleSite"
git push
```

2. Generate and publish `exampleSite` in `gh-pages` branch

## Releasing to gh-pages branch


```bash
#!/usr/bin/env sh
#set -e

# from root dir of this repo
MESSAGE=$(git log --format=format:%s -1)

git clone --single-branch --branch gh-pages git@git.corp.adobe.com:reef/hugo-spectrum.git site-pages

docker run --rm \
-v "`pwd`":/src \
-v "`pwd`/site-pages":/target \
klakegg/hugo:0.64.1-ext \
--source="/src" \
--destination="/target" --ignoreCache

cd site-pages
git add . -f --all

if [ -z "$(git status --porcelain)" ]; then
  echo "Working directory clean, nothing to commit"
else
  echo "Commit message will be $MESSAGE"
  git commit -m "$MESSAGE"
  git push origin gh-pages
fi
```

### Contributing

Contributions are welcomed! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

### Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
