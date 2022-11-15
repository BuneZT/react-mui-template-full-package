import React from "react";
import { render, screen } from "@testing-library/react";
import Copyright from "../layout/Copyright";

test("renders learn react link", () => {
  render(<Copyright />);
  const linkElement = screen.getByText(/PJATK/i);
  expect(linkElement).toBeInTheDocument();
});
