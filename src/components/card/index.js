import React from "react";

export default ({ type }) => {
  return (
    <div className="card w-20 ma-0">
      <section className="card-text" data-testid="tab-content">
        <span>{type}</span>
      </section>
    </div>
  )
}