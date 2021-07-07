import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "../components/App";
import axios from "axios";

describe("App", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
