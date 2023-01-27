import dotenv from "dotenv";
import { expand } from "dotenv-expand";

export function loadEnv() {
    const path =
        process.env.NODE_ENV === "test"
            ? ".env.test"
            : process.env.NODE_ENV === "development"
            ? ".env.development"
            : ".env";

    const currentEnv = dotenv.config({ path });

    expand(currentEnv);
}
