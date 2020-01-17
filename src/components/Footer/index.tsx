import React from 'react';
import styled from 'styled-components';
import Container from '../../utils/Container';
import FooterText from '../../atomics/FooterText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const WrapperStyle = styled.div`
    margin: 8rem 0;
`;

const Footer: React.FC = () => {
    return (
        <Container>
            <WrapperStyle>
                <FooterText>
                    View on{' '}
                    <a href="https://github.com/SkyLightQP/ChooseOne">
                        <FontAwesomeIcon icon={faGithub} />
                        GitHub
                    </a>
                </FooterText>
                <FooterText>
                    Icons made by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from <a href="https://www.flaticon.com/">www.flaticon.com</a>
                </FooterText>
                <FooterText>
                    Icons made by <a href="https://www.flaticon.com/authors/nhor-phai">Nhor Phai</a> from <a href="https://www.flaticon.com/">www.flaticon.com</a>
                </FooterText>
            </WrapperStyle>
        </Container>
    );
};

export default Footer;
