import {ComponentType} from "react";
import styles from './Icon.module.css'

type Props = {
  component: ComponentType<any>;
  size?: number;
  height?: number;
  width?: number;
}

export function Icon(props: Props) {
  const {component: Component, width = 34, height = 34, size} = props;
  return (
    <div className={styles.logo} style={{width: `${size || width}px`, height: `${size || height}px`}}><Component /></div>
  )
}