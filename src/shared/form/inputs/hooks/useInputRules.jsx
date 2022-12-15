export const useInputRules = () => {
  const emailRules = {
    pattern: {
      // eslint-disable-next-line no-useless-escape
      value:  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      message: 'Veuillez entrer un email valide'
    },
    required: 'L\'email est requis'
  }

  return { emailRules }
}
