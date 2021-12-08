import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Paragraph from "antd/lib/typography/Paragraph";
import Chip from "@material-ui/core/Chip";
import { Image } from "antd";
import axios from "axios"
import Page from "../../components/Page/Page";

import "./SingleItemPage.css";
import "antd/dist/antd.css";
import { StyledRating } from "../../components/ItemCard/Style";
import { makeStyles } from "@material-ui/core";
import links from "../../links/links";

const useStyles = makeStyles({
  chip: {
    borderRadius: 4,
    fontFamily: "Open Sans, sans-serif",
    color: "var(--black-color)",
    fontWeight: "bold",
    marginRight: 5,
  },
  paragraph: {
    fontFamily: "Open Sans, sans-serif",
    color: "var(--black-color)",
  },
});

function SingleItemPage(props) {
  const [item, setItem] = useState();
  const history = useHistory();
  const params = useParams();
  const classes = useStyles();
  const [id, setId] = useState(params.id);
  const [student, setStudent] = useState([])



  const url = "https://localhost:5001/api/";

  useEffect(() => {
    console.log(id)
    getStudentInfo();
  }, []);

  const getStudentInfo = () => {
    return axios.get(`${url}student/get_student?id=` + id).then((response) => {
      
      console.log(response.data);
      setStudent(response.data);
    })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (id === undefined)
    return (
      <Page>
        <div style={{ textAlign: "center", marginTop: 200 }}>Loading...</div>
      </Page>
    );

  return (
    <Page>
       <div className="App">
       <table className="table">
                    <tr>
                       
                        <th>Ime</th>
                        <th>Prezime</th>
                        <th>Godina</th>
                        <th>Broj indeksa</th>

           
                    </tr>
                    <tr>
                    <td>{student.ime}</td>
                    <td>{student.prezime}</td>
                    <td>{student.godina}</td>
                    <td>{student.brojIndeksa}</td>
                    </tr>
          </table>
       </div>
    </Page>
  );
}

export default SingleItemPage;
