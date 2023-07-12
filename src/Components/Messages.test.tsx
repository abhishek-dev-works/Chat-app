/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import Message from "./Message";

describe("Message component", () => {
  const props = {
    sender: "John",
    message: "Hello!",
    unreadCount: "2",
  };

  it("renders sender, message, and unread count correctly", () => {
    const { getByText } = render(<Message {...props} />);

    const senderElement = getByText("John");
    const messageElement = getByText("Hello!");
    const unreadCountElement = getByText("2");

    expect(senderElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
    expect(unreadCountElement).toBeInTheDocument();
  });

  it("applies hover styles on mouse over", () => {
    const { container } = render(<Message {...props} />);

    // eslint-disable-next-line testing-library/no-node-access
    const messageContainer = container.firstChild;

    
    expect(messageContainer).toHaveStyle("border: 3px solid #13f6ab");
    // Simulate mouse over event
    messageContainer?.dispatchEvent(new MouseEvent("mouseover"));
    
  });

  it("does not render unread count when not provided", () => {
    const { queryByText } = render(
      <Message {...props} unreadCount={undefined} />
    );

    const unreadCountElement = queryByText("2");

    expect(unreadCountElement).toBeNull();
  });
});
