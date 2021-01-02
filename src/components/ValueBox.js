import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./ValueBox.css";
function ValueBox({ value }) {
  return (
    <Card className="valueBox">
      <CardContent>
        <Typography className="valueBox__padding" color="textSecondary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ValueBox;
