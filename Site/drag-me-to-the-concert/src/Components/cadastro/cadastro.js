import React, {useState} from "react";
import { Titulo, Label, InputUsuario } from "../styles/texts";
import { ButtonCadastro } from "../styles/buttons";
import { CadastroContainer, ContainerCaixa, FormRow, CenterDiv, FeedbackContainer } from "../styles/containers";
import "./cadastro.css";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [feedback, setFeedback] = useState({
    message: "",
    type: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    // Atualizar o estado do formulário com os dados do input
    setFormData(prevState => ({...prevState, [name]:value}))
  }

  const handleSubmit = async (e) => {
    // Evitar o comportamento padrão do formulário
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setFeedback({
        message: "Por favor, preencha todos os campos.",
        type: "warning"
      });
      return; 
    }
    try{
      // Enviar os dados do formulário para a API
      const response = await fetch("http://localhost:8080/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if(response.ok){
        navigate('/home');
      }
      else{
        const error = await response.json();
        setFeedback({message: error.message, type: "error"})
      }

      setFormData({ name: "", email: "", password: "" })
    }
    catch(error){
      console.error(error)
      setFeedback({message: "Email já cadastrado", type: "error"})
    }
  }

  return (
    <CenterDiv>
      <Titulo color="white">Bem vindo, faça seu Cadastro</Titulo>
      <ContainerCaixa>
        <form onSubmit={handleSubmit}>
          <CadastroContainer>
            <FormRow>
              <Label>Nome:</Label>
              <InputUsuario type="text" name="name" value={formData.name} onChange={handleChange}/>
            </FormRow>
            <FormRow>
              <Label>Email:</Label>
              <InputUsuario type="email" name="email" value={formData.email} onChange={handleChange}/>
            </FormRow>
            <FormRow>
              <Label>Senha:</Label>
              {/*tem como usar o required mas eu queria que aparecesse o warning*/}
              <InputUsuario type="password" name="password" value={formData.password} onChange={handleChange}/>
            </FormRow>
            <ButtonCadastro type="submit">Cadastrar</ButtonCadastro>
          </CadastroContainer>
          {
          feedback.message && (
            <FeedbackContainer className={`feedback ${feedback.type}`}>
              {feedback.message}
            </FeedbackContainer>
          )
          }
        </form>
      </ContainerCaixa>
    </CenterDiv>
  );
};
export default Cadastro;
