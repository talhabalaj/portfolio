import styled from 'styled-components';
import { Section, SectionWatermarkClass, SectionWatermark } from './Section';
import Fade from 'react-reveal/Fade';
import { Button } from './Button';


const SkillsContainer = styled(Section)`
    transform: translateY(-${props => props.theme.sectionTopPadding(2)});
    z-index: 800;
    padding: calc(${props => props.theme.sectionTopPadding()} + 35rem) 3rem 22rem 3rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);

    ${SectionWatermarkClass} {
        top: calc(${props => props.theme.sectionTopPadding()} + 12rem);
    }
`;

export const Skills = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: 15px;
    background: ${props => props.theme.colors.cardLightBack};
    color: ${props => props.theme.colors.cardLightText};
    text-align: center; 
    padding: 4.5rem;
    margin: 1.5rem;

    width: 37.5rem;
    height: 52.0rem;

    img {
        height: 16.6rem;
    }

    h3, h4 {
        text-transform: uppercase;
        margin: 2rem 0 0.5rem 0;
    }
        
    h3 {
        font-size: 3.4rem;
        font-weight: 800;
    }
    p, ul {
        font-size: 1.7rem;
        line-height: 140%;
    }
    h4 {
        font-size: 2.1rem;
    }
    ul {
        list-style-type: none;
    }
`;

const SkillCard = ({ skill, description, imgSrc, techs }) => (
    <Fade bottom cascade>
        <Card>
            <img src={imgSrc} />
            <h3>{skill}</h3>
            <p>{description}</p>
            <h4>Technologies</h4>
            <ul>
                {techs.map(tech => <li key={tech}>{tech}</li>)}
            </ul>
        </Card>
    </Fade>
);

const skills = [
    {
        skill: 'Frontend',
        description: 'I create beautiful, elegant UIs with great performance.',
        imgSrc: '/svg/frontend.svg',
        techs: [
            "React",
            "Redux",
            "HTML5",
            "SCSS",
            "TypeScript",
        ]
    },
    {
        skill: 'Backend',
        description: 'I create solid and secure backends with best practices.',
        imgSrc: '/svg/backend.svg',
        techs: [
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "TypeScript",
        ]
    },
    {
        skill: 'Mobile App',
        description: 'I create cross-platform hybrid apps for iOS/Android.',
        imgSrc: '/svg/mobile.svg',
        techs: [
            "Flutter",
            "React Native (familiar)",
        ]
    },
    {
        skill: 'Collaborate',
        description: 'I find collaboration very important while working.',
        imgSrc: '/svg/collaborate.svg',
        techs: [
            "Git & GitHub",
            "Apache Subversion (familiar)",
        ]
    },
    {
        skill: 'Deployment',
        description: 'I deploy my applications as microservices to modern cloud.',
        imgSrc: '/svg/travis.svg',
        techs: [
            "Travis CI",
            "Docker & Docker Compose",
            "Kubernetes (familiar)",
            "GCP, Netlify, Zeit Now, Heroku"
        ]
    }
];

export const SkillsSection = () => (
    <SkillsContainer dark={false}>
        <SectionWatermark>Skills</SectionWatermark>
        <Skills>
            {skills.map(skill => <SkillCard key={skill.skill} {...skill} />)}
        </Skills>
    </SkillsContainer >
);