module.exports = async ({
  getNamedAccounts,
  deployments,
  getChainId,
  getUnnamedAccounts,
}) => {
  console.log("IS THIS WORKING?");
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log("DEPLOYER");
  console.log(deployer);
  await deploy("Greeter", {
    from: deployer,
    gasLimit: 500000,
    args: ["hello world"],
  });
};
