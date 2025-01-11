import { Avatar, Box, Button, Rating, Stack, Typography } from "@mui/material"
import { useGetOrganizationQuery } from "../../entities/organization/model"
import { Section } from "../../shared/ui/section"
import { Stars } from "@mui/icons-material"

export const Organization = () => {
  const { data } = useGetOrganizationQuery(undefined)
  const DATA = {
    name: "ООО ДОМА",
    description:
      "Дома — продуктовая IT-компания. Мы диджитализируем ЖКХ, выводим управление домами на новый уровень. Высокое качество ЖКХ-услуг и довольные жители многоквартирных домов — цель, которая нас вдохновляет.",
    address: "Екатеринбург, ул. Розы Люксембург, 43",
    contacts: [
      {
        name: "Овечкин Дмитрий Сергеевич",
        description: "Hr-менеджер",
        email: "hr-email@gmail.com",
        phone: "+ 7 (900) 800-70-60",
      },
    ],
    reviews: [
      {
        name: "Иван Т.",
        stars: 5,
        comment:
          "Молодая компания, управляют которой профессионалы.    Плюсы: располагается в центре города, возможность работать удаленно с гибридным началом дня. Современная техника и оборудование. Потрясающий коллектив, с которым невероятно комфортно взаимодействовать и решать задачи.",
      },
      {
        name: "Данил М. ",
        stars: 5,
        comment:
          "Молодая компания, управляют которой профессионалы.    Плюсы: располагается в центре города, возможность работать удаленно с гибридным началом дня. Современная техника и оборудование. Потрясающий коллектив, с которым невероятно комфортно взаимодействовать и решать задачи.",
      },
    ],
  }
  return (
    <Stack spacing="16px">
      <Section>
        <Stack direction="row" spacing="12px">
          <Avatar variant="photo-xl" />
          <Stack>
            <Typography variant="xl-bold" mb="12px">
              {DATA.name}
            </Typography>
            <Typography variant="l">{DATA.description}</Typography>
          </Stack>
        </Stack>
      </Section>
      <Section title="Адрес">
        <Section.Item title={DATA.address} />
      </Section>
      <Section title="Контакты">
        {DATA.contacts.map((item) => (
          <Section.Item title={item.name} description={item.description}>
            <Stack direction="row" spacing="12px">
              <Button
                size="s"
                children={item.phone}
                color={"secondary"}
                variant="contained"
              />
              <Button
                size="s"
                children={item.email}
                color={"secondary"}
                variant="contained"
              />
            </Stack>
          </Section.Item>
        ))}
      </Section>
      <Section title="Отзывы">
        {DATA.reviews.map((item) => (
          <Box>
            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", mb: "12px" }}
            >
              <Typography variant="l-bold">{item.name}</Typography>
              <Rating readOnly value={item.stars} size="large" />
            </Stack>
            <Typography
              sx={{ color: (theme) => theme.palette.grey[700] }}
              variant="m"
            >
              {item.comment}
            </Typography>
          </Box>
        ))}
      </Section>
    </Stack>
  )
}
