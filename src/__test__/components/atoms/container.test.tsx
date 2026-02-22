import {render, screen} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import Container from "@components/atoms/container/Container.tsx";

describe("Container", () => {
  it("should render correctly", () => {
    render(<Container data-testid="container" />);
    expect(screen.getByTestId("container")).toBeDefined();
  });

  it("should render children correctly", () => {
    render(
      <Container data-testid="container">
        <div>Test Child</div>
      </Container>,
    );
    expect(screen.getByText("Test Child")).toBeDefined();
  });

  it("should apply custom className", () => {
    render(<Container data-testid="container" className="custom-class" />);
    const element = screen.getByTestId("container");
    expect(element.classList.contains("custom-class")).toBe(true);
  });
});
