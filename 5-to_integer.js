const argv = process.argv[2];
const convertedValue = Number(argv);

if (isNaN(convertedValue)) {
  console.log("Not a number");
} else if (!isNaN(convertedValue)) { 
  console.log(`My number: ${convertedValue}`);
}
  