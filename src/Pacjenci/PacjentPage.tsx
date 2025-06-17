import { useState } from "react";
import "./big-gap.css";
import {
    Container,
    Tab,
    Tabs,
    Form,
    Button,
    Row,
    Col,
    Card,
    Modal,
    Table,
    Toast,
    ToastContainer,
} from "react-bootstrap";

const Pacjent = () => {
    const [activeTab, setActiveTab] = useState("daneOsobowe");
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.imie || !/^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż]{3,}$/.test(formData.imie))
            newErrors.imie = "Imię musi mieć min. 3 litery i tylko litery.";

        if (!formData.nazwisko || !/^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż]{3,}$/.test(formData.nazwisko))
            newErrors.nazwisko = "Nazwisko musi mieć min. 3 litery i tylko litery.";

        if (!formData.pesel || !/^\d{11}$/.test(formData.pesel))
            newErrors.pesel = "PESEL musi składać się z dokładnie 11 cyfr.";

        if (!formData.telefon || !/^\d{9}$/.test(formData.telefon))
            newErrors.telefon = "Telefon musi zawierać dokładnie 9 cyfr.";

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "Nieprawidłowy adres e-mail.";

        if (formData.kodPocztowy && !/^\d{2}-\d{3}$/.test(formData.kodPocztowy))
            newErrors.kodPocztowy = "Kod pocztowy powinien mieć format 00-000.";
        if (!formData.dataUrodzenia)
            newErrors.dataUrodzenia = "Data urodzenia jest wymagana.";

        if (!formData.plec)
            newErrors.plec = "Wybierz płeć.";

        if (!formData.narodowosc || formData.narodowosc.trim().length < 2)
            newErrors.narodowosc = "Narodowość musi mieć min. 2 znaki.";

        if (!formData.obywatelstwo || formData.obywatelstwo.trim().length < 2)
            newErrors.obywatelstwo = "Obywatelstwo musi mieć min. 2 znaki.";

        if (!formData.stanCywilny)
            newErrors.stanCywilny = "Stan cywilny jest wymagany.";

        return newErrors;
    };

    const handleSave = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setShowToast(true);
    };

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handlePreview = () => setShowModal(true);

    const handleAdd = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        alert(`Dodano dane z zakładki: ${activeTab}`);
    };

    const renderFormGroup = (
        label: string,
        name: string,
        type = "text",
        options?: string[]
    ) => (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            {options ? (
                <Form.Select
                    value={formData[name] || ""}
                    onChange={(e) => handleChange(name, e.target.value)}
                    isInvalid={!!errors[name]}
                >
                    <option value="">Wybierz...</option>
                    {options.map((opt) => (
                        <option key={opt}>{opt}</option>
                    ))}
                </Form.Select>
            ) : (
                <Form.Control
                    type={type}
                    value={formData[name] || ""}
                    onChange={(e) => handleChange(name, e.target.value)}
                    isInvalid={!!errors[name]}
                />
            )}
            {errors[name] && (
                <Form.Control.Feedback type="invalid">{errors[name]}</Form.Control.Feedback>
            )}
        </Form.Group>
    );

    const renderCheck = (label: string, name: string) => (
        <Form.Check
            type="checkbox"
            label={label}
            checked={formData[name] === "tak"}
            onChange={(e) => handleChange(name, e.target.checked ? "tak" : "nie")}
            className="mb-2"
        />
    );

    const renderAddButton = () => (
        <Row className="mt-2">
            <Col>
                <Button variant="success" onClick={handleAdd}>
                    Dodaj
                </Button>
            </Col>
        </Row>
    );


        return (
            <Container className="my-4">
                <h2>Dodaj Pacjenta</h2>
                <Tabs
                    activeKey={activeTab}
                    onSelect={(k) => setActiveTab(k || "daneOsobowe")}
                    className="big-gap"
                >
                    {/* TAB 1: Dane osobowe */}
                    <Tab eventKey="daneOsobowe" title="Dane osobowe">
                        <Card body>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        {renderFormGroup("Imię", "imie")}
                                        {renderFormGroup("PESEL", "pesel")}
                                        {renderFormGroup("Płeć", "plec", "text", ["Mężczyzna", "Kobieta"])}
                                        {renderFormGroup("Narodowość", "narodowosc")}
                                        {renderFormGroup("Miejsce urodzenia", "miejsceUrodzenia")}
                                    </Col>
                                    <Col md={6}>
                                        {renderFormGroup("Nazwisko", "nazwisko")}
                                        {renderFormGroup("Data urodzenia", "dataUrodzenia", "date")}
                                        {renderFormGroup("Obywatelstwo", "obywatelstwo")}
                                        {renderFormGroup("Stan cywilny", "stanCywilny")}
                                        {renderCheck("Pacjent niepełnoletni", "niepelnosprawny")}
                                    </Col>
                                </Row>
                                {renderAddButton()}
                            </Form>
                        </Card>
                    </Tab>

                    {/* TAB 2: Kontakt */}
                    <Tab eventKey="kontakt" title="Kontakt">
                        <Card body>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        {renderFormGroup("Telefon", "telefon")}
                                        {renderFormGroup("Miasto", "miasto")}
                                        {renderFormGroup("Kod pocztowy", "kodPocztowy")}
                                        {renderCheck("Zgoda na kontakt SMS", "kontaktSMS")}
                                        {renderFormGroup("Język kontaktu", "jezyk")}
                                    </Col>
                                    <Col md={6}>
                                        {renderFormGroup("Email", "email")}
                                        {renderFormGroup("Ulica i numer", "ulica")}
                                        {renderFormGroup("Województwo", "wojewodztwo")}
                                        {renderCheck("Zgoda na kontakt email", "kontaktEmail")}
                                        {renderFormGroup("Kraj", "kraj")}
                                    </Col>
                                </Row>
                                {renderAddButton()}
                            </Form>
                        </Card>
                    </Tab>

                    {/* TAB 3: Historia medyczna */}
                    <Tab eventKey="medyczne" title="Historia medyczna">
                        <Card body>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        {renderFormGroup("Choroby przewlekłe", "choroby")}
                                        {renderFormGroup("Leki stałe", "leki")}
                                        {renderFormGroup("Wzrost (cm)", "wzrost")}
                                        {renderFormGroup("Waga (kg)", "waga")}
                                        {renderCheck("Uczulenie na leki", "uczulenieLeki")}
                                    </Col>
                                    <Col md={6}>
                                        {renderFormGroup("Alergie", "alergie")}
                                        {renderFormGroup("Grupa krwi", "grupaKrwi")}
                                        {renderCheck("Niepełnosprawność", "niepelnosprawnosc")}
                                        {renderCheck("Historia operacji", "operacje")}
                                        {renderFormGroup("Inne schorzenia", "inneSchorzenia")}
                                    </Col>
                                </Row>
                                {renderAddButton()}
                            </Form>
                        </Card>
                    </Tab>

                    {/* TAB 4: Opiekun/rodzina */}
                    <Tab eventKey="opiekun" title="Opiekun/rodzina">
                        <Card body>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        {renderFormGroup("Imię opiekuna", "opiekunImie")}
                                        {renderFormGroup("Telefon opiekuna", "opiekunTelefon")}
                                        {renderFormGroup("Email opiekuna", "opiekunEmail")}
                                        {renderCheck("Zgoda opiekuna na leczenie", "zgodaOpiekun")}
                                        {renderFormGroup("Adres opiekuna", "adresOpiekuna")}
                                    </Col>
                                    <Col md={6}>
                                        {renderFormGroup("Nazwisko opiekuna", "opiekunNazwisko")}
                                        {renderFormGroup("Relacja", "relacja", "text", ["Rodzic", "Opiekun", "Inna"])}
                                        {renderCheck("Osoba kontaktowa", "kontaktowa")}
                                        {renderCheck("Współubezpieczony", "wspolubezpieczony")}
                                        {renderFormGroup("Uwagi o opiekunie", "uwagiOpiekun")}
                                    </Col>
                                </Row>
                                {renderAddButton()}
                            </Form>
                        </Card>
                    </Tab>

                    {/* TAB 5: Uwagi */}
                    <Tab eventKey="uwagi" title="Uwagi">
                        <Card body>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        {renderFormGroup("Uwagi dodatkowe", "uwagi")}
                                        {renderFormGroup("Data rejestracji", "rejestracja", "date")}
                                        {renderFormGroup("Źródło informacji", "zrodlo")}
                                    </Col>
                                    <Col md={6}>
                                        {renderFormGroup("Kto wprowadził dane", "wprowadzil")}
                                        {renderCheck("Pacjent aktywny", "aktywny")}
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col md="auto">
                                        <Button variant="secondary" type="button" onClick={handlePreview}>
                                            Podgląd
                                        </Button>
                                    </Col>
                                    <Col md="auto">
                                        <Button variant="primary" type="button" onClick={handleSave}>
                                            Zapisz
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    </Tab>
                </Tabs>

                {/* MODAL */}
                <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Podgląd danych pacjenta</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Pole</th>
                                    <th>Wartość</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(formData).map(([key, value]) => (
                                    <tr key={key}>
                                        <td>{key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}</td>
                                        <td>
                                            {value === "tak" ? "✅ Tak" : value === "nie" ? "❌ Nie" : value || "-"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Zamknij
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* TOAST */}
                <ToastContainer position="bottom-end" className="p-3">
                    <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Zapisano</strong>
                        </Toast.Header>
                        <Toast.Body>Dane pacjenta zostały zapisane!</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Container>
        );
    };

    export default Pacjent;
