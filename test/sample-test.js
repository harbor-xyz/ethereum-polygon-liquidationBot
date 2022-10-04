const { expect } = require("chai");
const { ethers } = require("ethers");
const { harbor } = require("harbor");
describe("Greeter", function () {
  beforeEach(async () => {
    await harbor.up("supra-production-environment");
  });
  it("Should return the new greeting once it's changed", async function () {
    var harborProvider = new ethers.providers.JsonRpcProvider(
      harbor.currentUrl
    );
    async function getAbi() {
      const data = await fsPromises.readFile(ABI_FILE_PATH, "utf8");
      const abi = JSON.parse(data)["abi"];
      //console.log(abi);
      return abi;
    }

    const greeter = new ethers.Contract(
      DEPLOYED_CONTRACT_ADDRESS,
      abi,
      provider
    );
    const greeting = await greeter.greet();
    expect(greeting).to.equal("hello world");
  });

  afterEach(async () => {
    harbor.down("supra-production-environment");
  });
});
