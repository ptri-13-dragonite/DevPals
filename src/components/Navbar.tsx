import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="join">
        <Link href="/dashboard">
          <input className="join-item btn" type="radio" name="options" aria-label="Dashboard" />
        </Link>
        <Link href="/pal">
          <input className="join-item btn" type="radio" name="options" aria-label="DevPal" />
        </Link>
      </div>
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-3 gap-2">
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
      </div>
    </div>
  );
}

export default Navbar;
