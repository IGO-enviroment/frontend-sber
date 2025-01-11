import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import { ModalBody } from "../../../../shared/ui/modal"
import CloseIcon from "@mui/icons-material/Close"

interface Props {
  open: boolean
  onClose: () => void
}

export const FiltersModal = ({ open, onClose }: Props) => {
  const FILTERS_DATA = {
    format: {
      name: "format",
      label: "Формат работы",
      options: [
        { id: "1", label: "Удаленно" },
        { id: "2", label: "Офис" },
        { id: "3", label: "Гибрид" },
      ],
    },
    wage: {
      name: "wage",
      label: "Оплата труда",
      options: [
        { id: "1", label: "Бесплатная практика" },
        { id: "2", label: "До 20 000 ₽" },
        { id: "3", label: "От 21 000 ₽" },
        { id: "4", label: "От 40 000 ₽" },
        { id: "5", label: "От 60 000 ₽" },
      ],
    },
    period: {
      name: "period",
      label: "Период трудоутройства",
    },
    available_places: {
      name: "available_places",
      label: "Кол-во доступных мест",
    },
  }

  return (
    <Modal open={open} onClose={onClose}>
      <ModalBody>
        <Stack spacing="32px">
          <Stack
            direction="row"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Typography sx={{ alignSelf: "flex-start" }} variant="l-bold">
              Поиск по фильтрам
            </Typography>
            <Button
              variant="contained"
              color="ghost"
              size="s"
              onClick={onClose}
              sx={{ p: "12px", width: "fit-content", minWidth: "0" }}
            >
              <CloseIcon sx={{ fontSize: "16px" }} />
            </Button>
          </Stack>
        </Stack>
        <Stack direction="row" spacing="48px">
          <Stack id={"1"} spacing="16px" sx={{ width: "fit-content" }}>
            <>
              <Typography
                variant="m-bold"
                children={FILTERS_DATA.format.label}
              />
              {FILTERS_DATA.format.options?.map(({ label }) => (
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label={label} />
                </FormGroup>
              ))}
            </>
          </Stack>
          <Stack id={"2"} spacing="16px" sx={{ width: "fit-content" }}>
            <>
              <Typography variant="m-bold" children={FILTERS_DATA.wage.label} />
              {FILTERS_DATA.wage.options?.map(({ label }) => (
                <FormGroup>
                  <FormControlLabel control={<Radio />} label={label} />
                </FormGroup>
              ))}
            </>
          </Stack>
        </Stack>
        <Stack
          id={"3"}
          spacing="16px"
          sx={{ width: "fit-content", mt: "32px" }}
        >
          <>
            <Typography variant="m-bold" children={FILTERS_DATA.period.label} />
            <Stack direction="row" spacing="12px">
              <TextField placeholder="Дата начала" />
              <TextField placeholder="Дата окончания" />
            </Stack>
          </>
        </Stack>
        <Stack
          id={"3"}
          spacing="16px"
          sx={{ width: "fit-content", mt: "32px" }}
        >
          <>
            <Typography
              variant="m-bold"
              children={FILTERS_DATA.available_places.label}
            />
            <Stack direction="row" spacing="12px">
              <TextField placeholder="От" />
              <TextField placeholder="До" />
            </Stack>
          </>
        </Stack>
        <Stack
          direction="row"
          spacing="12px"
          sx={{ justifyContent: "space-between", p: "24px 0px 0px" }}
        >
          <Button
            variant="contained"
            color="ghost"
            size="s"
            children="Сбросить фильтры"
            sx={{ flex: "1 1 50%" }}
            onClick={onClose}
          />
          <Button
            variant="contained"
            color="secondary"
            size="s"
            children="Сохранить"
            sx={{ flex: "1 1 50%" }}
            onClick={onClose}
          />
        </Stack>
      </ModalBody>
    </Modal>
  )
}
