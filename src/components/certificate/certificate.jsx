import cfJavascript from "../../utils/imgs/cfJavascript.png";
import cfAlgoritimo from "../../utils/imgs/cfAlgoritimo.png";
import cfFrontend from "../../utils/imgs/cfFrontend.png";

import { Slide } from "react-awesome-reveal";

import "./certificate.css";

const Certificate = () => {
  return (
    <section id="certificate" className="certificate">
      <div className="container">
        <Slide>
          {" "}
          <h1>CERTIFICADOS</h1>
        </Slide>
        <Slide>
          <div className="grid-3">
            <div className="card-certificate">
              <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-9004d4ef-d259-4bd0-ac3d-ca4f861e8579.jpg" alt="" />
              <a
                target="_blank"
                href="https://www.udemy.com/certificate/UC-9004d4ef-d259-4bd0-ac3d-ca4f861e8579/"
              >
                VERIFICAR
              </a>
            </div>
            <div className="card-certificate">
              <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-9004d4ef-d259-4bd0-ac3d-ca4f861e8579.jpg" alt="" />
              <a
                target="_blank"
                href="https://www.udemy.com/certificate/UC-9004d4ef-d259-4bd0-ac3d-ca4f861e8579/"
              >
                VERIFICAR
              </a>
            </div>
            <div className="card-certificate">
              <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-9004d4ef-d259-4bd0-ac3d-ca4f861e8579.jpg" alt="" />
              <a
                target="_blank"
                href="https://www.udemy.com/certificate/UC-9004d4ef-d259-4bd0-ac3d-ca4f861e8579/"
              >
                VERIFICAR
              </a>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Certificate;
