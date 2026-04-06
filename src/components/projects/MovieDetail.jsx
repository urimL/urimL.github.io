export default function MovieDetail() {
  return (
    <div className="project-detail">
      <div className="project-name">📺 Movie Web</div>
      <div className="project-tagline">영화 산업 빅데이터 분석 및 시각화 플랫폼</div>

      <span className="wf-img">
        <img src="/resources/6.png" alt="main" />
      </span>

      <h4 className="section-title">📌 Overview</h4>
      <div className="contents">
        <div className="trouble-card">
          <ul className="role-list">
            <li>연도별, 분기별, 국가별 영화 산업 통계 데이터를 시각화하여 확인할 수 있습니다.</li>
            <li>감독 별, 장르별, 관객 수 등 다양한 필터링 검색 결과를 확인할 수 있습니다.</li>
            <li>사용자 맞춤형 마이페이지를 통해 선호 장르 및 '좋아요' 저장 기능을 제공합니다.</li>
          </ul>
        </div>
      </div>

      <h4 className="section-title">🛠 Tech Stack & 💡 Why</h4>
      <div className="contents">
        <div className="trouble-card">
          <p>
            <span className="tech-badge">PHP (SSR)</span>
            <span className="tech-description">
              <ul className="tech-list">
                <li>
                  <strong>서버 사이드 렌더링(SSR) 아키텍처 구현</strong><br />
                  <p className="tech-why">PHP 기반의 SSR 아키텍처를 채택하여 초기 렌더링 속도를 개선하고 검색 엔진 최적화의 기반 마련</p>
                </li>
              </ul>
            </span>
          </p>
          <hr />

          <p>
            <span className="tech-badge">MariaDB</span>
            <span className="tech-description">
              <ul className="tech-list">
                <li>
                  <strong>빅데이터 기반 쿼리 성능 최적화</strong><br />
                  <p className="tech-why">집계 함수 및 복합 조인 처리를 위해 성능이 우수한 MariaDB의 쿼리 옵티마이저 활용</p>
                </li>
              </ul>
            </span>
          </p>
        </div>
      </div>

      <h4 className="section-title">👨‍💻 Role & Contribution</h4>
      <div className="trouble-card">
        <ul className="role-list">
          <li>
            <strong>DB 스키마 설계 및 데이터 무결성 확보</strong>
            <p className="tech-why">ERD 설계 및 외래키 제약 조건 통한 데이터 무결성 확보</p>
          </li>
          <li>
            <strong>고급 쿼리 로직 구현 및 SQL 최적화</strong>
            <p className="tech-why">Roll-up, window 함수 활용한 통계 산출 및 필터링 기능 구현</p>
          </li>
          <li>
            <strong>사용자 정보 관리 기능 구현</strong>
            <p className="tech-why">PHP 세션을 활용한 로그인 및 사용자별 선호 장르, 영화 '좋아요' 목록 등 개인화 데이터 관리 기능 개발</p>
          </li>
          <li>
            <strong>SSR 기반 데이터 시각화 페이지 개발</strong>
            <p className="tech-why">서버 사이드 렌더링 방식으로 DB에서 가공된 통계 데이터 시각화</p>
          </li>
        </ul>
      </div>

      <h4 className="section-title">🚨 Trouble Shooting</h4>
      <div className="trouble-card">
        <strong>트랜잭션 도입을 통한 데이터 일관성 보장</strong><br />
        <div>
          <span className="status-label label-problem">Problem</span>
          선호 장르 수정 등 복합 업데이트 시 일부만 반영되어 데이터 불일치 발생 가능성 존재
        </div>
        <div>
          <span className="status-label label-solve">Solve</span>
          mysqli_begin_transaction을 적용하여 모든 쿼리 성공 시에만 Commit되도록 설계
        </div>
      </div>
    </div>
  );
}
