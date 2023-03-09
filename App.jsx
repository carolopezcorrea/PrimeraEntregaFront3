import { useState } from 'react'
import Card from "./Card"

const App = () => {
  const [name, setName] = useState('')
  const [cellphone, setCellphone] = useState(0)
  const [age, setAge] = useState(0)

  async function handleSubmit(e) {
    e.preventDefault()
    
    //Formulario

    if (!name || !cellphone || !age) {
      console.error('Por favor ingresa la información solicitada')
      return
    }
    // Si name no tiene minimo 3 caracteres

    if (!(name.toString().length === 3)) {
      console.error('Por favor chequear que la información sea correcta')
      return
    }

    // Si cellphone no tiene al menos 6 caracteres

    if (cellphone.toString().length === 6) {
      console.error('Por favor chequear que la información sea correcta')
      return
    }
    const user = {
      name,
      cellphone,
      age
    }
    console.log(user)
    //reset form
    setName('')
    setCellphone(0)
    setAge(0)
  }

  return (
    <Card>
      <h1>Adiciona un nuevo estudiante</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='nama'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='cellphone'>Cellphone</label>
          <input
            type='number'
            id='cellphone'
            value={cellphone}
            onChange={(e) => setCellphone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='age'>Age</label>
          <input
            type='number'
            id='age'
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
        <button type='submit'>Agregar estudiante</button>
      </form>
    </Card>
  )
}

export default App;
