import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "styles/Home.scss";

function Home({ setMenu, setWho, setPFocus, setSFocus }: any): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setMenu(0);
      setWho(0);
      setPFocus(0);
      setSFocus(0);
      navigate(`/Developer`);
    }, 3000);
  }, []);

  return (
    <div className="home">
      <div>Moyeo</div>
    </div>
  );
}

export default Home;
