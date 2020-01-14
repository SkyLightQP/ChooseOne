import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const PlusStyle = styled(FontAwesomeIcon)`
    opacity: 0.3;

    .card:hover & {
        opacity: 1;
    }
`;

interface PlusProps {
    readonly size: 'xs' | 'lg' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
}

const Plus: React.FC<PlusProps> = ({ size }) => {
    return <PlusStyle icon={faPlus} size={size} />;
};

export default Plus;
