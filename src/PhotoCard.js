import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import ChangeTitle from "./ChangeTitle";

export default function PhotoCard(props) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div>
      <Card style={{ maxWidth: 345, marginRight: 10, marginTop: 10 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={props.photo.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {props.photo.title}
              </Typography>
              {props.privatized && (
                <EditIcon
                  button
                  onClick={() => {
                    setDialogOpen(true);
                  }}
                  color="action"
                />
              )}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
      <ChangeTitle
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
        user={props.user}
        album_id={props.album_id}
        photo={props.photo}
        photoId={props.photoId}
      />
    </div>
  );
}
