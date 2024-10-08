import HeaderComponent from "@/components/HeaderComponent";
import { act, render, screen } from "@testing-library/react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: jest.fn(),
  useSignOut: jest.fn(),
}));

describe("Header Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("render header tittles", async () => {
    (useAuthState as jest.Mock).mockReturnValue([null, false]);

    // Simula que useSignOut devuelve una función mockeada para cerrar sesión
    (useSignOut as jest.Mock).mockReturnValue([jest.fn()]);
    await act(async () => {
      render(<HeaderComponent />);
    });

    expect(screen.getByText(/Dev/i)).toBeInTheDocument();
    expect(screen.getByText(/Forges/i)).toBeInTheDocument();
    expect(screen.getByText(/Explore/i)).toBeInTheDocument();
    expect(screen.getByText(/Saves/i)).toBeInTheDocument();
  });

  it("render header when user is not loaded", async () => {
    (useAuthState as jest.Mock).mockReturnValue([null, false]);

    // Simula que useSignOut devuelve una función mockeada para cerrar sesión
    (useSignOut as jest.Mock).mockReturnValue([jest.fn()]);

    await act(async () => {
      render(<HeaderComponent />);
    });

    expect(screen.getByText(/Create Account/i)).toBeInTheDocument();
    expect(screen.getByText(/Sing in/i)).toBeInTheDocument();
  });
  it("render header when user is loaded", async () => {
    const user = { uid: "123", displayName: "Test User" };

    (useAuthState as jest.Mock).mockReturnValue([user, false]);

    // Simula que useSignOut devuelve una función mockeada para cerrar sesión
    (useSignOut as jest.Mock).mockReturnValue([jest.fn()]);

    await act(async () => {
      render(<HeaderComponent />);
    });
    expect(screen.getByText(/Log Out/i)).toBeInTheDocument();
  });
});
