export default function AboutCard() {
  return (
    <section className="section-card about-card">
      <div className="center">
        <span className="title-pill">🚀 About Me</span>
      </div>
      <div className="about-inner">
        <div className="center">
          <h3 className="name-text">Lee Yu Rim</h3>
          <div className="boj-badge">
            <a href="https://solved.ac/toulim0620" target="_blank" rel="noreferrer">
              <img src="http://mazassumnida.wtf/api/v2/generate_badge?boj=toulim0620" alt="Boj Badge" />
            </a>
          </div>
          <div className="badge-group">
            <a href="https://toulim0525.tistory.com/" target="_blank" rel="noreferrer">
              <img
                src="https://img.shields.io/badge/Tistory-Blog-FFA500?style=for-the-badge&logo=Blog&logoColor=white"
                alt="Tistory Blog"
              />
            </a>
          </div>
        </div>
        <blockquote>
          🌏 <strong>사람들에게 긍정적인 영향을 주고 싶습니다.</strong><br />
          🌟 <strong>오류 해결에서 성취감을 느낍니다.</strong><br />
          🌱 <strong>소통하며 함께 성장하고 싶습니다.</strong>
        </blockquote>
      </div>
    </section>
  );
}
