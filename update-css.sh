#!/bin/bash

# get the directory in which this script is located (the theme source dir)
SOURCE_DIR=$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)

# create the container for zola builds and tailwindcss updates
docker build -t develop-zola-tailwindcss "${SOURCE_DIR}" || exit 2

# update the CSS file using tailwindcss and the JavaScript files using uglifyjs
docker run --rm -v ${SOURCE_DIR}:/source:Z -w /source develop-zola-tailwindcss \
    sh -c "uglifyjs ./src/js/main.js --compress --mangle -o ./static/js/main.js &&
           uglifyjs ./src/js/page.js --compress --mangle -o ./static/js/page.js &&
           uglifyjs ./src/js/search.js --compress --mangle -o ./static/js/search.js &&
           tailwindcss -i src/css/main.css -o static/css/main.css --minify" || exit 3
