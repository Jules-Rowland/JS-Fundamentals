const firstArg = process.argv[2];
const convertedFirstArg = Number(firstArg);
 let CText = "C is fun";
 function Multipleloop() {
 if (!isNaN(convertedFirstArg)){
    let i = 0;
    while (i < convertedFirstArg){
        console.log( ` ${CText}`);
        i++;
    }
 }
 else 
 console.log("Missing number of occurrences");
 }
  Multipleloop();