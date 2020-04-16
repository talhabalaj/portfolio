import styled from "styled-components";

export const Button = styled.button`
    border: none;
    padding: 1.9rem 3rem;
    border-radius: 3rem;
    box-shadow: ${props => props.theme.boxShadow};
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textDark};
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 1.9rem;
    transition: all .1s ease-out;
    outline: none;
    cursor: pointer;

    &:hover {
        filter: brightness(.9);
    }

    &:active {
        transform: translateY(2px);
        box-shadow: ${props => props.theme.pressedBoxShadow};
    }
`;