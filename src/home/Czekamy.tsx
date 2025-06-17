import React, { useState } from 'react';
import { Button, Modal, Form, Container, Row, Col } from 'react-bootstrap';

const CzekamySection = () => {
    const [showRatownikModal, setShowRatownikModal] = useState(false);
    const [showWolontariuszModal, setShowWolontariuszModal] = useState(false);

    const handleCloseRatownik = () => setShowRatownikModal(false);
    const handleShowRatownik = () => setShowRatownikModal(true);

    const handleCloseWolontariusz = () => setShowWolontariuszModal(false);
    const handleShowWolontariusz = () => setShowWolontariuszModal(true);

    return (
        <section id="czekamy" data-searchable>
            <div className="section-header text-center mb-4">
                <h2><b>Czekamy na Ciebie!</b></h2>
            </div>

            <div
                className="background-section"
                style={{
                    backgroundImage: 'url(/image/9.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                }}
            >
                <div
                    className="overlay"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.65)',
                        padding: '60px 20px',
                        color: '#fff',
                        textAlign: 'center',
                        backdropFilter: 'blur(6px)',
                    }}
                >
                    <Container className="services-section">
                        <Row className="justify-content-center">
                            <Col md={10}>
                                <div
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        padding: '40px',
                                        borderRadius: '20px',
                                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                                        maxWidth: '800px',
                                        margin: '0 auto',
                                        animation: 'fadeIn 1s ease-in-out',
                                    }}
                                >
                                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                                        🌟 <b>Masz w sobie chęć niesienia pomocy?</b><br />
                                        Szukamy ludzi z pasją, sercem i odwagą – takich jak Ty.
                                    </p>
                                    <p style={{ fontSize: '1.1rem' }}>
                                        🚑 Niezależnie czy jesteś <b>ratownikiem medycznym</b>, czy chcesz pomóc jako <b>wolontariusz</b> – <br />
                                        Twoja obecność może dosłownie <i>uratować komuś życie</i>.
                                    </p>
                                    <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>
                                        ❤️ <b>Działaj z nami.</b> Bo dobro wraca szybciej, niż myślisz.
                                    </p>

                                    <div className="cta-buttons mt-4 d-flex justify-content-center flex-wrap gap-3">
                                        <Button
                                            variant="danger"
                                            className="cta-btn px-4 py-2"
                                            style={{ fontSize: '1rem' }}
                                            onClick={handleShowRatownik}
                                        >
                                            🙋‍♂️ Zgłoś się jako ratownik
                                        </Button>
                                        <Button
                                            variant="danger"
                                            className="cta-btn px-4 py-2"
                                            style={{ fontSize: '1rem' }}
                                            onClick={handleShowWolontariusz}
                                        >
                                            🤝 Dołącz jako wolontariusz
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* Modal dla Ratownika Medycznego */}
            <Modal show={showRatownikModal} onHide={handleCloseRatownik}>
                <Modal.Header closeButton>
                    <Modal.Title>Zgłoś się jako Ratownik Medyczny</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formRatownikName">
                            <Form.Label>Imię i Nazwisko</Form.Label>
                            <Form.Control type="text" placeholder="Wpisz swoje imię i nazwisko" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formRatownikEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Wpisz swój email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formRatownikPhone">
                            <Form.Label>Numer telefonu</Form.Label>
                            <Form.Control type="tel" placeholder="Wpisz swój numer telefonu" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formRatownikExperience">
                            <Form.Label>Doświadczenie zawodowe</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Opisz swoje doświadczenie" />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Zgłoś się
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Modal dla Wolontariusza */}
            <Modal show={showWolontariuszModal} onHide={handleCloseWolontariusz}>
                <Modal.Header closeButton>
                    <Modal.Title>Dołącz jako Wolontariusz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formWolontariuszName">
                            <Form.Label>Imię i Nazwisko</Form.Label>
                            <Form.Control type="text" placeholder="Wpisz swoje imię i nazwisko" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formWolontariuszEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Wpisz swój email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formWolontariuszPhone">
                            <Form.Label>Numer telefonu</Form.Label>
                            <Form.Control type="tel" placeholder="Wpisz swój numer telefonu" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formWolontariuszAvailability">
                            <Form.Label>Dostępność</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Opisz, jak możesz pomóc" />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Zgłoś się
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </section>
    );
};

export default CzekamySection;