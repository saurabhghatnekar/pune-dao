import sdk from "./1-initialize-sdk.js";

// Grab the app module address.
const appModule = sdk.getAppModule(
    "0xc73ba00fa9301bf85F47484053b0df4658b66E8C",
);

(async () => {
    try {
        const voteModule = await appModule.deployVoteModule({
            // Give your governance contract a name.
            name: "PuneDAO's Proposals",

            // This is the location of our governance token, our ERC-20 contract!
            votingTokenAddress: "0xb0b28865A88ec07f96c89E175a91A0e65E6Faf8c",

            // After a proposal is created, when can members start voting?
            // For now, we set this to immediately.
            proposalStartWaitTimeInSeconds: 0,

            // How long do members have to vote on a proposal when it's created?
            // Here, we set it to 24 hours (86400 seconds)
            proposalVotingTimeInSeconds: 24 * 60 * 60,

            // Will explain more below.
            votingQuorumFraction: 0,

            // What's the minimum # of tokens a user needs to be allowed to create a proposal?
            // I set it to 0. Meaning no tokens are required for a user to be allowed to
            // create a proposal.
            minimumNumberOfTokensNeededToPropose: "0",
        });

        console.log(
            "✅ Successfully deployed vote module, address:",
            voteModule.address,
        );
    } catch (err) {
        console.log("Failed to deploy vote module", err);
    }
})();

// Your app address is: 0xc73ba00fa9301bf85F47484053b0df4658b66E8C
// ✅ Successfully deployed vote module, address: 0xf5D913825D961bC02DcF9cE382d68Dbf744381f2

