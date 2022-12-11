import React from "react";
import defaultAvatarImage from './AvatarDefaultImage.png'


export const Avatar = ({src,size,alt,bgColor,textColor, borderRadius,...props}) => {

    // init defaults values
    const default_values = {
        type: "img_default",
        size: 50,
        src : defaultAvatarImage,
        bgColor: "black",
        textColor: "white",
        borderRadius: "50%",
        alt: "Avatar",
        display : "flex",
        fontWeight : "bold",
        margin: "auto"
    }
    
    var Avatar_values = default_values;
    
    
    // Init all values with props
    function init () {

    
    const value_type = (function (){
        if (typeof (props.children) == "string") return "letters";
        if (src) return "img";
        if (typeof (props.children) == "undefined") return "img_default";
        return "otherType";
    }) ();

    const value_size = (function (){
        if (size > default_values.size) return size 
        else return default_values.size;
    }) ();

    const value_src = (function (){
        if (value_type == "img") return src 
        else if (value_type == "img_default") return default_values.src;
    }) ();

    const value_bgColor=(function (){
        if (value_type == "img_default") return default_values.bgColor
        else if (value_type == "letters") return stringToColor(props.children)
        else return bgColor;
    }) ();

    const value_textColor=(function (){
        if (value_type == "letters" && textColor == "undefined") return default_values.bgColor
        else return textColor;
    }) ();

    const value_borderRadius= (function (){
        if (borderRadius) return borderRadius
        else return default_values.borderRadius;
    }) ();

    const value_alt = (function (){
        if (value_type == "letters") return props.children 
        else if (value_type == "img_default") return default_values.alt
        else return alt
    }) ();

    // Affect modified values 
    Avatar_values.type = value_type;
    Avatar_values.size = value_size;
    Avatar_values.src = value_src;
    Avatar_values.backgroundColor = value_bgColor;
    Avatar_values.color = value_textColor;
    Avatar_values.borderRadius = value_borderRadius;
    Avatar_values.alt = value_alt;
    Avatar_values.width= Avatar_values.size+"px";
    Avatar_values.height= Avatar_values.size+"px";
    Avatar_values.fontSize= Avatar_values.size/2;
    
}
    


    // Get color from string
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
    
    
    /*
    * Generate one icon according to the parameters sent 
    */
    const generateAvatarIcon = (Avatar_values) => {
        
        // Icon with two letter
        if (Avatar_values.type == "letters") {
            let lettersStyle = {
                margin: Avatar_values.margin
            }
            return <div style={Avatar_values} alt={Avatar_values.alt}><p style={lettersStyle}>{getLetters()}</p></div>;
        }
        // Icon with img
        else if (Avatar_values.type == "img") return <img src={src}  style={Avatar_values} alt={alt}></img>
        // Icon with default img
        else if (Avatar_values.type == "img_default") return <img src={Avatar_values.src}  style={Avatar_values} alt={alt}></img>
        // Other things  
        else return <div style={Avatar_values} alt={Avatar_values.alt}>{props.children}</div>;
    }

    


    /**
     * 
     * @returns Two letters from props
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
        {(function (){
            init()
            return generateAvatarIcon(Avatar_values)
        }) ()
        } 
        </div>
    );
}