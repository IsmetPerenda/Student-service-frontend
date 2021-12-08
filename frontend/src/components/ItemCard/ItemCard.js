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
import "./ItemCard.css";
import CustomButton from "../CustomButton/CustomButton";
import icon from "../../Icons/student.png"
import EditModalStudent from "../EditModal/EditModalStudent/EditModalStudent"
import SinglePage from "../../pages/SingleItemPage/SingleItemPage"
function ItemCard({ item }) {
  const history = useHistory();
  const [modal, setModal] = useState(false)
  const classes = useStyles();

  const goToStudent = () => {
    <SinglePage id ={item.studentId}></SinglePage>
    history.push(`/item/${item.studentId}`)
  };
  return (
    <div className="single-card">
      <Card className={classes.root}>
        <CardActionArea >
          <img src={icon} />
          <div className={classes.title}>

            <Paragraph ellipsis={{ rows: 2, expandable: false }}>

              {item.ime}
              {item.prezime}

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
              onClick={goToStudent}
              label="INFO"
            />
          </div>
        </CardActionArea>

      </Card>
    </div>
  );
}


export default ItemCard;
