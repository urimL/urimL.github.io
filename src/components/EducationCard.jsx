export default function EducationCard() {
  return (
    <section className="section-card education-card">
      <div className="center">
        <span className="title-pill">🎓 Education</span>
      </div>
      <div className="edu-list">
        <div className="edu-item">
          <div className="edu-period">2015.03 - 2018.02</div>
          <div className="edu-school">경남외국어고등학교</div>
        </div>
        <div className="edu-item">
          <div className="edu-period">2019.03 - 2024.08</div>
          <div className="edu-school">이화여자대학교</div>
          <div className="edu-major">컴퓨터공학과</div>
        </div>
        <div className="edu-item">
          <div className="edu-period">2025.12 - 2026.06</div>
          <div className="edu-school">우리FIS 아카데미</div>
          <div className="edu-major">클라우드 서비스 개발</div>
        </div>
      </div>
    </section>
  );
}
