import React from 'react';
import Header from '../Header/header'; 
import Footer from '../Footer/footer'; 

/**
 * Composant de mise en page (layout) de base de l'application.
 * Affiche un en-tête, le contenu principal (enfant), et un pied de page.
 * @param {Object} props - Les propriétés du composant.
 * @param {JSX.Element} props.children - Les éléments enfants à afficher dans le contenu principal.
 * @returns {JSX.Element} Composant de mise en page.
 */
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;

