import React, { useState } from "react";

function Login() {

  const [loading, setLoading] = useState(false);

  const backend = "https://devdesk-oefw.onrender.com";

  const handleLogin = async () => {

    setLoading(true);

    const start = Date.now();

    while (Date.now() - start < 30000) {

      try {

        const res = await fetch(`${backend}/health`);

        if (res.ok) {

          window.location.href =
            `${backend}/auth/github/login`;

          return;

        }

      }

      catch (e) {}

      await new Promise(resolve =>
        setTimeout(resolve, 1500)
      );

    }

    alert(
      "Backend is taking longer than expected. Please try again."
    );

    setLoading(false);

  };

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-900 p-10 rounded-2xl text-center w-[440px]">

        <h1 className="text-5xl font-bold text-cyan-400 mb-5">

          DevDesk

        </h1>

        <p className="text-slate-300 mb-8">

          Sign in with GitHub to access your personalized developer dashboard.

        </p>

        {

          loading ? (

            <div>

              <div
                className="
                  w-12
                  h-12
                  border-4
                  border-cyan-500
                  border-t-transparent
                  rounded-full
                  animate-spin
                  mx-auto
                "
              />

              <p className="text-slate-300 mt-6">

                Connecting to GitHub...

              </p>

              <p className="text-slate-500 text-sm mt-2">

                Waking up the backend (first request may take 20–40 seconds).

              </p>

            </div>

          ) : (

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

          )

        }

      </div>

    </div>

  );

}

export default Login;