import React from 'react';
import styled from 'styled-components';

const LineStyle = styled.div`
    border-left: 1px solid #ced6e0;
    border-radius: 10px;
    height: 10rem;


    .card:hover & {
        border-left: 1px solid #a4b0be;
    }
`;

const VerticalLine: React.FC = () => {
    return <LineStyle />;
};

export default VerticalLine;
