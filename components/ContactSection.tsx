import styled from 'styled-components';
import { Section, SectionWatermarkClass, SectionWatermark } from './Section';
import Bounce from 'react-reveal/Bounce';
import { Button } from './Button';

const ContactContainer = styled(Section)`
    transform: translateY(-${props => props.theme.sectionTopPadding(4)});
    flex-direction: row;
    z-index: 600;
    padding: calc(${props => props.theme.sectionTopPadding()} + 20rem) 10rem 22rem 10rem;
    justify-content: space-between;
    ${SectionWatermarkClass} {
        top: calc(${props => props.theme.sectionTopPadding()} + 2rem);
        font-size: 20.5rem;

        @media (max-width: 786px) {
            font-size: 7rem;   
        }
    }

    @media (max-width: 786px) {
        flex-direction: column;
        padding-left: 5rem;
        padding-top: calc(${props => props.theme.sectionTopPadding()} + 10rem);
        padding-right: 5rem;
    }
`;

const ContactForm = styled.form`
    margin-left: 20rem;
    display: flex;
    flex-direction: column;
    & > :not(:last-child) {
        margin-bottom: 2.1rem;
    }
    @media (max-width: 786px) {
        align-items: center;
        margin-left: 0rem;
        margin-top: 5rem;
    }
`;


const InputField = styled.input`
    display: block;
    width: 38rem;
    height: 6rem;
    background: #DFDFDF;
    border: none;
    outline: none;
    padding: 1.8rem 1.3rem;
    border-bottom: .3rem solid transparent;
    box-shadow: ${props => props.theme.innerShadow};
    font-size: 1.9rem;
    color: ${props => props.theme.colors.textDark};
    &:focus {
        border-color: ${props => props.theme.colors.primary};
    }
    @media (max-width: 786px) {
        width: 100%;
    }
`;

const TextField = styled.textarea`
    width: 38rem;
    height: 17rem;
    padding: 1.8rem 1.3rem;
    font-size: 1.9rem;
    background: #DFDFDF;
    outline: none;
    display: block;
    border: none;
    box-shadow: ${props => props.theme.innerShadow};
    color: ${props => props.theme.colors.textDark};
    @media (max-width: 786px) {
        width: 100%;
    }
`;

const ContactInvite = styled.div`
    font-size: 4.8rem;
    max-width: 65rem;
    @media (max-width: 786px) {
        font-size: 3.5rem;
        max-width: unset;
        width: 100%;
    }
`;



export const ContactSection = () => (
    <ContactContainer dark={false} >
        <SectionWatermark>Contact</SectionWatermark>
        <Bounce left>
            <ContactInvite>
                Feel free to contact me, Let’s talk about your project.
            </ContactInvite>
        </Bounce>
        <Bounce right>
            <ContactForm id="contact" name="contact" data-netlify="true" action="/success">
                <input type="hidden" name="form-name" value="contact" />
                <InputField name="name" placeholder="Name" required />
                <InputField name="email" type="email" placeholder="Email" required />
                <TextField name="message" placeholder="Message" required />
                <div style={{ textAlign: 'center' }}><Button>Send Message</Button></div>
            </ContactForm>
        </Bounce>
    </ContactContainer>
);