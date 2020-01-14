import React from 'react';
import styled from 'styled-components';

const LineStyle = styled.div`
    border-left: 0.1rem solid #ced6e0;
    border-radius: 10px;
    height: 10rem;


    .card:hover & {
        border-left: 0.1rem solid #a4b0be;
    }
`;

const VerticalLine: React.FC = () => {
    return <LineStyle />;
};

export default VerticalLine;
