
export const useInputError = (errors) => {
  const errorMessage = (keyName) => errors?.[keyName]?.message
  const hasError = (keyName) => errorMessage(keyName) !== undefined ? true : false

  return {
    errorMessage,
    hasError
  }
}
