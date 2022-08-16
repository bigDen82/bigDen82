import { NavLink } from "react-router-dom";
import HomeStyle from "./Home.module.css";
const Home = () => {
  return (
    <div className={HomeStyle.conteinerhome}>
      <div className={HomeStyle.text}>
        <h1>Добрый день!</h1>
        <h2>в сылках на страницы приведены примеры полукруга и аналоговых часов</h2>
      </div>
      <nav className={HomeStyle.nav}>
        <NavLink className={HomeStyle.navlinc} to="/Radius">Сircle</NavLink>
        <NavLink className={HomeStyle.navlinc} to="/appClock">Clock</NavLink>
      </nav>
    </div>
  );
};

export default Home;
