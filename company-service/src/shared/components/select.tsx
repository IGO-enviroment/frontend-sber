import * as React from 'react';
import { FC, useState } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useFormContext } from 'react-hook-form';


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

export const SelectChip: FC<MultipleSelectChipProps> = ({ names, label, fieldName, isLoading }) => {
  const theme = useTheme();
  const [personName, setPersonName] = useState<string>('');

  const { setValue } = useFormContext();

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setPersonName(value);
    setValue(fieldName, value);
  };


  return (
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={personName}
          onChange={handleChange}
          autoWidth
          label={label}
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
  );
};