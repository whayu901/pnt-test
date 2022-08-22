import { FC } from "react";

import styles from "@/styles/Select.module.scss";

import { ISelectDropdown } from "types";

export const SelectComponent: FC<ISelectDropdown> = ({
  selectList,
  onChange,
}) => {
  return (
    <select className={styles.select} onChange={onChange}>
      {selectList.map((list: any) => (
        <option value={list.value} key={list.id}>
          {list.label}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;
