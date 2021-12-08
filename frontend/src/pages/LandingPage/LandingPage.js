import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Page from "../../components/Page/Page";


import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import axios from "axios";
import "./LandingPage.css";

import { makeStyles } from "@material-ui/core";
import ItemList from "../../components/ItemList/ItemList";
import ItemListKurs from "../../components/ItemListKurs/ItemListKurs";
import CustomButton from "../../components/CustomButton/CustomButton"

const useStyle = makeStyles({
  root: {
    color: "var(--button-color)",
    fontWeight: 500,
    borderColor: "var(--button-color)",
    borderWidth: 2,
    fontSize: "clamp(12px, 5px + 2vw, 16px)",
  },
  selected: {
    backgroundColor: "red",
  },
});

function LandingPage() {
  const [studentList, setStudentList] = useState([]);
  const [kursList, setKursList] = useState([]);
  const [toggle, setToggle] = useState("Student");

  const [pageNumber, setPageNumber] = useState(1);
  const classes = useStyle();
  const url = "https://localhost:5001/api/";
  const handleToggle = (event, newVal) => {
    if (newVal !== null && newVal !== toggle) {
      setToggle(newVal);

    }
  };

  useEffect(() => {
    getAllStudents();

  }, []);




  const getAllStudents = () => {
    return axios.get(`${url}student/get_students`).then((response) => {
      console.log(response.data);
      setStudentList(response.data);
    })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }


  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = () => {
    return axios.get(`${url}kurs/get_all_kurs`).then((response) => {
      console.log(response.data);
      setKursList(response.data);
    })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  };

  return (
    <Page>
      <div className="landing-page-header">
        <div className="landing-page-big-title bold">
          Dobrodošli na studentski servis
        </div>
        <div className="landing-page-title-description">
          Stranica na kojoj možete pronaći sve informacije o vašim studentima
        </div>
      </div>
      <div>

      </div>
      <div className = "list-group">

        <div className="landing-page-item-list">
        <p className = "title">Studenti</p>
          <div>
            <ItemList
              value={toggle}
              itemList={studentList}
            />
          </div>
 
        </div>

        <div className="landing-page-item-list-kurs">
        <p className = "title">Kursevi</p>
          <div>
            <ItemListKurs
              value={toggle}
              itemList={kursList}
            />
          </div>
      
      
        </div>
      </div>
 

    </Page>
  );
}

export default LandingPage;
