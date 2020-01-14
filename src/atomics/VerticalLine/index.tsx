import React from 'react';
import styled from 'styled-components';

const LineStyle = styled.div`
    border-left: 0.2rem solid #ced6e0;
    border-radius: 10px;
    height: 10rem;


    .card:hover & {
        border-left: 0.2rem solid #747d8c;
    }
`;

const VerticalLine: React.FC = () => {
    return <LineStyle />;
};

export default VerticalLine;
