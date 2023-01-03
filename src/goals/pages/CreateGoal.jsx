import { Button } from "@mui/material"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useFitnessTrailApi } from "../../shared/api/hooks/useFitnessTrailApi"
import { FormBox } from "../../shared/form/inputs/components/FormBox"
import { TextField } from "../../shared/form/inputs/components/TextField"

export const CreateGoal = () => {
  const { moduleId } = useParams()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const messages = { success: "l'objectif a été créé" }
  const { call: create } = useFitnessTrailApi({ endpoint: `/items/goal`, action: 'post', messages })
  const createGoal = async (form) => {
    await create({ ...form, idModule: moduleId })
    navigate(`/module/${moduleId}`)
  }

  return (
    <FormBox title="Créer l'objectif" onSubmit={handleSubmit((form) => createGoal(form))}>
      <TextField form={{ errors, register }} id='name' label='Objectif' rules={{ required: "Veuillez entrer le nom de l'objectif" }} />
      <Button type="submit" variant="contained" style={{ margin: 20 }}>Valider</Button>
    </FormBox>
  )
}
