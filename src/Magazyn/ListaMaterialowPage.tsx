import React, { useState } from "react";
import {
    Container,
    Tabs,
    Tab,
    Form,
    Button,
    Table,
    Modal,
} from "react-bootstrap";

const names = [
    { nazwa: "Strzykawki", kategoria: "Materiały zużywalne" },
    { nazwa: "Pulsoksymetry", kategoria: "Sprzęt medyczny" },
    { nazwa: "Maseczki", kategoria: "Ochrona osobista" },
    { nazwa: "Rękawiczki", kategoria: "Ochrona osobista" },
    { nazwa: "Apteczki", kategoria: "Sprzęt medyczny" },
    { nazwa: "Defibrylatory", kategoria: "Sprzęt medyczny" },
    { nazwa: "Stetoskop", kategoria: "Sprzęt medyczny" },
    { nazwa: "Monitor", kategoria: "Sprzęt medyczny" },
    { nazwa: "Kroplówki", kategoria: "Leki i płyny" },
    { nazwa: "Termometry", kategoria: "Sprzęt medyczny" }
];

const mockData = Array.from({ length: 20 }, (_, i) => {
    const item = names[i % names.length];
    return {
        id: i + 1,
        nazwa: item.nazwa,
        kategoria: item.kategoria,
        producent: ["MedTech", "BioCare", "SafeMed", "HealthPlus"][i % 4],
        ilosc: Math.floor(Math.random() * 100) + 1,
        jednostka: "szt.",
        stan: ["Nowy", "Używany", "Zużyty"][i % 3],
        lokalizacja: ["Magazyn A", "Magazyn B", "Szpital 1", "Karetka 2"][i % 4],
        dataZakupu: `2023-${String((i % 12) + 1).padStart(2, "0")}-${String((i % 28) + 1).padStart(2, "0")}`,
        dostepny: i % 2 === 0 ? "Tak" : "Nie",
    };
});

const ListaZasobow = () => {

    const renderTable = (data) => (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nazwa</th>
                    <th>Kategoria</th>
                    <th>Producent</th>
                    <th>Ilość</th>
                    <th>Jednostka</th>
                    <th>Stan</th>
                    <th>Lokalizacja</th>
                    <th>Data Zakupu</th>
                    <th>Dostępny</th>
                    <th>Akcje</th>
                </tr>
            </thead>
            <tbody>
                {data.map((z) => (
                    <tr key={z.id}>
                        <td>{z.id}</td>
                        <td>{z.nazwa}</td>
                        <td>{z.kategoria}</td>
                        <td>{z.producent}</td>
                        <td>{z.ilosc}</td>
                        <td>{z.jednostka}</td>
                        <td>{z.stan}</td>
                        <td>{z.lokalizacja}</td>
                        <td>{z.dataZakupu}</td>
                        <td>{z.dostepny}</td>
                        <td>
                            <Button size="sm" variant="info" onClick={() => handleShowDetails(z)} className="me-2">Szczegóły</Button>
                            <Button size="sm" variant="danger" onClick={() => handleDelete(z.id)}>Usuń</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
    const [zasoby, setZasoby] = useState(mockData);
    const [selected, setSelected] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [filters, setFilters] = useState({ kategoria: "", producent: "", lokalizacja: "", stan: "" });

    const handleDelete = (id) => {
        setZasoby((prev) => prev.filter((z) => z.id !== id));
    };

    const handleShowDetails = (zasob) => {
        setSelected(zasob);
        setShowModal(true);
    };

    const filteredData = zasoby.filter((z) => {
        return (
            (!filters.kategoria || z.kategoria === filters.kategoria) &&
            (!filters.producent || z.producent === filters.producent) &&
            (!filters.lokalizacja || z.lokalizacja === filters.lokalizacja) &&
            (!filters.stan || z.stan === filters.stan)
        );
    });

    return (
        <Container className="my-4">
            <h2>Lista zasobów</h2>

            <Form className="d-flex gap-3 flex-wrap mb-3">
                <Form.Group>
                    <Form.Label>Kategoria</Form.Label>
                    <Form.Select onChange={(e) => setFilters({ ...filters, kategoria: e.target.value })}>
                        <option value="">Wszystkie</option>
                        <option>Sprzęt</option>
                        <option>Materiały</option>
                        <option>Ochronne</option>
                        <option>Farmaceutyki</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Producent</Form.Label>
                    <Form.Select onChange={(e) => setFilters({ ...filters, producent: e.target.value })}>
                        <option value="">Wszyscy</option>
                        <option>MedTech</option>
                        <option>BioCare</option>
                        <option>SafeMed</option>
                        <option>HealthPlus</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Lokalizacja</Form.Label>
                    <Form.Select onChange={(e) => setFilters({ ...filters, lokalizacja: e.target.value })}>
                        <option value="">Wszystkie</option>
                        <option>Magazyn A</option>
                        <option>Magazyn B</option>
                        <option>Szpital 1</option>
                        <option>Karetka 2</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Stan</Form.Label>
                    <Form.Select onChange={(e) => setFilters({ ...filters, stan: e.target.value })}>
                        <option value="">Wszystkie</option>
                        <option>Nowy</option>
                        <option>Używany</option>
                        <option>Zużyty</option>
                    </Form.Select>
                </Form.Group>
            </Form>

            <Tabs defaultActiveKey="wszystkie" className="mb-3">
                <Tab eventKey="wszystkie" title="Wszystkie zasoby">
                    {renderTable(filteredData)}
                </Tab>
                <Tab eventKey="nowe" title="Nowe zasoby">
                    {renderTable(filteredData.filter(z => z.stan === "Nowy"))}
                </Tab>
                <Tab eventKey="uzywane" title="Używane zasoby">
                    {renderTable(filteredData.filter(z => z.stan === "Używany"))}
                </Tab>
                <Tab eventKey="zuzute" title="Zużyte zasoby">
                    {renderTable(filteredData.filter(z => z.stan === "Zużyty"))}
                </Tab>
            </Tabs>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Szczegóły zasobu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selected && (
                        <Table striped bordered size="sm">
                            <tbody>
                                <tr><td><strong>Nazwa</strong></td><td>{selected.nazwa}</td></tr>
                                <tr><td><strong>Kategoria</strong></td><td>{selected.kategoria}</td></tr>
                                <tr><td><strong>Producent</strong></td><td>{selected.producent}</td></tr>
                                <tr><td><strong>Ilość</strong></td><td>{selected.ilosc}</td></tr>
                                <tr><td><strong>Jednostka</strong></td><td>{selected.jednostka}</td></tr>
                                <tr><td><strong>Stan</strong></td><td>{selected.stan}</td></tr>
                                <tr><td><strong>Lokalizacja</strong></td><td>{selected.lokalizacja}</td></tr>
                                <tr><td><strong>Data zakupu</strong></td><td>{selected.dataZakupu}</td></tr>
                                <tr><td><strong>Dostępny</strong></td><td>{selected.dostepny}</td></tr>
                                <tr><td><strong>ID</strong></td><td>{selected.id}</td></tr>
                            </tbody>
                        </Table>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Zamknij</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default ListaZasobow;
