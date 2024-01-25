let userBalance = 500;
const parcelCost = 100;
const smsCode = "A001DFX0";
const postBox = [null, null, null, "1432HGF", null];

function receiveParcel(code) {
  for (let i = 0; i < postBox.length; i++) {
    if (postBox[i] === code) {
      if (userBalance >= parcelCost) {
        userBalance -= parcelCost;
        postBox[i] = null;
        console.log(`Retrieve parcel ${code} from cell №${i + 1}. Your balance is: ${userBalance} units.`);
      } else {
        console.log("Insufficient funds in your account.");
      }
      return;
    }
  }

  console.log("Parcel with the specified code not found in the postbox.");
}

if (smsCode === "1432HGF") {
  receiveParcel(smsCode);
} else {
  console.log("The code from the SMS does not match the code in the postbox.");
}