import React from 'react';
import styled from 'styled-components';

const SubTitleStyle = styled.p`
    font-size: 2.4rem;
    font-weight: 700;
    margin: 0.2rem 0;
`;

const SubTitle: React.FC = ({ children }) => {
    return <SubTitleStyle>{children}</SubTitleStyle>;
};

export default SubTitle;
