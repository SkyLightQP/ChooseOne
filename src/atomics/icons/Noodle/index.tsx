import React from 'react';
import styled from 'styled-components';
import { ReactComponent as NoodleIcon } from '../../../assets/icon/noodle.svg';

const NoodleStyle = styled(NoodleIcon)<{ size: string }>`
    opacity: 0.3;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    
    .card:hover & {
        opacity: 1;
    }
`;

interface NoodleProps {
  readonly size: string;
}

const Noodle: React.FC<NoodleProps> = ({ size }) => {
  return <NoodleStyle size={size} />;
};

export default Noodle;
