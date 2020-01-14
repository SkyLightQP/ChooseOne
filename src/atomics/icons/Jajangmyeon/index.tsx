import React from 'react';
import styled from 'styled-components';
import { ReactComponent as JajangmyeonIcon } from '../../../assets/icon/jajangmyeon.svg';

const JajangmyeonStyle = styled(JajangmyeonIcon)<{ size: string }>`
    opacity: 0.3;
    width: ${(props) => props.size};
    height: ${(props) => props.size};

    .card:hover & {
        opacity: 1;
    }
`;

interface JajangmyeonProps {
  readonly size: string;
}

const Jajangmyeon: React.FC<JajangmyeonProps> = ({ size }) => {
  return <JajangmyeonStyle size={size} />;
};

export default Jajangmyeon;
