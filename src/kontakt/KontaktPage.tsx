import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './KontaktPage.css';

export const Kontakt = () => {
    return (
        <Container fluid className="kontakt-tabs">
            <Tabs defaultActiveKey="mapa" id="kontakt-tabs" className="mb-4 custom-tabs">

 
                <Tab className='big-gap' eventKey="mapa" title="📍 Lokalizacja">
                    <div className="tab-section p-4">
                        <h4 className="mb-3" data-searchable>Nasza lokalizacja</h4>
                        <p className="fs-5" data-searchable>
                            Nasza siedziba znajduje się w dogodnej lokalizacji w samym sercu miasta,
                            z łatwym dostępem zarówno komunikacją miejską, jak i samochodem.
                            Z myślą o naszych klientach, na miejscu dostępny jest także parking.
                            <br /><br />
                            Wybierz dogodną formę dojazdu i odwiedź nas, a nasi pracownicy chętnie odpowiedzą na Twoje pytania oraz doradzą w kwestiach, które Cię interesują.
                            <br /><br />
                            <strong>Sprawdź dokładną lokalizację na mapie Google</strong> i zobacz, jak łatwo do nas dotrzeć.
                        </p>
                        <Button variant="danger" href="/lokalizacja" className="mt-3" data-searchable>Sprawdź na mapie</Button>
                    </div>
                </Tab>

     
                <Tab className='big-gap' eventKey="formularz" title="📝 Formularz kontaktowy">
                    <div className="tab-section p-4">
                        <h4 className="text-center mb-4" data-searchable>Wypełnij formularz</h4>
                        <Row className="justify-content-center">
                            <Col md={6}>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" placeholder="Imię i nazwisko" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="tel" placeholder="Telefon" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="email" placeholder="E-mail" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control as="textarea" rows={4} placeholder="Twoja wiadomość" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="consent">
                                        <Form.Check
                                            type="checkbox"
                                            label="Wyrażam zgodę na przetwarzanie danych osobowych w celach marketingowych..."
                                            required
                                        />
                                    </Form.Group>
                                    <Button type="submit" variant="danger" className="w-100" data-searchable>Wyślij</Button>
                                </Form>
                                <br />
                                <p className="text-muted text-center" data-searchable>
                                    Skontaktuj się z nami, a nasz zespół odpowie na Twoje pytania w najkrótszym możliwym czasie.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Tab>

                <Tab className='big-gap' eventKey="kontakt" title="📞 Dane kontaktowe">
                    <div className="tab-section p-4" >
                        <Row>
                            <Col md={4}>
                                <h5 data-searchable>Współpraca z mediami</h5>
                                <p data-searchable>Jeśli jesteś dziennikarzem, blogerem lub reprezentujesz media, zapraszamy do kontaktu pod adresem: <a href="mailto:media@helpnow24.pl">media@helpnow24.pl</a></p>
                                <h5 data-searchable>Współpraca z partnerami</h5>
                                <p>Oferujemy szeroką gamę usług dla naszych partnerów biznesowych. Skontaktuj się z nami, aby dowiedzieć się więcej.</p>
                            </Col>

                   
                            <Col md={4}>
                                <h5>Kontakt</h5>
                                <p><strong>BEP Medica S.A.</strong><br />
                                    Klimczaka 1<br />
                                    02-797 Warszawa</p>
                                <p><strong>NIP:</strong> 9512531254<br />
                                    <strong>REGON:</strong> 520678780<br />
                                    <strong>KRS:</strong> 0000937259</p>
                                <p>24h/7: <strong>+48 883 112 106</strong><br />
                                    Sprzedaż korporacyjna: <strong>+48 883 112 004</strong></p>
                            </Col>

           
                            <Col md={4}>
                                <h5 data-searchable>Newsletter</h5>
                                <p data-searchable>Zapisz się na nasz newsletter, aby być na bieżąco z ofertami, promocjami i nowościami w naszej ofercie.</p>
                                <Form>
                                    <Form.Group className="mb-2">
                                        <Form.Control type="email" placeholder="Podaj swój e-mail" required />
                                    </Form.Group>
                                    <Button variant="danger" type="submit">Zapisz się</Button>
                                </Form>
                                <p className="text-muted mt-2">
                                    Otrzymuj informacje prosto na swoją skrzynkę – nie przegap żadnej okazji!
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Tab>

     
                <Tab className='big-gap' eventKey="godziny" title="⏰ Godziny otwarcia">
                    <div className="tab-section p-4">
                        <h4 className="mb-3" data-searchable>Godziny otwarcia</h4>
                        <ul className="list-unstyled fs-5">
                            <li><strong>Poniedziałek - Piątek:</strong> 09:00 - 18:00</li>
                            <li><strong>Sobota:</strong> 10:00 - 14:00</li>
                            <li><strong>Niedziela:</strong> Zamknięte</li>
                        </ul>
                        <p className="fs-5">Zapraszamy w godzinach otwarcia. Poza tymi godzinami prosimy o kontakt telefoniczny lub za pośrednictwem formularza.</p>
                    </div>
                </Tab>

            </Tabs>
        </Container>
    );
};
