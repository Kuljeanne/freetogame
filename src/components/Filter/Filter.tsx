import React from "react";
import { Select } from "antd";

import { PLATFORMS, SORT, TAGS } from "../../types/enum";

import styles from "./Filter.module.css";

type FilterProos = {
  type: "Browse" | "Sort";
  filterName?: string;
  options: typeof PLATFORMS | typeof TAGS | typeof SORT;
  defaultValue: string;
  loading: boolean;
  onChange: (value: string) => void;
};

export const Filter = ({
  type,
  filterName,
  defaultValue,
  options,
  loading,
  onChange,
}: FilterProos) => {
  const validOptions = (Object.keys(options) as (keyof typeof options)[]).map(
    (key) => {
      const option = { value: options[key], label: key };
      return option;
    }
  );

  return (
    <div>
      <span className={styles.filterName}>{filterName}:</span>
      <Select
        className={styles.select}
        defaultValue={defaultValue}
        dropdownStyle={{ backgroundColor: "rgb(50, 56, 62)" }}
        popupMatchSelectWidth={false}
        onChange={onChange}
        loading={loading}
        options={[
          {
            value: "disabled",
            label: `${type} by ${type === "Browse" ? filterName : ""}`,
            disabled: true,
          },
          ...validOptions,
        ]}
      />
    </div>
  );
};
