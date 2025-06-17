
import { useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { Zaopatrzenie } from '../types/zaopatrzenie/Zaopatrzenie'
export const Zaopatrzenia = () => {
    const [listaTowarow, setListaTowarow] = useState<Zaopatrzenie[]>([
        {
            kod: "1",
            numer: 1,
            nazwa: "nazwa 1",
            numerSeryjny: 1,
            data: 1,
            typ: "typ",
            data2: 1,
            ilosc: 1
        },
    ]);
    return (
        <Container>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filtrowanie i sortowanie</Accordion.Header>
                    <Accordion.Body className="shadow-sm rounded p-3 bg-light">
                        <Form>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Group>
                                        <Form.Label>ID sprzętu</Form.Label>
                                        <Form.Control type="text" placeholder="np. 112" />
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group>
                                        <Form.Label>Numer seryjny</Form.Label>
                                        <Form.Control type="text" placeholder="np. 555423" />
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group>
                                        <Form.Label>Nazwa</Form.Label>
                                        <Form.Control type="text" placeholder="np. Defibrylator" />
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group>
                                        <Form.Label>Data zakupu</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group>
                                        <Form.Label>Typ sprzętu</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="1">Defibrylator</option>
                                            <option value="2">Oksymetr</option>
                                            <option value="3">Kardiomonitor</option>
                                            <option value="4">Pojazd</option>
                                            <option value="5">Śmigłowiec</option>
                                            <option value="6">Odzież</option>
                                            <option value="7">Inne</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-end gap-2">
                                    <Button variant="secondary">Wyczyść</Button>
                                    <Button variant="primary">Szukaj</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
            <Table striped bordered hover responsive className="text-center align-middle mt-4">
                <thead className="table-secondary">
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Nazwa</th>
                        <th>Nr seryjny</th>
                        <th>Data przeglądu</th>
                        <th>Typ sprzętu</th>
                        <th>Data zakupu</th>
                        <th>Ilość</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>1</td>
                        <td>121</td>
                        <td>Karetka pogotowia</td>
                        <td>112343</td>
                        <td>15/04/2025</td>
                        <td>Pojazd</td>
                        <td>15/12/2015</td>
                        <td>15</td>
                        
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>120</td>
                        <td>Śmigłowiec</td>
                        <td>114554</td>
                        <td>15/04/2025</td>
                        <td>Śmigłowiec</td>
                        <td>22/03/2025</td>
                        <td>1</td>
                       
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>119</td>
                        <td>Nosze</td>
                        <td>145343</td>
                        <td>15/04/2025</td>
                        <td>Inne</td>
                        <td>15/23/2015</td>
                        <td>30</td>
                       
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>118</td>
                        <td>Stetoskop</td>
                        <td>112643</td>
                        <td>12/01/2025</td>
                        <td>Inne</td>
                        <td>12/02/2010</td>
                        <td>10</td>
                        
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>117</td>
                        <td>Motocykl ratunkowy</td>
                        <td>112333</td>
                        <td>16/03/2025</td>
                        <td>Pojazd</td>
                        <td>15/23/2015</td>
                        <td>5</td>
                        
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>116</td>
                        <td>Worek Ambu</td>
                        <td>555423</td>
                        <td>28/02/2025</td>
                        <td>Inne</td>
                        <td>15/11/2015</td>
                        <td>20</td>
                        
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>115</td>
                        <td>Kamizelka ratownictwa medycznego L</td>
                        <td>112999</td>
                        <td>Brak</td>
                        <td>Odzież</td>
                        <td>15/11/2015</td>
                        <td>30</td>
                        
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>111</td>
                        <td>Spodnie ratownictwa medycznego L</td>
                        <td>187643</td>
                        <td>Brak</td>
                        <td>Odzież</td>
                        <td>15/11/2017</td>
                        <td>30</td>
                        
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>112</td>
                        <td>Maski ochronne</td>
                        <td>112376</td>
                        <td>Brak</td>
                        <td>Inne</td>
                        <td>15/08/2018</td>
                        <td>28</td>
                      
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>114</td>
                        <td>Rękawiczki lateksowe jednorazowe L</td>
                        <td>178343</td>
                        <td>Brak</td>
                        <td>Inne</td>
                        <td>15/01/2025</td>
                        <td>200</td>
                        
                    </tr>

                </tbody>
            </Table>
            <br />
            <Row>
                <Col>
                    <Button variant="info" className="me-2">Dodaj</Button>
                    <Button variant="info" className="me-2">Usuń</Button>
                </Col>
            </Row>
            <br />
        </Container>
    )
}