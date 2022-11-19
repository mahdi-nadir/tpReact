// import logo from './logo.svg';
import './BoutonNav.css';
import React from 'react';

export default class BoutonNav extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <a href={this.props.lien}>{this.props.label}</a>
        )
    }
}