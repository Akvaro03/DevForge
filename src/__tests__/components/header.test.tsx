import HeaderComponent from "@/components/HeaderComponent";
import { act, render, screen } from "@testing-library/react";

it("render header Component", async () => {
    await act(async () => {
        render(<HeaderComponent />);
      });
      expect(screen.getByText("Explore")).toBeInTheDocument();
});
