import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const WelcomeMSG = () => {

    const { user } = useContext(AuthContext);

  return (
    <>
      <div className="bg-orange-400/75 text-cyan-950 p-1">
        <Marquee pauseOnHover={true} speed={150} className="font-medium">
          <Link className="mr-5" to="/learning">
            Hi! {user && user?.displayName}, Welcome to our language learning platform. {" "}
          </Link>
          <Link className="mr-5" to="/learning">
            Hi! {user && user?.displayName}, Welcome to our language learning platform. {" "}
          </Link>
          <Link className="mr-5" to="/learning">
            Hi! {user && user?.displayName}, Welcome to our language learning platform. {" "}
          </Link>
          <Link className="mr-5" to="/learning">
            Hi! {user && user?.displayName}, Welcome to our language learning platform. {" "}
          </Link>
        </Marquee>
      </div>
    </>
  );
};

export default WelcomeMSG;
