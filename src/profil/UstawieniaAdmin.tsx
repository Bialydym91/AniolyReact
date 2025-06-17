import React, { useState } from "react";
import "./big-gap.css";
import {
    Container,
    Tabs,
    Tab,
    Form,
    Button,
    Row,
    Col,
    Card,
    Toast,
    ToastContainer,
} from "react-bootstrap";

const UstawieniaAdmin = () => {
    const [formData, setFormData] = useState<Record<string, string | boolean>>({});
    const [showToast, setShowToast] = useState(false);

    const handleChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        setShowToast(true);
        console.log("Zapisano dane:", formData);
    };

    return (
        <Container className="my-4">
            <h2>Panel użytkownika / ustawienia</h2>
            <Tabs defaultActiveKey="dane" className="big-gap">
                <Tab eventKey="dane" title="Dane podstawowe">
                    <Card body>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Imię</Form.Label>
                                        <Form.Control onChange={(e) => handleChange("imie", e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control onChange={(e) => handleChange("email", e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Login</Form.Label>
                                        <Form.Control onChange={(e) => handleChange("login", e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Telefon</Form.Label>
                                        <Form.Control onChange={(e) => handleChange("telefon", e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Data urodzenia</Form.Label>
                                        <Form.Control type="date" onChange={(e) => handleChange("urodziny", e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nazwisko</Form.Label>
                                        <Form.Control onChange={(e) => handleChange("nazwisko", e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Płeć</Form.Label>
                                        <Form.Select onChange={(e) => handleChange("plec", e.target.value)}>
                                            <option>Mężczyzna</option>
                                            <option>Kobieta</option>
                                            <option>Inna</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Język preferowany</Form.Label>
                                        <Form.Control onChange={(e) => handleChange("jezyk", e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Data utworzenia</Form.Label>
                                        <Form.Control type="date" onChange={(e) => handleChange("dataUtworzenia", e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Ostatnie logowanie</Form.Label>
                                        <Form.Control type="datetime-local" onChange={(e) => handleChange("ostatnieLogowanie", e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button onClick={handleSubmit}>Zapisz</Button>
                        </Form>
                    </Card>
                </Tab>

                <Tab eventKey="rola" title="Uprawnienia i rola">
                    <Card body>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Rola</Form.Label>
                                        <Form.Select onChange={(e) => handleChange("rola", e.target.value)}>
                                            <option>Admin</option>
                                            <option>Kierownik</option>
                                            <option>Lekarz</option>
                                            <option>Recepcja</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check label="Dostęp do magazynu" onChange={(e) => handleChange("magazyn", e.target.checked)} />
                                        <Form.Check label="Dostęp do faktur" onChange={(e) => handleChange("faktury", e.target.checked)} />
                                        <Form.Check label="Dostęp do kursów" onChange={(e) => handleChange("kursy", e.target.checked)} />
                                        <Form.Check label="Dostęp do pacjentów" onChange={(e) => handleChange("pacjenci", e.target.checked)} />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Poziom dostępu</Form.Label>
                                        <Form.Control onChange={(e) => handleChange("poziom", e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Dodatkowa rola</Form.Label>
                                        <Form.Control onChange={(e) => handleChange("rolaDodatkowa", e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Status konta</Form.Label>
                                        <Form.Select onChange={(e) => handleChange("statusKonta", e.target.value)}>
                                            <option>Aktywny</option>
                                            <option>Zablokowany</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button onClick={handleSubmit}>Zapisz uprawnienia</Button>
                        </Form>
                    </Card>
                </Tab>

                <Tab eventKey="bezpieczenstwo" title="Bezpieczeństwo">
                    <Card body>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nowe hasło</Form.Label>
                                        <Form.Control type="password" onChange={(e) => handleChange("haslo", e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Potwierdź hasło</Form.Label>
                                        <Form.Control type="password" onChange={(e) => handleChange("hasloPotwierdz", e.target.value)} />
                                    </Form.Group>
                                    <Form.Check label="Wymuś zmianę przy logowaniu" onChange={(e) => handleChange("wymus", e.target.checked)} />
                                    <Form.Check label="Dwuetapowa weryfikacja" onChange={(e) => handleChange("2fa", e.target.checked)} />
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email odzyskiwania</Form.Label>
                                        <Form.Control onChange={(e) => handleChange("emailBackup", e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Historia zmian hasła</Form.Label>
                                        <Form.Control as="textarea" rows={3} onChange={(e) => handleChange("historiaHasel", e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button onClick={handleSubmit}>Zmień hasło</Button>
                        </Form>
                    </Card>
                </Tab>

                <Tab eventKey="status" title="Status i blokada">
                    <Card body>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Powód blokady</Form.Label>
                                        <Form.Control onChange={(e) => handleChange("powod", e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Data blokady</Form.Label>
                                        <Form.Control type="date" onChange={(e) => handleChange("blokadaData", e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Ostatnie działania</Form.Label>
                                        <Form.Control onChange={(e) => handleChange("dzialania", e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Historia logowań</Form.Label>
                                        <Form.Control as="textarea" rows={3} onChange={(e) => handleChange("logowania", e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Liczba nieudanych prób</Form.Label>
                                        <Form.Control type="number" onChange={(e) => handleChange("bledy", e.target.value)} />
                                    </Form.Group>
                                    <Form.Check label="Zgoda RODO" onChange={(e) => handleChange("rodo", e.target.checked)} />
                                </Col>
                            </Row>
                            <Button onClick={handleSubmit}>Zapisz</Button>
                        </Form>
                    </Card>
                </Tab>
            </Tabs>

            {/* Toast z potwierdzeniem */}
            <ToastContainer position="bottom-end" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Zapisano</strong>
                    </Toast.Header>
                    <Toast.Body>Ustawienia zostały zapisane!</Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>
    );
};

export default UstawieniaAdmin;
