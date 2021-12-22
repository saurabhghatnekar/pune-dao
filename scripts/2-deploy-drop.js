import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xc73ba00fa9301bf85F47484053b0df4658b66E8C");

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            // The collection's name, ex. CryptoPunks
            name: "PuneDAO Membership",
            // A description for the collection.
            description: "A DAO for Web3 Developers in Pune.",
            // The image for the collection that will show up on OpenSea.
            image: readFileSync("scripts/assets/shaniwarwada.png"),
            // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
            // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
            // you can set this to your own wallet address if you want to charge for the drop.
            primarySaleRecipientAddress: ethers.constants.AddressZero,
        });

        console.log(
            "✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.address,
        );
        console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
        );
    } catch (error) {
        console.log("failed to deploy bundleDrop module", error);
    }
})()

// bundleDrop_metadata: {
//     metadata: {
//         name: 'PuneDAO Membership',
//             description: 'A DAO for Web3 Developers in Pune.',
//             image: 'https://cloudflare-ipfs.com/ipfs/bafybeif7evllqatawmp46ij6juzxt4cpmpj7klkbtyyldmyeghjgkyyobq',
//             primary_sale_recipient_address: '0x0000000000000000000000000000000000000000',
//             uri: 'ipfs://bafkreidexlgqu33a2ouejbjdb5a667gloqynogufzqdevozyk4fsrgwznq'
//     },
//     address: '0x53495ad5B23A21684b1b1BcA4BC75f285AfbF972',
//         type: 11
// }
