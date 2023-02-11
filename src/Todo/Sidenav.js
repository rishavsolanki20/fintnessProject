import React from "react";
import styles from "./Sidenav.module.css"
export default function Sidenav(props) {
  return (
    <div>
      <ul className={styles.buttons}>
        <li
          onClick={() => {
            props.change("TODAY");
          }}
        >
          <div>Members List</div>
        </li>
        
        <li
          onClick={() => {
            props.change("INBOX");
          }}
        >
          <div>Back</div>
        </li>
      </ul>
    </div>
  );
}
