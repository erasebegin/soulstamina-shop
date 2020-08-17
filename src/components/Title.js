import React from "react";
import styled from 'styled-components';

export default function Title({ title, styleClass }) {
  return (
    <TitleContainer className="row">
        <div className="col text-center py-4">
        <h1 className={styleClass}>{title}</h1>
        </div>
    </TitleContainer>
  );
}

Title.defaultProps = {
  title: "default title",
  styleClass: "display-4 text-capitalize main-page-title"
};

const TitleContainer = styled.div`
  background: var(--main1);
`