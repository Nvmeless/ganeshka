import React from 'react'
import { useSelector } from 'react-redux';

export const Home = () => {
  const { token } = useSelector((state) => state.auth);

  console.log(token);

  return (
    <div>
      Ceci est la Home de Squirrel


    </div>
  )
}
