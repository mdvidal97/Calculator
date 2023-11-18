#!/bin/bash

CIRCLECI_TOKEN="CCIPAT_7K3HG3trcr637YEFNdeS3v_a30b09de6ff18f66423bc723e3b5caae94fe4d60"
PROJECT_SLUG="gh/mdvidal97/Calculator"
BUILD_NUMBER="9" # Replace with your build number
 
# Use the CircleCI API to retrieve artifacts
curl -s "https://circleci.com/api/v2/project/${PROJECT_SLUG}/${BUILD_NUMBER}/artifacts" \
-H "Circle-Token: ${CIRCLECI_TOKEN}" \
-H "Accept: application/json"
