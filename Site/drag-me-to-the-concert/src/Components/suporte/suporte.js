import React, { useState } from "react";
import { Titulo, Label, InputUsuario } from "../styles/texts";
import {ButtonEnviar } from "../styles/buttons";
import { CadastroContainer, ContainerCaixa, FormRow, CenterDiv, FeedbackContainer } from "../styles/containers";
import './suporte.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import InputMask from 'react-input-mask';

const Suporte = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: ""
  });

  const [feedback, setFeedback] = useState({
    message: "",
    type: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleQuillChange = (content, delta, source, editor) => {
    const value = editor.getHTML();
    setFormData(prevState => ({...prevState, description: value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.description) {
      setFeedback({
        message: "Por favor, preencha todos os campos.",
        type: "warning"
      });
      return; 
    }
    try {
      const response = await fetch("http://localhost:8080/addRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFeedback({ message: "Solicitação enviada com sucesso", type: "success" });
        setFormData({ name: "", email: "", phone: "", subject: "", description: "" });
      } else {
        const error = await response.json();
        setFeedback({ message: error.message, type: "error" });
      }
    } catch (error) {
      console.error(error);
      setFeedback({ message: "Erro ao enviar a solicitação.", type: "error" });
    }
  };

  return (
    <CenterDiv>
      <Titulo color="white">Enviar uma Solicitação</Titulo>
      <ContainerCaixa>
        <form onSubmit={handleSubmit}>
          <CadastroContainer>
            <FormRow>
              <Label>Nome:</Label>
              <InputUsuario type="text" name="name" value={formData.name} onChange={handleChange} />
            </FormRow>
            <FormRow>
              <Label>Email:</Label>
              <InputUsuario type="email" name="email" value={formData.email} onChange={handleChange} />
            </FormRow>
            <FormRow>
              <Label>Telefone:</Label>
              <InputMask
                mask="(99) 99999-9999"
                value={formData.phone}
                onChange={handleChange}
              >
                {(inputProps) => <InputUsuario {...inputProps} type="tel" name="phone" />}
              </InputMask>
            </FormRow>
            <FormRow>
              <Label>Assunto:</Label>
              <InputUsuario type="text" name="subject" value={formData.subject} onChange={handleChange} />
            </FormRow>
            <FormRow>
              <Label>Descrição:</Label>
              <ReactQuill className="writeBox" value={formData.description} onChange={handleQuillChange} />
            </FormRow>
            <ButtonEnviar type="submit">Enviar</ButtonEnviar>
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

export default Suporte;
