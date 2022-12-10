import React from "react";
import AvatarDefaultImage from './AvatarDefaultImage.png'
import './Avatar.css';

export const Avatar = ({src,size,alt,bgColor,...props}) => {

    // Récupère une couleur en fonction du string mis en paramètre
    function stringToColor(string) {
        let hash = 0;
        let i;
      
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
      
        return color;
      }


    const getSize = () => {
        if (size > 5) return size
        else return 5
    }
    
    
    /*
    * Permet de générer soit : 
    *   - Une image par défaut (Si aucune n'est mise)
    *   - Deux lettres en majuscule si un texte est envoyé 
    *   - L'image mis en props
    */
    const generateAvatarIcon = () => {
        let AvatarSize = getSize()
        let StyleAvatar = {
            width: AvatarSize+"px",
            height: AvatarSize+"px"
        }

        // L'avatar sera géneré avec des lettres
        if (typeof (props.children) == "string") {
            let Letters = getLetters()
            StyleAvatar['backgroundColor'] = stringToColor(props.children)
            StyleAvatar['fontSize'] = AvatarSize/2

            return <div className="textAvatar" style={StyleAvatar} alt={props.children}><p className="letterAvatar">{Letters}</p></div>;

        // Image défini par le paramètre src
        } else if (src) {
            return <img src={src} className="imgAvatar " style={StyleAvatar} alt={alt}></img>
        }

        // Image par défaut car ni une lettre ni une image n'est indiqué
        else if (typeof (props.children) == "undefined"){
            return <img src={AvatarDefaultImage} className="imgDefaultAvatar" style={StyleAvatar} alt={alt}></img>
        // Autres élements    
        } else {
            StyleAvatar['backgroundColor'] = bgColor
            return <div className="imgAvatar" style={StyleAvatar} alt={props.children}>{props.children}</div>;

        }

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