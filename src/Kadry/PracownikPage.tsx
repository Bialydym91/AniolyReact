    import React, { useState } from "react";
import './big-gap.css';
import {
    Container, Tabs, Tab, Form, Button, Row, Col, Card,
    Modal, Table, Toast, ToastContainer
} from "react-bootstrap";

const Pracownik = () => {
    const [activeTab, setActiveTab] = useState("daneOsobowe");
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: "" }));
    };

    const validateDaneOsobowe = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.imie || formData.imie.length < 2 || /\d/.test(formData.imie)) {
            newErrors.imie = "Imię musi mieć min. 2 litery i nie może zawierać cyfr.";
        }
        if (!formData.nazwisko || formData.nazwisko.length < 2 || /\d/.test(formData.nazwisko)) {
            newErrors.nazwisko = "Nazwisko musi mieć min. 2 litery i nie może zawierać cyfr.";
        }
        if (!/^\d{11}$/.test(formData.pesel || "")) {
            newErrors.pesel = "PESEL musi składać się z dokładnie 11 cyfr.";
        }
        if (!/\S+@\S+\.\S+/.test(formData.email || "")) {
            newErrors.email = "Nieprawidłowy adres e-mail.";
        }
        if (!/^\d{9}$/.test(formData.telefon || "")) {
            newErrors.telefon = "Telefon musi zawierać dokładnie 9 cyfr.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAdd = () => {
        if (activeTab === "daneOsobowe") {
            if (!validateDaneOsobowe()) return;
        }
        alert("Dodano dane z zakładki: " + activeTab);
    };

    const handleSave = () => {
        setShowToast(true);
    };

    const handlePreview = () => {
        setShowModal(true);
    };

    const renderFormGroup = (label: string, name: string, type = "text", options?: string[]) => (
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
            <Form.Control.Feedback type="invalid">{errors[name]}</Form.Control.Feedback>
        </Form.Group>
    );

    const renderAddButton = () => (
        <Row className="mt-2">
            <Col>
                <Button variant="success" onClick={handleAdd}>Dodaj</Button>
            </Col>
        </Row>
    );

    const formatLabel = (key: string) =>
        key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase());

    const formatValue = (value: string) => {
        if (value === "tak") return "✅ Tak";
        if (value === "nie") return "❌ Nie";
        return value || "-";
    };


    return (
        <Container className="my-4">
            <h2>Dodaj Pracownika</h2>
            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k || "daneOsobowe")} className="big-gap">

                {/* TABS 1: Dane osobowe */}
                <Tab eventKey="daneOsobowe" title="Dane osobowe">
                    <Card body>
                        <Form>
                            <Row><Col md={6}>{renderFormGroup("Imię", "imie")}</Col><Col md={6}>{renderFormGroup("Nazwisko", "nazwisko")}</Col></Row>
                            <Row><Col md={6}>{renderFormGroup("PESEL", "pesel")}</Col><Col md={6}>{renderFormGroup("Data urodzenia", "urodzenie", "date")}</Col></Row>
                            <Row><Col md={6}>{renderFormGroup("Płeć", "plec", "text", ["Mężczyzna", "Kobieta"])}</Col><Col md={6}>{renderFormGroup("Stan cywilny", "stanCywilny", "text", ["Kawaler/Panna", "Żonaty/Zamężna", "Rozwiedziony/a"])}</Col></Row>
                            <Row><Col md={6}>{renderFormGroup("Telefon", "telefon")}</Col><Col md={6}>{renderFormGroup("Email", "email", "email")}</Col></Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Check
                                        type="checkbox"
                                        label="Zgoda na przetwarzanie danych"
                                        checked={formData.zgodaDane === "tak"}
                                        onChange={(e) => handleChange("zgodaDane", e.target.checked ? "tak" : "nie")}
                                    />
                                </Col>
                            </Row>
                            {renderAddButton()}
                        </Form>
                    </Card>
                </Tab>

                {/* TABS 2: Adres */}
                <Tab eventKey="adres" title="Adres">
                    <Card body>
                        <Form>
                            <Row><Col md={6}>{renderFormGroup("Ulica", "ulica")}</Col><Col md={6}>{renderFormGroup("Numer domu/mieszkania", "numerDomu")}</Col></Row>
                            <Row><Col md={6}>{renderFormGroup("Kod pocztowy", "kodPocztowy")}</Col><Col md={6}>{renderFormGroup("Miasto", "miasto")}</Col></Row>
                            <Row><Col md={6}>{renderFormGroup("Województwo", "wojewodztwo")}</Col><Col md={6}>{renderFormGroup("Kraj", "kraj")}</Col></Row>
                            <Row><Col md={6}>{renderFormGroup("Adres korespondencyjny", "adresKorespondencyjny")}</Col></Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Check
                                        type="checkbox"
                                        label="Adres tymczasowy"
                                        checked={formData.adresTymczasowy === "tak"}
                                        onChange={(e) => handleChange("adresTymczasowy", e.target.checked ? "tak" : "nie")}
                                    />
                                </Col>
                            </Row>
                            {renderAddButton()}
                        </Form>
                    </Card>
                </Tab>

                {/* TABS 3: Zatrudnienie */}
                <Tab eventKey="zatrudnienie" title="Zatrudnienie">
                    <Card body>
                        <Form>
                            <Row><Col md={6}>{renderFormGroup("Stanowisko", "stanowisko")}</Col><Col md={6}>{renderFormGroup("Dział", "dzial")}</Col></Row>
                            <Row><Col md={6}>{renderFormGroup("Rodzaj umowy", "rodzajUmowy", "text", ["Umowa o pracę", "Zlecenie", "B2B"])}</Col><Col md={6}>{renderFormGroup("Wymiar etatu", "etat", "text", ["Pełny", "0.75", "0.5"])}</Col></Row>
                            <Row><Col md={6}>{renderFormGroup("Data zatrudnienia", "dataZatrudnienia", "date")}</Col><Col md={6}>{renderFormGroup("Data zakończenia umowy", "dataZakonczenia", "date")}</Col></Row>
                            <Row><Col md={6}>{renderFormGroup("Bezterminowa", "bezterminowa", "text", ["Tak", "Nie"])}</Col></Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Check
                                        type="checkbox"
                                        label="Dostęp do systemu"
                                        checked={formData.dostepSystem === "tak"}
                                        onChange={(e) => handleChange("dostepSystem", e.target.checked ? "tak" : "nie")}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Form.Check
                                        type="checkbox"
                                        label="Karta wejściowa"
                                        checked={formData.karta === "tak"}
                                        onChange={(e) => handleChange("karta", e.target.checked ? "tak" : "nie")}
                                    />
                                </Col>
                            </Row>
                            {renderAddButton()}
                        </Form>
                    </Card>
                </Tab>

                {/* TABS 4: Dokumenty */}
                <Tab eventKey="dokumenty" title="Dokumenty">
                    <Card body>
                        <Form>
                            <Row><Col md={6}>{renderFormGroup("Numer dowodu osobistego", "dowod")}</Col><Col md={6}>{renderFormGroup("Data ważności dowodu", "dowodWaznosc", "date")}</Col></Row>
                            <Row><Col md={6}>{renderFormGroup("Numer paszportu", "paszport")}</Col><Col md={6}>{renderFormGroup("Data ważności paszportu", "paszportWaznosc", "date")}</Col></Row>
                            <Row><Col md={6}>{renderFormGroup("Numer konta bankowego", "konto")}</Col><Col md={6}>{renderFormGroup("Urząd skarbowy", "urzadSkarbowy")}</Col></Row>
                            <Row><Col md={6}>{renderFormGroup("Numer NIP", "nip")}</Col><Col md={6}>{renderFormGroup("Numer ubezpieczenia", "ubezpieczenie")}</Col></Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Check
                                        type="checkbox"
                                        label="Dokumenty dostarczone"
                                        checked={formData.dokumentyDostarczone === "tak"}
                                        onChange={(e) => handleChange("dokumentyDostarczone", e.target.checked ? "tak" : "nie")}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Form.Check
                                        type="checkbox"
                                        label="Oryginały w teczce"
                                        checked={formData.oryginaly === "tak"}
                                        onChange={(e) => handleChange("oryginaly", e.target.checked ? "tak" : "nie")}
                                    />
                                </Col>
                            </Row>
                            {renderAddButton()}
                        </Form>
                    </Card>
                </Tab>

                {/* TABS 5: Uwagi */}
                <Tab eventKey="uwagi" title="Uwagi">
                    <Card body>
                        <Form>
                            <Row><Col md={6}>{renderFormGroup("Uwagi dodatkowe", "uwagi", "text")}</Col></Row>
                            <Row><Col md={6}>{renderFormGroup("Data wprowadzenia danych", "dataWprowadzenia", "date")}</Col><Col md={6}>{renderFormGroup("Wprowadził", "wprowadzil")}</Col></Row>
                            <Row className="mt-3">
                                <Col md="auto">
                                    <Button variant="secondary" type="button" onClick={handlePreview}>Podgląd</Button>
                                </Col>
                                <Col md="auto">
                                    <Button variant="primary" type="button" onClick={handleSave}>Zapisz</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Tab>
            </Tabs>

            {/* MODAL */}
            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Podgląd danych pracownika</Modal.Title>
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
                                    <td>{formatLabel(key)}</td>
                                    <td>{formatValue(value)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Zamknij</Button>
                </Modal.Footer>
            </Modal>

            {/* TOAST */}
            <ToastContainer position="bottom-end" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Sukces</strong>
                    </Toast.Header>
                    <Toast.Body>Dane zostały zapisane!</Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>
    );
};

export default Pracownik;
