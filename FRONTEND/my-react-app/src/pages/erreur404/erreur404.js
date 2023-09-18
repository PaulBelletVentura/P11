import React from 'react';
import "../../pages/erreur404/erreur404.css";
import { NavLink } from "react-router-dom";

/**
 * Composant pour la page d'erreur 404 (Page non trouvée).
 * Affiche un message d'erreur et un bouton pour revenir à la page d'accueil.
 * @returns {JSX.Element} Composant de la page d'erreur 404.
 */
function Erreur404() {
    return(
        <main className="bg-dark">
            <section className="erreur-404">
                <h1>Error 404</h1>
                <NavLink to="/" className="link-btn-404">
                    <button className="btn-404">Back to the homepage</button>
                </NavLink>
            </section>
        </main>
    );
}

export default Erreur404;
