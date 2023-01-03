import { Button } from "@mui/material"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useFitnessTrailApi } from "../../shared/api/hooks/useFitnessTrailApi"
import { FormBox } from "../../shared/form/inputs/components/FormBox"
import { TextField } from "../../shared/form/inputs/components/TextField"

export const ModifyModule = () => {
  const { moduleId } = useParams()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const messages = { success: "le module a été modifié" }
  const { call: get, data, isLoading } = useFitnessTrailApi({ endpoint: `/items/module/${moduleId}`, action: 'get' })
  const { call: modify } = useFitnessTrailApi({ endpoint: `/items/module/${moduleId}`, action: 'patch', messages })
  const modifyModule = async (form) => {
    await modify(form)
    navigate(`/teacher/modules/list`)
  }

  useEffect(() => { get() }, [])
  if (isLoading) return

  return (
    <FormBox title="Modifier le module" onSubmit={handleSubmit((form) => modifyModule(form))}>
      <TextField form={{ errors, register }} defaultValue={data?.name} id='name' label='Nom du module' rules={{ required: 'Veuillez entrer le nom du module' }} />
      <Button type="submit" variant="contained" style={{ margin: 20 }}>Valider</Button>
    </FormBox>
  )
}
