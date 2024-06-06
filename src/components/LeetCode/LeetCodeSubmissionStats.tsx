import React from 'react';

function LeetCodeSubmissionStats() {
  return (
    <div className="stats shadow">

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
        </div>
        <div className="stat-title" style={{ fontFamily: 'Montserrat, sans-serif' }}>Submissions this month</div>
        <div className="stat-value" style={{ fontFamily: 'Montserrat, sans-serif' }}>Num</div>
        <div className="stat-desc" style={{ fontFamily: 'Montserrat, sans-serif' }}>Jan 1st - Feb 1st</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <div className="stat-title" style={{ fontFamily: 'Montserrat, sans-serif' }}>Last Submission</div>
        <div className="stat-value" style={{ fontFamily: 'Montserrat, sans-serif' }}>Date</div>
        <div className="stat-desc" style={{ fontFamily: 'Montserrat, sans-serif' }}>Problem</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
          </svg>
        </div>
        <div className="stat-title" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ranking</div>
        <div className="stat-value" style={{ fontFamily: 'Montserrat, sans-serif' }}>Num</div>
        <div className="stat-desc" style={{ fontFamily: 'Montserrat, sans-serif' }}>↘︎ 90 (14%)</div>
      </div>

    </div>
  );
}

export default LeetCodeSubmissionStats;
