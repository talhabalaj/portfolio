import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";

const SuccessMessage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding: 2rem;
    text-align: center;
    font-size: 4rem;
    color: white;
    height: 100vh;
    font-weight: 700;
    & > :not(:last-child) { margin-bottom: 1rem;}
`;

export default function SuccessPage() {

    return (
        <Layout>
            <SuccessMessage>
                <span>Message sent successfully!</span>
                <a href="/">
                    <Button><i className="im im-angle-left"></i> Back</Button>
                </a>
            </SuccessMessage>
        </Layout>
    )
}