import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Gallery from "./Gallery";

describe("Gallery component", () => {
  it("renders the gallery", () => {
    render(<Gallery />);
    expect(document.querySelectorAll("img").length).toBeGreaterThan(0);
  });
});
