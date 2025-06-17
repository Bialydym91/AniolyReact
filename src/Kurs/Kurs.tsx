import { useState } from 'react';
import { Tab, Tabs, Form, Button, Row, Col, Modal, Toast, ToastContainer } from 'react-bootstrap';

interface Kurs {
    nazwaKursu: string;
    poziomKursu: string;
    opisKursu: string;
    jezykKursu: string;
    celKursu: string;
    wymagania: string;
    certyfikat: string;
    czasTrwania: string;
    dataRozpoczecia: string;
    cenaKursu: string;
}

export function Kurs() {
    const [key, setKey] = useState('tab1');
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const [nazwaKursu, setNazwaKursu] = useState('');
    const [poziomKursu, setPoziomKursu] = useState('');
    const [opisKursu, setOpisKursu] = useState('');
    const [jezykKursu, setJezykKursu] = useState('');
    const [celKursu, setCelKursu] = useState('');
    const [czasTrwania, setCzasTrwania] = useState('');
    const [wymagania, setWymagania] = useState('');
    const [certyfikat, setCertyfikat] = useState('');
    const [cenaKursu, setCenaKursu] = useState('');
    const [dataRozpoczecia, setDataRozpoczecia] = useState('');

    const [zapisanyKurs, setZapisanyKurs] = useState<Kurs | null>(null);
    const [errors, setErrors] = useState<Partial<Record<keyof Kurs, string>>>({});

    const onlyRepeatedChar = (value: string) => /^(.)\1+$/.test(value);
    const isNumericOnly = (value: string) => /^[0-9]+$/.test(value);
    const minWords = (value: string, count: number) => value.trim().split(/\s+/).length < count;
    const containsLetters = (value: string) => /[a-zA-Z]/.test(value);

    const validateForm = () => {
        const newErrors: Partial<Record<keyof Kurs, string>> = {};

        if (!nazwaKursu.trim() || nazwaKursu.length < 5 || onlyRepeatedChar(nazwaKursu) || isNumericOnly(nazwaKursu) || !containsLetters(nazwaKursu)) {
            newErrors.nazwaKursu = 'Nazwa kursu musi mieć co najmniej 5 znaków, zawierać litery i nie może składać się wyłącznie z cyfr lub jednego znaku.';
        }

        if (!opisKursu.trim() || opisKursu.length < 20 || isNumericOnly(opisKursu) || minWords(opisKursu, 3)) {
            newErrors.opisKursu = 'Opis kursu musi mieć min. 20 znaków, zawierać tekst i przynajmniej 3 słowa.';
        }

        if (!celKursu.trim() || onlyRepeatedChar(celKursu)) {
            newErrors.celKursu = 'Cel kursu nie może być pusty ani bezsensowny.';
        }

        if (!poziomKursu || !['początkujący', 'średniozaawansowany', 'zaawansowany'].includes(poziomKursu.toLowerCase())) {
            newErrors.poziomKursu = 'Podaj poziom: początkujący, średniozaawansowany lub zaawansowany.';
        }

        if (!jezykKursu.trim() || jezykKursu.length !== 2 || !/^[a-zA-Z]{2}$/.test(jezykKursu)) {
            newErrors.jezykKursu = 'Podaj dwuliterowy kod języka (np. pl, en).';
        }

        const czas = parseInt(czasTrwania);
        if (!czasTrwania || isNaN(czas) || czas <= 0 || czas > 300) {
            newErrors.czasTrwania = 'Czas trwania musi być liczbą z przedziału 1–300.';
        }

        if (!wymagania.trim() || onlyRepeatedChar(wymagania) || wymagania.length < 10) {
            newErrors.wymagania = 'Wprowadź sensowne wymagania (min. 10 znaków).';
        }

        if (!certyfikat.trim() || onlyRepeatedChar(certyfikat) || certyfikat.length < 10 || !containsLetters(certyfikat)) {
            newErrors.certyfikat = 'Opisz certyfikat – musi zawierać litery i mieć min. 10 znaków.';
        }

        const cena = parseFloat(cenaKursu);
        if (!cenaKursu || isNaN(cena) || cena <= 0) {
            newErrors.cenaKursu = 'Cena kursu musi być liczbą większą niż 0.';
        }

        if (!dataRozpoczecia || new Date(dataRozpoczecia) <= new Date()) {
            newErrors.dataRozpoczecia = 'Data musi być w przyszłości.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (key === 'tab1' && !validateForm()) {
            setToastMessage("Formularz zawiera błędy.");
            setShowToast(true);
            return;
        }

        const nowyKurs = {
            nazwaKursu,
            poziomKursu,
            opisKursu,
            jezykKursu,
            celKursu,
            wymagania,
            certyfikat,
            czasTrwania,
            dataRozpoczecia,
            cenaKursu,
        };

        setZapisanyKurs(nowyKurs);
        setToastMessage(`Zapisano dane zakładki: ${key}`);
        setShowToast(true);
    };

    const handlePreview = (e: React.FormEvent) => {
        e.preventDefault();
        setShowModal(true);
    };
    const handleClose = () => setShowModal(false);


    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Kurs</h1>

            <Tabs id="course-tabs" activeKey={key} onSelect={(k) => setKey(k)} className="big-gap custom-tabs">
                <Tab eventKey="tab1" title="Kurs">
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nazwa kursu</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={nazwaKursu}
                                        onChange={(e) => setNazwaKursu(e.target.value)}
                                        isInvalid={!!errors.nazwaKursu}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.nazwaKursu}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Opis kursu</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={opisKursu}
                                        onChange={(e) => setOpisKursu(e.target.value)}
                                        isInvalid={!!errors.opisKursu}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.opisKursu}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Cel kursu</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        value={celKursu}
                                        onChange={(e) => setCelKursu(e.target.value)}
                                        isInvalid={!!errors.celKursu}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.celKursu}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Wymagania wstępne</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={wymagania}
                                        onChange={(e) => setWymagania(e.target.value)}
                                        isInvalid={!!errors.wymagania}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.wymagania}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Cena kursu</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={cenaKursu}
                                        onChange={(e) => setCenaKursu(e.target.value)}
                                        isInvalid={!!errors.cenaKursu}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.cenaKursu}
                                    </Form.Control.Feedback>
                                </Form.Group>

                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Poziom kursu</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={poziomKursu}
                                        onChange={(e) => setPoziomKursu(e.target.value)}
                                        isInvalid={!!errors.poziomKursu}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.poziomKursu}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Język kursu</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={jezykKursu}
                                        onChange={(e) => setJezykKursu(e.target.value)}
                                        isInvalid={!!errors.jezykKursu}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.jezykKursu}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Certyfikat po ukończeniu</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        value={certyfikat}
                                        onChange={(e) => setCertyfikat(e.target.value)}
                                        isInvalid={!!errors.certyfikat}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.certyfikat}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Czas trwania (w godzinach)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={czasTrwania}
                                        onChange={(e) => setCzasTrwania(e.target.value)}
                                        isInvalid={!!errors.czasTrwania}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.czasTrwania}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Data rozpoczęcia</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={dataRozpoczecia}
                                        onChange={(e) => setDataRozpoczecia(e.target.value)}
                                        isInvalid={!!errors.dataRozpoczecia}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.dataRozpoczecia}
                                    </Form.Control.Feedback>
                                </Form.Group>

                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col md="auto">
                                <Button variant="primary" type="button" onClick={handleSave}>
                                    Dodaj
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Tab>

                {/* Tab 2: Instruktor */}
                <Tab eventKey="tab2" title="Instruktor">
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Imię instruktora</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź imię instruktora" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Specjalizacja instruktora</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź specjalizację" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Doświadczenie instruktora</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Wprowadź doświadczenie instruktora" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nazwisko instruktora</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź nazwisko instruktora" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Certyfikaty instruktora</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź certyfikaty instruktora" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Oceny instruktora</Form.Label>
                                    <Form.Control type="number" min="1" max="5" placeholder="Ocena instruktora" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Opis instruktora</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Wprowadź opis instruktora" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Link do profilu instruktora</Form.Label>
                            <Form.Control type="url" placeholder="Wprowadź link do profilu instruktora" />
                        </Form.Group>

                        <Button variant="primary" type="button" onClick={handleSave}>
                            Dodaj
                        </Button>
                    </Form>
                </Tab>

                {/* Tab 3: Materiały */}
                <Tab eventKey="tab3" title="Materiały">
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nazwa materiału</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź nazwę materiału" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Opis materiału</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Wprowadź opis materiału" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Link do materiału</Form.Label>
                                    <Form.Control type="url" placeholder="Wprowadź link do materiału" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Typ materiału</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź typ materiału (np. wideo, PDF)" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Data dodania materiału</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Link do pobrania</Form.Label>
                                    <Form.Control type="url" placeholder="Wprowadź link do pobrania materiału" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Materiał wideo</Form.Label>
                                    <Form.Control type="url" placeholder="Wprowadź link do materiału wideo" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Instrukcja obsługi materiału</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Wprowadź instrukcje obsługi materiału" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Autor materiału</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź autora materiału" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button variant="primary" type="button" onClick={handleSave}>
                            Dodaj
                        </Button>
                    </Form>
                </Tab>

                {/* Tab 4: Cennik */}
                <Tab eventKey="tab4" title="Cennik">
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Cena kursu</Form.Label>
                                    <Form.Control type="number" placeholder="Wprowadź cenę kursu" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Opcje płatności</Form.Label>
                                    <Form.Select>
                                        <option>Przelew bankowy</option>
                                        <option>Karta kredytowa</option>
                                        <option>PayPal</option>
                                        <option>Gotówka</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Rabaty</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź dostępne rabaty" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Data ważności oferty</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Rodzaj płatności</Form.Label>
                                    <Form.Select>
                                        <option>Jednorazowa</option>
                                        <option>Ratalna</option>
                                        <option>Subskrypcja</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Kwota przed rabatem</Form.Label>
                                    <Form.Control type="number" placeholder="Wprowadź kwotę przed rabatem" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Numer konta</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź numer konta do płatności" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Opcje fakturowania</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź opcje fakturowania" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="button" onClick={handleSave}>
                            Dodaj
                        </Button>
                    </Form>
                </Tab>

                {/* Tab 5: Opinie */}
                <Tab eventKey="tab5" title="Opinie">
                    <Form onSubmit={handlePreview}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Opinie uczestników</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Wprowadź opinie uczestników" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Oceny kursu</Form.Label>
                                    <Form.Control type="number" min="1" max="5" placeholder="Ocena kursu" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Recenzje</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Wprowadź recenzje" />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Feedback na temat instruktora</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Wprowadź feedback na temat instruktora" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Ogólna ocena kursu</Form.Label>
                                    <Form.Control type="number" min="1" max="5" placeholder="Ogólna ocena kursu" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Link do opinii wideo</Form.Label>
                                    <Form.Control type="url" placeholder="Wprowadź link do opinii wideo" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Wrażenia z kursu</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Wprowadź wrażenia z kursu" />
                                </Form.Group>
                            </Col>
                        </Row>


                        <Button variant="primary" type="button" onClick={handleSave}>
                            Dodaj
                        </Button>
                    </Form>

                    <Modal show={showModal} onHide={handleClose} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Podgląd opinii</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>To przykładowy podgląd opinii kursantów i ogólnej oceny kursu.</p>
                            <p>Tutaj można umieścić dane do prezentacji lub podsumowania.</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Zamknij</Button>
                        </Modal.Footer>
                    </Modal>
                </Tab>

                {/* Zakładka Podsumowanie */}
                <Tab eventKey="tab6" title="Podsumowanie">
                    <Form onSubmit={handlePreview}>
                        <p className="mb-3">Zweryfikuj dane przed zapisaniem kursu lub jego opublikowaniem.</p>
                        <Row className="mb-3">
                            <Col md="auto">
                                <Button variant="secondary" type="submit">Podgląd</Button>

                            </Col>
                            <Col md="auto">

                                <Button variant="primary" type="button" onClick={handleSave}>Zapisz</Button>
                            </Col>
                        </Row>
                    </Form>

                    {/* Modal z podglądem zapisanych danych */}
                    <Modal show={showModal} onHide={handleClose} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Podgląd kursu</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {zapisanyKurs ? (
                                <>
                                    <h5>Dane kursu</h5>
                                    <p><strong>Nazwa kursu:</strong> {zapisanyKurs.nazwaKursu}</p>
                                    <p><strong>Poziom:</strong> {zapisanyKurs.poziomKursu}</p>
                                    <p><strong>Opis:</strong> {zapisanyKurs.opisKursu}</p>
                                    <p><strong>Język:</strong> {zapisanyKurs.jezykKursu}</p>
                                    <p><strong>Cel:</strong> {zapisanyKurs.celKursu}</p>
                                    <p><strong>Wymagania:</strong> {zapisanyKurs.wymagania}</p>
                                    <p><strong>Certyfikat:</strong> {zapisanyKurs.certyfikat}</p>
                                    <p><strong>Czas trwania:</strong> {zapisanyKurs.czasTrwania} godz.</p>
                                    <p><strong>Data rozpoczęcia:</strong> {zapisanyKurs.dataRozpoczecia}</p>
                                    <p><strong>Cena:</strong> {zapisanyKurs.cenaKursu} zł</p>
                                </>
                            ) : (
                                <p>Brak zapisanych danych kursu.</p>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Zamknij</Button>
                        </Modal.Footer>
                    </Modal>
                </Tab>
            </Tabs>

            {/* Toast z komunikatem */}
            <ToastContainer position="bottom-end" className="p-3">
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Sukces</strong>
                    </Toast.Header>
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}