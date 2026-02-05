import {ReactNode} from "react";
import styles from "./WithCorners.module.css";
import Logo from "@/assets/corner.svg";
import {cc} from "@/utils/classConcat";

type Props = {
  children: ReactNode;
}

export function WithCorners(props: Props) {
  return (
    <div className={styles.container}>
      <div className={cc(styles.leftUp)}><Logo /></div>
      <div className={cc(styles.leftDown)}><Logo /></div>
      <div className={cc(styles.rightUp)}><Logo /></div>
      <div className={cc(styles.rightDown)}><Logo /></div>
      {props.children}
    </div>
  );
}