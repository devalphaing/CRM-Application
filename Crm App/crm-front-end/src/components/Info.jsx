import React, { useEffect, useState } from "react";
import styles from "./Info.module.css";
import caseIdIcon from "../svg/case-id.svg";
import prodNameIcon from "../svg/prod-name.svg";

const Info = ({ data }) => {
  const [caseId, setCaseId] = useState(null);
  const [createDate, setCreateDate] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [productName, setProductName] = useState("");

  // Options for formatting the date
  var options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  useEffect(() => {
    if (data) {
      setCaseId(data.caseid);
      const createDate = new Date(data.createdat);
      setCreateDate(createDate.toLocaleString('en-US', options));

      const lastUpdated = new Date(data.lastupdated);
      setLastUpdated(lastUpdated.toLocaleString('en-US', options));

      setProductName(data.productname);
    }
  }, [data]);

  return (
    <div className={styles["parent-container"]}>
      <div className={styles["container"]}>
        <div className={styles["case-id-container"]}>
          <img src={caseIdIcon} alt="case id icon"/>
          Case ID: {caseId}
        </div>
        <div className={styles["prod-name-container"]}>
          <img src={prodNameIcon} alt="product name icon"/>
          Product Name: {productName}
        </div>
      </div>

      <div className={styles["container"]}>
        <div className={styles["case-id-container"]}>
          <div>Created At:</div>
          {console.log(data?.createdat)}
          {createDate}
        </div>
        <div className={styles["prod-name-container"]}>
          <div>Last Updated :</div>
          {lastUpdated}
        </div>
      </div>
    </div>
  );
};

export default Info;
