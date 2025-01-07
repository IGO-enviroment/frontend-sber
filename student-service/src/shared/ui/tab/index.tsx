import { Button } from "@mui/material"
import { ButtonProps } from "@mui/material/Button/Button"

interface Props extends ButtonProps {
  selected?: boolean
}

export const Tab = (props: Props) => {
  return (
    <Button
      {...props}
      sx={{
        ...props.sx,
        justifyContent: "start",
        width: 1,
      }}
      color={props.selected ? "secondary" : "ghost"}
      variant="contained"
      size="s"
    />
  )
}
