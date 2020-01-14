import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex: 0 1 46%;
    margin: 0.8rem;
    height: 10rem;
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
        <CardContainer>
            <CardBodyStyle>

            </CardBodyStyle>
        </CardContainer>
    );
};

export default Card;
