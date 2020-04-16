import styled from 'styled-components';
import { Section, SectionWatermarkClass, SectionWatermark } from './Section';
import Fade from 'react-reveal/Fade';
import { Button } from './Button';

const ProjectsContainer = styled(Section)`
    transform: translateY(-${props => props.theme.sectionTopPadding(3)});
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 700;
    padding: calc(${props => props.theme.sectionTopPadding()} + 35rem) 10rem 22rem 10rem;
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);

    ${SectionWatermarkClass} {
        font-size: 20rem;
        top: calc(${props => props.theme.sectionTopPadding()} + 17rem);
    }

    & > :not(:last-child) {margin-bottom: 4rem;}

`;

const ProjectCard = styled.div`
    width: 100%;
    border-radius: 15px;
    box-shadow: ${props => props.theme.boxShadow};
    background: ${props => props.theme.colors.cardDarkBack};
    color: ${props => props.theme.colors.cardDarkText};
    padding: 10rem 3rem;
    display: flex;
    min-width: 800px;
    justify-content: flex-end;
    font-size: 2.4rem;
    position:relative;

`;

const LaptopFramedProject = styled.div`
    position: absolute;
    left: -9rem;
    top: 50%;
    transform: translateY(-50%);
    img {
        &:first-child {
            left: -2rem;
        }
        &:last-child {
            position:absolute;
            top: 37px;
            left: 84px;
        }
    }
`;

const ProjectDescription = styled.div`
    width: 43%;

    p { font-size: 2.4rem; }
`;

const TechIcons = styled.div`
    margin: 1rem;
    margin-left: 0;
    height: 50px;
    width: 80px;
    display: inline-block;
`;

const AnimatedProjectCard = ({ project, description, imgSrc, techs }) => (
    <Fade bottom cascade>
        <ProjectCard>
            <LaptopFramedProject>
                <img src="/images/laptopframe.png" />
                <img src={imgSrc} />
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

const Projects = [
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
        {Projects.map(project => <AnimatedProjectCard key={project.project} {...project} />)}
        <Fade up>
            <Button>view more on github</Button>
        </Fade>
    </ProjectsContainer >
);