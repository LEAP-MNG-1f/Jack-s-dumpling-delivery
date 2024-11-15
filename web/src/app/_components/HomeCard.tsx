import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
type HomeCardType = {
  icon: string;
  title: string;
  detail: string;
};

export default function HomeCard(props: HomeCardType) {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <CardContent>
          {props.icon}
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {props.detail}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
