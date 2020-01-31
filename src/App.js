import React, { useState } from 'react';
import Counter from "./Counter";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Grid container direction="row">
        <Box style={{ width: "50%" }}>
          <p>BBBB</p>
        </Box>
        <Box color="#fff" style={{ width: "50%" }}>
          <Grid style={{ height: "100%" }} container direction="row" alignItems="center">
            <Typography style={{ marginRight: "7%" }} variant="body1">Influencers</Typography>
            <Typography style={{ marginRight: "7%" }} variant="body1">Brands</Typography>
            <Typography style={{ marginRight: "7%" }} variant="body1">Login</Typography>
            <Typography style={{ padding: 10, paddingLeft: 40, paddingRight: 40, backgroundColor: "white", color: "#555", borderRight: "1px solid #fff", borderRadius: "30px 30px 30px 30px" }} variant="body1">SignUp</Typography>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
}

export default App;
