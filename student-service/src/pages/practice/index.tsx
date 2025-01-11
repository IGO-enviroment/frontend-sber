import { Avatar, Button, Chip, Link, Stack, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { Section } from "../../shared/ui/section"
import EastOutlinedIcon from "@mui/icons-material/EastOutlined"
import { AppRoutes } from "../../app/config/route/paths"

export const Practice = () => {
  const data = {
    title: "Практикант Fullstack",
    available: 10,
    left: 3,
    requirementsDescription:
      "— Проектировать API и работать с GraphQL;\n" +
      "— Участвовать в разработке веб-приложения на NextJs / React;\n" +
      "— Работать в моно-репозиториях с сабмодулями;\n" +
      "— Работать с SQL / NoSQL базами (Postgres, Redis);\n" +
      "— Писать аккуратный, читаемый и поддерживаемый код;\n" +
      "— Проходить и проводить code-review, архитектурное review.",
    directions: ["Информационные технологии, системная интеграция, интернет"],
    competencies: ["GraphQL", "NextJs", "React", "SQL / NoSQL", "Сode-review"],
    company: {
      id: 1,
      logo: "",
      name: "ООО ДОМА",
    },
    format: "Офис",
    address: "г. Екатеринбург, ул. Розы Люксембург, 43",
    schedule: {
      title: "По договоренности",
      description: "Преимущественно первая половина дня, пн-пт",
    },
    contacts: [
      {
        name: "Овечкин Дмитрий Сергеевич",
        description: "Руководитель практики",
        phone: "+ 7 (900) 800-70-60",
        email: "hello@gmail.com",
      },
    ],
  }

  return (
    <Stack spacing="12px">
      <Section>
        <Stack direction="row" justifyContent="space-between" mb="5px">
          <Typography variant="xl-bold">{data.title}</Typography>
          <Button size="m" color="primary" variant="contained">
            Отправить заявку
          </Button>
        </Stack>
        <Section.Item>
          <Typography variant="m-bold" component="span">
            {data.available} мест /{" "}
          </Typography>
          <Typography variant="m-bold" component="span" color="error">
            {data.left} осталось
          </Typography>
        </Section.Item>
        <Section.Item
          title="Требования"
          description={data.requirementsDescription}
          sx={{ whiteSpace: "pre" }}
        ></Section.Item>
        <Section.Item title="Направление">
          <Stack spacing="8px" direction="row">
            {data.directions.map((direction, i) => (
              <Chip label={direction} size="s" key={i} />
            ))}
          </Stack>
        </Section.Item>
        <Section.Item title="Навыки">
          <Stack spacing="8px" direction="row">
            {data.competencies.map((comp, i) => (
              <Chip label={comp} size="s" key={i} />
            ))}
          </Stack>
        </Section.Item>
      </Section>
      <Section>
        <Link
          boxShadow="none"
          href={`/${AppRoutes.ORGANIZATION}/${data.company.id}`}
          underline="none"
          color="inherit"
        >
          <Stack alignItems="center" direction="row">
            <Avatar src={data.company.logo} variant="photo-l" />
            <Typography sx={{ ml: "16px" }} variant="l-bold">
              {data.company.name}
            </Typography>
            <Button
              size="m"
              color="secondary"
              variant="contained"
              sx={{
                p: "12px",
                width: "fit-content",
                minWidth: "0",
                ml: "auto",
              }} // @todo
            >
              <EastOutlinedIcon sx={{ fontSize: 16 }} />
            </Button>
          </Stack>
        </Link>
      </Section>
      <Section title="Формат и место проведения">
        <Section.Item title={data.format} description={data.address} />
      </Section>
      <Section title="График">
        <Section.Item
          title={data.schedule.title}
          description={data.schedule.description}
        />
      </Section>
      <Section title="Контакты">
        {data.contacts.map((contact, index) => (
          <Section.Item
            title={contact.name}
            description={contact.description}
            key={index}
          >
            <Stack direction="row" spacing="12px">
              <Button size="s" color="secondary" variant="contained">
                {contact.phone}
              </Button>
              <Button size="s" color="secondary" variant="contained">
                {contact.email}
              </Button>
            </Stack>
          </Section.Item>
        ))}
      </Section>
    </Stack>
  )
}
