import React from 'react';
import styled from 'styled-components';
import Title from '../atomics/Title';
import Container from '../utils/Container';
import { useVisited } from '../hooks/useVisited';
import SubTitle from '../atomics/SubTitle';

const Header = styled.header`
    margin-top: 4rem;
    margin-left: 1rem;
`;

const Home: React.FC = () => {
    const visited = useVisited();

    const NewbieSubTitle = () => <SubTitle>둘 중에 고민될 때 이용해보세요!</SubTitle>;
    const BasicSubTitle = () => <SubTitle>골라봐요!</SubTitle>;

    return (
        <>
            <Header>
                <Container>
                    <Title>
                        Choose <i>One</i>
                    </Title>
                    {visited === 'true' ? <BasicSubTitle /> : <NewbieSubTitle />}
                </Container>
            </Header>
        </>
    );
};

export default Home;
