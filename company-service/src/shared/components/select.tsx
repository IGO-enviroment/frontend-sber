import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface MultipleSelectChipProps {
  names: {
    name: string,
    id: number,
  }[];
  label: string;
  fieldName: string;
  isLoading: boolean;
}

function getStyles(id: number, personName: { name: string, id: number }[], theme: Theme) {
  return {
    fontWeight: personName.findIndex(item => item.id === id) !== -1
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export const MultipleSelectChip: FC<MultipleSelectChipProps> = ({ names, label, fieldName, isLoading }) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const { setValue } = useFormContext();

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setValue(fieldName, value === 'string' ? value.split(',') : value);
  };


  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => {
                // @ts-ignore
                const label = names.find(item => item.id == value)?.name || '';
                return (
                  <Chip key={value} label={label} />
                );
              })}
            </Box>
          )}
          MenuProps={MenuProps}
          disabled={isLoading}
        >
          {names.map((name) => (
            <MenuItem
              key={name.id}
              value={name.id}
              sx={{ zIndex: 9999 }}
              style={getStyles(name.id, names, theme)}
            >
              {name.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};