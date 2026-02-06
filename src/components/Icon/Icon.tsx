import {ComponentType} from "react";
import styles from './Icon.module.css'

type Props = {
  component: ComponentType<any>;
  size?: number;
  height?: number;
  width?: number;
  color?: string;
}

export function Icon(props: Props) {
  const {component: Component, width = 34, height = 34, size, color = "#ffffff"} = props;
  return (
    <div className={styles.logo} style={{width: `${size || width}px`, height: `${size || height}px`, color}}><Component /></div>
  )
}