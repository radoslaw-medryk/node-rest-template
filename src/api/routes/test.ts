import { createRouter } from ".";

const r = createRouter("/test");

r.post("/", async ctx => {
    ctx.body = {
        message: "POST successful!",
    };
});

r.get("/deep", async ctx => {
    ctx.body = {
        message: "GET successful!",
    };
});

r.get("/:id", async ctx => {
    const id = ctx.params.id;

    if (!Number.isFinite(parseInt(id))) {
        ctx.status = 400;
        ctx.body = {
            error: "Invalid id provided.",
        };
        return;
    }

    ctx.body = {
        message: `GET id successful for id = '${id}'.`,
    };
});

r.post("/deep/add", async ctx => {
    ctx.body = {
        message: "POST successful, cool!",
    };
});
