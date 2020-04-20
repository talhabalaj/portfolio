import React from 'react';
import { Button } from "./Button";
import styled from "styled-components";
import { Section } from './Section';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const SocialLink = styled.a`
  color: ${props => props.theme.colors.textDark};
  i { 
    font-size: 3.5rem;
    transition: all .25s ease-in-out;
  }
  &:hover{
    i { 
      transform: scale(1.1); 
    }
    .im-github { color: #6e5494; };
    .im-instagram { color: #c13584; };
    .im-linkedin { color: #0077b5; };
    .im-code { color: #fb4881; };
  }
  &:not(:last-child) {
    margin-right: 2.5rem;
  }
`;

const Profile = styled.div`
  z-index: 10;
  padding: 0 2rem;

  & > :not(:last-child) {
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 7.4rem;
    color: ${props => props.theme.colors.textDark};
    div {
      display: block;
      &:nth-child(1) {
        color: ${props => props.theme.colors.primary};
        font-weight: 900;
        text-transform: uppercase;
      }
      &:nth-child(2) {
        font-size: 2.7rem;
        font-weight: 500;
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
          <Fade down>Talha Balaj</Fade>
          <Fade up>Full Stack JavaScript Developer</Fade>
        </h1>
        <Fade left>
          <SocialLinkList >
            <SocialLink target="_blank" href="https://www.linkedin.com/in/talha-balaj-20a353101/"><i className="im im-linkedin"></i></SocialLink>
            <SocialLink target="_blank" href="https://github.com/talhabalaj"><i className="im im-github"></i></SocialLink>
            <SocialLink target="_blank" href="https://instagram.com/talha.codes"><i className="im im-instagram"></i></SocialLink>
            <SocialLink target="_blank" href="https://dev.to/talhabalaj"><i className="im im-code"></i></SocialLink>
          </SocialLinkList>
        </Fade>
        <Fade right>
          <Link href="#contact">
            <Button>
              Contact Me
            </Button>
          </Link>
        </Fade>
      </Profile>
    </IntroContainer>
  </>
)
