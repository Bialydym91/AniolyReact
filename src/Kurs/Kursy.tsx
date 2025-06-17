import { useState } from 'react';
import { Form, Button, Table, Container, Row, Col, Alert, Tabs, Tab } from 'react-bootstrap';
import './Kurs.css';
export function Kursy() {
    const [filters, setFilters] = useState({
        miejscowosc: '',
        minPunkty: '',
        maxCena: '',
        dataOd: '',
        dataDo: '',
    });

    const [zebranePunkty, setZebranePunkty] = useState(0);
    const [zapisaneKursy, setZapisaneKursy] = useState([]);

    const kursy = [
        { nazwa: 'Kurs zaawansowanych technik resuscytacji', miejscowosc: 'Warszawa', data: '2025-06-15', punkty: 7, cena: 450 },
        { nazwa: 'Wypadki masowe i segregacja TRIAGE', miejscowosc: 'Kraków', data: '2025-07-22', punkty: 5, cena: 600 },
        { nazwa: 'Medycyna ratunkowa – zaawansowany kurs', miejscowosc: 'Wrocław', data: '2025-08-05', punkty: 3, cena: 750 },
        { nazwa: 'Szkolenie z pierwszej pomocy pediatrycznej', miejscowosc: 'Gdańsk', data: '2025-09-12', punkty: 15, cena: 400 },
        { nazwa: 'Trauma Advanced Life Support (TALS)', miejscowosc: 'Poznań', data: '2025-09-30', punkty: 10, cena: 1200 },
        { nazwa: 'Kurs kwalifikowanej pierwszej pomocy', miejscowosc: 'Katowice', data: '2025-10-03', punkty: 8, cena: 800 },
        { nazwa: 'Zarządzanie zespołem ratunkowym', miejscowosc: 'Łódź', data: '2025-10-15', punkty: 8, cena: 500 },
        { nazwa: 'Rozszerzone techniki ratownictwa wodnego', miejscowosc: 'Szczecin', data: '2025-11-01', punkty: 5, cena: 550 },
        { nazwa: 'Farmakologia w stanach nagłych', miejscowosc: 'Warszawa', data: '2025-06-25', punkty: 7, cena: 700 },
        { nazwa: 'Postępowanie w urazach wielonarządowych', miejscowosc: 'Kraków', data: '2025-07-28', punkty: 6, cena: 900 },
        { nazwa: 'Zaawansowane techniki ratownictwa wysokościowego', miejscowosc: 'Wrocław', data: '2025-08-20', punkty: 5, cena: 650 },
        { nazwa: 'Resuscytacja noworodków', miejscowosc: 'Gdańsk', data: '2025-09-18', punkty: 8, cena: 850 },
        { nazwa: 'Zarządzanie kryzysowe w ratownictwie', miejscowosc: 'Poznań', data: '2025-10-05', punkty: 10, cena: 1000 },
        { nazwa: 'Bezpieczne ewakuacje medyczne', miejscowosc: 'Katowice', data: '2025-10-20', punkty: 7, cena: 750 },
        { nazwa: 'Diagnostyka EKG w stanach nagłych', miejscowosc: 'Łódź', data: '2025-11-05', punkty: 5, cena: 550 },
        { nazwa: 'Postępowanie w zatruciach', miejscowosc: 'Szczecin', data: '2025-11-10', punkty: 6, cena: 500 },
        { nazwa: 'Szkolenie z podstaw telemedycyny', miejscowosc: 'Warszawa', data: '2025-12-01', punkty: 4, cena: 300 },
        { nazwa: 'Wdrażanie procedur bezpieczeństwa', miejscowosc: 'Kraków', data: '2025-12-05', punkty: 5, cena: 400 },
        { nazwa: 'Szkolenie z obsługi defibrylatorów AED', miejscowosc: 'Wrocław', data: '2025-12-10', punkty: 3, cena: 250 },
        { nazwa: 'Opieka nad pacjentem urazowym', miejscowosc: 'Gdańsk', data: '2025-12-15', punkty: 7, cena: 600 },
        { nazwa: 'Warsztaty z intubacji nagłej', miejscowosc: 'Poznań', data: '2026-01-10', punkty: 6, cena: 700 },
        { nazwa: 'Kurs podstaw zarządzania sceną zdarzenia', miejscowosc: 'Katowice', data: '2026-01-15', punkty: 5, cena: 550 },
        { nazwa: 'Analiza przypadków klinicznych', miejscowosc: 'Łódź', data: '2026-01-20', punkty: 6, cena: 500 },
        { nazwa: 'Nowoczesne metody transportu medycznego', miejscowosc: 'Szczecin', data: '2026-01-25', punkty: 5, cena: 450 },
        { nazwa: 'Zaawansowane techniki wentylacji mechanicznej', miejscowosc: 'Warszawa', data: '2026-02-05', punkty: 8, cena: 900 },
        { nazwa: 'Pediatryczne stany zagrożenia życia', miejscowosc: 'Gdańsk', data: '2026-02-10', punkty: 7, cena: 800 },
        { nazwa: 'Kurs rozpoznawania stanów zagrożenia życia', miejscowosc: 'Kraków', data: '2026-02-15', punkty: 7, cena: 700 },
        { nazwa: 'Wprowadzenie do ultrasonografii ratunkowej (POCUS)', miejscowosc: 'Wrocław', data: '2026-02-20', punkty: 6, cena: 1000 }
    ];

    const today = new Date().toISOString().split('T')[0];

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleZapiszSie = (kurs) => {
        if (!zapisaneKursy.find(k => k.nazwa === kurs.nazwa)) {
            setZapisaneKursy(prev => [...prev, kurs]);
        }
    };

    const handleWypiszSie = (kurs) => {
        setZapisaneKursy(prev => prev.filter(k => k.nazwa !== kurs.nazwa));
    };

    const handleDodajPunkty = (punkty) => {
        setZebranePunkty(prev => prev + punkty);
    };

    const filteredKursy = kursy.filter((kurs) => {
        const matchesMiejscowosc = filters.miejscowosc ? kurs.miejscowosc === filters.miejscowosc : true;
        const matchesPunkty = filters.minPunkty ? kurs.punkty >= parseInt(filters.minPunkty) : true;
        const matchesCena = filters.maxCena ? kurs.cena <= parseInt(filters.maxCena) : true;
        const matchesDataOd = filters.dataOd ? kurs.data >= filters.dataOd : true;
        const matchesDataDo = filters.dataDo ? kurs.data <= filters.dataDo : true;

        return matchesMiejscowosc && matchesPunkty && matchesCena && matchesDataOd && matchesDataDo;
    });

    const nadchodzaceKursy = zapisaneKursy.filter(kurs => {
        const dataKursu = new Date(kurs.data);
        const dzisiaj = new Date();
        const roznicaCzasu = (dataKursu - dzisiaj) / (1000 * 60 * 60 * 24);
        return roznicaCzasu >= 0 && roznicaCzasu <= 30;
    });

    const ukonczoneKursy = zapisaneKursy.filter(kurs => kurs.data < today);

    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Kursy dla Ratowników Medycznych</h1>

            <Tabs defaultActiveKey="kursy" id="tabs-kursy" className="big-gap" fill>

                {/* TAB 1 - Wszystkie kursy */}
                <Tab eventKey="kursy" title="Wszystkie kursy">
                    <Alert variant="info" className="text-center">
                        Musisz zebrać <strong>200 punktów</strong> w ciągu 5 lat. <br />
                        Twoje aktualne punkty: <strong>{zebranePunkty} / 200</strong>
                    </Alert>

                    {/* Filtry */}
                    <Form className="mb-4">
                        <Row className="g-3">
                            <Col md={3}>
                                <Form.Group>
                                    <Form.Label>Miejscowość</Form.Label>
                                    <Form.Select name="miejscowosc" value={filters.miejscowosc} onChange={handleFilterChange}>
                                        <option value="">Wszystkie</option>
                                        <option value="Warszawa">Warszawa</option>
                                        <option value="Kraków">Kraków</option>
                                        <option value="Wrocław">Wrocław</option>
                                        <option value="Gdańsk">Gdańsk</option>
                                        <option value="Poznań">Poznań</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col md={2}>
                                <Form.Group>
                                    <Form.Label>Min. Punkty</Form.Label>
                                    <Form.Control type="number" name="minPunkty" value={filters.minPunkty} onChange={handleFilterChange} />
                                </Form.Group>
                            </Col>

                            <Col md={2}>
                                <Form.Group>
                                    <Form.Label>Maks. Cena</Form.Label>
                                    <Form.Control type="number" name="maxCena" value={filters.maxCena} onChange={handleFilterChange} />
                                </Form.Group>
                            </Col>

                            <Col md={2}>
                                <Form.Group>
                                    <Form.Label>Data od</Form.Label>
                                    <Form.Control type="date" name="dataOd" value={filters.dataOd} onChange={handleFilterChange} />
                                </Form.Group>
                            </Col>

                            <Col md={2}>
                                <Form.Group>
                                    <Form.Label>Data do</Form.Label>
                                    <Form.Control type="date" name="dataDo" value={filters.dataDo} onChange={handleFilterChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>

                    {/* Tabela kursów */}
                    <Table striped bordered hover responsive>
                        <thead className="table-primary">
                            <tr>
                                <th>Nazwa Kursu</th>
                                <th>Miejscowość</th>
                                <th>Data</th>
                                <th>Punkty</th>
                                <th>Cena</th>
                                <th>Akcja</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredKursy.length > 0 ? (
                                filteredKursy.map((kurs, idx) => (
                                    <tr key={idx}>
                                        <td>{kurs.nazwa}</td>
                                        <td>{kurs.miejscowosc}</td>
                                        <td>{kurs.data}</td>
                                        <td>{kurs.punkty}</td>
                                        <td>{kurs.cena} zł</td>
                                        <td>
                                            <Button
                                                variant="primary"
                                                size="sm"
                                                onClick={() => handleZapiszSie(kurs)}
                                                disabled={zapisaneKursy.find(k => k.nazwa === kurs.nazwa)}
                                            >
                                                {zapisaneKursy.find(k => k.nazwa === kurs.nazwa) ? 'Zapisany' : 'Zapisz się'}
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">Brak kursów spełniających kryteria.</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Tab>

                {/* TAB 2 - Kursy w kraju */}
                <Tab eventKey="kraj" title="Kursy w kraju">
                    <div className="mt-4">
                        <h4 className="mb-3">Lista kursów w Polsce</h4>
                        <Table striped bordered hover responsive>
                            <thead className="table-primary">
                                <tr>
                                    <th>Nazwa Kursu</th>
                                    <th>Miejscowość</th>
                                    <th>Data</th>
                                    <th>Punkty</th>
                                    <th>Cena</th>
                                </tr>
                            </thead>
                            <tbody>
                                {kursy.map((kurs, idx) => (
                                    <tr key={idx}>
                                        <td>{kurs.nazwa}</td>
                                        <td>{kurs.miejscowosc}</td>
                                        <td>{kurs.data}</td>
                                        <td>{kurs.punkty}</td>
                                        <td>{kurs.cena} zł</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Tab>

                {/* TAB 3 - Przypomnienia */}
                <Tab eventKey="przypomnienia" title="Przypomnienia">
                    <div className="mt-4">
                        <h4 className="mb-3">Twoje nadchodzące kursy (30 dni)</h4>
                        <Table striped bordered hover responsive>
                            <thead className="table-primary">
                                <tr>
                                    <th>Nazwa Kursu</th>
                                    <th>Data</th>
                                    <th>Punkty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nadchodzaceKursy.length > 0 ? (
                                    nadchodzaceKursy.map((kurs, idx) => (
                                        <tr key={idx}>
                                            <td>{kurs.nazwa}</td>
                                            <td>{kurs.data}</td>
                                            <td>{kurs.punkty}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="text-center">Brak kursów w najbliższym czasie.</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </Tab>

                {/* TAB 4 - Moje kursy */}
                <Tab eventKey="moje" title="Moje kursy">
                    <div className="mt-4">
                        <h4 className="mb-3">Zapisane kursy</h4>
                        <Table striped bordered hover responsive>
                            <thead className="table-primary">
                                <tr>
                                    <th>Nazwa Kursu</th>
                                    <th>Data</th>
                                    <th>Akcja</th>
                                </tr>
                            </thead>
                            <tbody>
                                {zapisaneKursy.length > 0 ? (
                                    zapisaneKursy.map((kurs, idx) => (
                                        <tr key={idx}>
                                            <td>{kurs.nazwa}</td>
                                            <td>{kurs.data}</td>
                                            <td>
                                                <Button variant="danger" size="sm" onClick={() => handleWypiszSie(kurs)}>
                                                    Wypisz się
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="text-center">Nie zapisano na żadne kursy.</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </Tab>

                {/* TAB 5 - Historia */}
                <Tab eventKey="historia" title="Historia">
                    <div className="mt-4">
                        <h4 className="mb-3">Ukończone kursy</h4>
                        <Table striped bordered hover responsive>
                            <thead className="table-primary">
                                <tr>
                                    <th>Nazwa Kursu</th>
                                    <th>Data</th>
                                    <th>Punkty</th>
                                    <th>Akcja</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ukonczoneKursy.length > 0 ? (
                                    ukonczoneKursy.map((kurs, idx) => (
                                        <tr key={idx}>
                                            <td>{kurs.nazwa}</td>
                                            <td>{kurs.data}</td>
                                            <td>{kurs.punkty}</td>
                                            <td>
                                                <Button variant="success" size="sm" onClick={() => handleDodajPunkty(kurs.punkty)}>
                                                    Dodaj punkty
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center">Brak ukończonych kursów.</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </Tab>

            </Tabs>
        </Container>
    );
}
