docker exec cli peer channel create -o orderer.dapp.com:7050 -c mychannel -f ./channel-artifacts/channel.tx  --outputBlock ./channel-artifacts/mychannel.block --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/dapp.com/msp/tlscacerts/tlsca.dapp.com-cert.pem
docker exec cli peer channel join -b ./channel-artifacts/mychannel.block
docker exec cli peer channel list


docker exec cli peer chaincode install -n mycc -v 1.0 -l node -p /opt/gopath/src/github.com/chaincode


#instantiate chian xchode 
#----------------------------------

#docker exec cli peer chaincode instantiate -o orderer.dapp.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/dapp.com/orderers/orderer.dapp.com/msp/tlscacerts/tlsca.dapp.com-cert.pem -C mychannel -n mycc -l node -v 1.0 -c '{"Args":["init","a","100","b","200"]}' -P "AND ('Org1MSP.peer','Org2MSP.peer')"
#docker exec cli peer chaincode invoke -C mychannel -n chaincode_example02 -c '{"Args":["initMarble","marble1","blue","35","tom"]}'
#docker exec cli peer channel getinfo -c mychannel
docker exec cli peer chaincode instantiate -o orderer.dapp.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/dapp.com/orderers/orderer.dapp.com/msp/tlscacerts/tlsca.dapp.com-cert.pem -C mychannel -n mycc -l node -v 1.0 -c '{"Args":["write","user-1","ahmad","123123","longitude","latitude","07:20","08:00","1-km"]}'
echo "done"