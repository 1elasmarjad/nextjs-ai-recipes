"use client";

import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { CircularProgress } from "@mui/material";

interface Ingredient {
  name: string;
}

export default function SearchAutocomplete() {
  const [options, setOptions] = React.useState<readonly Ingredient[]>([]);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    setOptions([{ name: "Tomato" }]);
    setIsLoading(false);
  }, [searchValue]);

  return (
    <Autocomplete
      multiple
      className="w-full"
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
          label="Ingredients"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
              </>
            ),
          }}
        />
      )}
    />
  );
}
