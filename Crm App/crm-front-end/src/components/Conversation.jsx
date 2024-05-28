import React, { useEffect, useRef } from "react";
import styles from "./Conversation.module.css";
import userIcon from "../svg/user-icon.svg";
import supportIcon from "../svg/support-icon.svg";
import seenIcon from "../svg/seen.svg";

const Conversation = ({ messages }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
    console.log(messages);
  }, [messages]);

  return (
    <div className={styles["container"]} ref={containerRef}>
      {messages?.map((message, index) => (
        <div
          key={index}
          className={
            message?.direction === "in"
              ? styles["user-container"]
              : styles["response-container"]
          }
        >
          {message?.direction === "in" ? (
            <>
              <img src={userIcon} alt="User Icon" />
              <div className={styles["userText-container"]}>
                <div className={styles["userText"]}>
                  {message && message?.content ? message?.content : "This is an automated bot response."}
                </div>
                <div className={styles["userText-time"]}>
                  {new Date(message?.timestamp).toLocaleString()}
                  <img src={seenIcon} alt="seen Icon" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles["supportText-container"]}>
                <div className={styles["supportText"]}>
                  {message && message?.content ? message?.content : "This is an automated bot response."}
                </div>
                <div className={styles["supportText-time"]}>
                  {new Date(message?.timestamp).toLocaleString()}
                  <img src={seenIcon} alt="seen Icon" />
                </div>
              </div>
              <img src={supportIcon} alt="Support Icon" />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Conversation;
