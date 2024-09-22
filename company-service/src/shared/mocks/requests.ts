import { rest } from "msw";
import { ReqyestsDTO } from "../react-query/requests/use-get-requests";

const RESPONSE: ReqyestsDTO[] = [
    {
        competencies: ['test', 'some'],
        email: 'f@f.ru',
        id: 12412412,
        sex: 'male',
    },
    {
        competencies: ['react', 'typescript'],
        email: 'f@f.ru',
        id: 1241122412,
        sex: 'female',
    }
]

export const getAllRequests = () =>  rest.get('*/requests/:id', async (req, res, ctx) =>
    res(
        ctx.delay(200),
        ctx.status(200),
        ctx.json(RESPONSE)
    )
);