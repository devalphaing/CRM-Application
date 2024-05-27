import React, { useEffect, useRef } from "react";
import styles from "./Conversation.module.css";
import userIcon from "../svg/user-icon.svg";
import supportIcon from "../svg/support-icon.svg";

//need to work based on backend
const Conversation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }); // This will run only once when the component mounts

  return (
    <div className={styles["container"]} ref={containerRef}>
      <div className={styles["user-container"]}>
        <img src={userIcon} />
        <div className={styles["userText-container"]}>
          <div className={styles["userText"]}>
            Hi, my Widget Pro is not turning on.
          </div>

          <div className={styles["userText-time"]}>Chat-10/01/2023 3:49 PM</div>
        </div>
      </div>

      <div className={styles["response-container"]}>
        <div className={styles["supportText"]}>
          Hello John, have you tried checking the memory allocated for your
          site?
        </div>
        <img src={supportIcon} />
      </div>

      <div className={styles["user-container"]}>
        <img src={userIcon} />
        <div className={styles["userText-container"]}>
          <div className={styles["userText"]}>
            Hi, my Widget Pro is not turning on.
          </div>

          <div className={styles["userText-time"]}>Chat-10/01/2023 3:49 PM</div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
