import React from "react";
import { Select } from "antd";

import styles from "./Filter.module.css";

type FilterProos = {
  type: "Browse" | "Sort";
  filterName?: string;
  options: string[];
  defaultValue: string;
  onChange: (value: string) => void;
};

export const Filter = ({
  type,
  filterName,
  defaultValue,
  options,
  onChange,
}: FilterProos) => {
  const validOptions = options.map((opt) => {
    const option = { value: opt, label: opt };
    return option;
  });

  return (
    <div>
      <span className={styles.filterName}>{filterName}:</span>
      <Select
        className={styles.select}
        defaultValue={defaultValue}
        dropdownStyle={{ backgroundColor: "rgb(50, 56, 62)" }}
        popupMatchSelectWidth={false}
        onChange={onChange}
        options={[
          {
            value: "disabled",
            label: `${type} by ${type === "Browse" ? filterName : ""}`,
            disabled: true,
          },
          ...validOptions
        ]}
      />
    </div>
  );
};
