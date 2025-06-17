import React, { useState } from "react";
import './big-gap.css';
import {
    Container, Tab, Tabs, Form, Button, Row, Col, Card, Modal, Toast, ToastContainer
} from "react-bootstrap";

interface DanePacjenta {
    imie: string;
    nazwisko: string;
    pesel: string;
    dataUrodzenia: string;
    telefon: string;
    email: string;
    plec: string;
    obywatelstwo: string;
    niepelnoletni: boolean;
}

interface Adres {
    ulica: string;
    kod: string;
    miasto: string;
    wojewodztwo: string;
    kraj: string;
    korespondencyjny: string;
    innyAdres: boolean;
}

interface Platnosc {
    metoda: string;
    kwota: string;
    waluta: string;
    konto: string;
    oplacona: boolean;
}

interface Usluga {
    nazwa: string;
    godziny: string;
    data: string;
    opis: string;
    pilne: boolean;
}

const Faktura = () => {
    const [activeTab, setActiveTab] = useState("danePacjenta");

    const [danePacjenta, setDanePacjenta] = useState<DanePacjenta>({
        imie: "", nazwisko: "", pesel: "", dataUrodzenia: "",
        telefon: "", email: "", plec: "Mężczyzna", obywatelstwo: "", niepelnoletni: false
    });

    const [adres, setAdres] = useState<Adres>({
        ulica: "", kod: "", miasto: "", wojewodztwo: "", kraj: "",
        korespondencyjny: "", innyAdres: false
    });

    const [platnosc, setPlatnosc] = useState<Platnosc>({
        metoda: "Gotówka", kwota: "", waluta: "PLN", konto: "", oplacona: false
    });

    const [usluga, setUsluga] = useState<Usluga>({
        nazwa: "Transport medyczny", godziny: "", data: "", opis: "", pilne: false
    });

    const [uslugi, setUslugi] = useState<Usluga[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [errors, setErrors] = useState<Partial<DanePacjenta>>({});

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
        setter: Function
    ) => {
        const { name, value, type, checked } = e.target;
        setter((prev: any) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const validateDanePacjenta = () => {
        const newErrors: Partial<DanePacjenta> = {};
        if (!danePacjenta.imie || danePacjenta.imie.length < 2 || /\d/.test(danePacjenta.imie)) {
            newErrors.imie = "Imię musi mieć min. 2 litery i nie może zawierać cyfr.";
        }
        if (!danePacjenta.nazwisko || danePacjenta.nazwisko.length < 2 || /\d/.test(danePacjenta.nazwisko)) {
            newErrors.nazwisko = "Nazwisko musi mieć min. 2 litery i nie może zawierać cyfr.";
        }
        if (!/^\d{11}$/.test(danePacjenta.pesel)) {
            newErrors.pesel = "PESEL musi zawierać dokładnie 11 cyfr.";
        }
        if (!/\S+@\S+\.\S+/.test(danePacjenta.email)) {
            newErrors.email = "Nieprawidłowy adres e-mail.";
        }
        if (!/^\d{9}$/.test(danePacjenta.telefon)) {
            newErrors.telefon = "Numer telefonu musi zawierać 9 cyfr.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleDodaj = () => {
        if (activeTab === "danePacjenta") {
            if (!validateDanePacjenta()) return;
            alert("Dodano dane pacjenta!");
        } else if (activeTab === "uslugi") {
            if (!usluga.godziny || !usluga.data) return alert("Uzupełnij dane usługi!");
            setUslugi(prev => [...prev, usluga]);
            setUsluga({ nazwa: "Transport medyczny", godziny: "", data: "", opis: "", pilne: false });
            alert("Dodano usługę!");
        } else if (activeTab === "adres") {
            alert("Dodano adres!");
        } else if (activeTab === "platnosc") {
            alert("Dodano płatność!");
        }
    };

    const handleZapisz = () => setShowToast(true);
    const handlePreview = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const renderDodajButton = () => (
        <Row className="mt-3">
            <Col>
                <Button variant="primary" onClick={handleDodaj}>Dodaj</Button>
            </Col>
        </Row>
    );
        return (
       
                <Container className="my-4">
                    <h2>Formularz Faktury Medycznej</h2>
            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k || "danePacjenta")} className="big-gap">
                <Tab eventKey="danePacjenta" title="Dane pacjenta">
                    <Card body>
                        <Form>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Imię</Form.Label>
                                        <Form.Control type="text" name="imie" value={danePacjenta.imie}
                                            onChange={(e) => handleInputChange(e, setDanePacjenta)} isInvalid={!!errors.imie} />
                                        <Form.Control.Feedback type="invalid">{errors.imie}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Nazwisko</Form.Label>
                                        <Form.Control type="text" name="nazwisko" value={danePacjenta.nazwisko}
                                            onChange={(e) => handleInputChange(e, setDanePacjenta)} isInvalid={!!errors.nazwisko} />
                                        <Form.Control.Feedback type="invalid">{errors.nazwisko}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>PESEL</Form.Label>
                                        <Form.Control type="text" name="pesel" value={danePacjenta.pesel}
                                            onChange={(e) => handleInputChange(e, setDanePacjenta)} isInvalid={!!errors.pesel} />
                                        <Form.Control.Feedback type="invalid">{errors.pesel}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Data urodzenia</Form.Label>
                                        <Form.Control type="date" name="dataUrodzenia" value={danePacjenta.dataUrodzenia}
                                            onChange={(e) => handleInputChange(e, setDanePacjenta)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Telefon</Form.Label>
                                        <Form.Control type="text" name="telefon" value={danePacjenta.telefon}
                                            onChange={(e) => handleInputChange(e, setDanePacjenta)} isInvalid={!!errors.telefon} />
                                        <Form.Control.Feedback type="invalid">{errors.telefon}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" value={danePacjenta.email}
                                            onChange={(e) => handleInputChange(e, setDanePacjenta)} isInvalid={!!errors.email} />
                                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Płeć</Form.Label>
                                        <Form.Select name="plec" value={danePacjenta.plec}
                                            onChange={(e) => handleInputChange(e, setDanePacjenta)}>
                                            <option>Mężczyzna</option>
                                            <option>Kobieta</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label>Obywatelstwo</Form.Label>
                                        <Form.Control type="text" name="obywatelstwo" value={danePacjenta.obywatelstwo}
                                            onChange={(e) => handleInputChange(e, setDanePacjenta)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Check
                                        label="Pacjent niepełnoletni"
                                        name="niepelnoletni"
                                        checked={danePacjenta.niepelnoletni}
                                        onChange={(e) => handleInputChange(e, setDanePacjenta)}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="primary" onClick={handleDodaj}>Dodaj</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Tab>

                {/* Zakładka 2: Adres */}
                <Tab eventKey="adres" title="Adres">
                    <Card body>
                        <Form>
                            <Row className="mb-3">
                                <Col md={8}><Form.Group><Form.Label>Ulica i numer</Form.Label><Form.Control type="text" name="ulica" value={adres.ulica} onChange={e => handleInputChange(e, setAdres)} /></Form.Group></Col>
                                <Col md={4}><Form.Group><Form.Label>Kod pocztowy</Form.Label><Form.Control type="text" name="kod" value={adres.kod} onChange={e => handleInputChange(e, setAdres)} /></Form.Group></Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={6}><Form.Group><Form.Label>Miasto</Form.Label><Form.Control type="text" name="miasto" value={adres.miasto} onChange={e => handleInputChange(e, setAdres)} /></Form.Group></Col>
                                <Col md={6}><Form.Group><Form.Label>Województwo</Form.Label><Form.Control type="text" name="wojewodztwo" value={adres.wojewodztwo} onChange={e => handleInputChange(e, setAdres)} /></Form.Group></Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={6}><Form.Group><Form.Label>Kraj</Form.Label><Form.Control type="text" name="kraj" value={adres.kraj} onChange={e => handleInputChange(e, setAdres)} /></Form.Group></Col>
                                <Col md={6}><Form.Group><Form.Label>Adres korespondencyjny</Form.Label><Form.Control type="text" name="korespondencyjny" value={adres.korespondencyjny} onChange={e => handleInputChange(e, setAdres)} /></Form.Group></Col>
                            </Row>
                            <Row><Col><Form.Check label="Adres do korespondencji inny niż zamieszkania" name="innyAdres" checked={adres.innyAdres} onChange={e => handleInputChange(e, setAdres)} /></Col></Row>
                            {renderDodajButton()}
                        </Form>
                    </Card>
                </Tab>

                {/* Zakładka 3: Usługi */}
                <Tab eventKey="uslugi" title="Usługi">
                    <Card body>
                        <Form>
                            <Row className="mb-3">
                                <Col md={6}><Form.Group><Form.Label>Usługa</Form.Label><Form.Select name="nazwa" value={usluga.nazwa} onChange={e => handleInputChange(e, setUsluga)}>
                                    <option>Transport medyczny</option>
                                    <option>Opieka ratownicza</option>
                                    <option>Wizyty domowe</option>
                                    <option>Konsultacja lekarska</option>
                                    <option>Pomoc psychologiczna</option>
                                    <option>Pomiar EKG</option>
                                    <option>Badanie cukru</option>
                                    <option>Opatrunek</option>
                                    <option>Podanie leku</option>
                                    <option>Inna</option>
                                </Form.Select></Form.Group></Col>
                                <Col md={6}><Form.Group><Form.Label>Ilość godzin</Form.Label><Form.Control type="number" name="godziny" value={usluga.godziny} onChange={e => handleInputChange(e, setUsluga)} /></Form.Group></Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={6}><Form.Group><Form.Label>Data usługi</Form.Label><Form.Control type="date" name="data" value={usluga.data} onChange={e => handleInputChange(e, setUsluga)} /></Form.Group></Col>
                                <Col md={6}><Form.Group><Form.Label>Opis</Form.Label><Form.Control as="textarea" rows={2} name="opis" value={usluga.opis} onChange={e => handleInputChange(e, setUsluga)} /></Form.Group></Col>
                            </Row>
                            <Row><Col><Form.Check label="Tryb pilny" name="pilne" checked={usluga.pilne} onChange={e => handleInputChange(e, setUsluga)} /></Col></Row>
                            {renderDodajButton()}
                        </Form>
                    </Card>
                </Tab>

                {/* Zakładka 4: Płatność */}
                <Tab eventKey="platnosc" title="Płatność">
                    <Card body>
                        <Form>
                            <Row className="mb-3">
                                <Col md={6}><Form.Group><Form.Label>Metoda płatności</Form.Label><Form.Select name="metoda" value={platnosc.metoda} onChange={e => handleInputChange(e, setPlatnosc)}>
                                    <option>Gotówka</option>
                                    <option>Karta</option>
                                    <option>Przelew</option>
                                    <option>BLIK</option>
                                    <option>Faktura</option>
                                </Form.Select></Form.Group></Col>
                                <Col md={6}><Form.Group><Form.Label>Kwota</Form.Label><Form.Control type="number" name="kwota" value={platnosc.kwota} onChange={e => handleInputChange(e, setPlatnosc)} /></Form.Group></Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={6}><Form.Group><Form.Label>Waluta</Form.Label><Form.Select name="waluta" value={platnosc.waluta} onChange={e => handleInputChange(e, setPlatnosc)}>
                                    <option>PLN</option>
                                    <option>EUR</option>
                                    <option>USD</option>
                                </Form.Select></Form.Group></Col>
                                <Col md={6}><Form.Group><Form.Label>Nr konta</Form.Label><Form.Control type="text" name="konto" value={platnosc.konto} onChange={e => handleInputChange(e, setPlatnosc)} /></Form.Group></Col>
                            </Row>
                            <Row><Col><Form.Check label="Faktura opłacona" name="oplacona" checked={platnosc.oplacona} onChange={e => handleInputChange(e, setPlatnosc)} /></Col></Row>
                            {renderDodajButton()}
                        </Form>
                    </Card>
                </Tab>

                {/* Zakładka 5: Podsumowanie */}
                <Tab eventKey="podsumowanie" title="Podsumowanie">
                    <Card body>
                        <p>Zweryfikuj dane przed wygenerowaniem dokumentu.</p>
                        <ul>
                            <li>Pacjent: {danePacjenta.imie} {danePacjenta.nazwisko} – {danePacjenta.pesel}</li>
                            <li>Adres: {adres.ulica}, {adres.kod} {adres.miasto}</li>
                            <li>Płatność: {platnosc.metoda}, {platnosc.kwota} {platnosc.waluta}</li>
                            <li>Usługi: {uslugi.length} pozycji</li>
                        </ul>
                        <Button variant="success" className="me-2">Generuj fakturę</Button>
                        <Button variant="primary" className="me-2" onClick={handleZapisz}>Zapisz</Button>
                        <Button variant="secondary" onClick={handlePreview}>Podgląd</Button>
                        <br /><br />
                    </Card>
                </Tab>
            </Tabs>

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Podgląd faktury</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Dane pacjenta</h5>
                    <p>{danePacjenta.imie} {danePacjenta.nazwisko} – PESEL: {danePacjenta.pesel}</p>
                    <p>Email: {danePacjenta.email}, Telefon: {danePacjenta.telefon}</p>

                    <h5>Adres</h5>
                    <p>{adres.ulica}, {adres.kod} {adres.miasto}, {adres.kraj}</p>

                    <h5>Płatność</h5>
                    <p>{platnosc.metoda}, {platnosc.kwota} {platnosc.waluta}, Konto: {platnosc.konto}</p>

                    <h5>Usługi</h5>
                    {uslugi.length === 0 ? <p>Brak usług</p> : (
                        <ul>
                            {uslugi.map((item, i) => (
                                <li key={i}>{item.nazwa} – {item.godziny}h, {item.data} {item.pilne ? "(pilne)" : ""}</li>
                            ))}
                        </ul>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Zamknij</Button>
                </Modal.Footer>
            </Modal>

            {/* Toast */}
            <ToastContainer position="bottom-end" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Sukces</strong>
                    </Toast.Header>
                    <Toast.Body>Faktura została zapisana!</Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>
    );
};

export default Faktura;
