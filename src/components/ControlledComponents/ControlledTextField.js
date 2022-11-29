import React from "react";
import { TextField, Stack, Typography } from "@mui/material";
// import { get } from 'lodash-es';

const ControlledTextField = ({
  formik,
  sx,
  InputProps,
  disableOnChange,
  label,
  name,
  type,
  inFieldLabel,
  onFileChange,
  inputProps,
  ...props
}) => {
  // const handleFileChange = (e) => {
  //   const {files} = e.currentTarget
  //   onFileChange(files)
  //   formik.handleChange(e)
  // }
  return (
    <Stack
      sx={{
        justifyContent: "center",
        minWidth: 150,
        m: 1,
        flexDirection: "column",
        ...sx,
      }}
      spacing={0.5}
    >
      {!inFieldLabel && (
        <Typography fontWeight={600} fontSize={"0.85rem"}>
          {label}
        </Typography>
      )}
      <TextField
        fullWidth
        id={name}
        name={name}
        variant="outlined"
        label={inFieldLabel && label}
        type={type || "text"}
        value={formik.values[name]}
        // value={props.value || get(formik.values, name)}

        onChange={disableOnChange ? undefined : formik.handleChange}
        // onChange={disableOnChange ? undefined :(type === 'file' ? handleFileChange :formik.handleChange)}

        error={formik.touched[name] && Boolean(formik.errors[name])}
        InputProps={InputProps}
        helperText={(formik.touched[name] && formik.errors[name]) || " "}
        inputProps={inputProps}
        {...props}
      />
    </Stack>
  );
};

export default ControlledTextField;
