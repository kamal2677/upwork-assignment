import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { ISelectOption } from '../../Interfaces';

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

type Props = {
  label: string;
  value: ISelectOption[];
  options: ISelectOption[];
  onSelect: (selectedOptions: ISelectOption[]) => void;
};

const MultiSelectInputControl = ({ options, value, label, ...props }: Props) => {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={value}
        onChange={({ target }) => props.onSelect(target.value as ISelectOption[])}
        input={<OutlinedInput label="Tag" />}
        renderValue={selected => selected.map(x => x.name).join(', ')}
        MenuProps={MenuProps}
      >
        {options &&
          options.map((item: any) => (
            <MenuItem key={item.id} value={item}>
              <Checkbox checked={value.map(x => x.id).includes(item.id)} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default MultiSelectInputControl;
