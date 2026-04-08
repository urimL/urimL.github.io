const PROJECTS = [
  { id: 'flofi', emoji: '🎹', name: 'FLOFI', desc: '음악 스타일 체인지 서비스' },
  { id: 'workfolio', emoji: '📝', name: 'Workfolio', desc: '취준생을 위한 통합 플랫폼' },
  { id: 'movie', emoji: '📺', name: 'Movie Web', desc: '영화 관련 빅데이터 분석 서비스' },
];

export default function ProjectsSection({ onOpenModal }) {
  return (
    <section className="section-card projects-row">
      <div className="center">
        <span className="title-pill">📝 Projects</span>
      </div>
      <div className="project-grid">
        {PROJECTS.map(p => (
          <div key={p.id} className="project-square-wrap">
            <div className="project-square" onClick={() => onOpenModal(p.id)}>
              <span className="emoji">{p.emoji}</span>
              <div className="p-name">{p.name}</div>
            </div>
            <div className="p-tooltip">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
