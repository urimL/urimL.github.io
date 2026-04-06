import { useState } from 'react';

const API_URL = 'http://localhost:8080/api/v1/profile/chat';

const CHIPS = [
  '기술 스택이 뭔가요?',
  '주요 프로젝트가 뭔가요?',
  '어떤 개발자인가요?',
  '백엔드 경험이 있나요?',
];

export default function AiSearch() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);

  async function askAI(q) {
    const asked = (q ?? input).trim();
    if (!asked) return;

    setInput(asked);
    setLoading(true);
    setError(false);
    setQuestion(asked);
    setAnswer('');
    setVisible(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: asked }),
      });
      if (!res.ok) throw new Error('서버 오류 ' + res.status);
      const data = await res.json();
      setAnswer(data.answer);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="ai-search-wrap">
      <p className="ai-search-label">✨ ASK ABOUT ME!</p>
      <p className="ai-search-desc">저를 소개하는 RAG 기반 AI 챗봇입니다. 기술 스택, 프로젝트, 경험 등 뭐든 물어보세요!</p>
      <div className="search-wrap">
        <span className="search-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          className="search-box"
          type="text"
          placeholder="어떤 프로젝트를 하셨나요?"
          maxLength={300}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') askAI(); }}
        />
        <button className="search-btn" onClick={() => askAI()} disabled={loading}>✦</button>
      </div>

      <div className="chips">
        {CHIPS.map(chip => (
          <button key={chip} className="chip" onClick={() => askAI(chip)}>{chip}</button>
        ))}
      </div>

      {visible && (
        <div className="answer-wrap visible" style={{ display: 'block' }}>
          <div className="question-echo"><strong>"{question}"</strong></div>
          <div className="answer-card">
            <div className="answer-header">
              <div className="ai-avatar">✦</div>
              <span className="ai-name">Answer</span>
            </div>
            {loading ? (
              <div className="answer-text">
                <div className="dots"><span /><span /><span /></div>
              </div>
            ) : (
              <div className={`answer-text${error ? ' error' : ''}`}>
                {error ? '오류가 발생했습니다. 백엔드 서버가 실행 중인지 확인해 주세요.' : answer}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
