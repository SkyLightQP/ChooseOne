import React from 'react';
import Header from '../components/Header';
import Container from '../utils/Container';
import CardList from '../components/CardList';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <CardList />
            </Container>
        </>
    );
};

export default Home;
