import React, {useState} from "react";
import "./index.css";
import Card from '../card'

export default function NavBar() {

  const [page, setPage] = useState("HOME PAGE")

  return (
    <div className="layout-column justify-content-center align-items-center">
      <div className="layout-row justify-content-around align-items-center mt-20 links"
        data-testid="navigation-tabs">
        <a onClick={() => setPage("HOME PAGE")}>Home</a>
        <a onClick={() => setPage("NEWS PAGE")}>News</a>
        <a onClick={() => setPage("CONTACT PAGE")}>Contact</a>
        <a onClick={() => setPage("ABOUT PAGE")}>About</a>
      </div>

      <Card type={page}/>
    </div>
  );
}