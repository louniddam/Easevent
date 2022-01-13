import dotenv from "dotenv";
import path from "path";

const envPath = path.join(__dirname, "../");
dotenv.config({ path: envPath + ".env" });

export const PORT = process.env.PORT || "80";
export const APP_BASE_URL = process.env.APP_BASE_URL || "/api/v1/";