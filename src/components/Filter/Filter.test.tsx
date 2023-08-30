import { render, screen } from "@testing-library/react";

import { PLATFORMS } from "../../types/enum";

import { Filter } from "./Filter";

test("render Filter", () => {
  render(
    <Filter
      type="Browse"
      filterName="Platform"
      options={PLATFORMS}
      defaultValue={"All Platrorms"}
      loading={false}
      disabled={false}
      onChange={() => {}}
    />
  );
  const filterBlock = screen.getByTestId("filter");
  const filtername = screen.getByText("Platform:");
  expect(filterBlock).toMatchSnapshot();
  expect(filtername).toBeInTheDocument();
});
