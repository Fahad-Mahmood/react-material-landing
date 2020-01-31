import React from "react";
import Grid from "@material-ui/core/Grid";
export default function Counter(props) {
  return (
    <>
      <h1 style={{ marginBottom: "50", marginTop: "30" }}>Simple Counter Application</h1>
      <Grid container direction="row" justify="space-around">
        <button onClick={() => props.setCount(parseInt(props.count) - 1)}>Decrease</button>
        <input type="text" value={props.count} placeholder="Enter value" />
        <button onClick={() => props.setCount(parseInt(props.count) + 1)}>Increase</button>
      </Grid>
    </>
  );
}