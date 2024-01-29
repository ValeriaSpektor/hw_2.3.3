let userBalance = 500;
const parcelCost = 100;
const secureSMSCode = "A001DFX0"; // Secure SMS code
const postBox = [null, null, null, "1432HGF", null];
let smsCodeEntered = "A001DFX0"; // Code entered by the user

function receiveParcel() {
  let codeMatched = false;

  for (let i = 0; i < postBox.length; i++) {
    if (postBox[i] === secureSMSCode) {
      codeMatched = true;

      if (userBalance >= parcelCost) {
        userBalance -= parcelCost;
        postBox[i] = null;
        console.log(`Retrieve parcel ${secureSMSCode} from cell №${i + 1}. Your balance is: ${userBalance} units.`);
      } else {
        console.log("Insufficient funds in your account. Parcel retrieval failed.");
      }

      break;
    }
  }

  if (!codeMatched) {
    console.log("Parcel with the specified code not found in the postbox.");
  }
}

if (smsCodeEntered === secureSMSCode) {
  receiveParcel();
} else {
  console.log("Invalid SMS code. Parcel retrieval failed.");
}