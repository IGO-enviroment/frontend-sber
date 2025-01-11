
import { rest } from "msw";
import { PracticesDTO } from "../react-query/practices/use-get-all-practices";
const RESPONSE: PracticesDTO[] = [
    {
        views: 15,
        title: "Практика Backend",
        id:  712893,
        requests_count: 13,
        aprove_requests_count: 11,
        limit: 12,
        description: `Летняя практика бэкенд-разработчик

Приглашаем студентов и выпускников на оплачиваемую летнюю практику в сфере бэкенд-разработки. Вы будете работать над реальными проектами, получите ценные навыки и опыт под руководством экспертов. Гибкий график, обучение и возможность дальнейшего трудоустройства. Присоединяйтесь!`
    },
    {
        views: 10,
        title: "Практика Frontend",
        id:  7128214124,
        requests_count: 10,
        aprove_requests_count: 2,
        limit: 5,
        description: `Приглашаем студентов на оплачиваемую летнюю практику в области фронтенд-разработки. Работа над реальными проектами, обучение у экспертов и гибкий график. Отличная возможность получить ценные навыки и опыт, а также шанс на дальнейшее трудоустройство.`
    }
]

export const getAllPractices = () =>  rest.get('*/practice', async (req, res, ctx) =>
    res(
        ctx.delay(200),
        ctx.status(200),
        ctx.json(RESPONSE)
    )
);

export const getPracticeById = () =>  rest.get('*/practice/:id', async (req, res, ctx) =>
    res(
        ctx.delay(200),
        ctx.status(200),
        ctx.json(RESPONSE[0])
    )
);