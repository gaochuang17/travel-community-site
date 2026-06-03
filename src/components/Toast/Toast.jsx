import React from "react";
import { CheckCircle2 } from "lucide-react";
import styles from "./Toast.module.css";

export function Toast({ notice }) {
  return (
    <div className={styles.toast} role="status">
      <CheckCircle2 size={18} />
      {notice}
    </div>
  );
}
