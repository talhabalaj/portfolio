import styled from "styled-components";

export const Button = styled.button`
    border: none;
    padding: 1.9rem 3rem;
    border-radius: 3rem;
    box-shadow: ${props => props.theme.boxShadow};
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textDark};
    font-size: 1.9rem;
    font-weight: bolder;
    text-transform: uppercase;
    transition: all .1s ease-out;
    outline: none;
    line-height: 1.9rem;
    vertical-align: middle;
    cursor: pointer;
    font-weight: 800;

    &:hover {
        filter: brightness(.9);
    }

    i {
        font-size: 1.4rem;
    }

    &:active {
        transform: translateY(2px);
        box-shadow: ${props => props.theme.pressedBoxShadow};
    }
`;