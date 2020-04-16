import { Layout } from '../components/Layout';
import { IntroSection } from '../components/IntroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';

export default function IndexPage() {
  return (
    <Layout>
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </Layout>
  );
}