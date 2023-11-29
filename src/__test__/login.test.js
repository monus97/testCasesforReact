import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../pages/login";
import userEvent from "@testing-library/user-event";
//  import { render, fireEvent, waitFor, queryByText ,screen} from "@testing-library/react";

describe("Login Component", () => {
  test("renders the login form", async () => {
    render(<Login />);
    const buttons = await screen.findAllByRole("button");
    expect(buttons).toHaveLength(2);
    const heading = screen.getByText("Login Page");
    expect(heading).toBeInTheDocument();
    const emailInput = screen.getByPlaceholderText("enter your email");
    expect(emailInput).toBeInTheDocument();
    const passwordInput = screen.getByPlaceholderText("enter your password");
    expect(passwordInput).toBeInTheDocument();
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
  });

  test("render email testing", async () => {
    render(<Login />);
    const email = screen.getByPlaceholderText("enter your email");
    expect(email).toBeInTheDocument();
    userEvent.type(email, "test");
    expect(email.value).not.toMatch("monu@gmail.com");
    expect(email).toHaveAttribute("type", "text");
  });
  test("render password testing", async () => {
    render(<Login />);
    const password = screen.getByPlaceholderText("enter your password");
    expect(password).toBeInTheDocument();
    userEvent.type(password, "password");
    expect(password).toHaveAttribute("type", "password");
  });

  test("render resetButton testing", async () => {
    const { getByTestId } = render(<Login />);
    const resetButton = getByTestId("reset");
    expect(resetButton).toBeInTheDocument();
    const emailInputNode = screen.getByPlaceholderText("enter your email");
    const passwordInputNode = screen.getByPlaceholderText(
      "enter your password"
    );
    fireEvent.click(resetButton);
    expect(emailInputNode.value).toMatch("");
    expect(passwordInputNode.value).toMatch("");
  });

  test("handles form submission with valid credentials", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText("enter your email");
    const passwordInput = screen.getByPlaceholderText("enter your password");
    const loginButton = screen.getByTestId("submit");

    fireEvent.change(emailInput, { target: { value: "user" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(loginButton);
    const welcomeMessage = screen.getByText("Welcome");
    expect(welcomeMessage.alert).toBeCalledWith();
    // expect(welcomeMessage).toBeInTheDocument();
  });

  test("handles form submission with invalid credentials", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText("enter your email");
    const passwordInput = screen.getByPlaceholderText("enter your password");
    const loginButton = screen.getByTestId("submit");

    fireEvent.change(emailInput, { target: { value: "invalidUser" } });
    fireEvent.change(passwordInput, { target: { value: "invalidPassword" } });
    fireEvent.click(loginButton);

    const errorMessage = screen.getByText("Invalid username or password");
    expect(errorMessage).toBeInTheDocument();
  });
});

//   it("handles empty fields correctly", async () => {
//     const { getByText, queryByText } = render(<Login />);
//     const loginButton = getByText("Login");

//     fireEvent.click(loginButton);

//     await waitFor(() => {
//       const alertMessage =screen.queryByText("Invalid username or password");
//       expect(alertMessage).toBeInTheDocument();
//     });
//   });

//   it("displays invalid credentials message", async () => {
//     const { getByText, getByPlaceholderText, queryByText } = render(<Login />);
//     const emailInput = getByPlaceholderText("enter your email");
//     const passwordInput = getByPlaceholderText("enter your password");
//     const loginButton = getByText("Login");

//     fireEvent.change(emailInput, { target: { value: "invaliduser@example.com" } });
//     fireEvent.change(passwordInput, { target: { value: "invalidpassword" } });
//     fireEvent.click(loginButton);

//     await waitFor(() => {
//       const alertMessage = queryByText("Invalid username or password");
//       expect(alertMessage).toBeInTheDocument();
//     });
//   });
// });
