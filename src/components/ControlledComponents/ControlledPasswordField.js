import React from "react";
import {
  TextField,
  Stack,
  Typography,
  InputAdornment,
  CircularProgress,
  Input,
  FormHelperText,
} from "@mui/material";
import { get } from "lodash-es";

const ControlledPasswordField = ({
  loading,
  formik,
  sx,
  InputProps,
  disableOnChange,
  endAdornment,
  label,
  name,
  type,
  inFieldLabel,
  inputProps,
  onFileChange,
  prioritizeError,
  ...props
}) => {
  const handleFileChange = (e) => {
    const { files } = e.currentTarget;
    onFileChange(files);
    formik.handleChange(e);
  };
  return (
    <Stack
      sx={{
        justifyContent: "center",
        minWidth: 230,
        m: 1,
        flexDirection: "column",
        ...sx,
      }}
      spacing={0.5}
    >
      {!inFieldLabel && (
        <Typography fontWeight={500} fontSize={"0.85rem"}>
          {label}
        </Typography>
      )}
      <Input
        fullWidth={false}
        id={name}
        name={name}
        size="medium"
        variant="outlined"
        label={inFieldLabel && label}
        type={type || "text"}
        value={props.value || get(formik.values, name)}
        onChange={
          disableOnChange
            ? undefined
            : type === "file"
            ? handleFileChange
            : formik.handleChange
        }
        error={
          prioritizeError ||
          (get(formik.touched, name) && Boolean(get(formik.errors, name)))
        }
        inputProps={inputProps}
        endAdornment={endAdornment}
        {...props}
      />
      <FormHelperText
        id="outlined-weight-helper-text"
        sx={{ color: "primary.main" }}
      >
        {prioritizeError ||
          (get(formik.touched, name) && get(formik.errors, name)) ||
          " "}
      </FormHelperText>
    </Stack>
  );
};

export default ControlledPasswordField;
