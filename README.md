# offline-vandium-error
Reproduction of serverless-offline and vandium error of not releasing connections
make sure you have serverless installed globaly 

`
run ./serve.sh 
`

open mysql workbench and monitor the connections

`
run ./reproduce.sh
`

watch connections not closing untill `serverless-offline` is killed
