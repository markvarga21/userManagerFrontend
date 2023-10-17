import React from "react";

const LogoutButton = ({ handleLogout }) => {
  return (
    <div className="mr-3">
      <button onClick={handleLogout}>
        <svg
          transform="scale(-1)"
          width="65px"
          height="65px"
          fill="#1C274C"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m16.125 12c0-0.4142-0.3358-0.75-0.75-0.75h-10.973l1.9606-1.6806c0.3145-0.26956 0.35092-0.74304 0.08135-1.0575-0.26956-0.3145-0.74304-0.35092-1.0575-0.08135l-3.5 3c-0.16624 0.1424-0.26191 0.3505-0.26191 0.5694s0.09567 0.427 0.26191 0.5694l3.5 3c0.31449 0.2696 0.78797 0.2332 1.0575-0.0813 0.26957-0.3145 0.23315-0.788-0.08135-1.0575l-1.9606-1.6806h10.973c0.4142 0 0.75-0.3358 0.75-0.75z" />
          <path d="m9.375 8c0 0.70219 0 1.0533 0.16851 1.3055 0.07297 0.10921 0.16674 0.20298 0.27595 0.27595 0.25224 0.16851 0.60334 0.16851 1.3055 0.16851h4.25c1.2426 0 2.25 1.0073 2.25 2.25 0 1.2426-1.0074 2.25-2.25 2.25h-4.25c-0.7022 0-1.0534 0-1.3056 0.1685-0.10917 0.073-0.2029 0.1667-0.27585 0.2759-0.16855 0.2522-0.16855 0.6033-0.16855 1.3056 0 2.8284 0 4.2426 0.8787 5.1213s2.2927 0.8787 5.1211 0.8787h1c2.8284 0 4.2426 0 5.1213-0.8787s0.8787-2.2929 0.8787-5.1213v-8c0-2.8284 0-4.2426-0.8787-5.1213s-2.2929-0.87868-5.1213-0.87868h-1c-2.8284 0-4.2424 0-5.1211 0.87868s-0.8787 2.2929-0.8787 5.1213z" />
        </svg>
      </button>
    </div>
  );
};

export default LogoutButton;
