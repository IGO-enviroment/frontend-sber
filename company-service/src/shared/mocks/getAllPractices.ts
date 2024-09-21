
import { rest } from "msw";
import { PracticesDTO } from "../react-query/practices/use-get-all-practices";
const RESPONSE: PracticesDTO[] = [
    {
        views: 1000,
        title: "Заявка на практику",
        id:  712893,
        requests_count: 13,
        aprove_requests_count: 11,
        limit: 12
    },
    {
        views: 10,
        title: "Заявка на практику 23",
        id:  7128214124,
        requests_count: 10,
        aprove_requests_count: 2,
        limit: 5
    }
]

export const getAllPractices = () =>  rest.get('*/practices', async (req, res, ctx) =>
    res(
        ctx.delay(200),
        ctx.status(200),
        ctx.json(RESPONSE)
    )
);

export const getPracticeById = () =>  rest.get('*/practices/:id', async (req, res, ctx) =>
    res(
        ctx.delay(200),
        ctx.status(200),
        ctx.json(RESPONSE[0])
    )
);