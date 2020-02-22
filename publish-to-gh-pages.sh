#!/usr/bin/env sh
set -e
set -x

# from root dir of this repo
MESSAGE=$(git log --format=format:%s -1)

git clone --single-branch --branch gh-pages git@git.corp.adobe.com:reef/hugo-spectrum.git site-pages
# Remove previous version - will be regenerated
rm -rf site-pages/*


docker run --rm \
-v "`pwd`":/src \
-v "`pwd`/site-pages":/target \
klakegg/hugo:0.64.1-ext \
--source="/src/exampleSite" \
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

rm -rf site-pages
