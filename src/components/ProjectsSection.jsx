const PROJECTS = [
  { id: 'flofi', emoji: '🎹', name: 'FLOFI' },
  { id: 'workfolio', emoji: '📝', name: 'Workfolio' },
  { id: 'movie', emoji: '📺', name: 'Movie Web' },
];

export default function ProjectsSection({ onOpenModal }) {
  return (
    <section className="section-card projects-row">
      <div className="center">
        <span className="title-pill">📝 Projects</span>
      </div>
      <div className="project-grid">
        {PROJECTS.map(p => (
          <div key={p.id} className="project-square" onClick={() => onOpenModal(p.id)}>
            <span className="emoji">{p.emoji}</span>
            <div className="p-name">{p.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
