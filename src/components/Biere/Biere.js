import React, { Component } from 'react';
import './Biere.css';

export default class Biere extends Component {
    constructor (props) {
        super(props);
        this.state = {
            //
        }

}

    manipulateNote = (note) => { // pour ne pas afficher le 0 si la note n'est pas decimale
        let allNote = note.split('.'),
            noteFinale = 0;
            
        if (allNote[1][0] !== '0') {
            noteFinale = Number(note).toFixed(1)
        } else {
            noteFinale = Number(allNote[0])
        }

        return noteFinale
    }

    render() {
        return (
            // ici on recupere la props et on affiche la carte this.props.nom
            <div>
                <div className="card">
                    <img className="imageBiere" src="/assets/images/glassbeer.png" alt="beer" />
                    <img className="heartBiere" src="/assets/images/heart.svg" alt="ss" />
                    <div className="card__info">
                        <h1>{this.props.data.nom} <span className='note'>{this.manipulateNote(this.props.data.note_moyenne)} /5 ({this.props.data.note_nombre})</span></h1>
                        <h2>{this.props.data.brasserie}</h2>
                        
                    </div>
                </div>
            </div>
        );
    }
}