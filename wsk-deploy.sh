#!/bin/bash
#
# This file is being managed by the yo cloud-functions
# generator. 
# 
# I wouldn't edit it but if you must, EDIT AT YOUR OWN RISK
#

# Get the OpenWhisk CLI
mkdir ~/wsk
curl https://openwhisk.ng.bluemix.net/cli/go/download/linux/amd64/wsk > ~/wsk/wsk
chmod +x ~/wsk/wsk
export PATH=$PATH:~/wsk

wsk property set --apihost openwhisk.ng.bluemix.net --auth "${OPENWHISK_AUTH}" --namespace "${CF_ORG}_${CF_SPACE}"

wsk property get

wsk package update "${OPWNWHISK_PACKAGE}" -P "${WSK_CONFIG}"

# Deploy Salesforce DatedConversionRate Sync
wsk action update "${OPWNWHISK_PACKAGE}/spot" build/post/spot/spot.zip --kind nodejs:8 -t 300000

wsk action update "${OPWNWHISK_PACKAGE}/spot" build/get/spot.zip --kind nodejs:8 -t 300000