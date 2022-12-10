import React from "react";
import AvatarDefaultImage from './AvatarDefaultImage.png'
import './Avatar.css';

export const Avatar = ({src,...props}) => {

    const randomColor = () => {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        return bgColor;
    }

    /*
    * Permet de générer soit : 
    *   - Une image par défaut (Si aucune n'est mise)
    *   - Deux lettres en majuscule si un texte est envoyé 
    *   - L'image mis en props
    */
    const generateAvatarIcon = () => {
        if (typeof (props.children) == "string") {
            let Letters = getLetters()
            let color = {
                backgroundColor : randomColor()
            }
            
            return <div className="textAvatar" style={color}>{Letters}</div>;

        } else if (src) {
           
            return <img src={src} className="imgAvatar "></img>
        }
        else if (typeof (props.children) == "undefined"){
            
            return <img src={AvatarDefaultImage} className="imgDefaultAvatar"></img>

        } 

    }

    const getSize = () => {
        const defautSize = "medium"


    }


    /**
     * Renvoie les premières lettres du nom et prenom mis dans les props.children
     * @returns 1 ou 2 deux lettres en majuscule
     */
    const getLetters = () => {
        if (props.children.indexOf(' ') >= 0) {
            let index = props.children.indexOf(' ')
            return  props.children.slice(0, 1).toUpperCase() + props.children.slice(index+1, index+2).toUpperCase()
        }
        return props.children.slice(0, 2).toUpperCase()
        }



    return (
        <div>
        { generateAvatarIcon() } 
        </div>
    );
}