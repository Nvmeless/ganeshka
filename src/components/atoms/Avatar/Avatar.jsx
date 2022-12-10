import React from "react";
import AvatarDefaultImage from './AvatarDefaultImage.png'

export const Avatar = ({...props}) => {


    /*
    * Permet de générer soit : 
    *   - Une image par défaut (Si aucune n'est mise)
    *   - Deux lettres en majuscule si un texte est envoyé 
    *   - L'image mis en props
    */
    const generateAvatarIcon = () => {
        if (typeof (props.children) == "string") {
            return getLetters();
        } else if (typeof (props.children) == "undefined"){
            return <img src={AvatarDefaultImage}></img>
        } else {
            return props.children
        }

    }

    const getSize = () => {
        
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