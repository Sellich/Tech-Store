import { TextField } from "@mui/material";

const SearchInput = ({ onChange, value }) => {
   return (
      <TextField value={value} onChange={onChange} type="search" id="standard-basic" label="Standard" variant="standard" fullWidth sx={{ mb: 2 }} />
   );
}

export default SearchInput;