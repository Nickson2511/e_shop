import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faMedium, faGithub, faReddit, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <div className="social-icons">
              <a href="https://web.facebook.com/ooh.ole.9" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com/okwenick2511" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/okwenick/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://medium.com/@okwembanickson" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faMedium} />
              </a>
              <a href="https://github.com/Nickson2511" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.reddit.com/user/Nicky2511" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faReddit} />
              </a>
              
              <a href="mailto:okwembanickson@gmail.com">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </div>
            <p>Copyright &copy; shopNick</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
