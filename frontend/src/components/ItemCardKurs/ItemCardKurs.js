import React, { useState } from "react";
import { toast } from "react-toastify";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import Paragraph from "antd/lib/typography/Paragraph";
import { Popover } from "antd";

import { useHistory } from "react-router-dom";

import { useStyles, StyledRating } from "./Style";
import "./ItemCardKurs.css";
import CustomButton from "../CustomButton/CustomButton";
import icon from "../../Icons/online-course.png"
function ItemCard({ item }) {
  const [hoveredRating, setHoveredRating] = useState(0);
  const history = useHistory();
  const classes = useStyles();

  const goToKurs = () => {
    
    history.push(`/itemKurs/${item.kursId}`)
  };
    return (
      <div className="single-card">
        <Card className={classes.root}>
          <CardActionArea >
          <img src={icon}/>
            <div className={classes.title}>
              <Paragraph ellipsis={{ rows: 2, expandable: false }}>
                
                {item.nazivKursa}
                
              </Paragraph>
            </div>
            <div className="item-list-show-more">
        <CustomButton
          variant="outlined"
          style={{
            color: "white",
            backgroundColor: "var(--button-color)",
            width: 100,
          }}
          onClick = {goToKurs}
          label="INFO"
        />
        </div>
          </CardActionArea>

        </Card>
      </div>
    );
  }


export default ItemCard;
