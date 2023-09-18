import React from 'react';
import PropTypes from 'prop-types'; // Import de PropTypes depuis la bibliothèque prop-types
import '../../components/Feature/feature.css';

/**
 * Composant représentant un élément de fonctionnalité.
 * @param {Object} props - Les propriétés de l'élément de fonctionnalité.
 * @param {string} props.imgSrc - L'URL de la source de l'image.
 * @param {string} props.imgAlt - Le texte alternatif de l'image.
 * @param {string} props.titre - Le titre de l'élément de fonctionnalité.
 * @param {string} props.description - La description de l'élément de fonctionnalité.
 * @returns {JSX.Element} Composant de l'élément de fonctionnalité.
 */
function FeatureItem({ imgSrc, imgAlt, titre, description }) {
    return (
        <div className="feature-item">
            <img src={imgSrc} alt={imgAlt} className="feature-icon" />
            <h3 className="feature-item-title">{titre}</h3>
            <p>
                {description}
            </p>
        </div>
    );
}

// Spécification des PropTypes pour le composant FeatureItem
FeatureItem.propTypes = {
    imgSrc: PropTypes.string.isRequired, // imgSrc doit être une chaîne non vide (required)
    imgAlt: PropTypes.string.isRequired, // imgAlt doit être une chaîne non vide (required)
    titre: PropTypes.string.isRequired, // titre doit être une chaîne non vide (required)
    description: PropTypes.string.isRequired, // description doit être une chaîne non vide (required)
};

export default FeatureItem;
