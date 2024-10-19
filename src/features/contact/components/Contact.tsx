import { useState } from 'react'
import { useForm } from '../../../common/hooks/useForm'
import './contact.css'


interface ErrorState {
  [key: string]: string | null;
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const isValidEmail = (email:string) => emailRegex.test(email);

export const Contact = () => {

  const { name, email, subjet, message, onInputChange, onResetForm } = useForm({
    name: '',
    email: '',
    subjet: '',
    message: ''
  })

  const [error, setError] = useState<ErrorState>({
    name: null,
    email: null,
    subjet: null,
    message: null
  })

  const [formState, setFormState] = useState({
    isSending: false,
    hasError: false,
    hasSuccess: false,
  })

  const sendEmail = async () => {

    try {
      const response = await fetch('https://formsubmit.co/ajax/jsemalvarez@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name, 
          email, 
          subjet, 
          message
        }),
      });

      if (!response.ok) {
        throw response;
      }

      return {
        ok: true
      }
    } catch (error) {
      console.log(error)
      return {
        ok: false,
        errorMessage: 'Error al enviar el formulario. Intenta de nuevo mas tarde por favor.'
      }
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('holaaaaa')
    e.preventDefault()

    const newErrors: { [key: string]: string } = {};

    if (name.trim().length === 0) {
      newErrors.name = '*El nombre es obligatorio';
    }

    if (email.trim().length === 0) {
      newErrors.email = '*El email es obligatorio';
    }else if( !isValidEmail(email) ){
      newErrors.email = '*El email no es valido';
    }

    if (message.trim().length === 0) {
      newErrors.message = '*El mensaje es obligatorio';
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    setFormState(state => ({
      ...state,
      isSending: true
    }))
    
    setError({});

    const response = await sendEmail();

    if(response.ok){
      onResetForm();
      setFormState(state => ({
        ...state,
        hasSuccess: true
      }))
    }else{
      setFormState(state => ({
        ...state,
        hasError: true
      }))
    }

    setFormState(state => ({
      ...state,
      isSending: false
    }))
  
  }

  return (
    <section id='contact' className='contact'>
        <form 
          className='contact__form'
          onSubmit={ onSubmit }
        >

          <label
            className={ (error.name ? 'errorText' : '') }
          >
            { (error.name ? error.name : '*Nombre:') }
          </label>
          <input 
            className={error.name ? 'errorInput' : ''}
            type="text" 
            name="name" 
            value={ name }
            onChange={ onInputChange }
          />

          <label
            className={ (error.email ? 'errorText' : '') }
          >
            { (error.email ? error.email : '*Email:') }
          </label>
          <input 
            className={ (error.email ? 'errorInput' : '') }
            type="text" 
            name="email" 
            value={ email }
            onChange={ onInputChange }
          />

          <label>Asunto:</label>
          <input 
            type="text" 
            name="subjet" 
            value={ subjet }
            onChange={ onInputChange }
          />

          <label
            className={ (error.message ? 'errorText' : '') }
          >
            { (error.message ? error.message : '*Mensaje:') }
          </label>
          <textarea
            className={error.message ? 'errorInput' : ''} 
            name="message"
            value={message}
            onChange={onInputChange}
            placeholder="Escriba su mensaje aqui . . ."
          >
          </textarea>

          <button 
            type='submit'
            disabled= { formState.isSending }
          >
            { (formState.isSending)? 'Enviando...' : 'Enviar'}
          </button>

          <div className='warning'>
            <p> ! Los campos con * son obligatorios </p>
          </div>

          {
            formState.hasError && (
              <div className='form-error'>
                <p> Error al enviar el formulario. Intente de nuevo mas tarde por favor. </p>
              </div>
            )
          }

          {
            formState.hasSuccess && (
              <div className='form-success'>
                <p> Su consulta se ha enviado </p>
              </div>
            )
          }

        </form>
        <img className='developer-shadow' src="./assets/developer-shadow.png" alt="developer shadow" />
    </section>
  )
}
