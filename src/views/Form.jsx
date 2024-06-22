import DragNDrop from "../components/DragNDrop";
import './Form.css'

export default function Form() {
  return (
    <div className="container">
    <h2>Veulliez importer votre fichier</h2>
   <p> Veuillez importer vos fichiers en les glissant dans la zone ci-dessus ou en cliquant pour sélectionner des fichiers.
        Les fichiers supportés sont : images (jpg, png), PDF, et DOC.
   </p>
    <div className="card_export"><DragNDrop /></div>
  </div> 
    
  )
}
