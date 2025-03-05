const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("CardBattleGame", (m) => {
  // Deploy the CardBattleGame contract
  const cardBattleGame = m.contract("CardBattleGame", ["0x0000000000000000000000000000000000000000"]);

  return { cardBattleGame };
});
