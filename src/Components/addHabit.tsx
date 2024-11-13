import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../store/store"
import { addHabit } from "../store/habitSlice"

const AddHabit: React.FC = () => {
  const[name, setName] = useState<string>('')
  const[frequency, setFrequency] = useState<'weekly' | 'daily'>('daily')
  const dispatch = useDispatch<AppDispatch>();

  function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    if(name.trim()){
      dispatch(
        addHabit(
        {name, frequency}
      ),
        setName('')
      )
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}>
      <TextField
      label='Habit Name'
      onChange={(e) => setName(e.target.value)}
      placeholder="add a habit"
      fullWidth
      />
      <FormControl fullWidth>
        <InputLabel>
          Frequency
          </InputLabel>
        <Select
        value={frequency}
        onChange={(e) => setFrequency(e.target.value as 'daily' | 'weekly')}
        >
          <MenuItem value='daily'>Daily</MenuItem>
          <MenuItem value='weekly'>Weekly</MenuItem>
          </Select>
        </FormControl>
      <Button type="submit" variant="contained" color="primary">Add Habit</Button>
      </Box>
    </form>
  )
}

export default AddHabit 
