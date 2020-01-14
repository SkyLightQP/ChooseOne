import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Card from '../components/Card';
import Container from '../utils/Container';

const CardListStyle = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <CardListStyle>
                    <Card />
                    <Card />
                    <Card />

                </CardListStyle>
            </Container>
        </>
    );
};

export default Home;
