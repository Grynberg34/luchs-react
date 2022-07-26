import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

let TextoForm = props => {

  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titulo">Título</label>
        <Field name="titulo" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="autora">Autora</label>
        <Field name="autora" component="input" type="text"/>
      </div>
      <div>
        <Field name="texto" component="textarea" cols="100" rows="20" type="text"/>
      </div>
      <div></div>
      <button type="submit">Publicar texto</button>
    </form>
  )


}

TextoForm = reduxForm({
  form: 'TextoForm',
})(TextoForm)

TextoForm = connect(
  state => ({
    initialValues: {
      titulo: state.text.titulo,
      autora: state.text.autora,
      texto: state.text.texto
    }
  }),
)(TextoForm)

export default TextoForm

