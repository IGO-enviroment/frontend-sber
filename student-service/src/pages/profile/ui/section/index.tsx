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
      spacing="32px"
      sx={{
        padding: "24px",
        backgroundColor: (theme) => theme.palette.grey[100],
        borderRadius: "24px",
        ...sx,
      }}
    >
      {title && (
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "28.8px",
          }}
        >
          {title}
        </Typography>
      )}
      {children}
    </Stack>
  )
}

interface SectionItemProps {
  title?: string
  description?: string
  children?: ReactNode
}

export const SectionItem = ({
  title,
  description,
  children,
}: SectionItemProps) => {
  return (
    <Box>
      {title && (
        <Stack spacing={"8px"} sx={{ mb: "16px" }}>
          {title && (
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "21.6px",
              }}
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "20.8px",
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
