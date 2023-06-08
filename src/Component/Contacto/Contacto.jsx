import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./Contacto.module.css";

export const Contacto = () => {
  const [menssage, setMenssage] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const handeMenssage = (e) => {
    setMenssage({ ...menssage, [e.target.name]: e.target.value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const result = window.confirm("¿Estás seguro de que deseas continuar?");
    if (result) {
      alert("Haz hecho clic en Aceptar");
      if (!menssage.user_name || !menssage.user_email || !menssage.message) {
        return alert("Mensaje no enviado debe llenar todos los campos :(");
      } else {
        emailjs
          .sendForm(
            "service_cftk0cb",
            "template_rj6jj8c",
            form.current,
            "h7SAC8xDH0EE8Ek1N"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        setMenssage({
          user_name: "",
          user_email: "",
          message: "",
        });
        return alert("Mensaje enviado... :)");
      }
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={style.containerFrom}>
      <h3>Contacta me:</h3>
      <div className={style.inputNameC}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          name="user_name"
          value={menssage.user_name}
          onChange={handeMenssage}
          className={style.inputName}
        />
      </div>
      <div className={style.inputEmailC}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          name="user_email"
          value={menssage.user_email}
          onChange={handeMenssage}
          className={style.inputEmail}
        />
      </div>

      <div className={style.inputMessageC}>
        <label>Message</label>
        <textarea
          rows="5"
          name="message"
          placeholder="Escribe tu mensaje aquí"
          value={menssage.message}
          onChange={handeMenssage}
          className={style.inputMessage}
        />
      </div>
      <button type="submit" value="Send" className={style.buttonSend}>
        Enviar
      </button>
    </form>
  );
};
