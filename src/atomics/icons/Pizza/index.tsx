import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PizzaIcon } from '../../../assets/icon/pizza.svg';

const PizzaStyle = styled(PizzaIcon)<{ size: string }>`
    opacity: 0.3;
    width: ${(props) => props.size};

    .card:hover & {
        opacity: 1;
    }
`;

interface PizzaProps {
    readonly size: string;
}

const Pizza: React.FC<PizzaProps> = ({ size }) => {
    return <PizzaStyle size={size} />;
};

export default Pizza;
