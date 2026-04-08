import { useState, useEffect } from 'react';
import AiSearch from './components/AiSearch';
import AboutCard from './components/AboutCard';
import EducationCard from './components/EducationCard';
import ProjectsSection from './components/ProjectsSection';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [modalProject, setModalProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = modalProject ? 'hidden' : 'auto';
  }, [modalProject]);

  return (
    <div className="container">
      <AiSearch />
      <div className="top-container">
        <AboutCard />
        <EducationCard />
        <ProjectsSection onOpenModal={setModalProject} />
      </div>
      {modalProject && (
        <ProjectModal projectId={modalProject} onClose={() => setModalProject(null)} />
      )}
    </div>
  );
}
