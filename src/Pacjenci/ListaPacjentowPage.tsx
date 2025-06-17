import React, { useEffect, useState } from "react";

import {
    
    Container,
    Tab,
    Tabs,
    Card,
    Table,
    Form,
    Row,
    Col,
    Button,
    Modal,
} from "react-bootstrap";

const grupyKrwi = ["0", "A", "B", "AB"];

const generatePacjenci = (n) => {
    const imionaM = ["Jan", "Piotr", "Kamil", "Tomasz", "Andrzej", "Marek"];
    const imionaK = ["Anna", "Maria", "Zofia", "Katarzyna", "Ewa", "Magdalena"];
    const nazwiskaM = ["Kowalski", "Nowak", "Wiśniewski", "Zieliński", "Lewandowski"];
    const nazwiskaK = ["Kowalska", "Nowak", "Wiśniewska", "Zielińska", "Lewandowska"];
    const miasta = ["Warszawa", "Kraków", "Gdańsk", "Poznań", "Wrocław"];
    const pacjenci = [];

    for (let i = 1; i <= n; i++) {
        const isMale = i % 2 === 0;
        const imie = isMale ? imionaM[i % imionaM.length] : imionaK[i % imionaK.length];
        const nazwisko = isMale ? nazwiskaM[i % nazwiskaM.length] : nazwiskaK[i % nazwiskaK.length];
        const wiek = Math.floor(Math.random() * 90 + 1);
        const alergie = Math.random() < 0.3;
        const niepelnosprawnosc = Math.random() < 0.2;
        pacjenci.push({
            id: i,
            imie,
            nazwisko,
            pesel: `9${String(1000000000 + i)}`,
            grupaKrwi: grupyKrwi[i % grupyKrwi.length],
            miasto: miasta[i % miasta.length],
            wiek,
            alergie,
            niepelnosprawnosc,
            telefon: `+48 700 000 ${String(i).padStart(3, "0")}`,
            email: `${imie.toLowerCase()}.${nazwisko.toLowerCase()}@pacjent.pl`,
            adres: `ul. Przykładowa ${i}, ${miasta[i % miasta.length]}`,
        });
    }
    return pacjenci;
};

const Pacjenci = () => {
    const [pacjenci, setPacjenci] = useState([]);
    const [filters, setFilters] = useState({ imie: "", nazwisko: "", pesel: "", grupaKrwi: "", miasto: "" });
    const [activeTab, setActiveTab] = useState("wszyscy");
    const [selected, setSelected] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setPacjenci(generatePacjenci(35));
    }, []);

    const handleFilter = (p) => {
        return (
            p.imie.toLowerCase().includes(filters.imie.toLowerCase()) &&
            p.nazwisko.toLowerCase().includes(filters.nazwisko.toLowerCase()) &&
            p.pesel.includes(filters.pesel) &&
            p.grupaKrwi.toLowerCase().includes(filters.grupaKrwi.toLowerCase()) &&
            p.miasto.toLowerCase().includes(filters.miasto.toLowerCase())
        );
    };

    const handleTab = (p) => {
        if (activeTab === "wszyscy") return true;
        if (activeTab === "dzieci") return p.wiek < 18;
        if (activeTab === "dorosli") return p.wiek >= 18;
        if (activeTab === "alergicy") return p.alergie;
        if (activeTab === "niepelnosprawni") return p.niepelnosprawnosc;
        return true;
    };

    const filtered = pacjenci.filter((p) => handleFilter(p) && handleTab(p));

    return (
        <Container className="my-4">
            <h2>Lista Pacjentów</h2>
            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
                {[
                    { key: "wszyscy", label: "Wszyscy" },
                    { key: "dzieci", label: "Dzieci" },
                    { key: "dorosli", label: "Dorośli" },
                    { key: "alergicy", label: "Alergicy" },
                    { key: "niepelnosprawni", label: "Niepełnosprawni" },
                ].map((tab) => (
                    <Tab eventKey={tab.key} title={tab.label} key={tab.key}>
                        <Card body>
                            <Form className="mb-3">
                                <Row className="gy-2">
                                    <Col md={2}><Form.Control placeholder="Imię" value={filters.imie} onChange={(e) => setFilters({ ...filters, imie: e.target.value })} /></Col>
                                    <Col md={2}><Form.Control placeholder="Nazwisko" value={filters.nazwisko} onChange={(e) => setFilters({ ...filters, nazwisko: e.target.value })} /></Col>
                                    <Col md={2}><Form.Control placeholder="PESEL" value={filters.pesel} onChange={(e) => setFilters({ ...filters, pesel: e.target.value })} /></Col>
                                    <Col md={2}><Form.Control placeholder="Grupa krwi" value={filters.grupaKrwi} onChange={(e) => setFilters({ ...filters, grupaKrwi: e.target.value })} /></Col>
                                    <Col md={4}><Form.Control placeholder="Miasto" value={filters.miasto} onChange={(e) => setFilters({ ...filters, miasto: e.target.value })} /></Col>
                                </Row>
                            </Form>

                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Imię</th>
                                        <th>Nazwisko</th>
                                        <th>PESEL</th>
                                        <th>Grupa krwi</th>
                                        <th>Miasto</th>
                                        <th>Alergie</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filtered.map((p) => (
                                        <tr key={p.id}>
                                            <td>{p.id}</td>
                                            <td>{p.imie}</td>
                                            <td>{p.nazwisko}</td>
                                            <td>{p.pesel}</td>
                                            <td>{p.grupaKrwi}</td>
                                            <td>{p.miasto}</td>
                                            <td>{p.alergie ? "Tak" : "Nie"}</td>
                                            <td>
                                                <Button size="sm" variant="info" className="me-1" onClick={() => { setSelected(p); setShow(true); }}>Szczegóły</Button>
                                                <Button size="sm" variant="danger" onClick={() => setPacjenci((prev) => prev.filter((x) => x.id !== p.id))}>Usuń</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card>
                    </Tab>
                ))}
            </Tabs>

            {/* Modal */}
            <Modal show={show} onHide={() => setShow(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Dane pacjenta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selected && (
                        <Table bordered>
                            <tbody>
                                <tr><td>ID</td><td>{selected.id}</td></tr>
                                <tr><td>Imię</td><td>{selected.imie}</td></tr>
                                <tr><td>Nazwisko</td><td>{selected.nazwisko}</td></tr>
                                <tr><td>PESEL</td><td>{selected.pesel}</td></tr>
                                <tr><td>Grupa krwi</td><td>{selected.grupaKrwi}</td></tr>
                                <tr><td>Miasto</td><td>{selected.miasto}</td></tr>
                                <tr><td>Wiek</td><td>{selected.wiek}</td></tr>
                                <tr><td>Telefon</td><td>{selected.telefon}</td></tr>
                                <tr><td>Email</td><td>{selected.email}</td></tr>
                                <tr><td>Adres</td><td>{selected.adres}</td></tr>
                                <tr><td>Alergie</td><td>{selected.alergie ? "Tak" : "Nie"}</td></tr>
                                <tr><td>Niepełnosprawność</td><td>{selected.niepelnosprawnosc ? "Tak" : "Nie"}</td></tr>
                            </tbody>
                        </Table>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>Zamknij</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Pacjenci;
