import "./ErrorPage.css";
import { NavLink } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className="errorPage">
      <h1>404</h1>
      <p>Page not found</p>
      <NavLink className={"errPg__link"} to={"/"}>
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}
