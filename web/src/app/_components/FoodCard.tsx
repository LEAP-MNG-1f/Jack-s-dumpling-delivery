import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
type CardPropsType = {
  url: string;
  title: string;
  price: number;
  discount?: number;
};
export default function FoodCard(props: CardPropsType) {
  return (
    <Card sx={{ maxWidth: 282, maxHeight: 256 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: 186, width: 282 }}
          height="60%"
          src={props.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography>{props.discount}</Typography>

          <Typography gutterBottom variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography variant="body1" className="text-[#18BA51]">
            {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
