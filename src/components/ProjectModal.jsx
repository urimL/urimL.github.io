import { useEffect } from 'react';
import FlofiDetail from './projects/FlofiDetail';
import WorkfolioDetail from './projects/WorkfolioDetail';
import MovieDetail from './projects/MovieDetail';

const DETAIL_MAP = {
  flofi: <FlofiDetail />,
  workfolio: <WorkfolioDetail />,
  movie: <MovieDetail />,
};

export default function ProjectModal({ projectId, onClose }) {
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className="modal"
      style={{ display: 'block' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <div>{DETAIL_MAP[projectId]}</div>
      </div>
    </div>
  );
}
