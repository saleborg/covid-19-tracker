import { render, screen } from "@testing-library/react";
import InfoBox from "../components/InfoBox";
import { prettyPrintStat } from "../util";
import numeral from "numeral";

test("Loading Infobox cases", () => {
  render(
    <InfoBox
      title="Coronavirus Cases"
      isRed
      active={"cases"}
      cases={prettyPrintStat(1990)}
      total={numeral(199999).format("0.0a")}
    />
  );

  let linkElement = screen.getByText(/Coronavirus Cases/);
  expect(linkElement).toBeInTheDocument();

  linkElement = screen.getByText(/Total/);
  expect(linkElement).toBeInTheDocument();

  linkElement = screen.getByText(/2.0k/);
  expect(linkElement).toBeInTheDocument();

  linkElement = screen.getByText(/200.0k Total/);
  expect(linkElement).toBeInTheDocument();
});

test("Loading Infobox", () => {
  render(
    <InfoBox
      title="Recovered"
      isRed
      active={"recovered"}
      cases={prettyPrintStat(1990)}
      total={numeral(199999).format("0.0a")}
    />
  );

  let linkElement = screen.getByText(/Recovered/);
  expect(linkElement).toBeInTheDocument();
});
