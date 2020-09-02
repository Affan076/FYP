const express = require('express');
const router = express.Router();
const { exec } = require('child_process');
const Student = require('./datadb');


//login
// router.get('/studentlogin/:email/:password', (req, res, next) => {
//     Student.find(function (err, students) {
//         res.json(students);
//     });
// });

router.get('/', (req, res, next) => {
    Student.find(function (err, students) {
        res.json(students);
    });
});

////////////////////////////////////////


router.get('/single/:id', (req, res, next) => {
    Student.findById({ _id: req.params.id }, function (err, students) {
        res.json(students);
    });
});


///////////////////////////////////////////


router.post('/add', (req, res, next) => {
    let newStudent = new Student({
        name: req.body.name,
        password:req.body.password,
        phone:req.body.phone,
        lat: req.body.lat,
        long: req.body.long,
        status:req.body.status,
        coin:req.body.coin,
        count:req.body.count
    });

    newStudent.save((err, student) => {
        if (err) {
            res.json(err);
        }
        else {
           
            res.json({ msg: 'student added' });
        }
    });
});


/////////////////////////////////////////////////////////////


router.put('/accept/:id', function (req, res , next) {
    Student.findByIdAndUpdate(req.params.id, {
        $set: {
            status:req.body.status,
            coin:req.body.coin,
            count:req.body.count
        }
    },
    {
        new: true
    },
    function (err, updatedstudent) {
        if (err) {
            res.json(err);
        }
        else {
            console.log('Studentadded');
            res.json(updatedstudent);
        }
        }
    );
 });





/////////////////////////////////////





router.put('/update/:id', function (req, res , next) {
   Student.findByIdAndUpdate(req.params.id, {
       $set: {
           status:req.body.status,
           latitude:req.body.latitude,
           longitude:req.body.longitude
       }
   },
   {
       new: true
   },
   function (err, updatedstudent) {
       if (err) {
           res.json(err);
       }
       else {
           res.json(updatedstudent);
       }
       }
   );
});






/////////////////////////////////////////



router.put('/up/:id', function (req, res , next) {
   Student.findByIdAndUpdate(req.params.id, {
       $set: {
           coin:req.body.coin,
           count:req.body.count
       }
   },
   {
       new: true
   },
   function (err, updatedstudent) {
       if (err) {
           res.json(err);
       }
       else {
           res.json(updatedstudent);
       }
       }
   );
});







// router.put('/update/:id', function (req, res, next) {
//     Student.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//         if (err) return next(err);
//         res.json(post); 
//     });
// });

//,"user-22","ahmad1","03325123518","long","lati","08:00","0"]

router.get('/blockchain/:id/:name/:pass/:phone/:longi/:lati/:time/:balance', (req, res,next) => {
   
    var id=req.params.id;
    var name=req.params.name;
    var phone=req.params.phone;
    var long=req.params.longi;
    var lat=req.params.lati;
    var coin=req.params.balance;
    var time=req.params.time;
    var password=req.params.pass

    let command=`
    docker exec cli peer chaincode invoke -o orderer.dapp.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/dapp.com/orderers/orderer.dapp.com/msp/tlscacerts/tlsca.dapp.com-cert.pem -C mychannel -n mycc --peerAddresses peer0.org1.dapp.com:7051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.dapp.com/peers/peer0.org1.dapp.com/tls/ca.crt -c '{"Args":["write","`+id+`","`+name+`","`+password+`","`+phone+`","`+lat+`","`+long+`","`+coin+`","`+time+`"]}'`

    exec(command, (err, stdout, stderr) => {
        
        //var idd = res.id;        
        if (err) {

            // node couldn't execute the command
            return;
        }

        // the *entire* stdout and stderr (buffered)
        console.log(` ${stdout}`);
        console.log(`stderr: ${stderr}`);
        console.log("successfully write in blockchain");
    });
    res.send("name"+name+ "--"+"id "+id);

})
// //////////////////////////////////////////////////////////////////////////////////////

// //                                querry

// //////////////////////////////////////////////////////////////////////////////////////
router.get('/querry/:idd', (req, res) => {
    //    /1/ahmad/03325123518/0.999999/0.89898989/8:00/90.8                

var id =req.params.idd;
var a;

let command=`docker exec cli peer chaincode query -o orderer.dapp.com:7050 --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/dapp.com/orderers/orderer.dapp.com/msp/tlscacerts/tlsca.dapp.com-cert.pem -C mychannel -n mycc --peerAddresses peer0.org1.dapp.com:7051 --tlsRootCertFiles /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.dapp.com/peers/peer0.org1.dapp.com/tls/ca.crt -c '{"Args":["read","`+id+`"]}'`
exec(command, (err, stdout, stderr) => {
 
   
    if (err) {

        // node couldn't execute the command
        return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(` ${stderr}`);
    console.log("reading from blockchain");
   // console.log("name"+`${stdout.name}`+ "--"+"id ");
   a =JSON.parse(stdout);
   res.send(a);
    });
   
})


///////////////////////////////////////////////



router.get('/delete/:id', (req, res, next) => {
    Student.deleteOne({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })

});




//////////////////////////////
/////apicsvfile/////////////////
//////////////////////

router.get('/csvfile/:lati/:longi/:radius/:timefrom/:timeto', (req, res,next) => {

  var fs = require('fs');
  var csv = require('csv-parser');
  let c=0;
  let long1=req.params.longi;
  let lati1=req.params.lati;
  t1 = new Date(req.params.timefrom);
  console.log(t1);
  //t1 = new Date("2020-4-11 07:01:00");
  //t2 =new Date("2020-4-11 11:01:00");
  t2 = new Date(req.params.timeto);
  console.log(t2);
  radius=req.params.radius;      //in meters
  function rad(x){return x*Math.PI/180;}
  function getdistance(latitude,longitude,latf,lngf)
    {
      var R = 6378137; // Earth’s mean radius in meter
      var dLat = rad(latf - latitude);
      var dLong = rad(lngf - longitude);
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(latitude)) * Math.cos(rad(latf)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = (R * c)/1000;
      return d*1000;//in meters
    }
  function timecheck(t,t1,t2)
  {
        
        condition=false;
        if(t.getHours()>t1.getHours() && t.getHours()<t2.getHours()) 
        {
          //console.log("t1   t    t2");
          condition=true
        }
        else if(t.getHours()==t1.getHours() && t.getHours()==t2.getHours())
        {
          //console.log("t1 =t=t2" );
          if(t.getMinutes()>=t1.getMinutes() || t.getMinutes()<=t2.getMinutes())
          {
            condition=true
          }
          else
          {
            condition=false;
          }
        }
        else if(t.getHours()==t1.getHours())
        {
          //console.log("t1=t" );
          if(t.getMinutes()>=t1.getMinutes())
          {
            condition=true
          }
          else
          {
            condition=false;
          }
        }
        else if(t.getHours()==t2.getHours())
        {
          //console.log("t2 =t" );
          if(t.getMinutes()>=t2.getMinutes())
          {
            condition=true
          }
          else
          {
            condition=false;
          }
        }
        return condition;
  }
  function splitStr(str, seperator) { 
    
    // Function to split string 
    var string = str.split(seperator); 
    
    return string; 
  } 
  // users 
  
  u1={}
  u2={}
  u3={}
  u4={}
  u5={}
  u6={}
  u7={}
  u8={}
  u9={}
  u10={}
  final={}
  
  fs.createReadStream('final.csv')
    .pipe(csv())
    .on('data', (row) => {
  let long2=row.longitude;
  let lati2=row.latitude;
  let cc =0;
  var dist=getdistance(lati1,long1,lati2,long2)
  if (dist<radius) // geting all points within radius r (dist<radius)
  {
    
    t=row.time;
    t=splitStr(t, ":"); 
    time=t[0]+":"+t[1]+":"+"00";
    tt = new Date("2020-4-11 "+time);
    if(timecheck(tt,t1,t2))                  /// time check will filter the result and show only result for specific time 
    {
      
        if(row.ID=="path1")
        {
          u1.status=true;
          u1.id=row.ID;
          u1.longi=row.longitude;
          u1.latitude=row.latitude;
          u1.time=row.time;
          u1.name="Affan";
        }
        if(row.ID=="path2")
        {
          u2.status=true;
          u2.id=row.ID;
          u2.longi=row.longitude;
          u2.latitude=row.latitude;
          u2.time=row.time;
          u2.name="Ahmad";
        }
        if(row.ID=="path3")
        {
          u3.status=true;
          u3.id=row.ID;
          u3.longi=row.longitude;
          u3.latitude=row.latitude;
          u3.time=row.time;
          u3.name="Osama";
        }
  
        if(row.ID=="path4")
        {
          u4.status=true;
          u4.id=row.ID;
          u4.longi=row.longitude;
          u4.latitude=row.latitude;
          u4.time=row.time;
          u4.name="Hanzala";
        }
  
        if(row.ID=="path5")
        {
          u5.status=true;
          u5.id=row.ID;
          u5.longi=row.longitude;
          u5.latitude=row.latitude;
          u5.time=row.time;
          u5.name="Anas";
        }
  
        if(row.ID=="path6")
        {
          u6.status=true;
          u6.id=row.ID;
          u6.longi=row.longitude;
          u6.latitude=row.latitude;
          u6.time=row.time;
          u6.name="Hamza";
        }
  
        if(row.ID=="path7")
        {
          u7.status=true;
          u7.id=row.ID;
          u7.longi=row.longitude;
          u7.latitude=row.latitude;
          u7.time=row.time;
          u7.name="Hassan";
        }
  
        if(row.ID=="path8")
        {
          u8.status=true;
          u8.id=row.ID;
          u8.longi=row.longitude;
          u8.latitude=row.latitude;
          u8.time=row.time;
          u8.name="Shariq";
        }
  
        if(row.ID=="path9")
        {
          u9.status=true;
          u9.id=row.ID;
          u9.longi=row.longitude;
          u9.latitude=row.latitude;
          u9.time=row.time;
          u9.name="Abdullah";

        }
  
        if(row.ID=="path10")
        {
          u10.status=true;
          u10.id=row.ID;
          u10.longi=row.longitude;
          u10.latitude=row.latitude;
          u10.time=row.time;
          u10.name="Haris";
        }
  
  
  
  
    }// time check (if)
    else
    {
      //if row doesnt match due to mismatch of time 
  
    }//time check (else) 
  
  }// radius check(if)
  else
  {
     // if row doesnt match  due to out of radious 
  }// radius check (else)
  
    
    })
    .on('end', () => {

      final={u1,u2,u3,u4,u5,u6,u7,u8,u9,u10};
      // console.log(final);
      res.send(final);
    });
  
  
 
 })







  module.exports = router;