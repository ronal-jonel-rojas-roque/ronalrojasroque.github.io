import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import '../common/style-footer.css';

function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row className='justify-content-center'>
          <Col md={4} className='footer-column text-center'>
            <div className='column-content'>
              <p>Av. Jiron Ricardo Palma</p>
              <p>Mz3 Lt14 Huánuco, Hco., Perú</p>
            </div>
          </Col>
          <Col md={4} className='footer-column text-center'>
            <div className='column-content d-flex flex-column align-items-center justify-content-center'>
              <p style={{ wordBreak: 'break-word' }}>ronalrojasroquej@gmail.com</p>
              <p>
                <a href="https://wa.me/51989505663" target="_blank" rel="noreferrer" className="icono-wsp">
                  <FaWhatsapp />
                </a> +51 989505663
              </p>
            </div>
          </Col>
          <Col md={4} className='footer-column text-center'>
            <div className='column-content d-flex flex-column align-items-center justify-content-center'>
              <p style={{ wordBreak: 'break-word' }}>
                <a href="https://www.facebook.com/RonalRojasRoqueJ" target="_blank" rel="noopener noreferrer" className='icono-fb'>
                  <FaFacebook />
                </a>
              </p>
              <p style={{ wordBreak: 'break-word' }}>
                <a href="https://www.instagram.com/direct/t/ronalrojasroquej/" target="_blank" rel="noopener noreferrer" className='icono-ins'>
                  <FaInstagram />
                </a>
              </p>
              <p style={{ wordBreak: 'break-word' }}>
                <a href="https://www.facebook.com/RonalRojasRoqueJ" target="_blank" rel="noopener noreferrer" className='icono-youtube'>
                  <FaYoutube />
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={8} className='footer-text'>
            <p>
              <span>Política de privacidad</span>
              <span>Términos y Condiciones</span>
            </p>
            <p>
              <span>© 2035 Creado por Ronal Rojas Roque con ReactJs</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
