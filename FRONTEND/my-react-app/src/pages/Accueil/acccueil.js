import React from 'react';
import "../../pages/Accueil/accueil.css";
import FeatureItem from "../../components/Feature/featureItem"; // Correction ici
import iconChat from "../../designs/img/icon-chat.webp";
import iconMoney from "../../designs/img/icon-money.webp";
import iconSecurity from "../../designs/img/icon-security.webp";

/**
 * Composant pour la page d'accueil de l'application.
 * Affiche des informations promotionnelles et des fonctionnalités.
 * @returns {JSX.Element} Composant de la page d'accueil.
 */
function Accueil() {
    return (
        <main>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <FeatureItem
  imgSrc={iconChat}
  titre="You are our #1 priority"
  description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
  imgAlt="Chat Icon" 
/>
<FeatureItem
  imgSrc={iconMoney}
  titre="More savings means higher rates"
  description="The more you save with us, the higher your interest rate will be !"
  imgAlt="Money Icon" 
/>
<FeatureItem
  imgSrc={iconSecurity}
  titre="Security you can trust"
  description="We use top of the line encryption to make sure your data and money is always safe."
  imgAlt="Security Icon" 
/>
            </section>
        </main>
    );
}

export default Accueil;

