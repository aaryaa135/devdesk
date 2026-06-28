import React from "react";

function Login() {

  const handleLogin = () => {

    window.location.href =
      "https://devdesk-oefw.onrender.com/auth/github/login";

  };

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-900 p-10 rounded-2xl text-center w-[420px]">

        <h1 className="text-4xl font-bold text-cyan-400 mb-4">
          DevDesk
        </h1>

        <p className="text-slate-300 mb-8">
          Sign in with GitHub to access your personal dashboard.
        </p>

        <button
          onClick={handleLogin}
          className="
            w-full
            bg-cyan-500
            hover:bg-cyan-400
            text-black
            py-3
            rounded-xl
            font-bold
            transition
          "
        >
          Continue with GitHub
        </button>

      </div>

    </div>

  );

}

export default Login;