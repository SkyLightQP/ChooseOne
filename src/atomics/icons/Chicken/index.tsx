import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ChickenIcon } from '../../../assets/icon/chicken.svg';

const ChickenStyle = styled(ChickenIcon)<{ size: string }>`
    opacity: 0.3;
    width: ${(props) => props.size};
    height: ${(props) => props.size};

    .card:hover & {
        opacity: 1;
    }
`;

interface ChickenProps {
    readonly size: string;
}

const Chicken: React.FC<ChickenProps> = ({ size }) => {
    return <ChickenStyle size={size} />;
};

export default Chicken;
