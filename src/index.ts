require("./registerAlias");
import { startServer } from "./api/startServer";

const main = async () => {
    await startServer();
};

(async () => await main())();
