
export const useArray = () => {
  function not(array, newValue) {
    return array.filter((value) => newValue.indexOf(value) === -1);
  }
  
  function intersection(array, newValue) {
    return array.filter((value) => newValue.indexOf(value) !== -1);
  }
  
  function union(array, newValue) {
    return [...array, ...not(newValue, array)];
  }

  return { not, intersection, union }
}
