import { Layout } from '../components/Layout';
import { IntroSection } from '../components/IntroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';
import styled from 'styled-components';

const Footer = styled.footer`
  display:flex;
  justify-content: space-between;
  background: ${props => props.theme.colors.primary};
  color: rgba(0,0,0,0.7);
  align-items: baseline;
  padding: 5rem 3rem;
  font-size: 2.3rem;

  h3 {
    font-size: 4.8rem;
  }
`;

export default function IndexPage() {
  return (
    <Layout>
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer>
        <div>
          <h3>Talha Balaj</h3>
        </div>
        <div>
          &copy; Made my me. Icons by Icon8
            </div>
      </Footer>
    </Layout>
  );
}