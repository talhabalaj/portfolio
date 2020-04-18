import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { useRouter } from "next/dist/client/router";

const SuccessMessage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding: 2rem;
    text-align: center;
    font-size: 4rem;
    height: 100vh;
    font-weight: 700;
    & > :not(:last-child) { margin-bottom: 1rem;}
`;

export default function SuccessPage() {
    const router = useRouter();
    return (
        <Layout>
            <SuccessMessage>
                <span>Message sent successfully!</span>
                <Button onClick={() => router.push('/')}><i className="im im-angle-left"></i> Back</Button>
            </SuccessMessage>
        </Layout>
    )
}