# Maily---express-server
1. npm install
2. Create config folder
3. add a keys.js to config folder:
 Inside paste:
  module.exports = {
    GOOGLE_CLIENT_ID:'<Google client id generated here: https://console.cloud.google.com/apis/credentials/>',
    GOOGLE_CLIENT_SECRET: '<secret for that client>'
    MONGO_URL: '<url from your cluster with username and password>'
}
6.Docker:
 docker build -t <imageName> .
