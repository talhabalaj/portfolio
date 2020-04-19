import styled from 'styled-components';
import { Section, SectionWatermarkClass, SectionWatermark } from './Section';
import Fade from 'react-reveal/Fade';
import { Button } from './Button';

const Projects = styled.div`

`;

const ProjectCard = styled.div`
    width: 100%;
    border-radius: 15px;
    box-shadow: ${props => props.theme.boxShadow};
    background: ${props => props.theme.colors.cardDarkBack};
    color: ${props => props.theme.colors.cardDarkText};
    padding: 10rem 3rem;
    display: flex;
    max-width: 110rem;
    justify-content: flex-end;
    font-size: 2.4rem;
    position:relative;

`;

const LaptopFramedProject = styled.div`
    position: absolute;
    left: -9rem;
    top: 50%;
    transform: translateY(-50%);
    width: 64rem;

    @media (max-width: 786px) {
        position: relative;
        left: 0;
        top: 0;
        transform: none;
        width: 44rem;
        margin-bottom: 5rem;
    }

    @media (max-width: 420px) {
        width: 35rem;
    }

    img {
        &:first-child {
            width: 100%;
        }
        &:last-child {
            width: 47rem;
            position: absolute;
            top: 3.7rem;
            left: 8.4rem;
            @media (max-width: 786px) {
                width: 32.4rem;
                top: 2.4rem;
                left: 5.8rem;
            }
            @media (max-width: 420px) {            
                width: 25.9rem;
                top: 2rem;
                left: 4.5rem;
            }
        }
    }
`;

const ProjectDescription = styled.div`
    width: 43%;

    p { font-size: 2.4rem; }

    @media (max-width: 420px) {  
        h2 { font-size: 4rem; }  
        h3 { font-size: 3.2rem; } 
    }
`;

const TechIcons = styled.div`
    margin: 1rem;
    display: inline-block;
    img {
        height: 5rem;
    }
 `;

const ProjectsContainer = styled(Section)`
    transform: translateY(-${props => props.theme.sectionTopPadding(3)});
    align-items: center;
    flex-wrap: wrap;
    z-index: 700;
    padding: calc(${props => props.theme.sectionTopPadding()} + 35rem) 10rem 22rem 10rem;
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);

    ${SectionWatermarkClass} {
        font-size: 20rem;
        top: calc(${props => props.theme.sectionTopPadding()} + 17rem);

        @media (max-width: 786px) { 
            font-size: 7rem;
        }
    }

    & > :not(:last-child) {margin-bottom: 4rem;}

    @media (max-width: 786px) {
        padding-left: 5rem;
        padding-top: calc(${props => props.theme.sectionTopPadding()} + 10rem);
        padding-right: 5rem;
        ${Projects} {
            flex-direction: column; 
        }
        ${ProjectCard} {
            max-width: 80rem;
            align-items: center;
            flex-direction: column;
            padding: 3rem;
           
            ${ProjectDescription} {
                width: unset;
                text-align: center;
               
            }
        }
    }

    @media (max-width: 420px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

`;



const AnimatedProjectCard = ({ project, description, imgSrc, techs }) => (
    <Fade bottom cascade>
        <ProjectCard>
            <LaptopFramedProject>
                <img src="/images/laptopframe.png" loading="lazy" />
                <img src={imgSrc} loading="lazy" />
            </LaptopFramedProject>
            <ProjectDescription>
                <h2>{project}</h2>
                <p>{description}</p>
                <h3>Technologies Used</h3>
                {techs.map(tech => <TechIcons><img key={tech} src={`/svg/${tech}.svg`} /></TechIcons>)}
            </ProjectDescription>
        </ProjectCard>
    </Fade >
);

const projects = [
    {
        project: 'My Portfolio',
        description: 'My portfolio is one of my best designs. It demonstrates my knowledge of React, NextJS and styled-components.',
        imgSrc: '/images/portfolio.png',
        techs: [
            "react",
            "nextjs",
            "styled-components",
            "figma",
        ]
    }
];

export const ProjectsSection = () => (
    <ProjectsContainer dark>
        <SectionWatermark>Projects</SectionWatermark>
        <Projects>
            {projects.map(project => <AnimatedProjectCard key={project.project} {...project} />)}
        </Projects>
        <Fade up>
            <a target="_blank" href="https://github.com/talhabalaj?tab=repositories">
                <Button>view more on github</Button>
            </a>
        </Fade>
    </ProjectsContainer >
);