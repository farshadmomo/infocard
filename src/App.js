import React from "react";
import Card from "./components/Card";

export default function App() {
  return (
      <div className={"cardlinescontainer"}>
        <div className={"cardLine"}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
          <div className={"cardLine"}>
              <Card />
              <Card />
              <Card />
              <Card />
          </div>
      </div>
  )
}
