#!/bin/bash

if [ -z "$CF_PAGES_BRANCH" ] || [ "$CF_PAGES_BRANCH" == "main" ] || [ "$CF_PAGES_BRANCH" == "master" ]; then
    exit 0
fi

echo '
User-agent: *
Disallow: /' > public/robots.txt