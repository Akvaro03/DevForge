import FormUser from "@/template/formUser";
import { act, fireEvent, render, screen } from "@testing-library/react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

jest.mock("react-firebase-hooks/auth", () => ({
  useSignInWithGithub: jest.fn(),
  useSignInWithGoogle: jest.fn(),
}));
jest.mock("../../db/firebase/db", () => ({
  auth: jest.fn(),
}));

const setup = (type: "signIn" | "createAccount") => {
  const onSubmitMock = jest.fn(); // Mock para la función de submit
  const tittleComponent = <>Test Title</>; // Un título para el componente

  render(
    <FormUser
      type={type}
      onSubmit={onSubmitMock}
      tittleComponent={tittleComponent}
    />
  );

  return { onSubmitMock };
};

describe("Form User Template", () => {
  beforeEach(() => {
    // Mock de signIn
    (useSignInWithGithub as jest.Mock).mockReturnValue([jest.fn()]);
    (useSignInWithGoogle as jest.Mock).mockReturnValue([jest.fn()]);
  });

  it("renders without crashing and shows the form fields", () => {
    setup("signIn");

    // Verificar que los campos de formulario estén presentes
    expect(screen.getByLabelText(/Email \/ Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it("calls onsubmit when the form is valid", async () => {
    const { onSubmitMock } = setup("signIn");

    const emailInput = screen.getByLabelText(/Email \/ Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const submitButton = screen.getByRole("button", { name: /Test Title/i });

    // Rellenar los inputs
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Simular envío de formulario
    await act(async () => {
      fireEvent.submit(submitButton);
    });

    expect(onSubmitMock).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password123",
    });
  });

  it("displays error messages when fields are empty", async () => {
    setup("signIn");
    const submitButton = screen.getByRole("button", { name: /Test Title/i });

    await act(async () => {
      fireEvent.submit(submitButton);
    });
    // Verificar que los mensajes de error aparezcan
    expect(screen.getByText("The Email is required")).toBeInTheDocument();
    expect(screen.getByText("The Password is required")).toBeInTheDocument();
  });
  it("triggers Google and Github sign-ins", () => {
    const googleMock = jest.fn();
    const githubMock = jest.fn();
    (useSignInWithGoogle as jest.Mock).mockReturnValue([googleMock]);
    (useSignInWithGithub as jest.Mock).mockReturnValue([githubMock]);

    setup("signIn");

    // Simular click en los íconos de Google y Github
    const googleIcon = screen.getByTestId("GoogleIcon");
    const githubIcon = screen.getByTestId("GitHubIcon");

    fireEvent.click(googleIcon);
    fireEvent.click(githubIcon);

    // Verificar que las funciones fueron llamadas
    expect(googleMock).toHaveBeenCalled();
    expect(githubMock).toHaveBeenCalled();
  });

  it("display this account doesn't exist", async () => {
    const emailInput = screen.getByLabelText(/Email \/ Username/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const submitButton = screen.getByRole("button", { name: /Test Title/i });

    fireEvent.change(emailInput, {
      target: { value: "thisEmailDoesntExist@gmail.com" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "thisPasswordDoestExist" },
    });

    await act(async () => {
      fireEvent.submit(submitButton);
    });

    expect(screen.getByText("The Email is required")).toBeInTheDocument();
    expect(screen.getByText(/esta cuenta no existe/i)).toBeInTheDocument()
  });
});
