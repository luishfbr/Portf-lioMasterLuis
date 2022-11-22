import emailjs from "@emailjs/browser";
import { Slide } from "react-awesome-reveal";

import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { useState } from "react";

import "./contacts.css";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name == "" || email == "" || message == "") {
      alert("Preencha todos os campos!!");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_apsfl5k",
        "template_onxilc7",
        templateParams,
        "Pm13dir6pOY6H_r1w"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.text, response.status);
          alert("Email enviado!");
        },
        (err) => {
          console.log("Error: ", err);
        }
      );
  }

  return (
    <footer id="contacts" className="contacts">
      {window.innerWidth > 650 ? (
        <Slide>
          <h1 className="title-contacts">CONTACTS</h1>
          <h4>Entre em contato</h4>
          <div className="container-contact">
            <form onSubmit={(e) => sendEmail(e)}>
              <input
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Digite seu E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Mensagem"
                name=""
                id=""
                cols="40"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <input className="button-form" type="submit" value="Enviar" />
            </form>

            <div className="box-links">
              <div className="email lnk">
                <a href="mailto:luishenriquefonte223@gmail.com">
                  <HiOutlineMail />
                </a>
                <span>E-MAIL</span>
                <a href="mailto:luishenriquefonte223@gmail.com">
                  luishenriquefonte223@gmail.com
                </a>
              </div>

              <div className="telephone lnk">
                <a target="_blank" href="https://wa.me/+5534988732949">
                  <AiOutlinePhone />
                </a>
                <span>TELEFONE</span>
                <a target="_blank" href="https://wa.me/+5534988732949">
                  (34) 988732949
                </a>
              </div>
              <div className="linkedin lnk">
                <a href="https://www.linkedin.com/in/luishenriquedev/">
                  <GrLinkedinOption />
                </a>
                <span>LINKEDIN</span>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/luishenriquedev/"
                >
                  @luishenriquedev
                </a>
              </div>
              <div className="github lnk">
                <a target="_blank" href="https://github.com/luishfbr">
                  <FiGithub />
                </a>
                <span>GITHUB</span>
                <a target="_blank" href="https://github.com/luishfbr">
                  @luishfbr
                </a>
              </div>
            </div>
          </div>{" "}
        </Slide>
      ) : (
        <>
          <h1 className="">CONTACTS</h1>
          <h4>Entre em contato</h4>
          <div className="container-contact">
            <form onSubmit={(e) => sendEmail(e)}>
              <input
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Digite seu E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Mensagem"
                name=""
                id=""
                cols="40"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <input className="button-form" type="submit" value="Enviar" />
            </form>

            <div className="box-links">
              <div className="email lnk">
                <a href="mailto:luishenriquefonte223@gmail.com">
                  <HiOutlineMail />
                </a>
                <span>E-MAIL</span>
                <a href="mailto:luishenriquefonte223@gmail.com">
                  luishenriquefonte223@gmail.com
                </a>
              </div>

              <div className="telephone lnk">
                <a target="_blank" href="https://wa.me/+5534988732949">
                  <AiOutlinePhone />
                </a>
                <span>TELEFONE</span>
                <a target="_blank" href="https://wa.me/+5534988732949">
                  (34) 988732949
                </a>
              </div>
              <div className="linkedin lnk">
                <a href="https://www.linkedin.com/in/luishenriquedev/">
                  <GrLinkedinOption />
                </a>
                <span>LINKEDIN</span>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/luishenriquedev/"
                >
                  @luishenriquedev
                </a>
              </div>
              <div className="github lnk">
                <a target="_blank" href="https://github.com/luishfbr">
                  <FiGithub />
                </a>
                <span>GITHUB</span>
                <a target="_blank" href="https://github.com/luishfbr">
                  @luishfbr
                </a>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </footer>
  );
};

export default Contacts;
