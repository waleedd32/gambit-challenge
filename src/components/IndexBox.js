import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

function IndexBox({ indexx }) {
  return (
    <Card className="indexBox">
      <CardContent>
        <Typography className="indexBox__padding" color="textSecondary">
          {indexx}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default IndexBox;
