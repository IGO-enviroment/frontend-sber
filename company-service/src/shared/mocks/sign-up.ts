
import { rest } from "msw";

export const postSignUp = () =>  rest.post('*/organization', async (req, res, ctx) =>
    res(
        ctx.delay(200),
        ctx.status(204),
    )
);