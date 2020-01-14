import React from 'react';
import styled from 'styled-components';
import Pizza from '../../atomics/icons/Pizza';
import Chicken from '../../atomics/icons/Chicken';

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
    flex-direction: row;
`;

const Card: React.FC = () => {
    return (
        <CardContainer className="card">
            <CardBodyStyle>
                <Pizza size="10rem" />
                <Chicken size="10rem" />
            </CardBodyStyle>
        </CardContainer>
    );
};

export default Card;
