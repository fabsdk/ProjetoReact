import React, {useState} from "react";
import { Titulo, Label, InputUsuario } from "../styles/texts";
import { ButtonLogin, ButtonCadastro, ButtonContainer } from "../styles/buttons";
import { CadastroContainer, ContainerCaixa, FormRow, CenterDiv, FeedbackContainer } from "../styles/containers";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  const handleCadastro = () => {
    navigate('/Cadastro');
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if(response.ok)
        navigate('/home');
      else
        setError('Dados inexistentes');

    } catch (error) {
      setError('Ocorreu um erro ao fazer login');
    }
  }

  return (
    <CenterDiv>
    <Titulo color="white">Showtime: Acesse Seu Espetáculo</Titulo>
    <ContainerCaixa>
        <CadastroContainer>
          <FormRow>
            <Label>Email:</Label>
            <InputUsuario type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
          </FormRow>
          <FormRow>
            <Label>Senha:</Label>
            <InputUsuario type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" onKeyPress={handleKeyPress}/>
          </FormRow>
          <ButtonContainer>
            <ButtonLogin type="submit" onClick={handleLogin}>Login</ButtonLogin>
            <ButtonCadastro onClick={handleCadastro}>Cadastre-se</ButtonCadastro>
          </ButtonContainer>
        </CadastroContainer>
    </ContainerCaixa>
    {error && (
        <FeedbackContainer className="error" style={{width: '32%', margin: '20px auto'}}>
          <p>{error}</p>
        </FeedbackContainer>
      )}
    </CenterDiv>
  );
}

export default Login;
