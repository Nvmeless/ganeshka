export const useRoleIds = () => {
  return {
    professor: process.env.PROFESSOR_ROLE_ID,
    user: process.env.USER_ROLE_ID
  }
}
