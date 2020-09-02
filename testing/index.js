// // var xslxs = require("xlsx");
// // var wb =xslxs.readFile("final.xlsx");
// // var s1=wb.Sheets["Sheet1"];
// // var data = s1.Cells(cell,row).Value;
// // console.log(data);

// const readXlsxFile = require('xlsx');
 
//     // File path.
//     readXlsxFile('final.xlsx').then((rows) => {
//         //console.log(rows[0]);
//         return ;
//     })
     
//     // Readable Stream.
//     // readXlsxFile(fs.createReadStream('final.xlsx')).then((rows) => {
      
//     // })
// //console.log(newdata);











var Excel = require('exceljs');
var wb = new Excel.Workbook();
//var path = require('final.xlsx');
var filePath = path.resolve('final.xlsx');
wb.xlsx.readFile(filePath).then(function(){

    var sh = wb.getWorksheet("Sheet1");

    sh.getRow(1).getCell(2).value;

    var a=wb.xlsx.writeFile("sample2.xlsx");
    console.log(a);
  //  console.log("Row-3 | Cell-2 - "+sh.getRow(3).getCell(2).value);

//    console.log(sh.rowCount);
    //Get all the rows data [1st and 2nd column]
    for (i = 1; i <= sh.rowCount; i++) {
        console.log(sh.getRow(i).getCell(1).value);
        console.log(sh.getRow(i).getCell(2).value);
    }
});