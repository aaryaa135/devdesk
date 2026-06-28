import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthSuccess() {

  const navigate = useNavigate();

  useEffect(() => {

    const params = new URLSearchParams(window.location.search);

    const token = params.get("token");

    if (token) {

      localStorage.setItem("token", token);

      navigate("/", { replace: true });

    } else {

      navigate("/login", { replace: true });

    }

  }, [navigate]);

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <h1 className="text-3xl text-cyan-400 font-bold">
        Signing you in...
      </h1>

    </div>

  );

}

export default AuthSuccess;