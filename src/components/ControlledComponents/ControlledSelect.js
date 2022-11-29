import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Stack,
  Typography,
} from "@mui/material";

const ControlledSelect = ({
  formik,
  sx,
  label,
  name,
  disableOnChange,
  options,
  inFieldLabel,
  ...props
}) => {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        m: 1,
        minWidth: 140,
        ...sx,
      }}
      spacing={0.5}
    >
      {!inFieldLabel && (
        <Typography fontWeight={500} fontSize={"0.85rem"}>
          {label}
        </Typography>
      )}
      <FormControl
        sx={{ m: 1, minWidth: 140 }}
        variant="outlined"
        fullWidth
        error={formik.touched[name] && Boolean(formik.errors[name])}
        {...props}
      >
        {inFieldLabel && <InputLabel>{label}</InputLabel>}

        <Select
          name={name}
          id={name}
          value={formik.values[name]}
          onChange={!disableOnChange ? formik.handleChange : undefined}
        >
          {options.map(({ value, label }) => (
            <MenuItem value={value} key={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
        {formik.touched[name] && (
          <FormHelperText>{formik.errors[name]}</FormHelperText>
        )}
      </FormControl>
    </Stack>
  );
};

export default ControlledSelect;
