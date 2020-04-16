import React from 'react';
import { Button } from "./Button";
import styled from "styled-components";
import { Section } from './Section';
import Fade from 'react-reveal/Fade';

const SocialLink = styled.a`
  &:not(:last-child) {
    margin-right: 2.5rem;
  }
`;

const Profile = styled.div`
  z-index: 10;

  & > :not(:last-child) {
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 6.4rem;
    color: ${props => props.theme.colors.textDark};
    div {
      display: block;
      &:nth-child(2) {
        font-size: 2.4rem;
        font-weight: normal;
      }
    }
  }
`

const SocialLinkList = styled.ul`
  display: block;
`;

const HeaderWarkmark = styled.div`
`;

const IntroContainer = styled(Section)`
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  z-index: 1000;

  ${HeaderWarkmark} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 28.8rem;
    font-weight: 900;
    text-transform: uppercase;
    color: #E5E5E5;
    text-align:left;
    line-height: 82.5%;
  }
`;


export const IntroSection = () => (
  <>
    <IntroContainer dark={false}>
      <HeaderWarkmark>Code<br />Design</HeaderWarkmark>
      <Profile>
        <h1>
          <Fade down>I'm Talha Balaj</Fade>
          <Fade up>Full Stack JavaScript Developer</Fade>
        </h1>
        <Fade left>
          <SocialLinkList >
            <SocialLink href="https://linkedin.com"><img src="/svg/LinkedInLogo.svg" alt="linkedin logo" /> </SocialLink>
            <SocialLink href="https://github.com/talhabalaj"><img src="/svg/GitHubLogo.svg" alt="github logo" /> </SocialLink>
            <SocialLink href="https://instagram.com/talha.codes"><img src="/svg/InstaLogo.svg" alt="Insta logo" /> </SocialLink>
          </SocialLinkList>
        </Fade>
        <Fade right>
          <Button>
            Contact Me
          </Button>
        </Fade>
      </Profile>
    </IntroContainer>
  </>
)