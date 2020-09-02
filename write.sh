docker exec cli peer chaincode invoke -o orderer.dapp.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/dapp.com/orderers/orderer.dapp.com/msp/tlscacerts/tlsca.dapp.com-cert.pem -C mychannel -n mycc --peerAddresses peer0.org1.dapp.com:7051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.dapp.com/peers/peer0.org1.dapp.com/tls/ca.crt -c '{"Args":["write","longitude","latitude","07:20","08:00","1-km"]}'

echo ""
echo ""
echo "===================================showing logs now =============================="
echo ""
echo ""

docker logs dev-peer0.org1.dapp.com-mycc-1.0


echo ""
echo ""
echo "===================================command completed invoke.sh=============================="
echo ""
echo ""