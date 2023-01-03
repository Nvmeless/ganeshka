import { Button } from "@mui/material"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useFitnessTrailApi } from "../../shared/api/hooks/useFitnessTrailApi"
import { FormBox } from "../../shared/form/inputs/components/FormBox"
import { TextField } from "../../shared/form/inputs/components/TextField"

export const ModifyStudentGoal = () => {
  const { goalId } = useParams()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const messages = { success: "la note a été modifié" }
  const { call: getGoal, data, isLoading } = useFitnessTrailApi({ endpoint: `/items/studentgoal/${goalId}`, action: 'get' })
  const { call: modifyGoal } = useFitnessTrailApi({ endpoint: `/items/studentgoal/${goalId}`, action: 'patch', messages })
  const modifyStudentGoal = async (form) => {
    await modifyGoal(form)
    navigate('/student-goal')
  }

  useEffect(() => { getGoal() }, [])

  if (isLoading) return

  return (
    <FormBox title="Modifier la note de l'élève" onSubmit={handleSubmit((form) => modifyStudentGoal(form))}>
      <TextField form={{ errors, register }} defaultValue={data?.comments} id='comments' label='Commentaire' />
      <TextField form={{ errors, register }} defaultValue={data?.level} id='level' label='Note' />
      <Button type="submit" variant="contained" style={{ margin: 20 }}>Valider</Button>
    </FormBox>
  )
}
