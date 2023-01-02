import { Button } from "@mui/material"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useFitnessTrailApi } from "../../shared/api/hooks/useFitnessTrailApi"
import { FormBox } from "../../shared/form/inputs/components/FormBox"
import { TextField } from "../../shared/form/inputs/components/TextField"

export const CreateStudentGoal = () => {
  const { studentId, goalId } = useParams()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const messages = { success: "la note a été envoyé" }
  const { call: createGoal } = useFitnessTrailApi({ endpoint: `/items/studentgoal`, action: 'post', messages })
  const createStudentGoal = async (form) => {
    await createGoal({ ...form, idStudent: studentId, idGoal: goalId })
    navigate('/student-goal')
  }

  return (
    <FormBox title="Créer la note de l'élève" onSubmit={handleSubmit((form) => createStudentGoal(form))}>
      <TextField form={{ errors, register }} id='comments' label='Commentaire' />
      <TextField form={{ errors, register }} id='level' label='Note' rules={{ required: 'Veuillez entrer la note' }} />
      <Button type="submit" variant="contained" style={{ margin: 20 }}>Valider</Button>
    </FormBox>
  )
}
