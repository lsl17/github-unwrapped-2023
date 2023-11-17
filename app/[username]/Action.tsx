import type { ReactNode } from "react";
import styles from "./action.styles.module.css";

export const Action: React.FC<{
  icon: (params: { width: number; color: string }) => ReactNode;
  label: string;
  onClick?: () => void;
}> = (props) => {
  return (
    <div className={styles.wrapper} onClick={props.onClick}>
      <div className={styles.iconContainer}>
        {props.icon({ width: 16, color: "white" })}
      </div>
      {props.label}
    </div>
  );
};
