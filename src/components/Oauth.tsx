import React from 'react';

function OauthButtons() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <button type="button" className="btn btn-wide">Connect with GitHub</button>
      <button type="button" className="btn btn-wide">Connect with LinkedIn</button>
      <button type="button" className="btn btn-wide">Connect with LeetCode</button>
    </div>
  );
}

export default OauthButtons;
