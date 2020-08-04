import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import '../style/button.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  return (
    <div>
      <h2 className='contact-title'>Contactez moi</h2>
      <form className='form-contact'>
        <TextField label="nom" className='input-form' fullWidth value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <TextField label="email" className='input-form' value={form.email} fullWidth onChange={e => setForm({ ...form, email: e.target.value })} />
        <TextField label="message" className='input-form' value={form.message} fullWidth multiline rows={8} onChange={e => setForm({ ...form, message: e.target.value })} />
        <button class="glow-on-hover" type="button">Envoyer</button>
      </form>
      <div className='contact-icons-container'>
        <a href='https://www.linkedin.com/in/vianney-bouault' target='_blank'><LinkedInIcon className='header-icon contact-icon' style={{fontSize: '45px'}}/></a>
        <a href='https://github.com/vbouault' target='_blank'><GitHubIcon className='header-icon contact-icon' style={{fontSize: '43px'}}/></a>
      </div>
    </div>
  )
}

export default Contact
