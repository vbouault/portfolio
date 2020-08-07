import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import '../style/button.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

const Contact = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [messageForm, setMessageForm] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msgAlert, setMsgAlert] = useState('');

  function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
  }

  const handleCloseMui = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMessageForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorForm(false);
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/contacts`, form)
      .then(res => res.data)
      .then(data => {
        setForm({
          name: '',
          email: '',
          message: ''
        })
        setMessageForm(true);
        setLoading(false);
        setMsgAlert(`Merci ${data.name}, votre message à bien été envoyé, je vous répondrai prochainement`);
      })
      .catch( err => {
        console.error(err);
        setMsgAlert('Une erreur est survenue, veuillez essayer à nouveau.');
        setErrorForm(true);
        setLoading(false);
        setMessageForm(true);
      })
  }

  return (
    <div>
      <h2 className='contact-title'>Contactez moi</h2>
      <form className='form-contact' onSubmit={e => handleSubmit(e)}>
        <TextField label="nom" className='input-form' required fullWidth value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <TextField label="email" className='input-form' required value={form.email} fullWidth onChange={e => setForm({ ...form, email: e.target.value })} />
        <TextField label="message" className='input-form' required value={form.message} fullWidth multiline rows={8} onChange={e => setForm({ ...form, message: e.target.value })} />
        {loading ? <CircularProgress style={{ width: '50px', height: '50px' }} /> : <button className="glow-on-hover" type="submit">Envoyer</button>}
      </form>
      <div className='contact-icons-container'>
        <a href='https://www.linkedin.com/in/vianney-bouault' target='_blank' rel="noopener noreferrer"><LinkedInIcon className='header-icon contact-icon' style={{fontSize: '45px'}}/></a>
        <a href='https://github.com/vbouault' target='_blank' rel="noopener noreferrer"><GitHubIcon className='header-icon contact-icon' style={{fontSize: '43px'}}/></a>
      </div>
      <Snackbar open={messageForm} autoHideDuration={6000} onClose={handleCloseMui}>
        <Alert onClose={handleCloseMui} severity={!errorForm ? 'success' : 'error'}>
          {msgAlert}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Contact
