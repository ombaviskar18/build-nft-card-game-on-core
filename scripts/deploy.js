const hre = require("hardhat");

async function main() {
  const CardBattleGame = await hre.ethers.getContractFactory("CardBattleGame");
  const cardBattleGame = await CardBattleGame.deploy("0x0000000000000000000000000000000000000000", {
    gasPrice: hre.ethers.parseUnits("2", "gwei"),
    gasLimit: 2100000
  });

  await cardBattleGame.waitForDeployment();

  console.log("CardBattleGame deployed to:", await cardBattleGame.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 