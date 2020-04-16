import { Layout } from '../components/Layout';
import { MenuButton } from '../components/HandburgerButton';


export default () => {
    return (
        <Layout>
            <MenuButton open={true} />
        </Layout>
    );
}

