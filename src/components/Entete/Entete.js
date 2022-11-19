import React from 'react';
import './Entete.css';
import { NavLink } from 'react-router-dom';


export default class Entete extends React.Component {
    constructor (props) {
        super(props);
        // console.log(props);
        this.state = {
            courriel: ""
    }
}

    changeCourriel = (event) => {
        //console.log(event.target.value);
        this.setState({ courriel: event.target.value });

    }

    login = (event) => {
        event.preventDefault();
        console.log('login entete');
        // on peut faire la validation du courriel ici
        this.props.handleLogin(this.state.courriel);
        // on a fait descendre la fonction login de App.js à Entete.js a travers props
    }

    render() {
        return (
            <header className='banner'>
                <div className='entetePrincipal'>
                    <NavLink to="/"><img className="logo" title="Page d'accueil" src="/assets/images/beerSVG.svg" alt='beerIcon'/></NavLink>
                    <div className='entetePrincipal__liens'>
                        <nav>
                            {/**cela ne fonctionne qu'après l'actualisation de la page, du coup j'ai laissé le lien qui mène à la liste des bières même si on y est déjà */}
                            {/* {window.location.href !== `http://localhost:3000/liste` ? <NavLink to="/liste">Liste des bières &rarr;</NavLink> : ''} */}
                            <NavLink to="/liste">Liste des bières &rarr;</NavLink>
                        </nav>
                            
                        <form className='login-form'>
                            <input onBlur={this.changeCourriel} type="text" placeholder="Tapez votre nom d'usager"/>
                            <button onClick={this.login}>Login</button>
                        </form>
                    </div>
                </div>
            </header>
        )
    }
}