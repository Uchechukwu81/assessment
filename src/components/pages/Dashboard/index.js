import React from "react";
import { Grid, Button, TextField, Box } from "@mui/material";
import MUIDataTable from "mui-datatables";
import ViewPort from "../../ViewPort/ViewPort";
// import { FormLabel } from "@material-ui/core";
// import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const data = [
    {
      bankName: "GTB",
      accountNumber: "0937645728",
      totalInflow: "Uche",
    },
    {
      bankName: "GTB",
      accountNumber: "0937645728",
      totalInflow: "Uche",
    },
    {
      bankName: "GTB",
      accountNumber: "0937645728",
      totalInflow: "Uche",
    },
    {
      bankName: "GTB",
      accountNumber: "0937645728",
      totalInflow: "Uche",
    },
   
  ];
  const columns = [
    {
      name: "bankName",
      label: "Bank Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "accountNumber",
      label: "Account Number ",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "totalInflow",
      label: "Total Inflow",
      options: {
        filter: true,
        sort: false,
      },
    },

  ];
  return (
    <ViewPort>
      <Box>
        <Grid container spacing={1}>
       
          <Grid xs={12} sm={12} md={12} sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                alignItems: "center",
                textAlign: "center",
                padding: ".5rem, .7rem",
                background: "#FF8102",
                color: "white",
                width: "190px",
                borderRadius: "30px",
                marginBottom: "1rem",
                "&:hover": {
                  bgcolor: "white",
                  color: "#FF8102",
                },
              }}
            >
              Upload File
            </Button>
          </Grid>
          {data && (
            <>
              <Grid item xs={12} sm={12} md={12}>
                <MUIDataTable
                  data={data}
                  columns={columns}
                  // options={options}
                />
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={12}
                sx={{ textAlign: "right", marginTop: "2rem" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    alignItems: "center",
                    textAlign: "center",
                    padding: ".7rem",
                    background: "#FF8102",
                    color: "white",
                    width: "170px",
                    borderRadius: "30px",
                    marginBottom: "1rem",
                    "&:hover": {
                      bgcolor: "white",
                      color: "#FF8102",
                    },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </ViewPort>
  );
};

export default Dashboard;
