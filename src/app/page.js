'use client'
import { useEffect } from "react";
import Main from "./screens/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className={styles.main}>
      <Main />
    </div>
  );
}
