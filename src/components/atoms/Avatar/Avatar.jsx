import React from "react";
import PropTypes from 'prop-types';
import defaultAvatarImage from './AvatarDefaultImage.png'


export const Avatar = ({...props }) => {

    // init defaults values
    const default_values = {
        type: "img_default",
        size: 20,
        src: defaultAvatarImage,
        bgColor: "white",
        textColor: "white",
        borderRadius: "50%",
        alt: "Avatar",
        display: "flex",
        fontWeight: "bold",
        margin: "auto",
        fontFamily : "Arial"
    }

    var Avatar_values = default_values;


    // Init all values with props
    function init() {


        const value_type = (function () {
            if (typeof (props.children) == "string") return "letters";
            if (props?.src) return "img";
            if (typeof (props.children) == "undefined") return "img_default";
            return "otherType";
        })();

        const value_size = (function () {
            if (props?.size > default_values.size) return props?.size
            else return default_values.size;
        })();

        const value_src = (function () {
            if (value_type == "img") return props?.src
            else if (value_type == "img_default") return default_values.src;
        })();

        const value_bgColor = (function () {
            if (props?.bgColor) return props?.bgColor
            else if (value_type == "img_default") return default_values.bgColor
            else if (value_type == "letters") return stringToColor(props.children)
            else return props?.bgColor;
        })();

        const value_textColor = (function () {
            if (value_type == "letters" && props?.textColor == "undefined") return default_values.bgColor
            else return props?.textColor;
        })();

        const value_borderRadius = (function () {
            if (props?.borderRadius) return props?.borderRadius
            else return default_values.borderRadius;
        })();

        const value_alt = (function () {
            if (value_type == "letters") return props.children
            else if (value_type == "img_default") return default_values.alt
            else return props?.alt
        })();

        // Affect modified values 
        Avatar_values.type = value_type;
        Avatar_values.size = value_size;
        Avatar_values.src = value_src;
        Avatar_values.backgroundColor = value_bgColor;
        Avatar_values.color = value_textColor;
        Avatar_values.borderRadius = value_borderRadius;
        Avatar_values.alt = value_alt;
        Avatar_values.width = Avatar_values.size + "px";
        Avatar_values.height = Avatar_values.size + "px";
        Avatar_values.fontSize = Avatar_values.size / 2;

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
        else if (Avatar_values.type == "img") return <img src={Avatar_values.src} style={Avatar_values} alt={Avatar_values.alt}></img>
        // Icon with default img
        else if (Avatar_values.type == "img_default") return <img src={Avatar_values.src} style={Avatar_values} alt={Avatar_values.alt}></img>
        // Other things  
        else return <div style={Avatar_values} alt={Avatar_values.alt}>{props.children}</div>;
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

    /**
     * 
     * @returns Two letters from props
     */
    const getLetters = () => {
        if (props.children.indexOf(' ') >= 0) {
            let index = props.children.indexOf(' ')
            return props.children.slice(0, 1).toUpperCase() + props.children.slice(index + 1, index + 2).toUpperCase()
        }
        return props.children.slice(0, 2).toUpperCase()
    }



    return (
        <div>
            {(function () {
                init()
                return generateAvatarIcon(Avatar_values)
            })()
            }
        </div>
    );




    // Proptypes
    Avatar.propTypes = {
        /** 
         * Source image of Avatar
         */
        src: PropTypes.string,
        /**
         * Size of Avatar
         */
        size: PropTypes.number,
        /**
         * Avatar description 
         */
        alt: PropTypes.string,
        /**
         * Background color 
         */
        bgColor: PropTypes.string,
        /**
         * Text of avatar, if the avatar is two letters
         */
        textColor:PropTypes.string,
        /**
         * border Raduis of Avatar in %
         */
        borderRadius: PropTypes.number
    }
    Avatar.defaultProps = {
        src: default_values.src,
        size: default_values.size,
        alt: default_values.alt,
        bgColor: default_values.bgColor,
        textColor: default_values.textColor,
        borderRadius: default_values.borderRadius
    }
}