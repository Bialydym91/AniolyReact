import React, { useState } from 'react';
import { Tab, Tabs, Container, Row, Col, Image, ListGroup, Modal, Button, Carousel, Alert, Form } from 'react-bootstrap';

export const Zespol = () => {
    const [selectedPracownik, setSelectedPracownik] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleShow = (p) => {
        setSelectedPracownik(p);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);
    const [opinie, setOpinie] = useState([
        { author: "Maria S.", text: "Błyskawiczna pomoc i pełen profesjonalizm. Dziękuję!" },
        { author: "Łukasz T.", text: "Zespół pojawił się w kilka minut. Ratownicy byli spokojni i skuteczni." },
        { author: "Katarzyna W.", text: "Empatia i wiedza – widać, że robią to z powołania." },
        { author: "Rafał K.", text: "Pełen profesjonalizm od pierwszego telefonu aż po wizytę." },
        { author: "Zofia M.", text: "Dzięki ich pomocy mój tata szybko wrócił do zdrowia. Polecam każdemu." }
    ]);

    const [newAuthor, setNewAuthor] = useState('');
    const [newText, setNewText] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleAddOpinion = (e) => {
        e.preventDefault();
        if (newAuthor.trim() && newText.trim()) {
            setOpinie([...opinie, { author: newAuthor.trim(), text: newText.trim() }]);
            setNewAuthor('');
            setNewText('');
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }
    };
    const pracownicy = [
        {
            name: 'Anna Nowak',
            img: '/image/11.bmp',
            rola: 'Ratowniczka medyczna',
            opis: 'Specjalistka w zakresie pierwszej pomocy i interwencji w nagłych wypadkach.'
        },
        {
            name: 'Jan Kowalski',
            img: '/image/7.bmp',
            rola: 'Lekarz dyżurny',
            opis: 'Ekspert w medycynie ratunkowej z 15-letnim doświadczeniem w pracy pod presją czasu.'
        },
        {
            name: 'Kacper Wiśniewski',
            img: '/image/6.1.bmp',
            rola: 'Technik medyczny',
            opis: 'Odpowiedzialny za obsługę sprzętu diagnostycznego oraz wsparcie operacyjne zespołu.'
        },
        {
            name: 'Bartłomiej Zagata',
            img: '/image/4.bmp',
            rola: 'Ratownik drogowy',
            opis: 'Specjalista od wypadków komunikacyjnych, szybki i skuteczny w działaniach w terenie.'
        },
        {
            name: 'Wiesław Stelmach',
            img: '/image/2.bmp',
            rola: 'Koordynator dyspozytorni',
            opis: 'Zarządza zgłoszeniami i optymalizuje trasy zespołów ratowniczych. Doświadczony organizator.'
        },
        {
            name: 'Kasia Mazur',
            img: '/image/10.bmp',
            rola: 'Pielęgniarka systemowa',
            opis: 'Zajmuje się pacjentami w stanie nagłym i wspiera działania lekarzy w karetkach i na miejscu zdarzenia.'
        },
        {
            name: 'Tomasz Lis',
            img: '/image/1.bmp',
            rola: 'Analityk danych medycznych',
            opis: 'Analizuje dane zdrowotne i operacyjne w celu poprawy jakości i efektywności udzielanej pomocy.'
        },
        {
            name: 'Julia Krawczyk',
            img: '/image/9.bmp',
            rola: 'Psycholożka interwencyjna',
            opis: 'Wspiera pacjentów i ich bliskich w sytuacjach kryzysowych. Specjalistka ds. interwencji psychologicznej.'
        },
        {
            name: 'Paweł Dąbrowski',
            img: '/image/3.bmp',
            rola: 'Specjalista ds. sprzętu medycznego',
            opis: 'Zapewnia ciągłą gotowość i kalibrację nowoczesnego wyposażenia w karetkach.'
        },
        {
            name: 'Ewa Nowicka',
            img: '/image/8.bmp',
            rola: 'Pielęgniarka intensywnej terapii',
            opis: 'Z ogromnym doświadczeniem w pracy z pacjentami w stanie ciężkim. Zawsze gotowa do działania.'
        },
        {
            name: 'Michał Grabowski',
            img: '/image/5.bmp',
            rola: 'Szkoleniowiec',
            opis: 'Odpowiada za szkolenia zespołu i edukację pierwszej pomocy wśród społeczeństwa.'
        }
    ];

    const zdjeciaWAkcji = [
        { src: '/image/13.bmp', alt: 'Zespół w terenie' },
        { src: '/image/12.bmp', alt: 'Szkolenie pierwszej pomocy' },
        { src: '/image/14.bmp', alt: 'Akcja ratunkowa' },
        { src: '/image/15.bmp', alt: 'Zespół w ambulansie' },
        { src: '/image/16.bmp', alt: 'Udzielanie pomocy' },
        { src: '/image/17.bmp', alt: 'Ratownik przy pacjencie' },
        { src: '/image/18.bmp', alt: 'Symulacja zdarzenia' },
        { src: '/image/19.bmp', alt: 'Sprzęt medyczny w użyciu' },
        { src: '/image/20.bmp', alt: 'Zespół szkoleniowy' },
        { src: '/image/21.bmp', alt: 'Sytuacja kryzysowa' }
    ];
    

    return (
        <Container className="my-4">
            <Tabs defaultActiveKey="informacje" id="zespol-tabs" className="mb-3">
               
                <Tab eventKey="informacje" title="Informacje ogólne">
                    <div className="p-4">
                        <div className="bg-light rounded shadow-sm p-4">
                            <h5 className="mb-4 text-center fw-semibold text-primary text-danger">Nasza misja i podejście</h5>
                            <p className="text-muted mb-3">
                                Jako <strong>Anioły Adrenaliny</strong> wierzymy, że skuteczna pomoc zaczyna się od szybkości działania
                                i empatii. Naszym celem nie jest tylko ratowanie życia, ale również wspieranie pacjentów w sytuacjach
                                stresowych i niepewnych. Łączymy nowoczesne technologie z ludzkim podejściem.
                            </p>
                            <p className="text-muted mb-3">
                                W naszej pracy wykorzystujemy innowacyjne rozwiązania, takie jak mobilne jednostki diagnostyczne
                                z dostępem do technologii 5G, systemy zdalnej konsultacji oraz inteligentne algorytmy wspomagające decyzje medyczne.
                                Dzięki temu możemy skutecznie działać tam, gdzie inni dopiero planują dotrzeć.
                            </p>
                            <p className="text-muted">
                                Każde zgłoszenie traktujemy indywidualnie. Nasi specjaliści są dostępni 24/7, gotowi nieść pomoc
                                w domach, biurach, na ulicach – wszędzie tam, gdzie pojawia się potrzeba. U nas technologia nie zastępuje człowieka – wspiera go.
                            </p>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="specjalizacje" title="Specjalizacje">
                    <div className="p-4">
                        <div className="bg-light rounded shadow-sm p-4">
                            <h5 className="mb-4 text-center fw-semibold text-primary text-danger">Nasze kluczowe obszary działania</h5>
                            <p className="text-muted text-center mb-4">
                                Oferujemy specjalistyczną pomoc w różnych dziedzinach medycyny – zawsze z pełnym zaangażowaniem i troską o pacjenta.
                            </p>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex align-items-center">
                                    <span className="me-2 text-danger fs-5">❤️</span>
                                    <strong>Kardiologia</strong> – diagnostyka i pomoc w nagłych przypadkach sercowo-naczyniowych.
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center">
                                    <span className="me-2 text-primary fs-5">🚑</span>
                                    <strong>Ratownictwo medyczne</strong> – szybka interwencja w stanach zagrożenia życia.
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center">
                                    <span className="me-2 text-warning fs-5">🧸</span>
                                    <strong>Pediatria</strong> – opieka nad najmłodszymi pacjentami, także w nagłych przypadkach.
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex align-items-center">
                                    <span className="me-2 text-success fs-5">🦴</span>
                                    <strong>Traumatologia</strong> – pomoc w urazach, złamaniach, wypadkach.
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="czlonkowie" title="Członkowie zespołu">
                    <div className="p-4">
                        <div className="bg-light rounded shadow-sm p-4">
                            <h5 className="mb-4 text-center fw-semibold text-primary text-danger">Poznaj nasz zespół</h5>
                            <p className="text-muted text-center mb-4">
                                Kliknij na zdjęcie, aby dowiedzieć się więcej o członku zespołu.
                            </p>
                            <div className="row">
                                {pracownicy.map((p, index) => (
                                    <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
                                        <div className="card text-center shadow-sm h-100 border-0">
                                            <img
                                                src={p.img}
                                                alt={p.name}
                                                className="card-img-top rounded-circle mx-auto mt-3"
                                                style={{ width: '100px', height: '100px', objectFit: 'cover', cursor: 'pointer' }}
                                                onClick={() => handleShow(p)}
                                            />
                                            <div className="card-body">
                                                <h6 className="card-title mb-0">{p.name}</h6>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

          
                    <Modal show={showModal} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedPracownik?.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p><strong>Rola:</strong> {selectedPracownik?.rola}</p>
                            <p>{selectedPracownik?.opis}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Zamknij
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Tab>
                <Tab eventKey="zdjecia" title="Zespół w akcji">
                    <div className="p-4">
                        <h5 className="text-center fw-semibold text-primary text-danger mb-4">
                            Nasz zespół w akcji
                        </h5>
                        <p className="text-muted text-center mb-4">
                            Zobacz, jak działamy w terenie – profesjonalnie, dynamicznie i z pasją.
                        </p>

                        <Carousel interval={null} variant="dark" indicators={false}>
                            {zdjeciaWAkcji.map((p, index) => (
                                <Carousel.Item key={index}>
                                    <div className="d-flex justify-content-center">
                                        <Image
                                            src={p.src}
                                            alt={p.alt}
                                            style={{
                                                height: '400px',
                                                objectFit: 'cover',
                                                borderRadius: '12px',
                                                boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
                                            }}
                                            className="w-75"
                                            fluid
                                        />
                                    </div>
                                    <Carousel.Caption>
                                        <h6 className="bg-dark bg-opacity-50 d-inline px-2 rounded text-white">{p.alt}</h6>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </Tab>
                <Tab eventKey="opinie" title="Opinie pacjentów">
                    <div className="p-4">
                        <h5 className="text-center fw-semibold text-primary text-danger mb-4">
                            Co mówią o nas pacjenci?
                        </h5>

                        <ListGroup variant="flush" className="mb-4">
                            {opinie.map((opinia, idx) => (
                                <ListGroup.Item key={idx}>
                                    <strong>{opinia.author}:</strong> {opinia.text}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>

                        <h6 className="text-center text-primary mb-3">Dodaj swoją opinię</h6>

                        <Form onSubmit={handleAddOpinion} className="bg-light p-3 rounded shadow-sm">
                            {showSuccess && (
                                <Alert variant="success">Dziękujemy za opinię!</Alert>
                            )}
                            <Form.Group className="mb-3" controlId="author">
                                <Form.Label>Twoje imię i pierwsza litera nazwiska</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newAuthor}
                                    onChange={(e) => setNewAuthor(e.target.value)}
                                    placeholder="np. Anna K."
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="text">
                                <Form.Label>Twoja opinia</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={newText}
                                    onChange={(e) => setNewText(e.target.value)}
                                    placeholder="Podziel się swoją opinią..."
                                />
                            </Form.Group>
                            <div className="text-end">
                                <Button type="submit" variant="danger">
                                    Wyślij opinię
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Tab>
            </Tabs>
        </Container>
    );
};
