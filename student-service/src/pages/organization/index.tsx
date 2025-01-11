import { Avatar, Box, Button, Rating, Stack, Typography } from "@mui/material"
import { useGetOrganizationQuery } from "../../entities/organization/model"
import { Section } from "../../shared/ui/section"
import { ORGANIZATION_DATA } from "../../shared/const"

export const Organization = () => {
  const { data } = useGetOrganizationQuery(undefined)

  return (
    <Stack spacing="16px">
      <Section>
        <Stack direction="row" spacing="12px">
          <Avatar src={ORGANIZATION_DATA.logo} variant="photo-xl" />
          <Stack>
            <Typography variant="xl-bold" mb="12px">
              {ORGANIZATION_DATA.name}
            </Typography>
            <Typography variant="l">{ORGANIZATION_DATA.description}</Typography>
          </Stack>
        </Stack>
      </Section>
      <Section title="Адрес">
        <Section.Item title={ORGANIZATION_DATA.address} />
      </Section>
      <Section title="Контакты">
        {ORGANIZATION_DATA.contacts.map((item) => (
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
        {ORGANIZATION_DATA.reviews.map((item) => (
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
