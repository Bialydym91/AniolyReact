import React, { useState } from "react";
import {
    Container,
    Table,
    Button,
    Form,
    Tabs,
    Tab,
} from "react-bootstrap";

const mockUsers = [
    {
        id: 1,
        imie: "Tomasz",
        nazwisko: "Kowalski",
        email: "t.kowalski@example.com",
        rola: "Admin",
        aktywny: "Tak",
        telefon: "500-200-001",
        dataUtworzenia: "2023-01-10",
        ostatnieLogowanie: "2024-04-22",
    },
    {
        id: 2,
        imie: "Katarzyna",
        nazwisko: "Zielińska",
        email: "k.zielinska@example.com",
        rola: "Lekarz",
        aktywny: "Tak",
        telefon: "500-200-002",
        dataUtworzenia: "2023-02-15",
        ostatnieLogowanie: "2024-04-20",
    },
    {
        id: 3,
        imie: "Marek",
        nazwisko: "Jankowski",
        email: "m.jankowski@example.com",
        rola: "Recepcja",
        aktywny: "Nie",
        telefon: "500-200-003",
        dataUtworzenia: "2023-03-10",
        ostatnieLogowanie: "2024-03-10",
    },
    {
        id: 4,
        imie: "Zofia",
        nazwisko: "Wiśniewska",
        email: "z.wisniewska@example.com",
        rola: "Kierownik",
        aktywny: "Tak",
        telefon: "500-200-004",
        dataUtworzenia: "2023-04-18",
        ostatnieLogowanie: "2024-04-25",
    },
    {
        id: 5,
        imie: "Andrzej",
        nazwisko: "Mazur",
        email: "a.mazur@example.com",
        rola: "Lekarz",
        aktywny: "Nie",
        telefon: "500-200-005",
        dataUtworzenia: "2023-05-05",
        ostatnieLogowanie: "2024-01-12",
    },
    {
        id: 6,
        imie: "Ewa",
        nazwisko: "Kamińska",
        email: "e.kaminska@example.com",
        rola: "Recepcja",
        aktywny: "Tak",
        telefon: "500-200-006",
        dataUtworzenia: "2023-06-01",
        ostatnieLogowanie: "2024-03-18",
    },
    {
        id: 7,
        imie: "Krzysztof",
        nazwisko: "Nowak",
        email: "k.nowak@example.com",
        rola: "Admin",
        aktywny: "Tak",
        telefon: "500-200-007",
        dataUtworzenia: "2023-07-22",
        ostatnieLogowanie: "2024-04-15",
    },
    {
        id: 8,
        imie: "Maria",
        nazwisko: "Dąbrowska",
        email: "m.dabrowska@example.com",
        rola: "Kierownik",
        aktywny: "Nie",
        telefon: "500-200-008",
        dataUtworzenia: "2023-08-13",
        ostatnieLogowanie: "2024-02-20",
    },
    {
        id: 9,
        imie: "Piotr",
        nazwisko: "Wójcik",
        email: "p.wojcik@example.com",
        rola: "Lekarz",
        aktywny: "Tak",
        telefon: "500-200-009",
        dataUtworzenia: "2023-09-09",
        ostatnieLogowanie: "2024-04-01",
    },
    {
        id: 10,
        imie: "Zuzanna",
        nazwisko: "Kaczmarek",
        email: "z.kaczmarek@example.com",
        rola: "Recepcja",
        aktywny: "Tak",
        telefon: "500-200-010",
        dataUtworzenia: "2023-10-10",
        ostatnieLogowanie: "2024-04-23",
    },
];

const ListaUzytkownikow = () => {
    const [uzytkownicy, setUzytkownicy] = useState(mockUsers);
    const [filters, setFilters] = useState({
        imie: "",
        nazwisko: "",
        email: "",
        rola: "",
    });

    const handleDelete = (id: number) => {
        setUzytkownicy((prev) => prev.filter((u) => u.id !== id));
    };

    const toggleStatus = (id: number) => {
        setUzytkownicy((prev) =>
            prev.map((u) =>
                u.id === id ? { ...u, aktywny: u.aktywny === "Tak" ? "Nie" : "Tak" } : u
            )
        );
    };

    const filterUsers = (users: typeof mockUsers) =>
        users.filter((u) =>
            (!filters.imie || u.imie.toLowerCase().includes(filters.imie.toLowerCase())) &&
            (!filters.nazwisko || u.nazwisko.toLowerCase().includes(filters.nazwisko.toLowerCase())) &&
            (!filters.email || u.email.toLowerCase().includes(filters.email.toLowerCase())) &&
            (!filters.rola || u.rola === filters.rola)
        );

    const renderTable = (data: typeof mockUsers) => (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Email</th>
                    <th>Rola</th>
                    <th>Aktywny</th>
                    <th>Telefon</th>
                    <th>Data utworzenia</th>
                    <th>Ostatnie logowanie</th>
                    <th>Akcje</th>
                </tr>
            </thead>
            <tbody>
                {data.map((u) => (
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.imie}</td>
                        <td>{u.nazwisko}</td>
                        <td>{u.email}</td>
                        <td>{u.rola}</td>
                        <td>{u.aktywny}</td>
                        <td>{u.telefon}</td>
                        <td>{u.dataUtworzenia}</td>
                        <td>{u.ostatnieLogowanie}</td>
                        <td>
                            <Button
                                size="sm"
                                variant="danger"
                                onClick={() => handleDelete(u.id)}
                                className="me-2"
                            >
                                Usuń
                            </Button>
                            <Button
                                size="sm"
                                variant={u.aktywny === "Tak" ? "warning" : "success"}
                                onClick={() => toggleStatus(u.id)}
                            >
                                {u.aktywny === "Tak" ? "Zablokuj" : "Odblokuj"}
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );

    return (
        <Container className="my-4">
            <h2>Lista użytkowników</h2>

            <Form className="d-flex flex-wrap align-items-end gap-2 mb-4">
                <Form.Group>
                    <Form.Label>Imię</Form.Label>
                    <Form.Control
                        placeholder="Imię"
                        onChange={(e) => setFilters({ ...filters, imie: e.target.value })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nazwisko</Form.Label>
                    <Form.Control
                        placeholder="Nazwisko"
                        onChange={(e) => setFilters({ ...filters, nazwisko: e.target.value })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        placeholder="Email"
                        onChange={(e) => setFilters({ ...filters, email: e.target.value })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rola</Form.Label>
                    <Form.Select
                        onChange={(e) => setFilters({ ...filters, rola: e.target.value })}
                    >
                        <option value="">Wszystkie</option>
                        <option>Admin</option>
                        <option>Kierownik</option>
                        <option>Lekarz</option>
                        <option>Recepcja</option>
                    </Form.Select>
                </Form.Group>
            </Form>

            <Tabs defaultActiveKey="wszyscy" className="mb-3">
                <Tab eventKey="wszyscy" title="Wszyscy">
                    {renderTable(filterUsers(uzytkownicy))}
                </Tab>
                <Tab eventKey="aktywni" title="Aktywni">
                    {renderTable(filterUsers(uzytkownicy.filter((u) => u.aktywny === "Tak")))}
                </Tab>
                <Tab eventKey="zablokowani" title="Zablokowani">
                    {renderTable(filterUsers(uzytkownicy.filter((u) => u.aktywny === "Nie")))}
                </Tab>
            </Tabs>
        </Container>
    );
};

export default ListaUzytkownikow;
