import React from 'react';

function OauthButtons() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <button type="button" className="btn btn-wide bg-base-100 font-montserrat">Connect with GitHub</button>
      <button type="button" className="btn btn-wide bg-base-100 font-montserrat">Connect with LinkedIn</button>
      <button type="button" className="btn btn-wide bg-base-100 font-montserrat">Connect with LeetCode</button>
    </div>
  );
}

export default OauthButtons;
