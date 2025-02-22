import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const folders = ["config", "controllers", "routes", "models", "middlewares", "utils", "public", "views"];

folders.forEach((folder) => {
    const dirPath = path.join(rootDir, folder);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
        console.log(`📂 Created folder: ${folder}/`);
    }
});

console.log("✅ Project structure sorted!");
