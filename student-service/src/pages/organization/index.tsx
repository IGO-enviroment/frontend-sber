import { Box, Rating, Stack, Typography } from "@mui/material"
import { useGetOrganizationQuery } from "../../entities/organization/model"

export const Organization = () => {
  const { data } = useGetOrganizationQuery(undefined)
  return (
    <Stack>
      <Stack sx={{ gap: 3 }}>
        <Typography>Организация</Typography>
        <Typography variant={"h2"} fontWeight={500}>
          ЗАО МИР КВАРТИР
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>4,8</Typography>
          <Rating size={"large"} max={10} defaultValue={4.8} disabled />
        </Box>
        <Typography>
          МИР КВАРТИР – крупнейшая в России база данных и один из самый
          посещаемых сайтов о жилой недвижимости. Проектом пользуется 2,000,000
          посетителей в месяц для выбора жилья, и популярность сервиса растет.
          Перед нами стоит огромное число интересных и амбициозных задач,
          которые мы приглашаем вас решать вместе с нами. Работа в компании дает
          уникальную возможность реализоваться в команде профессионалов и
          карьерно вырасти вместе со стартапом. У нас нет «корпоративных
          правил», а график работы вы выбираете сами. Здесь каждый занимается
          любимым делом и получает за это заработную плату. Для нас главное –
          результат. Да, у нас отличный офис с большими окнами и панорамным
          видом на реку. Ближайшее метро – Павелецкая.
        </Typography>
      </Stack>
    </Stack>
  )
}
