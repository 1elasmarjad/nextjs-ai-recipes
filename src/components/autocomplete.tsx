"use client";

import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { type Ingredient } from "~/types";

export default function SearchAutocomplete() {
  async function fetchIngredients(): Promise<Ingredient[]> {
    const url = `/api/ingredients?q=${JSON.stringify(inputValue)}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    return res.json() as Promise<Ingredient[]>;
  }

  const {
    isLoading,
    data: searchOptions,
    refetch,
  } = useQuery<Ingredient[]>({
    queryKey: ["searchAutocomplete"],
    queryFn: fetchIngredients,
  });

  const [value, setValue] = React.useState<Ingredient[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("");

  React.useEffect(() => {
    refetch().catch(console.error);
  }, [inputValue]);

  return (
    <Autocomplete
      multiple
      className="w-full"
      id="tags-outlined"
      options={searchOptions ?? []}
      getOptionLabel={(option) => option.name}
      defaultValue={[]}
      filterOptions={(options, _) => options}
      value={value}
      onChange={(_, newValue) => setValue(newValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={async (e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
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
