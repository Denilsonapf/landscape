import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import api from '../services/api';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import './cadastrar.css';





function Cadastrar() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
      
  async function handleSubmit(e){
    if(nome===''|| email==='') return alert('É necessário preencher todos os dados!')
    e.preventDefault();
  
   await api.post('/cadastrar', {
      nome,
      email
    })
    localStorage.setItem("nome",nome)
    localStorage.setItem("email",email)  
    setNome('');
    setEmail('');
  }


 



 

  return (

    <header>
      <div>

      
        <div>
          <center>
            <strong>Cadastro de Clientes</strong>
            <form onSubmit = {handleSubmit}>
              <div class = "input-group">
                <div class ="textField-block">
                    <TextField
                    label="Nome"
                    id="nome"
                    value={nome}
                    required
                    variant="outlined"
                    onChange={e => setNome(e.target.value)}
                    />
                </div>
                <div class ="textField-block">
                    <TextField
                    label="Email"
                    id="email"
                    value={email}
                    required
                    variant="outlined"
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                
                <div className="input-button">
                  <div id="button">
                    <IconButton
                    type="submit"
                    onClick={handleSubmit}
                    style={{ color: 'black' }}
                    >
                      <SaveIcon style={{ color: 'black' }} />
                      Cadastrar
                    
                    </IconButton>
                  </div> 
                </div>
              </div>
            </form>
          </center>
        </div>


        </div>

    </header>
    
    
  );
}

export default Cadastrar;