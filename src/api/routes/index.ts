import Router from "koa-router";
import combineRouters from "koa-combine-routers";
import requireDir from "require-dir";

export const rootPath = "/api/v1";

let registeredRouters: Router[] = [];

export function createRouter(basePath: string): Router {
    basePath = ensureLeadingSlash(basePath);

    const router = new Router({
        prefix: `${rootPath}${basePath}`,
    });
    registerRouter(router);

    return router;
}

export function getCombinedRoutersMiddleware() {
    requireDir(".", { recurse: true });
    return combineRouters(registeredRouters)();
}

function ensureLeadingSlash(path: string) {
    return path.startsWith("/") ? path : `/${path}`;
}

function registerRouter(router: Router) {
    registeredRouters = [...registeredRouters, router];
}
