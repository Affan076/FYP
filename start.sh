
#./cryptogen generate --config=./crypto-config.yaml
#./configtxgen -profile TwoOrgsOrdererGenesis -channelID system-channel -outputBlock ./channel-artifacts/genesis.block
#./configtxgen -profile TwoOrgsChannel -outputCreateChannelTx ./channel-artifacts/channel.tx -channelID mychannel

##############################################################################es sy opr generate wali command han 


#docker-compose -f docker-compose-cli.yaml up -d
# docker-compose -f docker-compose-couch.yaml up -d

#install
#_______________-
# docker exec cli peer chaincode install -n mycc -v 1.0 -l node -p /opt/gopath/src/github.com/chaincode


# #instantiate xhian xchode 
# #----------------------------------

# docker exec cli peer chaincode instantiate -o orderer.dapp.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/dapp.com/orderers/orderer.dapp.com/msp/tlscacerts/tlsca.dapp.com-cert.pem -C mychannel -n mycc -l node -v 1.0 -c '{"Args":["init","a","100","b","200"]}' -P "AND ('Org1MSP.peer','Org2MSP.peer')"

