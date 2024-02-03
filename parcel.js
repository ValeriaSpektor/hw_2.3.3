
let userBalance = 500;
const packageCost = 100;
const smsCode = "A001DFX0";
const postBox = [null, null, null, "1432HGF", null];


const packageId = "1432HGF";
const packageCellNumber = postBox.indexOf(packageId); 


if (packageCellNumber !== -1 && postBox[packageCellNumber] !== null) {

  userBalance -= packageCost;
  postBox[packageCellNumber] = null;


  console.log(`Collect your package ${packageId} from cell #${packageCellNumber + 1}. Your balance is: ${userBalance} units.`);
} else {
  console.log("SMS code does not match or the cell with the package is empty.");
}