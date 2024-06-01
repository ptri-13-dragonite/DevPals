import React from 'react';

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <button type="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="User profile" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </button>
          <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a href="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>
                Parent
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li><a href="/link1">Link 1</a></li>
                <li><a href="/link2">Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
