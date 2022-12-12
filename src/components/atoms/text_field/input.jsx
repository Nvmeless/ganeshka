//import { number } from "prop-types";
import React from "react";
// import TextField from "@mui/material";

/*
export const TextField = () => {
    
    return (
        <>
            <p> text TextField</p>
        </>
    )
}
*/

/*
export class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};//Valeur de base dans mon input 
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Le nom a été soumis : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom :
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      );
    }
  }
*/


export class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.Nom = {
            value: '' //Valeur de base de mon input
        };
        this.Prenom = {
            value: '' //Valeur de base de mon input
        };
        this.Age = {
            value: '' //Valeur de base de mon input
        };
        this.Nationalite = {
            value: '' //Valeur de base de mon input
        };

        this.state =  {
            nom: '',
            prenom: '',
            age: '',
            nationalite: ''
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrenom = this.handleChangePrenom.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeNationalite = this.handleChangeNationalite.bind(this);
    }

    handleChangeName(event){
        this.setState({nom:event.target.value})
    }

    handleChangePrenom(event){
        this.setState({prenom:event.target.value})
    }

    handleChangeAge(event){
        this.setState({age:event.target.value})
    }

    handleChangeNationalite(event){
        this.setState({nationalite:event.target.value})
    }

    handleSubmit(event) {
        /*
        alert(
            'Prenom : ' + this.state.prenom + ', ' +
            'Nom : ' + this.state.nom + ', ' +
            'Age : ' + this.state.age + ', ' +
            'Nationalité : ' + this.state.nationalite
        );
        event.preventDefault();
        */
       alert('test');
        

    }

    render() {
        return (
            <>
        <form onSubmit={this.handleSubmit}>
            <table>
                <tr>
                    <td>Nom :</td>
                    <td>   
                        <textarea value={this.state.nom} onChange={this.handleChangeName} />
                    </td>
                </tr>
                <tr>
                    <td>Prenom :</td>
                    <td>   
                        <textarea value={this.state.prenom} onChange={this.handleChangePrenom} />
                    </td>
                </tr>
                <tr>
                    <td>Age :</td>
                    <td>   
                        <textarea value={this.state.age} onChange={this.handleChangeAge} />
                    </td>
                </tr>
                <tr>
                    <td>Nationalité :</td>
                    <td>   
                        <textarea value={this.state.nationalite} onChange={this.handleChangeNationalite} />
                    </td>
                </tr>
                <tr><td><input type="submit" value="Envoyer" /></td></tr>
            </table>
        </form>
        
        <p>
            Nom = {this.state.nom} <br></br>
            Prenom = {this.state.prenom} <br></br>
            Age = {this.state.age} <br></br>
            Nationalité = {this.state.nationalite}
        </p>        
        </>
        );
    }
}


