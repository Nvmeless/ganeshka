// import React from 'react';
// import Front from '../Front/Front.jsx';
// import WebSiteHandler from './system/WebsiteHandler.js'; 
// import CustomThreeGlobaleScene from '../../three/CustomThreeGlobaleScene.jsx';
// import DigiCard from "../../three/DigiCard.jsx";

// import Menu from '../Front/Elements/Menu/Menu.jsx';
// import BannerHandler from '../Front/Elements/Banner/BannerHandler.jsx';
// import ContentHandler from '../Front/Elements/Generic/ContentHandler.jsx';
// import CardBanner from '../Front/Elements/Banner/CardBanner.jsx';
// import Typed from "react-typed";
// import styled, { keyframes } from 'styled-components';
// import { fadeIn, fadeOut } from 'react-animations'
// import BasicFormInput from '../Front/Elements/Generic/Inputs/BasicFormInput.jsx';
 
// const fadeInAnimation = keyframes`${fadeIn}`;
// const fadeOutAnimation = keyframes`${fadeOut}`;
 
// const listColors = {
//     "themeCardCyan": {
//         lights:{
//             "colorPoint":"cyan",
//             "colordirectionalLight":"blue"
//         },
//         card:{
//             color:"cyan",
//             height:((.54) * 2),
//             width:((.85) * 2),
//             depth:(.02),
//         }
//     },
//     "themeCardPink": {
//         lights:{
//             "colorPoint":"pink",
//             "colordirectionalLight":"red"
//         },
//         card:{
//             color:"pink",
//             height:((.54) * 2),
//             width:((.85) * 2),
//             depth:(.02),
//         }
//     },
//     "themeCardApple":{
//         lights:{
//             "colorPoint":"lime",
//             "colordirectionalLight":"green"
//         },
//         card:{
//             color:"lime",
//             height:((.54) * 2),
//             width:((.85) * 2),
//             depth:(.02),
//         }
//     },


// }
// const keys = Object.keys(listColors)
// const threeDtheme = keys[Math.floor(Math.random() * keys.length)]
// const lightColors = listColors[threeDtheme].lights;
// const cardColor = listColors[threeDtheme].card.color;
// const heightCard = listColors[threeDtheme].card.height;
// const widthCard = listColors[threeDtheme].card.width;
// const depthCard = listColors[threeDtheme].card.depth;
// const FadeInDiv = styled.div`
//   animation: 7s ${fadeInAnimation};
//   background-color: white;
//   position: absolute;
//   left:0;
// `;
// const FadeOutDiv = styled.div`
// animation: ${props => props.fadeTime + "s"} ${props => props.isFading ? fadeOutAnimation : "" };
// max-height:100vh;
// max-width:100vw;

// `;
//   const animationsTexts = {
//       "fr" : {
//           hello: [
//               'Bonjour,',
//               'Cliques sur la carte pour..',
//               'non, en fait.. ',
//               'cliques juste dessus ',
//               'Allez, cliques ! ',
//               'Cliques dessus !',
//           ],
//           welcome: [
//             "Ah, c'est mieux !",
//             "digiTag",
//           ],
//       },
//       "en" : {
//         hello: [  
//         `Hello..`,
//         `Click on the card to..`,
//         `just click ..`,
//         //`Such a cool effect, isn't it?`,
//         `Come on,`,
//         `click !`
//         ],
//         welcome: [
//         `Cool uh ?`,
//         `Ok,`,
//         ` now imagine a world..`,
//         `where you just needing..`,
//         `a single business card.`,
//         `...`,
//         `no...`,
//         `Imagine a world with us.`,
//         `digiTag`,],
//     }
//   }

//   const backGroundHandler = {
//       fadeOut: {
//           fadeTime:4,
//       }
//   }






// export default class Website extends React.Component {
    
//     constructor(props){ 
//         super(props);
//         this.state = {
//             handler : new WebSiteHandler,
//             htmlFront: false,
//             banner:"form",
//             bannerHeight:'400px',
//             lang: "fr",
//             styledBackground:null,
//             displayScene:true,
//         }
//         // this.handleEndStartAnim = this.handleEndStartAnim.bind(this);
//     }
    
//     //Page :
//     /*
//     form : Formulaire
//     default: rien
//     cardbanner: banniere avec le texte

//     */

//     handleEndStartAnim(){
//         if(this.state.htmlFront == false){
//             console.log('Start Animation done')
//             this.setState({
//                 htmlFront: true
//             })
//         }
//     }
    
//     welcome(){
//         this.setState({banner: "cardbanner"});
//         this.handleDestructionByFade((backGroundHandler.fadeOut.fadeTime - .1));
//     }


//     destructionByFade(){
//         this.setState({displayScene: false})
//     }

//     handleDestructionByFade(time){
//         setTimeout(this.destructionByFade.bind(this), (time * 1000));  
//     }
//     render()
//     {
//         console.log(this.state.htmlFront);
//         let frontHandler = this.state.htmlFront;
//         return (<>
//             <Front handle={this.state.handler} display={frontHandler} background={{className: ( this.state.banner != "default" ? " backGroundFront" : "" )}} 
//             menu={<Menu></Menu>} 
//             before={
//             <div className='container mx-auto py-24'>
//                 <h1 className='text-8xl text-center text-white typed'>
//                     <Typed strings={animationsTexts[this.state.lang].hello} typeSpeed={80}/>
//                 </h1>
//             </div>}>
//             <div className='container mx-auto py-24'>
            
//             <h1 className='text-8xl text-center text-white typed'>
//             <Typed strings={animationsTexts[this.state.lang].welcome} onComplete={() => {this.welcome()}} typeSpeed={60} />
//             </h1>
//             {/* Banner */}
            
//             <BannerHandler 
//             menu={this.state.banner}
            
//             default={<div></div>}
            
//             cardbanner={
//                 <FadeInDiv className='my-12'>
//                     <CardBanner lightColors={lightColors} width="100vw"  height={this.state.bannerHeight} cardColor="darkgrey" heightCard={(heightCard * 5)} widthCard={(widthCard * 5)} depthCard={(depthCard * 5)}>
//                     </CardBanner>
//                 </FadeInDiv>
//             }
//             >
//             </BannerHandler>
//             {/*

//              Content
            
//             */}
//             <ContentHandler 
//             menu={this.state.banner} 
//             bannerHeight={this.state.bannerHeight} 
//             cardbanner={
//                 //<BasicFormInput></BasicFormInput>
//                 <></> 
//             }
//             form={
//                <><h1>Hello</h1></>
//             }
//             >
//             </ContentHandler> 
            
//             </div>
//             </Front>
//             {this.props.entry == "3D" && this.state.displayScene ? (<FadeOutDiv fadeTime={backGroundHandler.fadeOut.fadeTime} isFading={ this.state.banner != "default"}>
//                 <CustomThreeGlobaleScene 
//                 className='tDbG'
//                 handleOnEnd={this.handleEndStartAnim.bind(this)}
//                 heightCard = {heightCard}
//                 widthCard = {widthCard}
//                 depthCard = {depthCard}
//                 lightColors={lightColors}
//                 cardColor={cardColor}
//                 >
//                 </CustomThreeGlobaleScene>
//             </FadeOutDiv>): (<></>)}
         
//             </>
//             );
//     }
// }
