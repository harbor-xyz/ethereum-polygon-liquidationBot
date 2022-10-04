module.exports = async ({
  getNamedAccounts,
  deployments,
  getChainId,
  getUnnamedAccounts,
}) => {
  console.log("IS THIS WORKING?");
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("Greeter2", {
    from: deployer,
    gasLimit: 500000,
    args: ["hello world"],
  });
};
