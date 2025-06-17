import { useState } from 'react';
import { Button, Form, Col, Row, Container, Card, Modal, Table } from 'react-bootstrap';

const Ustawienia = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('pl');
    const [notificationsEmail, setNotificationsEmail] = useState(true);
    const [notificationsPush, setNotificationsPush] = useState(false);
    const [privacy, setPrivacy] = useState('public');
    const [dateFormat, setDateFormat] = useState('DD/MM/YYYY');
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    type Course = {
        title: string;
        status: 'completed' | 'in-progress' | 'planned';
        completionDate?: string;
    };

    const courses: Course[] = [
        { title: 'Podstawy pierwszej pomocy', status: 'completed', completionDate: '2024-01-15' },
        { title: 'Zaawansowana pierwsza pomoc (BLS)', status: 'in-progress' },
        { title: 'Ratownictwo medyczne w sytuacjach kryzysowych', status: 'planned' },
        { title: 'Szkolenie z obsługi defibrylatora (AED)', status: 'completed', completionDate: '2023-12-10' },
        { title: 'Ratownictwo medyczne w wypadkach komunikacyjnych', status: 'in-progress' },
        { title: 'Pierwsza pomoc pediatryczna', status: 'planned' },
        { title: 'Terapia szokowa i resuscytacja krążeniowo-oddechowa (ACLS)', status: 'completed', completionDate: '2024-02-25' },
        { title: 'Zarządzanie dużymi wypadkami (MCI)', status: 'in-progress' },
        { title: 'Podstawowe procedury ratunkowe w pożarze', status: 'planned' },
        { title: 'Ratownictwo medyczne w terenie – akcje w trudnym terenie', status: 'completed', completionDate: '2024-03-10' }
    ];

    const getCourseStatusLabel = (status: 'completed' | 'in-progress' | 'planned'): string => {
        switch (status) {
            case 'completed':
                return 'Ukończony';
            case 'in-progress':
                return 'W trakcie';
            case 'planned':
                return 'Zaplanowany';
            default:
                return status;
        }
    };

    const handleSaveChanges = () => {
        console.log('Zmiany zapisane');
    };

    const handleDeleteAccount = () => {
        setShowDeleteModal(false);
        console.log('Konto usunięte');
    };

    return (
        <Container className="py-5">
            <Card className="shadow">
                <Card.Body>
                    <Card.Title className="fs-3" data-searchable>Ustawienia konta</Card.Title>
                    <Form>
             
                        <h5 className="mt-3" data-searchable>Dane osobowe</h5>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Nazwa użytkownika</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col md={6}>
                                <Form.Group controlId="formFirstName">
                                    <Form.Label>Imię</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formLastName">
                                    <Form.Label>Nazwisko</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <h5 className="mt-4" data-searchable>Bezpieczeństwo</h5>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Nowe hasło</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                 
                        <h5 className="mt-4" data-searchable>Powiadomienia</h5>
                        <Row>
                            <Col md={6}>
                                <Form.Check
                                    type="switch"
                                    id="notifications-email"
                                    label="Powiadomienia e-mail"
                                    checked={notificationsEmail}
                                    onChange={(e) => setNotificationsEmail(e.target.checked)}
                                />
                            </Col>
                            <Col md={6}>
                                <Form.Check
                                    type="switch"
                                    id="notifications-push"
                                    label="Powiadomienia push"
                                    checked={notificationsPush}
                                    onChange={(e) => setNotificationsPush(e.target.checked)}
                                />
                            </Col>
                        </Row>

         
                        <h5 className="mt-4" data-searchable>Prywatność</h5>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formPrivacy">
                                    <Form.Label>Widoczność profilu</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={privacy}
                                        onChange={(e) => setPrivacy(e.target.value)}
                                    >
                                        <option value="public">Publiczny</option>
                                        <option value="private">Prywatny</option>
                                        <option value="friends">Tylko dla znajomych</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                
                        <h5 className="mt-4" data-searchable>Preferencje aplikacji</h5>
                        <Row>
                            <Col md={4}>
                                <Form.Group controlId="formTheme">
                                    <Form.Label>Motyw</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={theme}
                                        onChange={(e) => setTheme(e.target.value)}
                                    >
                                        <option value="light">Jasny</option>
                                        <option value="dark">Ciemny</option>
                                        <option value="auto">Automatyczny</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formLanguage">
                                    <Form.Label>Język</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={language}
                                        onChange={(e) => setLanguage(e.target.value)}
                                    >
                                        <option value="pl">Polski</option>
                                        <option value="en">Angielski</option>
                                        <option value="de">Niemiecki</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="formDateFormat">
                                    <Form.Label>Format daty</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={dateFormat}
                                        onChange={(e) => setDateFormat(e.target.value)}
                                    >
                                        <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                                        <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                                        <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

            
                        <Button variant="primary" onClick={handleSaveChanges} className="mt-4 me-3">
                            Zapisz zmiany
                        </Button>
                        <Button variant="outline-danger" className="mt-4" onClick={() => setShowDeleteModal(true)}>
                            Usuń konto
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

  
            {courses.length > 0 && (
                <>
                    <hr className="my-4" />
                    <h5 className="mb-3">📚 Kursy użytkownika</h5>
                    <Table bordered size="sm" responsive>
                        <thead>
                            <tr>
                                <th>Nazwa kursu</th>
                                <th>Status</th>
                                <th>Data ukończenia</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course, index) => (
                                <tr key={index}>
                                    <td>{course.title}</td>
                                    <td>{getCourseStatusLabel(course.status)}</td>
                                    <td>
                                        {course.status === 'completed' && course.completionDate
                                            ? new Date(course.completionDate).toLocaleDateString()
                                            : '—'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}


            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Potwierdzenie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Czy na pewno chcesz usunąć swoje konto? Tej operacji nie można cofnąć.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Anuluj
                    </Button>
                    <Button variant="danger" onClick={handleDeleteAccount}>
                        Usuń konto
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Ustawienia;
