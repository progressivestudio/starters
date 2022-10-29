import "@/modules/ui/assets/styles/app.css";
// Uncomment if DevTools css debugging is needed.
import * as ReactDOM from "react-dom/client";

import { App } from "./app";

// check if dom is mounted
const targetDiv: Element | Document | ShadowRoot | DocumentFragment | null =
  document.getElementById("app");

if (!targetDiv) throw new Error("The element #app was not found !");

const root = ReactDOM.createRoot(targetDiv);
root.render(<App />);
