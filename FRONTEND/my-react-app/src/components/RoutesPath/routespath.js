import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../../components/Layout/layout";
import Accueil from "../../pages/Accueil/acccueil";
import Login from "../../pages/Login/login";
import Profil from "../../pages/UserProfil/userprofil";
import Logout from "../../pages/Logout/logout";
import Welcome from "../../pages/Welcome/welcome"
import Erreur404 from "../../pages/erreur404/erreur404";

/**
 * Composant de gestion des routes de l'application.
 * Utilise React Router pour définir les routes et associer les composants aux URL.
 * @returns {JSX.Element} Composant de gestion des routes.
 */
function RoutesPath() {
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    <Route element={<Accueil />} path="/" />
                    <Route path="/login" element={<Login />} />
                    <Route path="/userprofil" element={<Profil />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="*" element={<Erreur404 />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default RoutesPath;


