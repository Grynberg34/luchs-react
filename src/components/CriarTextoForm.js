import React from 'react'
import { Field, reduxForm } from 'redux-form'

let CriarTextoForm = props => {


  const { handleSubmit } = props


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titulo">Título</label>
        <Field name="titulo" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="autora">Autora</label>
        <Field name="autora" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="data">Data</label>
        <Field name="data" component="input" type="date" />
      </div>
      <div>
        <label htmlFor="categoria">categoria</label>
        <Field name="categoria" component="select">
          <option value="Para empresárias">Para empresárias</option>
          <option value="Para marketeiras">Para marketeiras</option>
        </Field>
      </div>
      <div>
        <Field name="texto" component="textarea" cols="100" rows="20" type="text" />
      </div>
      <div></div>
      <button type="submit">Publicar texto</button>
    </form>
  )
}

CriarTextoForm = reduxForm({
  form: 'CriarTextoForm',
  initialValues : {
    categoria: "Para empresárias"
  }
})(CriarTextoForm)

export default CriarTextoForm
