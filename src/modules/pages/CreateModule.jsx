import { Button } from "@mui/material"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useFitnessTrailApi } from "../../shared/api/hooks/useFitnessTrailApi"
import { FormBox } from "../../shared/form/inputs/components/FormBox"
import { TextField } from "../../shared/form/inputs/components/TextField"

export const CreateModule = () => {
  const { classroomId } = useParams()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const messages = { success: "le module a été créé" }
  const { call: create } = useFitnessTrailApi({ endpoint: `/items/module`, action: 'post', messages })
  const createModule = async (form) => {
    await create({ ...form, idClassroom: classroomId })
    navigate(`/classroom/${classroomId}/modules`)
  }

  return (
    <FormBox title="Créer le module" onSubmit={handleSubmit((form) => createModule(form))}>
      <TextField form={{ errors, register }} id='name' label='Nom du module' rules={{ required: 'Veuillez entrer le nom du module' }} />
      <Button type="submit" variant="contained" style={{ margin: 20 }}>Valider</Button>
    </FormBox>
  )
}
