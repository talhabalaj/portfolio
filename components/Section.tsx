import React from 'react';
import styled, { keyframes } from "styled-components";
import Reveal from 'react-reveal/Reveal';
import withReveal from 'react-reveal/withReveal';

export const SectionWatermarkClass = styled.div`
`;

export const SectionWatermarkWithoutAnimation =
    ({ children, innerRef }) => (
        <SectionWatermarkClass ref={innerRef}>
            {children}
        </SectionWatermarkClass>
    );

export const SectionWatermark = withReveal(SectionWatermarkWithoutAnimation, <Reveal refProp="innerRef" effect="riseUpAbsolute" />);

const Section = styled.section<{ dark: boolean }>`
    display: flex;
    position: relative;
    flex-direction: column;
    background: ${props => props.dark ? props.theme.colors.backDark : props.theme.colors.backLight};
    color: ${props => props.dark ? props.theme.colors.textLight : props.theme.colors.textDark};
    max-width: 2560px;
    overflow: hidden;

    ${SectionWatermarkClass} {
        opacity: 1;
        position: absolute;
        font-size: 28.8rem;
        text-transform: uppercase;
        z-index: -1;
        font-weight: 800;
        left: 50%;
        transform: translateX(-50%);
        color: ${props => props.dark ? props.theme.colors.watermarkDark : props.theme.colors.watermarkLight};
        @media (max-width: 786px) {
            position: static;
            transform: none;
            z-index: unset;
            font-size: 7rem;
            margin-bottom: 5rem;    
            text-align:center;
            color: ${props => props.dark ? props.theme.colors.textLight : props.theme.colors.textDark};
        }
    }

`;

Section.defaultProps = { dark: false };

export { Section };