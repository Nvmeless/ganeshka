import React from 'react'
import squirrel from '../../../assets/img/logo-ecureuil.svg';

export const Logo = ({width}) => {
  return (
    <img src={squirrel} alt="Logo Squirrel" 
        style={{
            width: width
        }}
    />
  )
}
