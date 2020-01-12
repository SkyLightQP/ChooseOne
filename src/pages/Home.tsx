import React from 'react';
import styled from "styled-components";
import Title from '../atomics/Title';
import SubTitle from '../atomics/SubTitle';

const Header = styled.header`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

const Home: React.FC = () => {
    return (
        <>
            <Header>
                <div>
                    <Title>Choose One</Title>
                    <SubTitle>골라봐요!</SubTitle>
                </div>
            </Header>
        </>
    );
};

export default Home;
