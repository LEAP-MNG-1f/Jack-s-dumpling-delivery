import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { marketingItemType } from "@/constants/types";

export default function MarketingCard(props: marketingItemType) {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
