import { render, screen } from "@testing-library/react";

import { ErrorBlock } from "./ErrorBlock";

test("render Error block", () => {
  render(<ErrorBlock />);
  const p = screen.getByText(/please try again later/i);
  const block = screen.getByTestId("error-block");
  expect(p).toBeInTheDocument();
  expect(block).toMatchSnapshot();
});
