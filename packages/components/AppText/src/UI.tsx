import type React from "react";
import styles from "./styles.module.css";

export interface AppTextComponentProps {
    text: string;
}

const UI: React.FC<AppTextComponentProps> = (props) => {
    return <div className={styles.appTextFont}>{ props.text }</div>;
}

export default UI;
