import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
function Navbar({ profile }) {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <nav className="bg-slate-900 border-b border-slate-800">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-cyan-400">
          DevDesk
        </h1>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">

            <Link
              to="/"
              className="
                text-slate-300
                hover:text-cyan-400
                transition
                font-medium
              "
            >
              Dashboard
            </Link>

            <Link
              to="/opportunities"
              className="
                text-slate-300
                hover:text-cyan-400
                transition
                font-medium
              "
            >
              Opportunities
            </Link>

          </div>
          <img
            src={profile.avatar_url}
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-cyan-400"
          />

          <div>

            <p className="text-white font-semibold">
              {profile.name}
            </p>

            <p className="text-slate-400 text-sm">
              @{profile.username}
            </p>

          </div>

          <button
            onClick={handleLogout}
            className="
              bg-red-500
              hover:bg-red-600
              text-white
              px-4
              py-2
              rounded-lg
              transition
            "
          >
            Logout
          </button>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;