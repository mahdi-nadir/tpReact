// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Compteur from '../Compteur/Compteur';
import Accueil from '../Accueil/Accueil';
import ListeBiere from '../ListeBiere/ListeBiere';
import DetailBiere from '../DetailBiere/DetailBiere';
import Entete from '../Entete/Entete';
import React from 'react';
import Footer from '../Footer/footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        // valeur: 0
        courriel:'' // pour le login
      }
  }

  loginApp = (courriel) => {
    // console.log('loginApp');
    this.setState({ courriel: courriel });
  }

  render() {
    // console.log(this.state.valeur);
    return (
      <Router>
        <Entete handleLogin={this.loginApp}/> {/* pour passer les props au parent */}
        
        <Routes>
          <Route path="/" element={<Accueil />} />
          {/* <Route path="/compteur" element={<Compteur valeur={this.state.valeur} handleIncrement={this.incremente} />} /> */}
          <Route path="/liste" element={<ListeBiere />} />
          <Route path="/biere/:id" element={<DetailBiere courriel={this.state.courriel}/>} /> {/* passer les props a l'enfant */}
          <Route path="/*" element={<Accueil />} />
        </Routes>

        <Footer />
      </Router>
    )
}
}