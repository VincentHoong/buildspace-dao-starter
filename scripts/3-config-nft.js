import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x6AF8dF8375Fe7B588f261A5cF038f0D1ce647045");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Accident Award",
        description: "This NFT is awarded to those who had accident to access InsuranceDAO!",
        image: readFileSync("scripts/assets/bubblecat.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
