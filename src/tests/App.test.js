import { render, screen } from "@testing-library/react";
import App from "../App";

test("Site is starting", () => {
  render(<App />);
  const linkElement = screen.getByText(/COVID-19 Tracker/i);
  expect(linkElement).toBeInTheDocument();
});

test("InfoBox shown", () => {
  render(<App />);
  let linkElement = screen.getByText(/Coronavirus Cases/i);
  expect(linkElement).toBeInTheDocument();
  linkElement = screen.getByText(/Recovered/i);
  expect(linkElement).toBeInTheDocument();
  linkElement = screen.getByText(/Deaths/i);
  expect(linkElement).toBeInTheDocument();
});

test("Live Cases by Country shown", () => {
  render(<App />);
  let linkElement = screen.getByText(/Live Cases by Country/i);
  expect(linkElement).toBeInTheDocument();
});
