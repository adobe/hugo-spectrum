#!/usr/bin/env sh
#
# Copyright 2020 Adobe
# All Rights Reserved.
#
# NOTICE: Adobe permits you to use, modify, and distribute this file in
# accordance with the terms of the Adobe license agreement accompanying
# it. If you have received this file from a source other than Adobe,
# then your use, modification, or distribution of it requires the prior
# written permission of Adobe.
#

set -e
set -x

# from root dir of this repo
MESSAGE=$(git log --format=format:%s -1)

git clone --single-branch --branch gh-pages git@github.com:adobe/hugo-spectrum.git site-pages
# Remove previous version - will be regenerated
rm -rf site-pages/*

hugo -v --source="$PWD/exampleSite" --destination="$PWD/site-pages" --ignoreCache

cd site-pages
git add . -f --all

if [ -z "$(git status --porcelain)" ]; then
  echo "Working directory clean, nothing to commit"
else
  echo "Commit message will be $MESSAGE"
  git commit -m "$MESSAGE"
  git push origin gh-pages
fi

cd ..
rm -rf site-pages
