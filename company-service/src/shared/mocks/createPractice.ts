
import { rest } from "msw";

export const createPractice = () =>  rest.post('*/practice', async (req, res, ctx) =>
    res(
        ctx.delay(200),
        ctx.status(204),
    )
); 