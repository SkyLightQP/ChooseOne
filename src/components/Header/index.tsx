import React from 'react';
import styled from 'styled-components';
import Title from '../../atomics/Title';
import Container from '../../utils/Container';
import { useVisited } from '../../hooks/useVisited';
import SubTitle from '../../atomics/SubTitle';

const HeaderStyle = styled.header`
    margin-top: 4rem;
    margin-left: 1rem;
`;

const Header: React.FC = () => {
    const visited = useVisited();

    const NewbieSubTitle = () => <SubTitle>둘 중에 고민될 때 이용해보세요!</SubTitle>;
    const BasicSubTitle = () => <SubTitle>골라봐요!</SubTitle>;

    return (
        <HeaderStyle>
            <Container>
                <Title>
                    Choose <i>One</i>
                </Title>
                {visited === 'true' ? <BasicSubTitle /> : <NewbieSubTitle />}
            </Container>
        </HeaderStyle>
    );
};

export default Header;
