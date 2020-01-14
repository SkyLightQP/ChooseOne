import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
    margin: 0 auto;
    position: relative;
    width: auto;

    @media screen and (min-width: 0px) {
        max-width: 640px;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1200px;
    }
`;

const Container: React.FC = ({ children }) => {
    return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
