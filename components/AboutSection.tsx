import styled from 'styled-components';
import { Section, SectionWatermarkClass, SectionWatermark } from './Section';
import Bounce from 'react-reveal/Bounce';

const AboutMe = styled.div`
    p {
        font-size: 2.4rem;
        max-width: 52rem;
    }
`;

const AboutImage = styled.div`
    margin-right: 15rem;
    img {
        height: 40rem;
    }
`;

const AboutContainer = styled(Section)`
    transform: translateY(-${props => props.theme.sectionTopPadding(1)});
    flex-direction: row;
    z-index: 900;
    padding: calc(${props => props.theme.sectionTopPadding()} + 20rem) 12rem 22rem 10rem;
    justify-content: space-evenly;
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);

    ${SectionWatermarkClass} {
        top: calc(${props => props.theme.sectionTopPadding()});
    }

    @media (max-width: 786px) {
        flex-direction: column;
        align-items: center;
        padding-left:5rem;
        padding-top: calc(${props => props.theme.sectionTopPadding()} + 10rem);
        padding-right:5rem;
        ${AboutImage} {
            margin-right: 0;
            margin-bottom: 7rem;
        }

    }
`;



export const AboutSection = () => (
    <AboutContainer dark>
        <SectionWatermark>About</SectionWatermark>
        <Bounce left>
            <AboutImage>
                <img src="/images/my_pic.png" alt="Talha Balaj" />
            </AboutImage>
        </Bounce>
        <Bounce right>
            <AboutMe>
                <p>
                    I’m Lahore based <b>Full Stack JavaScript Developer</b>. I specialize in creating secure and solid web applications. I have been a web developer for last 4 years. I enjoy writing and experimenting with code.<br />
                    <br />
                I’m currently studying Bachelors of Computer Science from University of Engineering and Technology, expected to graduate in 2022.<br />
                    <br />
                In my free time, I like to play cricket, football and sometimes code for fun.<br />
                    <br />
                    <b>Say hi</b><br />
                    <a href='mailto:hey@talhabalaj.com'>hey@talhabalaj.com</a>
                </p>
            </AboutMe>
        </Bounce>
    </AboutContainer>
);