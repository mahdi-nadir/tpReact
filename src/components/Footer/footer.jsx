import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    }

    getDate = () => {
        this.setState({date: new Date()})
        console.log(new Date);
    }
    
    render() { 
        return (
            <footer>
                <h2>&copy; Mahdi NADIR - Tous Droits Réservés</h2>
            </footer>
        );
    }
}
 
export default Footer;