import type { InputHTMLAttributes, Ref } from "react";
import styles from "./Checkbox.module.css";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  ref?: Ref<HTMLInputElement>;
}

export function Checkbox({ label, className, ref, ...rest }: CheckboxProps) {
  const classes = [styles.checkbox, className].filter(Boolean).join(" ");

  return (
    <label className={classes}>
      <input ref={ref} type="checkbox" className={styles.input} {...rest} />
      <span className={styles.label}>{label}</span>
    </label>
  );
}
