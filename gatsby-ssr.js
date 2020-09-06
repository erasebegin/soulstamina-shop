import React from "react";
export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/css/bulma-carousel.min.css"></link>
  ]);
}
