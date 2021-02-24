
import React from 'react';
import shortid from 'shortid';
function App() {

  const [tarea, setTarea] = React.useState('')
  const [tareas, setTareas] = React.useState([])
  const [modoEdicion, setModoEdicion] = React.useState(false)

  const agregarTarea = (e) => {
    e.preventDefault()
    console.log(tarea)
    if(!tarea.trim()){
      console.log('El elemento esta vacio')
      return
    }
    console.log(tarea)

    setTareas([
      ...tareas,
      {id: shortid.generate(), nombreTarea:tarea}
    ])

    setTarea('')
  }

  const eliminarTarea = id => {
    //console.log(id)
    const arrayFiltrado = tareas.filter(item => item.id !== id)
    setTareas(arrayFiltrado)
  }

  const editar = item => {
    console.log(item)
    setModoEdicion(true)
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD Simple</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
          {
            tareas.map(item => (
            <li className="list-group-item" key={item.id}>
              <span className="lead"> {item.nombreTarea} </span>
              <button 
              className="btn btn-danger btn-sm float-rigth mx-2"
              onClick={() => eliminarTarea(item.id)}
              >
              Eliminar
              </button>
              <button 
              className="btn btn-warning btn-sm float-rigth"
              onClick={() => editar(item)}
              >
              Editar
              </button>
            </li>
            ))
          }


        </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={agregarTarea}>
            <input 
              type="text" 
              className="form-control mb-2"
              placeholder="Ingrese Tarea"
              onChange={ e => setTarea(e.target.value) }
              value={tarea}
            />
          </form>
          <button className="btn btn-dark btn-block" type="submit">Agregar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
