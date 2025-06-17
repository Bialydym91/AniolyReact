
import { Container, Tabs, Tab, Row, Col, Button } from 'react-bootstrap';
import './eventy.css';

const EventSection = () => {
    return (
        <section id="eventy" style={{ padding: '60px 0', backgroundColor: 'whitesmoke' }}>
            <Container>
                <div className="text-center mb-5">
                    <h2><b>Zabezpieczenie medyczne wydarzeń</b></h2>
                    <p>Wybierz typ wydarzenia i sprawdź, jak możemy Ci pomóc.</p>
                </div>

                <Tabs defaultActiveKey="koncerty" id="event-tabs" className="mb-4 justify-content-center">
                    <Tab eventKey="koncerty" title="🎶 Koncerty i festiwale" className='big-gap'>
                        <Row>
                            <Col md={6}>
                                <h4>Koncerty</h4>
                                <p>
                                    Zapewniamy opiekę medyczną podczas festiwali, imprez masowych i koncertów.
                                </p>
                                <ul>
                                    <li>🚑 Karetka z zespołem</li>
                                    <li>🏥 Mobilny punkt medyczny</li>
                                    <li>📡 Stały kontakt z SOR</li>
                                </ul>   
                            </Col>
                            <Col md={6}>
                                <img src="/image/kom.jpg" alt="koncert" className="img-fluid rounded" />
                            </Col>
                        </Row>
                    </Tab>

                    <Tab eventKey="sport" title="🏃‍♂️ Wydarzenia sportowe" className='big-gap'>
                        <Row>
                            <Col md={6}>
                                <h4>Sportowe eventy</h4>
                                <p>
                                    Biegi, turnieje, zawody – jesteśmy wszędzie tam, gdzie zdrowie uczestników jest najważniejsze.
                                </p>
                                <ul>
                                    <li>👨‍⚕️ Ekipa gotowa do interwencji</li>
                                    <li>⛑️ Punkty pierwszej pomocy</li>
                                    <li>📶 Komunikacja z bazą</li>
                                </ul>
                            </Col>
                            <Col md={6}>
                                <img src="/image/biegi.jpg" alt="sport" className="img-fluid rounded" />
                            </Col>
                        </Row>
                    </Tab>

                    <Tab eventKey="firmowe" title="🏢 Eventy firmowe" className='big-gap'>
                        <Row>
                            <Col md={6}>
                                <h4>Eventy firmowe</h4>
                                <p>
                                    Pikniki, konferencje, integracje – mamy doświadczenie w bezpiecznym wsparciu Twojego wydarzenia.
                                </p>
                                <ul>
                                    <li>🩺 Opieka punktowa lub mobilna</li>
                                    <li>👥 Dostosowanie do liczby uczestników</li>
                                    <li>📋 Wsparcie organizacyjne</li>
                                </ul>
                            </Col>
                            <Col md={6}>
                                <img src="/image/firmowe.jpg" alt="firma" className="img-fluid rounded" />
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>

                <div className="text-center mt-4">
                    <Button variant="danger" size="lg" href="/kontakt">
                        Skontaktuj się z nami
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default EventSection;