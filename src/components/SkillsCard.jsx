export default function SkillsCard() {
  return (
    <section className="section-card skills-card">
      <div className="center">
        <span className="title-pill">🛠 Skills</span>
      </div>
      <div className="skills-list">
        <div className="skill-category">
          <h4>Language</h4>
          <div className="badge-group">
            <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
            <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
          </div>
        </div>
        <div className="skill-category">
          <h4>Framework</h4>
          <div className="badge-group">
            <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
            <img src="https://img.shields.io/badge/Flask-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Flask" />
          </div>
        </div>
        <div className="skill-category">
          <h4>Database</h4>
          <div className="badge-group">
            <img src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
            <img src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
          </div>
        </div>
        <div className="skill-category">
          <h4>Tools / Etc</h4>
          <div className="badge-group">
            <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white" alt="Github" />
            <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" alt="Slack" />
          </div>
        </div>
      </div>
    </section>
  );
}
