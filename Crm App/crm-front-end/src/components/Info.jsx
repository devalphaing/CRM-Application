import React, { useEffect, useState } from "react";
import styles from "./Info.module.css";
import caseIdIcon from "../svg/case-id.svg";
import prodNameIcon from "../svg/prod-name.svg";
import { data } from "../config";

const Info = () => {
  const [caseId, setCaseId] = useState(null);
  const [createDate, setCreateDate] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Options for formatting the date
  var options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  };

  useEffect(() => {
    setCaseId(data.conversation.conversationId);
    let createDate = new Date(data.conversation.createdAt);
    setCreateDate(createDate.toLocaleString('en-US', options));

    let lastUpdated = new Date(data.conversation.lastUpdated);
    setLastUpdated(lastUpdated.toLocaleString('en-US', options));
  }, []);

  return (
    <div className={styles["parent-container"]}>
      <div className={styles["container"]}>
        <div className={styles["case-id-container"]}>
          <img src={caseIdIcon} />
          Case ID: {caseId}
        </div>
        <div className={styles["prod-name-container"]}>
          <img src={prodNameIcon} />
          Product Name: Elementor Hosting - Basic
        </div>
      </div>

      <div className={styles["container"]}>
        <div className={styles["case-id-container"]}>
          <div>Created At:</div>
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
