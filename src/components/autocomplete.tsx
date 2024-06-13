"use client";

import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { CircularProgress } from "@mui/material";

interface Ingredient {
  name: string;
}

export default function SearchAutocomplete() {
  const [options, setOptions] = React.useState<readonly Ingredient[]>([]);
  const [searchValue, setSearchValue] = React.useState<string>("");

  const isLoading = false;

  React.useEffect(() => {
    setOptions([
      { name: "Tomato" },
    ]);
  }, []);

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={options}
        getOptionLabel={(option) => option.name}
        defaultValue={[]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
          {...params}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          label="Asynchronous"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
        )}
      />
    </Stack>
  );
}
