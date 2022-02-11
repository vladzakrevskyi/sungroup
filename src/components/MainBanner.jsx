import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../img/lenovo-logo-01.svg';
import laptopFirst from '../img/laptop-section-first.png';

export function MainBanner() {
    return(
      <Container fluid className="container-blue">
        <img src={logo} className="logo" alt="logo" width="80"/>
        <Container className="p-100">
          <Row>
            <Col smmd={12} lg={6} className="d-flex flex-column justify-content-center">
              <h1 className="font-gotham text-white">Yoga S740 (14)</h1>
              <h1 className="font-gotham text-white">Wyróżniająca inteligencja</h1>
              <p className="font-gotham text-white line-height-26 mt-5">Z komputerem Yoga S740 możesz pracować i korzystać z rozrywki w eleganckim stylu. Ten imponujący laptop w całkowicie metalowej obudowie działa z pełną mocą procesora Intel® Core™ 10. generacji i oferuje inteligentne, przydatne na co dzień funkcje. Lekki, ale wydajny, zapewnia wysokiej klasy funkcje rozrywkowe dzięki baterii wystarczającej na nawet 15 godzin, efektownemu wyświetlaczowi 4K VESA400 HDR oraz fantastycznemu dźwiękowi z technologią Dolby Atmos®.</p>
            </Col>
            <Col md={12} lg={6} className="banner-image">
              <img src={laptopFirst} alt="laptop" width="100%"/>
            </Col>
          </Row>
        </Container>
      </Container>
    );
}
