import React, { useState } from 'react';
import { Card, Button, ListGroup, Container, Accordion, Nav, Form } from 'react-bootstrap';
import { useUser } from '../user/UserContext';
import BiznesowyPakiet from '../abonament/BiznesowyPakiet';
import RodzinnyPakiet from '../abonament/RodzinnyPakiet';
import IndywidualnyPakiet from '../abonament/Indywidualny';

const AbonamentDetails = () => {
    const [activeTab, setActiveTab] = useState('indywidualny');
    const [showForm, setShowForm] = useState(false);
    const { user } = useUser();

    const handleFormToggle = () => {
        setShowForm(prev => !prev);
    };

    const renderAbonamentContent = (type) => {
        switch (type) {
            case 'indywidualny':
                return (
                    <>
                        <h5>Wybierz pakiet indywidualny</h5>
                        <div className="d-flex flex-wrap gap-3 mb-4">
                            <IndywidualnyPakiet
                                title="Pakiet Podstawowy"
                                emoji="💊"
                                description="Opieka medyczna 24/7, wizyty domowe, recepty online"
                                details="Wizyta domowa, diagnostyka podstawowa, recepty i teleporady"
                                price="129 zł / miesiąc"
                            />
                            <IndywidualnyPakiet
                                title="Pakiet Premium"
                                emoji="🚑"
                                description="Rozszerzona opieka medyczna, priorytetowy dostęp"
                                details="Szybki dostęp, zaawansowana diagnostyka, stała konsultacja"
                                price="199 zł / miesiąc"
                            />
                            <IndywidualnyPakiet
                                title="Pakiet VIP"
                                emoji="👑"
                                description="Pełna opieka ze specjalistami i prywatnością"
                                details="Prywatne wizyty, pełna diagnostyka, konsultacje online"
                                price="299 zł / miesiąc"
                            />
                        </div>
                        <h6 className="text-muted" data-searchable>
                            🏥 Wszystkie pakiety obejmują pełną opiekę medyczną dostępną 24/7.
                        </h6>
                    </>
                );
            case 'rodzinny':
                return (
                    <>
                        <h5 data-searchable>Wybierz pakiet rodzinny</h5>
                        <div className="d-flex flex-wrap gap-3 mb-4">
                            <RodzinnyPakiet
                                title="Rodzina Standard"
                                emoji="👨‍👩‍👧‍👦"
                                description="Opieka dla 4 osób — wizyty, badania, teleporady"
                                details="W pakiecie: wizyty domowe, diagnostyka, recepty, infolinia medyczna 24/7"
                                price="299 zł / miesiąc"
                            />
                            <RodzinnyPakiet
                                title="Rodzina Plus"
                                emoji="👨‍👩‍👧‍👦➕"
                                description="Opieka dla 6 osób + priorytetowa obsługa"
                                details="Dodatkowo: profilaktyka coroczna, pierwszeństwo zgłoszeń, elastyczne godziny wizyt"
                                price="389 zł / miesiąc"
                            />
                        </div>
                        <h6 className="text-muted" data-searchable>
                            🏥 Usługi dostępne 24/7. Możliwość rozszerzenia pakietu o dodatkowych członków rodziny.
                        </h6>
                    </>
                );
            case 'biznesowy':
                return (
                    <>
                        <h5 data-searchable>Wybierz pakiet biznesowy</h5>
                        <div className="d-flex flex-wrap gap-3 mb-4">
                            <BiznesowyPakiet
                                title="Pakiet 5+"
                                emoji="👥"
                                description="Dla min. 5 pracowników. Pełna opieka medyczna w Twojej firmie."
                                details="Pakiet dla 5 pracowników – obejmuje wizyty, konsultacje, infolinię firmową"
                                price="499 zł / miesiąc"
                            />
                            <BiznesowyPakiet
                                title="Pakiet Premium"
                                emoji="🏥"
                                description="Dla firm szukających rozszerzonych benefitów zdrowotnych."
                                details="Pakiet rozszerzony – profilaktyka, szkolenia, opieka psychologiczna"
                                price="699 zł / miesiąc"
                            />
                            <BiznesowyPakiet
                                title="Pakiet Custom"
                                emoji="⚙️"
                                description="Stwórz własny pakiet medyczny dostosowany do potrzeb zespołu."
                                details="Elastyczne pakiety – od 10 osób, możliwość dopasowania usług."
                                price="Indywidualna wycena"
                            />
                        </div>
                        <h6 className="text-muted" data-searchable>
                            📞 Skontaktuj się z nami, by omówić szczegóły i otrzymać ofertę dostosowaną do Twojej firmy.
                        </h6>
                    </>
                );
            default:
                return null;
        }
    };

    if (!user) {
        return (
            <Container className="py-5 text-center">
                <Card className="shadow">
                    <Card.Body>
                        <Card.Title className="fs-3 text-danger">Musisz być zalogowany</Card.Title>
                        <Card.Text>Aby uzyskać dostęp do szczegółów abonamentu, musisz się zalogować.</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <Card className="shadow">
                <Card.Body>
                    <Card.Title className="fs-3 text-danger">Abonament – Wybierz swój pakiet</Card.Title>
                    <Card.Text>
                        Chcesz mieć pomoc <strong>24/7</strong> i pewność, że nasz zespół dojedzie do Ciebie w każdej chwili?
                        Zobacz nasze pakiety i wybierz ten, który najbardziej Ci odpowiada.
                    </Card.Text>

                    <Nav variant="pills" className="justify-content-center mb-4" activeKey={activeTab} onSelect={setActiveTab}>
                        <Nav.Item>
                            <Nav.Link eventKey="indywidualny">👤 Indywidualny</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="rodzinny">👪 Rodzinny</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="biznesowy">🏢 Biznesowy</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    {renderAbonamentContent(activeTab)}

                    <div className="d-flex gap-3 flex-wrap my-4">
                        <Button variant="danger" href="tel:883112106" data-searchable>📞 Zadzwoń 883 112 106</Button>
                        <Button variant="outline-dark" onClick={handleFormToggle}>
                            📝 Wypełnij formularz
                        </Button>
                    </div>

                    {showForm && (
                        <div className="d-flex justify-content-center">
                            <Form className="mb-4 border rounded p-4 bg-light" style={{ maxWidth: '600px', width: '100%' }}>
                            <h5 className="mb-3 text-dark" data-searchable>Formularz zgłoszeniowy</h5>
                            <Form.Group className="mb-3">
                                <Form.Label>Imię</Form.Label>
                                <Form.Control type="text" placeholder="Wpisz imię" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Nazwisko</Form.Label>
                                <Form.Control type="text" placeholder="Wpisz nazwisko" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label data-searchable>Telefon kontaktowy</Form.Label>
                                <Form.Control type="tel" placeholder="Np. 883112106" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Wiadomość</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Napisz wiadomość..." />
                            </Form.Group>
                            <Button variant="danger" type="submit" data-searchable>
                                📤 Wyślij
                            </Button>
                            </Form>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AbonamentDetails;
