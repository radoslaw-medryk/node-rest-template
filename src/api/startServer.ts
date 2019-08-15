import Koa from "koa";
import koaBody from "koa-body";
import koaCors from "@koa/cors";
import { apiconfig } from "@/configs/apiconfig";
import { getCombinedRoutersMiddleware } from "./routes";

const { port } = apiconfig;

export const koa = new Koa();

export function startServer(): Promise<void> {
    koa.use(koaCors());
    koa.use(koaBody());
    koa.use(getCombinedRoutersMiddleware());

    return new Promise(resolve => {
        koa.listen(port, () => {
            console.log(`Server is listening on port ${port}.`);
            resolve();
        });
    });
}
