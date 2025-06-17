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

type Pracownik = {
    id: number;
    imie: string;
    nazwisko: string;
    dzial: string;
    stanowisko: string;
    email: string;
    telefon: string;
    pesel: string;
};

const dzialy = ["Medyczny", "Administracja", "IT", "Ratownictwo", "Logistyka"];
const stanowiska = ["Ratownik", "Kierownik", "Specjalista", "Asystent", "Koordynator"];

const generatePracownicy = (n: number): Pracownik[] => {
    const imionaM = ["Jan", "Piotr", "Kamil", "Tomasz", "Andrzej", "Marek"];
    const imionaK = ["Anna", "Maria", "Magda", "Karolina", "Zofia", "Ewa"];

    const nazwiskaM = ["Kowalski", "Nowak", "Wiśniewski", "Mazurski", "Lewandowski", "Zalewski"];
    const nazwiskaK = ["Nowak", "Zielińska", "Wiśniewska", "Mazur", "Lewandowska", "Zalewska"];

    return Array.from({ length: n }, (_, i) => {
        const isMale = Math.random() < 0.5;
        const imie = isMale
            ? imionaM[Math.floor(Math.random() * imionaM.length)]
            : imionaK[Math.floor(Math.random() * imionaK.length)];
        const nazwisko = isMale
            ? nazwiskaM[Math.floor(Math.random() * nazwiskaM.length)]
            : nazwiskaK[Math.floor(Math.random() * nazwiskaK.length)];

        return {
            id: i + 1,
            imie,
            nazwisko,
            dzial: dzialy[Math.floor(Math.random() * dzialy.length)],
            stanowisko: stanowiska[Math.floor(Math.random() * stanowiska.length)],
            email: `${imie.toLowerCase()}.${nazwisko.toLowerCase()}@firma.pl`,
            telefon: `+48 600 000 ${String(i).padStart(3, "0")}`,
            pesel: `890101${String(10000 + i)}`,
        };
    });
};

const ListaPracownikow = () => {
    const [activeTab, setActiveTab] = useState("wszyscy");
    const [pracownicy, setPracownicy] = useState<Pracownik[]>([]);
    const [filters, setFilters] = useState({
        imie: "",
        nazwisko: "",
        dzial: "",
        stanowisko: "",
        email: "",
    });
    const [selectedPracownik, setSelectedPracownik] = useState<Pracownik | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setPracownicy(generatePracownicy(35));
    }, []);

    const handleDelete = (id: number) => {
        setPracownicy((prev) => prev.filter((p) => p.id !== id));
    };

    const handleShowDetails = (pracownik: Pracownik) => {
        setSelectedPracownik(pracownik);
        setShowModal(true);
    };

    const handleFilterChange = (field: keyof typeof filters, value: string) => {
        setFilters((prev) => ({ ...prev, [field]: value }));
    };

    const filtered = pracownicy.filter((p) =>
        p.imie.toLowerCase().includes(filters.imie.toLowerCase()) &&
        p.nazwisko.toLowerCase().includes(filters.nazwisko.toLowerCase()) &&
        p.dzial.toLowerCase().includes(filters.dzial.toLowerCase()) &&
        p.stanowisko.toLowerCase().includes(filters.stanowisko.toLowerCase()) &&
        p.email.toLowerCase().includes(filters.email.toLowerCase())
    );

    const filteredByTab = (p: Pracownik) => {
        if (activeTab === "wszyscy") return true;
        return p.dzial.toLowerCase() === activeTab;
    };

    return (
        <Container className="my-4">
            <h2>Lista Pracowników</h2>
            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k || "wszyscy")} className="mb-3">
                {["wszyscy", ...dzialy.map((d) => d.toLowerCase())].map((tab) => (
                    <Tab key={tab} eventKey={tab} title={tab[0].toUpperCase() + tab.slice(1)}>
                        <Card body>
                            {/* FILTRY */}
                            <Form className="mb-3">
                                <Row className="gy-2">
                                    <Col md={2}><Form.Control placeholder="Imię" value={filters.imie} onChange={(e) => handleFilterChange("imie", e.target.value)} /></Col>
                                    <Col md={2}><Form.Control placeholder="Nazwisko" value={filters.nazwisko} onChange={(e) => handleFilterChange("nazwisko", e.target.value)} /></Col>
                                    <Col md={2}><Form.Control placeholder="Dział" value={filters.dzial} onChange={(e) => handleFilterChange("dzial", e.target.value)} /></Col>
                                    <Col md={2}><Form.Control placeholder="Stanowisko" value={filters.stanowisko} onChange={(e) => handleFilterChange("stanowisko", e.target.value)} /></Col>
                                    <Col md={4}><Form.Control placeholder="Email" value={filters.email} onChange={(e) => handleFilterChange("email", e.target.value)} /></Col>
                                </Row>
                            </Form>

                            {/* TABELA */}
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Imię</th>
                                        <th>Nazwisko</th>
                                        <th>Dział</th>
                                        <th>Stanowisko</th>
                                        <th>Email</th>
                                        <th>Telefon</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filtered.filter(filteredByTab).map((p) => (
                                        <tr key={p.id}>
                                            <td>{p.id}</td>
                                            <td>{p.imie}</td>
                                            <td>{p.nazwisko}</td>
                                            <td>{p.dzial}</td>
                                            <td>{p.stanowisko}</td>
                                            <td>{p.email}</td>
                                            <td>{p.telefon}</td>
                                            <td>
                                                <Button size="sm" variant="info" className="me-1" onClick={() => handleShowDetails(p)}>
                                                    Szczegóły
                                                </Button>
                                                <Button size="sm" variant="danger" onClick={() => handleDelete(p.id)}>
                                                    Usuń
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card>
                    </Tab>
                ))}
            </Tabs>

            {/* MODAL SZCZEGÓŁÓW */}
            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Dane pracownika</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedPracownik ? (
                        <>
                            <h5 className="mb-3">Podstawowe dane</h5>
                            <Table bordered>
                                <tbody>
                                    <tr><td>Imię</td><td>{selectedPracownik.imie}</td></tr>
                                    <tr><td>Nazwisko</td><td>{selectedPracownik.nazwisko}</td></tr>
                                    <tr><td>Dział</td><td>{selectedPracownik.dzial}</td></tr>
                                    <tr><td>Stanowisko</td><td>{selectedPracownik.stanowisko}</td></tr>
                                </tbody>
                            </Table>

                            <h5 className="mt-4 mb-3">Kontakt</h5>
                            <Table bordered>
                                <tbody>
                                    <tr><td>Email</td><td>{selectedPracownik.email}</td></tr>
                                    <tr><td>Telefon</td><td>{selectedPracownik.telefon}</td></tr>
                                </tbody>
                            </Table>

                            <h5 className="mt-4 mb-3">Identyfikacja</h5>
                            <Table bordered>
                                <tbody>
                                    <tr><td>PESEL</td><td>{selectedPracownik.pesel}</td></tr>
                                    <tr><td>ID wewnętrzne</td><td>{selectedPracownik.id}</td></tr>
                                </tbody>
                            </Table>
                        </>
                    ) : (
                        <p>Brak danych</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Zamknij
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default ListaPracownikow;
