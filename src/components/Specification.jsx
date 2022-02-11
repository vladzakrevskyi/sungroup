import React from 'react';
import { Container, Row } from 'react-bootstrap';
import parse from 'html-react-parser';
import laptopContentSixth from '../img/laptop-content-6.png';
import data from "./data.json";


export function Specification() {
    return(
      <Container fluid>
        <Container className="pb-100">
          <Row className="specification">
            <h2 className="text-black mt-5">Specyfikacja</h2>
            <div className="specification-table">
              <table className="table pt-5">
                <tbody>
                    { data.map(post => {
                      return(
                        <tr key={post.id}>
                          <td>
                            {post.name}
                          </td>
                          <td>
                            {parse(post.desc)}
                          </td>
                        </tr>
                      )
                    }) }
                </tbody>
              </table>
            </div>
            <p className="specification-info">Dane techniczne mogą zależeć od regionu</p>

            <h2 className="text-black mt-5">Specyfikacja</h2>
            <img src={laptopContentSixth} alt="" width="100%" className="mt-5"/>
            <p>1. Zasilanie<br />
            2. USB 3.1 (Gen 2, zawsze aktywny)<br />
            3. USB-C (USB + DisplayPort + zasilanie + Thunderbolt™ 3)<br />
            4. Gniazdo słuchawek/mikrofonu<br />
            5. USB 3.1 (Gen 2)</p>
          </Row>
        </Container>
      </Container>
    );
}
