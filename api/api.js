const express = require('express')
const app = express()
const port = 4000

const { exec } = require('child_process');

//,"user-22","ahmad1","03325123518","long","lati","08:00","0"]

app.get('/:id/:name/:pass/:phone/:longi/:lati/:time/:balance', (req, res) => {
        //    /1/ahmad/123/03325123518/0.999999/0.89898989/8:00/90.8                
    
   
    var id=req.params.id;
    var name=req.params.name;
    var phone=req.params.phone;
    var longi=req.params.longi;
    var lati=req.params.lati;
    var balance=req.params.balance;
    var time=req.params.time;
    var pass=req.params.pass

    let command=`
    docker exec cli peer chaincode invoke -o orderer.dapp.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/dapp.com/orderers/orderer.dapp.com/msp/tlscacerts/tlsca.dapp.com-cert.pem -C mychannel -n mycc --peerAddresses peer0.org1.dapp.com:7051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.dapp.com/peers/peer0.org1.dapp.com/tls/ca.crt -c '{"Args":["write","`+id+`","`+name+`","`+pass+`","`+phone+`","`+longi+`","`+lati+`","`+time+`","`+balance+`"]}'`

// docker exec cli peer chaincode invoke -o orderer.dapp.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/dapp.com/orderers/orderer.dapp.com/msp/tlscacerts/tlsca.dapp.com-cert.pem -C mychannel -n mycc --peerAddresses peer0.org1.dapp.com:7051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.dapp.com/peers/peer0.org1.dapp.com/tls/ca.crt -c '{"Args":["write","1","affan","123","10304","4.3","3.3","23331","23"]}'`

    exec(command, (err, stdout, stderr) => {

       
        //var idd = res.id;
        
        if (err) {

            // node couldn't execute the command
            return;
        }

        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        console.log("successfully write in blockchain");

   console.log("name"+name+ "--"+"id "+id);
    });
    res.send("name"+name+ "--"+"id "+id);

})
//////////////////////////////////////////////////////////////////////////////////////

//                                querry

//////////////////////////////////////////////////////////////////////////////////////
app.get('/querry/:idd', (req, res) => {
    //    /1/ahmad/03325123518/0.999999/0.89898989/8:00/90.8                

var id =req.params.idd;
var a;

let command=`docker exec cli peer chaincode query -o orderer.dapp.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/dapp.com/orderers/orderer.dapp.com/msp/tlscacerts/tlsca.dapp.com-cert.pem -C mychannel -n mycc --peerAddresses peer0.org1.dapp.com:7051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.dapp.com/peers/peer0.org1.dapp.com/tls/ca.crt -c '{"Args":["read","`+id+`"]}'`

//docker exec cli peer chaincode query -o orderer.dapp.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/dapp.com/orderers/orderer.dapp.com/msp/tlscacerts/tlsca.dapp.com-cert.pem -C mychannel -n mycc --peerAddresses peer0.org1.dapp.com:7051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.dapp.com/peers/peer0.org1.dapp.com/tls/ca.crt -c '{"Args":["read","1"]}'`


exec(command, (err, stdout, stderr) => {
    // var idd = res.id;
    //  var id=req.params.id;
    //  var name=req.params.name;
    //  var phone=req.params.phone;
    //  var longi=req.params.longi;
    //  var lati=req.params.lati;
    //  var balance=req.params.balance;
    //  var time=req.params.time;
    
    if (err) {

        // node couldn't execute the command
        return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    console.log("reading from blockchain");
   // console.log("name"+`${stdout.name}`+ "--"+"id ");
   a =JSON.parse(stdout);
   res.send();
    console.log(a);
    });




   
})




////////////////////////////////////////////////////////////////////////////////
app.get('/history/:idd', (req, res) => {
    //    /1/ahmad/03325123518/0.999999/0.89898989/8:00/90.8                

var id =req.params.idd;
var a;

let command=`docker exec cli peer chaincode query -o orderer.dapp.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/dapp.com/orderers/orderer.dapp.com/msp/tlscacerts/tlsca.dapp.com-cert.pem -C mychannel -n mycc --peerAddresses peer0.org1.dapp.com:7051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.dapp.com/peers/peer0.org1.dapp.com/tls/ca.crt -c '{"Args":["getHistory","`+id+`"]}'`


exec(command, (err, stdout, stderr) => {
    
    if (err) {

        // node couldn't execute the command
        return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    console.log("reading from blockchain");
   // console.log("name"+`${stdout.name}`+ "--"+"id ");
   console.log(stdout);
   a =JSON.parse(stdout);
  // a.
   //res.send();
    console.log(a);
   // console.log(a.Value[0]);
    res.send(a);
    });
   
})


//////////////////////////////////////////////////////////////////////////////////////////




app.listen(port, () => console.log(`Example app listening on port ${port}!`))

