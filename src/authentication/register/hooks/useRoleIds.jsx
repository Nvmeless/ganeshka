export const useRoleIds = () => {
  return {
    professor: process.env.REACT_APP_PROFESSOR_ROLE_ID,
    student: process.env.REACT_APP_USER_ROLE_ID
  }
}
