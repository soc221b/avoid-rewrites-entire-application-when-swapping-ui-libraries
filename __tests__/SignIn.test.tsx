import { act, fireEvent, screen } from "@testing-library/react";
import { render } from "vitest-browser-react";
import SignIn from "../src/SignIn";

test("shows form", () => {
  render(<SignIn onSubmit={vi.fn()}></SignIn>);

  expect(screen.queryAllByRole("form")).toBeTruthy();
});

test("shows label", () => {
  render(<SignIn onSubmit={vi.fn()}></SignIn>);

  expect(screen.queryByLabelText("Email", { exact: false })).toBeTruthy();
});

test("shows textbox", () => {
  render(<SignIn onSubmit={vi.fn()}></SignIn>);

  expect(screen.queryByRole("textbox")).toBeTruthy();
});

test("shows button", () => {
  render(<SignIn onSubmit={vi.fn()}></SignIn>);

  expect(screen.queryByRole("button")).toBeTruthy();
});

test("validation failed: required", async () => {
  const onSubmit = vi.fn();
  render(<SignIn onSubmit={onSubmit}></SignIn>);

  const button = screen.queryByRole("button")!;
  await act(() => {
    fireEvent.click(button);
  });

  expect(onSubmit).not.toBeCalled();
});

test("validation failed: email", async () => {
  const onSubmit = vi.fn();
  render(<SignIn onSubmit={onSubmit}></SignIn>);

  const textbox = screen.queryByRole("textbox")!;
  await act(() => {
    fireEvent.change(textbox, {
      target: { value: "foo" },
    });
  });
  const button = screen.queryByRole("button")!;
  await act(() => {
    fireEvent.click(button);
  });

  expect(onSubmit).not.toBeCalled();
});

test("submit successfully", async () => {
  const onSubmit = vi.fn();
  render(<SignIn onSubmit={onSubmit}></SignIn>);

  const textbox = screen.queryByRole("textbox")!;
  await act(() => {
    fireEvent.change(textbox, {
      target: { value: "foo@example.com" },
    });
  });
  const button = screen.queryByRole("button")!;
  await act(() => {
    fireEvent.click(button);
  });

  expect(onSubmit).toBeCalled();
  expect(onSubmit).toBeCalledWith({ email: "foo@example.com" });
});
