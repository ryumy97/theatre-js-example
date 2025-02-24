import { getProject } from "@theatre/core";
import state from "./assets/state.json";

// our Theatre.js project sheet, we'll use this later
export const demoSheet = getProject("Demo Project", { state: state }).sheet(
  "Demo Sheet"
);
