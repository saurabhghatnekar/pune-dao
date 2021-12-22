import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    '0x53495ad5B23A21684b1b1BcA4BC75f285AfbF972',
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Shaniwarwada",
                description: "This NFT will give you access to PuneDAO!",
                image: readFileSync("scripts/assets/shaniwarwada.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()