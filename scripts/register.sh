#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

NODE_ENV=${NODE_ENV:-}
ENV_FILE=".env.local"
YML_FILE="manifest.yml"
echo "Registering the app using APP_TITLE provided in .env.local"
# read the APP_TITLE value from .env.local file
APP_TITLE=$(grep APP_TITLE $ENV_FILE | cut -d '=' -f2)

forge register <<< "$APP_TITLE"
wait
# read the app:id value from the manifest.yml file where the id is everything after ari:cloud:ecosystem::app/ using sed
APP_ID=$(grep 'ari:cloud:ecosystem::app/' manifest.yml | sed 's/.*ari:cloud:ecosystem::app\///')

# write APP_ID to the .env.local file
echo "APP_ID: $APP_ID"
printf "\nAPP_ID=$APP_ID" >> $ENV_FILE

# replace everything after ::app\ with ${APP_ID} in the manifest.yml file
sed -i '' "s/ari:cloud:ecosystem::app\/.*/ari:cloud:ecosystem::app\/\${APP_ID}/" $YML_FILE
# replace the title value with ${APP_TITLE} in the manifest.yml file
sed -i '' "s/title: .*/title: \${APP_TITLE}/" $YML_FILE
echo "Done!"
