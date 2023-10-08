import React, { useState, useEffect } from "react";
import "./Table.css";
import logo from "./images/111111.png";
import Papa from "papaparse";

const Table = () => {
  // const [csvData, setCsvData] = useState([]);

  const [value, setValue] = useState("");
  const [dataSource, setDataSource] = useState([]);
  const [tableFilter, setTableFilter] = useState([]);

  useEffect(() => {
    const loadCSVData = async () => {
      const csvFilePath = process.env.PUBLIC_URL + "/csv/test.csv"; // Path to your CSV file in the public folder

      Papa.parse(csvFilePath, {
        download: true,
        header: true, // Assuming the first row contains headers
        dynamicTyping: true,
        complete: (result) => {
          const csvDataWithIds = result.data.map((row, index) => {
            // Generate auto ID starting from 1
            const id = index + 1;

            // Replace spaces and special characters in header keys with underscores
            const formattedRow = {};
            for (const key in row) {
              const formattedKey = key
                .replace(/ /g, "_")
                .replace(/#/g, "")
                .replace(/&/g, "_and_")
                .toLowerCase();
              formattedRow[formattedKey] = row[key];
            }

            return { id, ...formattedRow };
          });

          setDataSource(csvDataWithIds);
        },
        error: (error) => {
          console.error("Error parsing CSV:", error.message);
        },
      });
    };

    loadCSVData();
  }, []);

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

  if (!dataSource || dataSource.length === 0) {
    return (
      <div className="table__body">
        <p>No data available</p>
      </div>
    );
  }

  console.log(dataSource);

  return (
    <div className="table__body">
      <div className="tableinfo">
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
            <p className="table-heading content-status m-0">
              REDEMPTION STATUS
            </p>
          </div>

          {value.length > 0
            ? tableFilter
                .filter((data) => data.id !== 150)
                .map((data) => (
                  <div
                    className={`table-contents d-flex justify-content-evenly align-items-center flex-row ${
                      data.total_completions_of_both_pathways === "Yes"
                        ? "completed-bg"
                        : ""
                    }`}
                    key={data.id}
                  >
                    <p className="table-content content-id m-0">{data.id}</p>
                    <p className="table-content content-name m-0">
                      {data.student_name}
                    </p>
                    <p className="table-content content-course m-0">
                      {data._of_courses_completed}
                    </p>
                    <p className="table-content content-skill m-0">
                      {data._of_skill_badges_completed}
                    </p>
                    <p className="table-content content-genai m-0">
                      {data._of_genai_game_completed}
                    </p>
                    <p
                      className={`table-content content-status m-0 ${
                        data.redemption_status === "Yes"
                          ? "text-success"
                          : "text-danger"
                      }`}
                    >
                      {data.redemption_status}
                    </p>
                  </div>
                ))
            : dataSource
                .filter((data) => data.id !== 150)
                .map((data) => (
                  <div
                    className={`table-contents d-flex justify-content-evenly align-items-center flex-row ${
                      data.total_completions_of_both_pathways === "Yes"
                        ? "completed-bg"
                        : ""
                    }`}
                    key={data.id}
                  >
                    <p className="table-content content-id m-0">{data.id}</p>
                    <p className="table-content content-name m-0">
                      {data.student_name}
                    </p>
                    <p className="table-content content-course m-0">
                      {data._of_courses_completed}
                    </p>
                    <p className="table-content content-skill m-0">
                      {data._of_skill_badges_completed}
                    </p>
                    <p className="table-content content-genai m-0">
                      {data._of_genai_game_completed}
                    </p>
                    <p
                      className={`table-content content-status m-0 ${
                        data.redemption_status === "Yes"
                          ? "text-success"
                          : "text-danger"
                      }`}
                    >
                      {data.redemption_status}
                    </p>
                  </div>
                ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
