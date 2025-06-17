import { Tabs, Tab, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { HeartPulse, Users, ShieldCheck, Activity, HelpCircle } from 'lucide-react';
import './Misja.css';

export function Misja() {
    return (
        <section className="mission-section py-5 bg-light">
            <Container>
                <div className="mission-box shadow-sm p-4 rounded-4 bg-white">
                    <h2 className="mission-heading text-center text-danger mb-4">Nasza Misja</h2>
                    <p className="mission-paragraph text-center fs-5 text-muted mb-5">
                        Naszą misją jest zapewnienie szybkiej, profesjonalnej i empatycznej pomocy medycznej każdemu, kto jej potrzebuje – 24 godziny na dobę, 7 dni w tygodniu. Wierzymy, że zdrowie i bezpieczeństwo pacjenta są najważniejsze.
                    </p>

                    <Tabs defaultActiveKey="wartosci" id="mission-tabs" className="justify-content-center big-gap">

                        <Tab eventKey="wartosci" title="Nasze wartości">
                            <Row className="g-4 text-center mt-3">
                                <Col md={4}>
                                    <Card className="custom-card h-100 shadow-sm">
                                        <Card.Body>
                                            <HeartPulse size={36} className="text-danger mb-3" />
                                            <h5 className="custom-title">Opieka</h5>
                                            <p className="custom-text">Z troską i empatią wspieramy każdego pacjenta w trudnych chwilach.</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card className="custom-card h-100 shadow-sm">
                                        <Card.Body>
                                            <Users size={36} className="text-danger mb-3" />
                                            <h5 className="custom-title">Zespół</h5>
                                            <p className="custom-text">Działamy wspólnie jako doświadczony zespół z pasją i zaangażowaniem.</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card className="custom-card h-100 shadow-sm">
                                        <Card.Body>
                                            <ShieldCheck size={36} className="text-danger mb-3" />
                                            <h5 className="custom-title">Zaufanie</h5>
                                            <p className="custom-text">Budujemy relacje oparte na uczciwości i niezawodności.</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>

                        <Tab eventKey="standardy" title="Standardy jakości">
                            <div className="text-center px-3 mt-4">
                                <p className="custom-text">
                                    Pracujemy zgodnie z najwyższymi standardami medycznymi. Regularnie szkolimy nasz personel i inwestujemy w nowoczesny sprzęt ratunkowy, aby nieść pomoc jak najskuteczniej.
                                </p>
                            </div>
                        </Tab>

                        <Tab eventKey="misja" title="Dlaczego my?">
                            <div className="text-center px-3 mt-4">
                                <p className="custom-text">
                                    Nasz zespół ratowników działa nie tylko szybko – ale i z sercem. Wybierając nas, wybierasz pewność, że jesteś w dobrych rękach, niezależnie od sytuacji.
                                </p>
                                <Button variant="danger" className="mt-3">Dołącz do nas</Button>
                            </div>
                        </Tab>

                        <Tab eventKey="dzialania" title="Nasze działania">
                            <Row className="g-4 text-center mt-3">
                                <Col md={6}>
                                    <Card className="custom-card h-100 shadow-sm">
                                        <Card.Body>
                                            <Activity size={36} className="text-danger mb-3" />
                                            <h5 className="custom-title">Edukacja</h5>
                                            <p className="custom-text">Prowadzimy warsztaty pierwszej pomocy dla szkół, firm i społeczności lokalnych.</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className="custom-card h-100 shadow-sm">
                                        <Card.Body>
                                            <HelpCircle size={36} className="text-danger mb-3" />
                                            <h5 className="custom-title">Wsparcie</h5>
                                            <p className="custom-text">Współpracujemy z instytucjami i organizacjami, by nieść pomoc tam, gdzie jest najbardziej potrzebna.</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>

                    </Tabs>
                </div>
            </Container>
        </section>
    );
}
