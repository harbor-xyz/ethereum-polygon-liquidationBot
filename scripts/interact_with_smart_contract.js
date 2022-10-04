require("dotenv").config();
var fs = require("fs");
const util = require("util");
var ethers = require("ethers");
const fsPromises = fs.promises;

// The path to the contract ABI
const ABI_FILE_PATH = "../artifacts/contracts/Greeter.sol/Greeter.json";
// The address from the deployed smart contract
const DEPLOYED_CONTRACT_ADDRESS = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const DEPLOYER = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

// load ABI from build artifacts
async function getAbi() {
  const data = await fsPromises.readFile(ABI_FILE_PATH, "utf8");
  const abi = JSON.parse(data)["abi"];
  //console.log(abi);
  return abi;
}

async function main() {
  let provider = ethers.getDefaultProvider(`http://3.109.132.159:4000`);
  const abi = await getAbi();

  /* 
    // READ-only operations require only a provider.
    // Providers allow only for read operations.
    let contract = new ethers.Contract(DEPLOYED_CONTRACT_ADDRESS, abi, provider);
    const greeting = await contract.greet();
    console.log(greeting);
    */

  const greeter = new ethers.Contract(DEPLOYED_CONTRACT_ADDRESS, abi, provider);
  const greeting = await greeter.greet();
  console.log(greeting);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
