bx login -a api.ng.bluemix.net --apikey "${apikey}" -o "${user}" -s "${space}"

bx wsk action update API/CreateSpot post/spot/index.js --kind nodejs:8
bx wsk action update API/GetSpots get/spot/index.js --kind nodejs:8