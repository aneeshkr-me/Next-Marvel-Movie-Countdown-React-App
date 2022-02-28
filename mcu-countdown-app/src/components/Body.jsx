import React from "react";
import { useEffect, useState } from "react";

const Body = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://www.whenisthenextmcufilm.com/api?date=2022-05-03")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(JSON.stringify(data));
          console.log(data);
        });
    };
    fetchData();
  }, []);

  return <div>{data}</div>;
};

export default Body;
