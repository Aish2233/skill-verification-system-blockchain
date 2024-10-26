// migrations/2_deploy_contracts.js
const SkillVerification = artifacts.require("SkillVerification");

module.exports = function (deployer) {
  deployer.deploy(SkillVerification).then(() => {
    console.log("SkillVerification contract deployed successfully.");
  }).catch((error) => {
    console.error("Deployment failed with error:", error);
  });
};
