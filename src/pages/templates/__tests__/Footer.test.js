import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Renders footer description", () => {
  it("1# Test by query with byText", () => {
    render(<Footer />);
    const footerEl = screen.getByText(
      "Here you can use rows and columns to organize your footer content."
    );
    expect(footerEl).toBeInTheDocument();
  });

  it("2# Test by query with byText", () => {
    const { getByText } = render(<Footer />);
    expect(
      getByText(
        "Here you can use rows and columns to organize your footer content."
      ).textContent
    ).toBeTruthy();
  });

  it("#3 Test by query with byTextId", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer-component").textContent).toBe(
      "Here you can use rows and columns to organize your footer content."
    );
  });
});
