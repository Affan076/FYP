# docker exec cli peer chaincode install -n mycc -v 1.0 -l node -p /opt/gopath/src/github.com/chaincode


# #instantiate xhian xchode 
# #----------------------------------

# docker exec cli peer chaincode instantiate -o orderer.dapp.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/dapp.com/orderers/orderer.dapp.com/msp/tlscacerts/tlsca.dapp.com-cert.pem -C mychannel -n mycc -l node -v 1.0 -c '{"Args":["init","a","100","b","200"]}' -P "AND ('Org1MSP.peer','Org2MSP.peer')"



# echo ""
# echo ""
# echo "===================================command completed pc.sh=============================="
# echo ""
# echo ""


