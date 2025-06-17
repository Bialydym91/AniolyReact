    import { useState } from "react";
    import './big-gap.css'; import { Container, Tab, Tabs, Form, Button, Row, Col, Card, Modal, Table, Toast, ToastContainer } from "react-bootstrap";

    const Zasoby = () => {
        const [formData, setFormData] = useState<Record<string, string | boolean>>({
            nazwa: "",
            typ: "",
            kod: "",
            producent: "",
            opis: "",
            kategoria: "",
            model: "",
            nrSerii: "",
            dataZakupu: "",
            zrodloFinansowania: "",
            ilosc: "",
            jednostka: "",
            minIlosc: "",
            maxIlosc: "",
            jednostkaZapasowa: "",
            opakowanie: "",
            dostawca: "",
            kosztJednostkowy: "",
            rabat: "",
            podatek: "",
            lokalizacja: "",
            pomieszczenie: "",
            polka: "",
            regał: "",
            strefa: "",
            obszar: "",
            kodQR: "",
            uwagi_lokalizacja: "",
            dataPrzegladu: "",
            stan: "",
            stanPoprzedni: "",
            stanUwagi: "",
            certyfikat: "",
            gwarancja: "",
            instrukcja: "",
            dokumentacja: "",
            jednorazowy: false,
            sterylny: false,
            dostepnosc: true,
            dataWaznosci: "",
            osobaOdpowiedzialna: "",
            uwagiDodatkowe: "",
            dataOstatniejModyfikacji: "",
            dokumentDodanyPrzez: "",
            stanFizyczny: "",
            uwagiStan: "",
            ostatniUzytkownik: "",
            iloscWydana: "",
            iloscZarezerwowana: "",
            uwagi: "",
            notatkaUwagi: "",
        });

        const [showModal, setShowModal] = useState(false);
        const [showToast, setShowToast] = useState(false);
        const [toastMessage, setToastMessage] = useState("");
        const [activeTab, setActiveTab] = useState("ogolne");
        const [errors, setErrors] = useState<Record<string, string>>({});

        const handleChange = (field: string, value: string | boolean) => {
            setFormData((prev) => ({ ...prev, [field]: value }));
            setErrors((prev) => ({ ...prev, [field]: "" }));
        };

        const validate = () => {
            const newErrors: Record<string, string> = {};

            // Nazwa: min 3 litery, tylko litery
            if (!/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{3,}$/.test(formData.nazwa as string)) {
                newErrors.nazwa = "Nazwa musi mieć min. 3 litery i tylko litery.";
            }

            // Typ zasobu: min 3 litery, tylko litery
            if (!/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{3,}$/.test(formData.typ as string)) {
                newErrors.typ = "Typ musi mieć min. 3 litery i tylko litery.";
            }

            // Kod inwentarzowy: min. 6 znaków, litery lub cyfry
            if (!/^[a-zA-Z0-9]{6,}$/.test(formData.kod as string)) {
                newErrors.kod = "Kod inwentarzowy musi mieć min. 6 znaków (litery lub cyfry).";
            }

            // Producent: min 3 znaki
            if (!formData.producent || (formData.producent as string).trim().length < 3) {
                newErrors.producent = "Producent musi mieć min. 3 znaki.";
            }

            // Opis: min 5 znaków
            if (!formData.opis || (formData.opis as string).trim().length < 5) {
                newErrors.opis = "Opis powinien mieć min. 5 znaków.";
            }

            // Kategoria: min 3 znaki
            if (!formData.kategoria || (formData.kategoria as string).trim().length < 3) {
                newErrors.kategoria = "Kategoria musi mieć min. 3 znaki.";
            }

            // Model: wymagany
            if (!formData.model || (formData.model as string).trim().length === 0) {
                newErrors.model = "Model jest wymagany.";
            }

            // Numer serii: min. 3 znaki, musi zawierać litery i cyfry
            if (
                !formData.nrSerii ||
                (formData.nrSerii as string).trim().length < 3 ||
                !/[a-zA-Z]/.test(formData.nrSerii as string) ||
                !/[0-9]/.test(formData.nrSerii as string)
            ) {
                newErrors.nrSerii = "Numer serii musi mieć min. 3 znaki i zawierać litery oraz cyfry.";
            }

            // Data zakupu: wymagane
            if (!formData.dataZakupu) {
                newErrors.dataZakupu = "Data zakupu jest wymagana.";
            }

            // Źródło finansowania: min 3 znaki
            if (!formData.zrodloFinansowania || (formData.zrodloFinansowania as string).trim().length < 3) {
                newErrors.zrodloFinansowania = "Źródło finansowania musi mieć min. 3 znaki.";
            }

            return newErrors;
        };

        


   
        const handlePreview = () => {
            setShowModal(true);
        };
        const handleSubmit = () => {
            const validationErrors = validate();
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            }

            setErrors({});
            setToastMessage("Dodano: Informacje ogólne");
            setShowToast(true);
        };

        return (
            <Container className="my-4">
                <h2>Zasoby medyczne</h2>
                <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k || "ogolne")} className="big-gap">
                    <Tab eventKey="ogolne" title="Informacje ogólne">
                        <Card body>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nazwa zasobu</Form.Label>
                                            <Form.Control
                                                value={formData.nazwa as string}
                                                onChange={(e) => handleChange("nazwa", e.target.value)}
                                                isInvalid={!!errors.nazwa}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.nazwa}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Typ zasobu</Form.Label>
                                            <Form.Control
                                                value={formData.typ as string}
                                                onChange={(e) => handleChange("typ", e.target.value)}
                                                isInvalid={!!errors.typ}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.typ}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Kod inwentarzowy</Form.Label>
                                            <Form.Control
                                                value={formData.kod as string}
                                                onChange={(e) => handleChange("kod", e.target.value)}
                                                isInvalid={!!errors.kod}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.kod}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Producent</Form.Label>
                                            <Form.Control
                                                value={formData.producent as string}
                                                onChange={(e) => handleChange("producent", e.target.value)}
                                                isInvalid={!!errors.producent}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.producent}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Opis</Form.Label>
                                            <Form.Control
                                                value={formData.opis as string}
                                                onChange={(e) => handleChange("opis", e.target.value)}
                                                isInvalid={!!errors.opis}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.opis}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Kategoria</Form.Label>
                                            <Form.Control
                                                value={formData.kategoria as string}
                                                onChange={(e) => handleChange("kategoria", e.target.value)}
                                                isInvalid={!!errors.kategoria}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.kategoria}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Model</Form.Label>
                                            <Form.Control
                                                value={formData.model as string}
                                                onChange={(e) => handleChange("model", e.target.value)}
                                                isInvalid={!!errors.model}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.model}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Numer serii</Form.Label>
                                            <Form.Control
                                                value={formData.nrSerii as string}
                                                onChange={(e) => handleChange("nrSerii", e.target.value)}
                                                isInvalid={!!errors.nrSerii}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.nrSerii}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Data zakupu</Form.Label>
                                            <Form.Control
                                                type="date"
                                                value={formData.dataZakupu as string}
                                                onChange={(e) => handleChange("dataZakupu", e.target.value)}
                                                isInvalid={!!errors.dataZakupu}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.dataZakupu}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Źródło finansowania</Form.Label>
                                            <Form.Control
                                                value={formData.zrodloFinansowania as string}
                                                onChange={(e) => handleChange("zrodloFinansowania", e.target.value)}
                                                isInvalid={!!errors.zrodloFinansowania}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.zrodloFinansowania}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant="primary" onClick={handleSubmit}>Dodaj zasób</Button>
                            </Form>
                        </Card>
                    </Tab>

                    <Tab eventKey="ilosc" title="Ilość i cena">
                        <Card body>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Ilość</Form.Label>
                                            <Form.Control type="number" value={formData.ilosc as string} onChange={(e) => handleChange("ilosc", e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Minimalna ilość</Form.Label>
                                            <Form.Control value={formData.minIlosc as string} onChange={(e) => handleChange("minIlosc", e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Jednostka miary</Form.Label>
                                            <Form.Control value={formData.jednostka as string} onChange={(e) => handleChange("jednostka", e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Dostawca</Form.Label>
                                            <Form.Control value={formData.dostawca as string} onChange={(e) => handleChange("dostawca", e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Koszt jednostkowy</Form.Label>
                                            <Form.Control value={formData.kosztJednostkowy as string} onChange={(e) => handleChange("kosztJednostkowy", e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Maksymalna ilość</Form.Label>
                                            <Form.Control value={formData.maxIlosc as string} onChange={(e) => handleChange("maxIlosc", e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Jednostka zapasowa</Form.Label>
                                            <Form.Control value={formData.jednostkaZapasowa as string} onChange={(e) => handleChange("jednostkaZapasowa", e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Opakowanie</Form.Label>
                                            <Form.Control value={formData.opakowanie as string} onChange={(e) => handleChange("opakowanie", e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Rabat (%)</Form.Label>
                                            <Form.Control value={formData.rabat as string} onChange={(e) => handleChange("rabat", e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Podatek VAT (%)</Form.Label>
                                            <Form.Control value={formData.podatek as string} onChange={(e) => handleChange("podatek", e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant="primary" onClick={handleSubmit}>Dodaj zasób</Button>
                            </Form>
                        </Card>
                    </Tab>

                    <Tab eventKey="zarzadzanie" title="Zarządzanie i historia">
                        <Card body>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Osoba odpowiedzialna</Form.Label>
                                            <Form.Control value={formData.osobaOdpowiedzialna as string} onChange={(e) => handleChange("osobaOdpowiedzialna", e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Data ostatniej modyfikacji</Form.Label>
                                            <Form.Control type="date" value={formData.dataOstatniejModyfikacji as string} onChange={(e) => handleChange("dataOstatniejModyfikacji", e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Dokument dodany przez</Form.Label>
                                            <Form.Control value={formData.dokumentDodanyPrzez as string} onChange={(e) => handleChange("dokumentDodanyPrzez", e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Stan fizyczny</Form.Label>
                                            <Form.Control value={formData.stanFizyczny as string} onChange={(e) => handleChange("stanFizyczny", e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Uwagi dotyczące stanu</Form.Label>
                                            <Form.Control value={formData.uwagiStan as string} onChange={(e) => handleChange("uwagiStan", e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Ostatni użytkownik</Form.Label>
                                            <Form.Control value={formData.ostatniUzytkownik as string} onChange={(e) => handleChange("ostatniUzytkownik", e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Ilość wydana</Form.Label>
                                            <Form.Control value={formData.iloscWydana as string} onChange={(e) => handleChange("iloscWydana", e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Ilość zarezerwowana</Form.Label>
                                            <Form.Control value={formData.iloscZarezerwowana as string} onChange={(e) => handleChange("iloscZarezerwowana", e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Uwagi dodatkowe</Form.Label>
                                            <Form.Control value={formData.uwagiDodatkowe as string} onChange={(e) => handleChange("uwagiDodatkowe", e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant="primary" onClick={handleSubmit}>Zapisz</Button>
                            </Form>
                        </Card>
                    </Tab>

                    <Tab eventKey="uwagi" title="Uwagi i podgląd">
                        <Card body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Notatka / Uwagi</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        value={formData.notatkaUwagi as string}
                                        onChange={(e) => handleChange("notatkaUwagi", e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="secondary" onClick={handlePreview}>Podgląd</Button>
                                <Button variant="primary" onClick={handleSubmit} className="ms-2">Zapisz dane</Button>
                            </Form>
                        </Card>
                    </Tab>
                </Tabs>

                <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Podgląd zasobu</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered responsive>
                            <tbody>
                                {Object.entries(formData).map(([key, value]) => (
                                    <tr key={key}>
                                        <td>{key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}</td>
                                        <td>{typeof value === "boolean" ? (value ? "✅ Tak" : "❌ Nie") : value || "-"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>Zamknij</Button>
                    </Modal.Footer>
                </Modal>

                <ToastContainer position="bottom-center" className="mb-3">
                    <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                        <Toast.Header><strong className="me-auto">Sukces</strong></Toast.Header>
                        <Toast.Body>{toastMessage}</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Container>
        );
    };

    export default Zasoby;


