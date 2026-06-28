import React, { useState } from "react";

function Login() {

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {

    setLoading(true);

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
          disabled={loading}
          className="
            w-full
            bg-cyan-500
            hover:bg-cyan-400
            disabled:bg-cyan-800
            disabled:cursor-not-allowed
            text-black
            py-3
            rounded-xl
            font-bold
            transition
          "
        >

          {loading
            ? "Connecting to Server..."
            : "Continue with GitHub"}

        </button>

        {loading && (

          <div className="mt-6">

            <div className="flex justify-center">

              <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

            </div>

            <p className="text-slate-400 text-sm mt-4">

              Starting backend...
              <br />
              This may take 30–60 seconds on the first visit.

            </p>

          </div>

        )}

      </div>

    </div>

  );

}

export default Login;