import React from 'react';
import styled from 'styled-components';
import Title from '../../atomics/Title';
import Container from '../../utils/Container';
import { useVisited } from '../../hooks/useVisited';
import SubTitle from '../../atomics/SubTitle';

const HeaderStyle = styled.header`
    display: flex;
    height: 20rem;
    background-color: var(--color-header);
    margin-bottom: 2rem;
`;

const WrapperStyle = styled.div`
    flex: 1;
    margin: auto;
    align-items: center;
    
    @media screen and (max-width: 1024px) {
        margin-left: 1rem;
    }    
`;

const Header: React.FC = () => {
    const visited = useVisited();

    const NewbieSubTitle = () => <SubTitle>둘 중 고민될 때 이용해보세요!<br/>원하는게 없으면 추가해보세요.</SubTitle>;
    const BasicSubTitle = () => <SubTitle>고민된다면? 골라드려요!</SubTitle>;

    return (
        <HeaderStyle>
            <WrapperStyle>
                <Container>
                    <Title>
                        Choose <i>One</i>
                    </Title>
                    {visited === 'true' ? <BasicSubTitle /> : <NewbieSubTitle />}
                </Container>
            </WrapperStyle>
        </HeaderStyle>
    );
};

export default Header;
