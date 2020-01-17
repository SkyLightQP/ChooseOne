import React from 'react';
import Header from '../components/Header';
import Container from '../utils/Container';
import CardList from '../components/CardList';
import Footer from "../components/Footer";

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <CardList />
            </Container>
            <Footer/>
        </>
    );
};

export default Home;
