import React from "react";
import ReactDOM from "react-dom/client";
import  Counter  from "./Counter";

const App = () => (
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sit in. Distinctio molestias reprehenderit quas vel earum, veritatis obcaecati inventore dignissimos quis adipisci?</p>
    <Counter />
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)