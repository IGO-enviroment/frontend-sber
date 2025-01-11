import { rest } from "msw";
import { ReqyestsDTO } from "../react-query/requests/use-get-requests";

const RESPONSE: ReqyestsDTO[] = [
    {
        competencies: ['Ruby', 'Agile'],
        email: 'Ivan@mail.ru',
        id: 12412412,
        sex: 'male',
    },
    {
        competencies: ['react', 'typescript'],
        email: 'Danil@yandex.ru',
        id: 1241122412,
        sex: 'male',
    }
]

const RESPONSE2: ReqyestsDTO[] = [
    {
        competencies: ['Nuxt'],
        email: 'Maria@mail.ru',
        id: 12412412,
        sex: 'female',
    },
    {
        competencies: ['Swagger', 'NET'],
        email: 'KdddBOSSS@yandex.ru',
        id: 1241122412,
        sex: 'male',
    }
]

export const getAllRequests = () =>  rest.get('*/requests/:id', async (req, res, ctx) =>
    res(
        ctx.delay(200),
        ctx.status(200),
        ctx.json(RESPONSE)
    )
);

export const getAllRequests2 = () =>  rest.get('*/requests2/:id', async (req, res, ctx) =>
    res(
        ctx.delay(200),
        ctx.status(200),
        ctx.json(RESPONSE2)
    )
);