import React from "react";
import styles from "./TextArea.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const TextArea = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["text-area-head"]}></div>
      <textarea type="text" className={styles["text-field"]} />
      <Button 
        variant="contained"
        sx={{ backgroundColor: '#05047E', '&:hover': { backgroundColor: '#05047E' } }}
        className={styles['btn']}
      >
        Send
      </Button>
    </div>
  );
};

export default TextArea;
