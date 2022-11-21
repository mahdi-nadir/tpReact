import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import './DetailBiere.css';

export default function DetailBiere(props) {
    const [rating, setRating] = useState(0);

    const params = useParams();

    const handleRating = (rate) => { // reference: https://github.com/awran5/react-simple-star-rating
        setRating(rate);
    }


    const biereUrl = `http://127.0.0.1:8000/webservice/php/biere/${params.id}`,
        commentaireUrl = `${biereUrl}/commentaire`,
        noteUrl = `${biereUrl}/note`;


    const [biere, setBiere] = useState({}),
        [commentaires, setCommentaires] = useState([]),
        [note, setNote] = useState(0);

    useEffect(() => {
        fetch(biereUrl)
            .then(response => response.json())
            .then((donnees) => {
                setBiere(donnees.data);
            })

        fetch(commentaireUrl)
            .then(response => response.json())
            .then((donnees) => {
                setCommentaires(donnees.data);
            })

        fetch(noteUrl)
            .then(response => response.json())
            .then((donnees) => {
                setNote(donnees.data);
            })
        }, []); 
    // [] = tableau de dépendances, on met le tableau mais on y met rien pour que ça ne se répète pas,

    const commentaireDOM = commentaires.map((commentaire, index) => {
        return (
            <div key={index}> {/* ou on met le commentaire.id dans le key */}
                <p><span className='guillemets'>“</span> {commentaire.commentaire} <span className='guillemets'>”</span></p> <small>par : <b>{commentaire.courriel}</b></small>
            </div>
        )
    })


    let blocAjoutCommentaire,
        blocAjouteNote;

    if (props.courriel) {
        // console.log(props.courriel);

        blocAjoutCommentaire = <div className='ajoutCommentaire'>
                                    <h2>Ajoutez votre commentaire</h2>
                                    <textarea cols='60'></textarea>
                                    <button>Ajouter</button>
                                </div>
        
        blocAjouteNote = <div className='etoiles'>
                            <h2>Notez la bière</h2>
                            <Rating onClick={handleRating} ratingValue={rating} fillColor='#000' emptyColor='#a3a3a3' />
                        </div>
    }

    let laNote = Number(note.note).toFixed(1);

    return (
        <div className='divPrincipalCardUneBiere'>
            <div className="cardUneBiere">
                <img className="imageUneBiere" src="/assets/images/glassbeer.png" alt="beer" title={biere.nom}/>
                <div className="card__infor">
                    <h1>{biere?.nom}</h1>
                    <span><b>Note: {laNote?laNote:'Aucune note distribuée'}/5 ({note?.nombre})</b></span><br />
                    <p>
                    {biere?.description}
                    </p>
                </div>
            </div>
                
                <div className="commentaires">
                    
                    <h2>{commentaires.length === 0 ? 'Aucun commentaire pour cet article' : 'Commentaire'}
                        {commentaires.length > 1 ? 's' : ''}
                    </h2>
                    
                    {commentaireDOM}
                </div>
                
                <div className="notation">
                    {blocAjouteNote}
                </div>
                
                {blocAjoutCommentaire}
        </div>
    );
}


