import React, { useState, useEffect } from "react";
import { Container, Tab, Tabs, Table, Button, Form, Row, Col, Card } from "react-bootstrap";

type Faktura = {
    id: number;
    pacjent: string;
    data: string;
    kwota: number;
    status: "Zapłacono" | "Nie zapłacono";
};

const generateRandomFaktury = (n: number): Faktura[] => {
    const names = [
        "Jan Kowalski", "Anna Nowak", "Marek Wiśniewski", "Zofia Zielińska",
        "Piotr Lewandowski", "Tomasz Nowicki", "Agnieszka Wójcik", "Katarzyna Kaczmarek",
        "Robert Zielonka", "Elżbieta Maj", "Andrzej Król", "Magda Kubiak",
        "Dominik Duda", "Marta Pawlak", "Paweł Lis", "Sylwia Baran",
        "Kamil Szczepański", "Beata Górska", "Jacek Malinowski", "Renata Czarnecka"
    ];

    const faktury: Faktura[] = [];

    for (let i = 0; i < n; i++) {
        faktury.push({
            id: i + 1,
            pacjent: names[i % names.length],
            data: new Date(Date.now() - Math.random() * 10000000000).toISOString().split("T")[0],
            kwota: parseFloat((Math.random() * 500 + 100).toFixed(2)),
            status: Math.random() > 0.5 ? "Zapłacono" : "Nie zapłacono",
        });
    }

    return faktury;
};

const ListaFaktur = () => {
    const [activeTab, setActiveTab] = useState("wszystkie");
    const [faktury, setFaktury] = useState<Faktura[]>([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        setFaktury(generateRandomFaktury(20));
    }, []);

    const toggleStatus = (id: number) => {
        setFaktury((prev) =>
            prev.map((f) =>
                f.id === id ? { ...f, status: f.status === "Zapłacono" ? "Nie zapłacono" : "Zapłacono" } : f
            )
        );
    };

    const deleteFaktura = (id: number) => {
        setFaktury((prev) => prev.filter((f) => f.id !== id));
    };

    const filteredFaktury = faktury.filter((f) =>
        f.pacjent.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Container className="my-4">
            <h2>Lista Faktur</h2>
            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k || "wszystkie")} className="mb-3">
                {["wszystkie", "zapłacone", "niezapłacone", "ostatnie"].map((tab) => (
                    <Tab key={tab} eventKey={tab} title={tab[0].toUpperCase() + tab.slice(1)}>
                        <Card body>
                            <Row className="mb-3">
                                <Col md={6}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Filtruj po nazwisku pacjenta..."
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Pacjent</th>
                                        <th>Data</th>
                                        <th>Kwota</th>
                                        <th>Status</th>
                                        <th>Akcje</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredFaktury
                                        .filter((f) => {
                                            if (tab === "zapłacone") return f.status === "Zapłacono";
                                            if (tab === "niezapłacone") return f.status === "Nie zapłacono";
                                            if (tab === "ostatnie") return f.id > faktury.length - 5;
                                            return true;
                                        })
                                        .map((faktura) => (
                                            <tr key={faktura.id}>
                                                <td>{faktura.id}</td>
                                                <td>{faktura.pacjent}</td>
                                                <td>{faktura.data}</td>
                                                <td>{faktura.kwota.toFixed(2)} zł</td>
                                                <td>{faktura.status}</td>
                                                <td>
                                                    <Button
                                                        variant={faktura.status === "Zapłacono" ? "outline-warning" : "outline-success"}
                                                        size="sm"
                                                        className="me-1"
                                                        onClick={() => toggleStatus(faktura.id)}
                                                    >
                                                        {faktura.status === "Zapłacono" ? "Nie zapłacono" : "Zapłacono"}
                                                    </Button>
                                                    <Button
                                                        variant="outline-danger"
                                                        size="sm"
                                                        onClick={() => deleteFaktura(faktura.id)}
                                                    >
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
        </Container>
    );
};

export default ListaFaktur;