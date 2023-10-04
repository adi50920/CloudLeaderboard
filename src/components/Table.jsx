import React, { useState } from "react";
import "./Table.css";
import logo from "./images/111111.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";

const Table = () => {
  // this is dummyData
  const dummyData = [
    {
      id: 1,
      NAME: "Manas Kulkarni",
      COURSES: 4,
      SKILL: 4,
      GEN_AI: 1,
      DUE_DATE: "18/10/23",
      STATUS: "not completed",
    },
    {
      id: 2,
      NAME: "Sandesh Jadhav",
      COURSES: 4,
      SKILL: 4,
      GEN_AI: 1,
      DUE_DATE: "18/10/23",
      STATUS: "completed ",
    },
    {
      id: 3,
      NAME: "Viraj Sharma",
      COURSES: 4,
      SKILL: 4,
      GEN_AI: 1,
      DUE_DATE: "18/10/23",
      STATUS: "completed",
    },
    {
      id: 4,
      NAME: "Rohit Koli",
      COURSES: 4,
      SKILL: 4,
      GEN_AI: 1,
      DUE_DATE: "18/10/23",
      STATUS: "not completed",
    },
    {
      id: 5,
      NAME: "Akkash Chopra",
      COURSES: 4,
      SKILL: 4,
      GEN_AI: 1,
      DUE_DATE: "18/10/23",
      STATUS: "not completed",
    },
    {
      id: 6,
      NAME: "Rohan Prajapati",
      COURSES: 4,
      SKILL: 4,
      GEN_AI: 1,
      DUE_DATE: "18/10/23",
      STATUS: "completed",
    },
  ];

  const [value, setValue] = useState("");
  const [dataSource, setDataSource] = useState(dummyData);
  const [tableFilter, setTableFilter] = useState([]);
  const filterData = (e) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      const filterTable = dataSource.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setTableFilter([...filterTable]);
    } else {
      setValue(e.target.value);
      setDataSource([...dataSource]);
    }
  };

  return (
    <div className="table__body">
      <div className="tableinfo d-flex justify-content-center align-items-center flex-column">
        <div className="table-upper w-100 mb-5">
          <div className="Texthead d-flex w-100 justify-content-center align-items-center flex-column">
            <a href="https://gdsc.community.dev/datta-meghe-college-of-engineering-navi-mumbai/">
              <img className="logo" src={logo} alt="logo" />
            </a>
            <h1>Google Cloud Study Jams 23-24</h1>
            <p className="Para">
              <a href="https://gdsc.community.dev/datta-meghe-college-of-engineering-navi-mumbai/">
                Google Developers Student Clubs - DMCE
              </a>
            </p>
          </div>

          <div className="input-group w-75">
            <input
              type="text"
              className="form-control"
              placeholder="Search your name"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={value}
              onChange={filterData}
            />
          </div>
        </div>
        <div className="table-container w-100">
          <div className="table-headings d-flex justify-content-evenly align-items-center fw-bold flex-row">
            <p className="table-heading content-id m-0">#</p>
            <p className="table-heading content-name m-0">NAME</p>
            <p className="table-heading content-course m-0">COURSES</p>
            <p className="table-heading content-skill m-0">SKILL</p>
            <p className="table-heading content-genai m-0">GEN AI</p>
            <p className="table-heading content-status m-0">STATUS</p>
          </div>
          {value.length > 0
            ? tableFilter.map((data) => (
                <div
                  className={`table-contents d-flex justify-content-evenly align-items-center flex-row  ${
                    data.STATUS === "completed" ? "completed-bg" : ""
                  }`}
                  key={data.id}
                >
                  <p className="table-content content-id m-0">{data.id}</p>
                  <p className="table-content content-name m-0">{data.NAME}</p>
                  <p className="table-content content-course m-0">
                    {data.COURSES}
                  </p>
                  <p className="table-content content-skill m-0">
                    {data.SKILL}
                  </p>
                  <p className="table-content content-genai m-0">
                    {data.GEN_AI}
                  </p>
                  <p
                    className={`table-content content-status m-0 ${
                      data.STATUS === "completed"
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {data.STATUS}
                  </p>
                </div>
              ))
            : dataSource.map((data) => (
                <div
                  className={`table-contents d-flex justify-content-evenly align-items-center flex-row ${
                    data.STATUS === "completed" ? "completed-bg" : ""
                  }`}
                  key={data.id}
                >
                  <p className="table-content content-id m-0">{data.id}</p>
                  <p className="table-content content-name m-0">{data.NAME}</p>
                  <p className="table-content content-course m-0">
                    {data.COURSES}
                  </p>
                  <p className="table-content content-skill m-0">
                    {data.SKILL}
                  </p>
                  <p className="table-content content-genai m-0">
                    {data.GEN_AI}
                  </p>
                  <p
                    className={`table-content content-status m-0 ${
                      data.STATUS === "completed"
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {data.STATUS}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
