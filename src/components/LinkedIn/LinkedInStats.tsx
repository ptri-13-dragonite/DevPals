import React from 'react';

function LinkedInStats() {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </div>
        <div className="stat-title" style={{ fontFamily: 'Montserrat, sans-serif' }}>Connections this Month</div>
        <div className="stat-value text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>Num</div>
        <div className="stat-desc" style={{ fontFamily: 'Montserrat, sans-serif' }}>21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <div className="stat-title" style={{ fontFamily: 'Montserrat, sans-serif' }}>Most Recent Connection</div>
        <div className="stat-value text-secondary" style={{ fontFamily: 'Montserrat, sans-serif' }}>Date</div>
        <div className="stat-desc" style={{ fontFamily: 'Montserrat, sans-serif' }}>Connection Name</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
        <div className="stat-value" >86%</div>
        <div className="stat-title">Tasks done</div>
        <div className="stat-desc text-secondary">31 tasks remaining</div>
      </div>
    </div>
  );
}

export default LinkedInStats;
