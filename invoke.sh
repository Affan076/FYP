#docker exec cli peer chaincode invoke -o orderer.dapp.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/dapp.com/orderers/orderer.dapp.com/msp/tlscacerts/tlsca.dapp.com-cert.pem -C mychannel -n mycc --peerAddresses peer0.org1.dapp.com:7051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.dapp.com/peers/peer0.org1.dapp.com/tls/ca.crt -c '{"Args":["Invoke"]}'
docker exec cli peer chaincode invoke -o orderer.dapp.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/dapp.com/orderers/orderer.dapp.com/msp/tlscacerts/tlsca.dapp.com-cert.pem -C mychannel -n mycc --peerAddresses peer0.org1.dapp.com:7051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.dapp.com/peers/peer0.org1.dapp.com/tls/ca.crt -c '{"Args":["write","user-22","ahmad","03325123518","long","lati","08:00","0"]}'
#docker exec cli peer chaincode invoke -o orderer.dapp.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/dapp.com/orderers/orderer.dapp.com/msp/tlscacerts/tlsca.dapp.com-cert.pem -C mychannel -n mycc --peerAddresses peer0.org1.dapp.com:7051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.dapp.com/peers/peer0.org1.dapp.com/tls/ca.crt -c '{"Args":["write","user-22","longitude23","latitude23","07:200","08:000","1-km"]}'
#docker exec cli peer chaincode invoke -o orderer.dapp.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/dapp.com/orderers/orderer.dapp.com/msp/tlscacerts/tlsca.dapp.com-cert.pem -C mychannel -n mycc --peerAddresses peer0.org1.dapp.com:7051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.dapp.com/peers/peer0.org1.dapp.com/tls/ca.crt -c '{"Args":["write","user-22","longitude24","latitude24","07:2000","08:000","1-km"]}'


# docker exec cli peer chaincode invoke -C myc1 -n marbles -c '{"Args":["initMarble","marble1","blue","35","tom"]}'
# docker exec cli peer chaincode invoke -C myc1 -n marbles -c '{"Args":["initMarble","marble2","red","50","tom"]}'
# docker exec cli peer chaincode invoke -C myc1 -n marbles -c '{"Args":["initMarble","marble3","blue","70","tom"]}'


echo ""
echo ""
echo "===================================showing logs now =============================="
echo ""
echo ""

#docker logs dev-peer0.org1.dapp.com-mycc-1.0


echo ""
echo ""
echo "===================================command completed invoke.sh=============================="
echo ""
echo ""
