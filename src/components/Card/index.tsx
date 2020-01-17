import React, { MouseEventHandler } from "react";
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex: 0 1 46%;
    margin: 0.8rem;
    height: 12rem;
    background-color: var(--color-main);

    &:hover {
        box-shadow: 0 0 4px 2px var(--color-highlight);
        cursor: pointer;
    }
`;

const CardBodyStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    align-self: center;
    justify-content: center;
`;

interface CardProps {
  readonly onClick?: React.MouseEventHandler;
}

const Card: React.FC<CardProps> = ({ children, onClick }) => {
    return (
        <CardContainer className="card" onClick={onClick}>
            <CardBodyStyle>{children}</CardBodyStyle>
        </CardContainer>
    );
};

export default Card;
