import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="container">
      <h1>Automatisation Comptable avec IA</h1>
      <p className="description">
        Bienvenue sur notre plateforme d'automatisation comptable. Vous pouvez importer vos fichiers (images, PDF, DOC) pour extraire automatiquement les écritures comptables.
      </p>
      
      <p className="instructions">
        L'objectif principal de cette solution d'automatisation comptable est de simplifier et d'accélérer le 
        processus de gestion des écritures comptables en utilisant l'intelligence artificielle (IA). 
        En permettant aux utilisateurs d'importer divers types de fichiers (images, PDF, DOC), cette plateforme peut automatiquement extraire les données comptables pertinentes et générer des écritures comptables précises. Cela élimine la nécessité de saisies manuelles fastidieuses, réduisant ainsi le risque d'erreurs humaines et libérant du temps pour se concentrer sur des tâches à plus forte valeur ajoutée. De plus, 
        l'automatisation facilite une mise à jour en temps réel des registres comptables, 
        améliore la précision des rapports financiers et permet une meilleure conformité aux normes comptables. 
        En somme, cette solution apporte une efficacité accrue,
        une réduction des coûts opérationnels et une amélioration significative de la qualité des processus comptables pour les entreprises de toutes tailles.
      </p>

      <div className="additional-options">
        <h2>Fonctionnalités</h2>
        <ul>
          <li>Importer les fichier et les ecriture comptable seront automatiquement Extrait</li>
        </ul>
      </div>
    </div>
  );
}
