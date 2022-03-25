#!/bin/bash

for f in src/pages/*.html; do
  node build-page.js "$f" || exit 1
done
