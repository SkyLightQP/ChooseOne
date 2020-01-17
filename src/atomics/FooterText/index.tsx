import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.p`
    font-size: 0.9rem;
    margin: 0.2rem 0;
    
    @media screen and (max-width: 640px) {
        text-align: center;
    }
`;

const FooterText: React.FC = ({ children }) => {
  return <TextStyle>{children}</TextStyle>;
};

export default FooterText;
