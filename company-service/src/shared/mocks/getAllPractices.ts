
import { rest } from "msw";
const RESPONSE = {
    data: 'PISA'
}

export const getAllPractices = () =>  rest.get('*/practices', async (req, res, ctx) =>
    res(
        ctx.delay(200),
        ctx.status(200),
        ctx.json(RESPONSE)
    )
);