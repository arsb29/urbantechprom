import {ReactNode} from "react";
import styles from "./WithCorners.module.css";
import Logo from "@/assets/corner.svg";
import {cc} from "@/utils/classConcat";

type Props = {
  children: ReactNode;
  color?: "white" | "black";
}

export function WithCorners(props: Props) {
  const {color = "white"} = props;
  return (
    <div className={styles.container} style={{ color }}>
      <div className={cc(styles.corner, styles.leftUp)}><Logo /></div>
      <div className={cc(styles.corner, styles.leftDown)}><Logo /></div>
      <div className={cc(styles.corner, styles.rightUp)}><Logo /></div>
      <div className={cc(styles.corner, styles.rightDown)}><Logo /></div>
      {props.children}
    </div>
  );
}