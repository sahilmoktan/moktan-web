import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
} from "@mui/material";
import Image from "next/image";
import styles from "../styles/Slide.module.css";

import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const cardInfo = [
  {
    image: "/images/Image1.jpg",
    alt: "Paella dish",
    title: "Beautiful Background of Nature 1",
    subheader: "September 14, 2016",
  },
  {
    image: "/images/Image2.jpg",
    alt: "Paella dish",
    title: "Beautiful Background of Nature 2",
    subheader: "September 14, 2016",
  },
  {
    image: "/images/Image3.jpg",
    alt: "Paella dish",
    title: "Beautiful Background of Nature 3",
    subheader: "September 14, 2016",
  },
  {
    image: "/images/Image4.jpg",
    alt: "Paella dish",
    title: "Beautiful Background of Nature 4",
    subheader: "September 14, 2016",
  },
];

export default function BasicCard() {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        sx={{ flexWrap: "wrap" }}
      >
        {cardInfo.map((cake) => {
          return (
            <div className={styles.container}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <ShareIcon />
                  </IconButton>
                }
                title={cake.title}
                // subheader={cake.subheader}
              />
              <Button>
                <CardMedia
                  component="img"
                  height="194"
                  image={cake.image}
                  alt="Paella dish"
                />
              </Button>
            </div>
          );
        })}
      </Stack>
    </>
  );
}
