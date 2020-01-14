import React from 'react';
import styled from 'styled-components';

import Card from '../Card';
import Pizza from '../../atomics/icons/Pizza';
import VerticalLine from '../../atomics/VerticalLine';
import Chicken from '../../atomics/icons/Chicken';
import Jajangmyeon from '../../atomics/icons/Jajangmyeon';
import Noodle from '../../atomics/icons/Noodle';
import Plus from '../../atomics/icons/Plus';

const CardListStyle = styled.div`
    display: flex;
    flex-flow: row wrap;

    @media screen and (max-width: 1200px) {
        display: block;
    }
`;

const IconWrapperStyle = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-self: center;
`;

const CardList: React.FC = () => {
    return (
        <CardListStyle>
            <Card>
                <IconWrapperStyle>
                    <Pizza size="7rem" />
                </IconWrapperStyle>
                <VerticalLine />
                <IconWrapperStyle>
                    <Chicken size="7rem" />
                </IconWrapperStyle>
            </Card>
            <Card>
                <IconWrapperStyle>
                    <Jajangmyeon size="7rem" />
                </IconWrapperStyle>
                <VerticalLine />
                <IconWrapperStyle>
                    <Noodle size="7rem" />
                </IconWrapperStyle>
            </Card>
            <Card>
                <Plus size="4x" />
            </Card>
        </CardListStyle>
    );
};

export default CardList;
