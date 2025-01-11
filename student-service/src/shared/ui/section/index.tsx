import { Box, Stack, SxProps, Typography } from "@mui/material"
import { ReactNode } from "react"
import { Theme } from "@mui/material/styles"

interface Props {
  title?: string
  children?: ReactNode
  sx?: SxProps<Theme>
}

export const Section = ({ title, children, sx }: Props) => {
  return (
    <Stack
      sx={{
        padding: "24px",
        backgroundColor: (theme) => theme.palette.grey[100],
        borderRadius: "24px",
        gap: "32px",
        ...sx,
      }}
    >
      {title && <Typography variant="xl-bold">{title}</Typography>}
      {children}
    </Stack>
  )
}

interface SectionItemProps {
  title?: string
  description?: string
  children?: ReactNode
  sx?: SxProps<Theme>
}

export const SectionItem = ({
  title,
  description,
  children,
  sx,
}: SectionItemProps) => {
  return (
    <Box sx={sx}>
      {title && (
        <Stack spacing={"8px"} sx={{ mb: "16px" }}>
          {title && <Typography variant="l-bold">{title}</Typography>}
          {description && (
            <Typography
              variant="m"
              sx={{
                color: (theme) => theme.palette.grey[700],
              }}
            >
              {description}
            </Typography>
          )}
        </Stack>
      )}
      {children}
    </Box>
  )
}

Section.Item = SectionItem
