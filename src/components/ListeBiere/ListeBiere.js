import React, { Component } from 'react';
import './ListeBiere.css';
import { Link } from 'react-router-dom';
import Biere from '../Biere/Biere';

export default class ListeBiere extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bieres: []
        }
    }
    componentDidMount() {
        //console.log("componentDidMount");
        fetch('http://127.0.0.1:8000/webservice/php/biere/')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(donnees => {
                // console.log(data);
                this.setState({ bieres: donnees.data });
        })
        .catch (error => {
            console.log(error.message);
        });
    }


    render() {
        const bieres = this.state.bieres.map((biere, index) => {
            return <Link to={`/biere/${biere.id_biere}`} key={index}><Biere data={biere}/></Link>
        })

        return (
            <>
                <h2 className='listeBieresTitre'>Liste des bières</h2>
                <div className='allCards'>
                    {bieres}
                </div>
            </>
        );
    }
}
