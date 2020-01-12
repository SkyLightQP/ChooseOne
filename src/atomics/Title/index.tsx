import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.p`
    font-size: 2.8rem;
    font-weight: 900;
    margin: 0.2rem 0;
`;

const Title: React.FC = ({ children }) => {
    return <TitleStyle>{children}</TitleStyle>;
};

export default Title;
