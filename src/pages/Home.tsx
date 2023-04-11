import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "styles/Home.scss";

function Home(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(`/Developer`);
    }, 3000);
  }, []);

  return (
    <div className="home">
      <div>Hi</div>
    </div>
  );
}

export default Home;
