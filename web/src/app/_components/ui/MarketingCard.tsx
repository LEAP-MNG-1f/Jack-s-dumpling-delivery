import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

type marketingItemProps = {
  id: number;
  icon: string;
  title: string;
  desc: string;
};

export default function MarketingCard(props: marketingItemProps) {
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
