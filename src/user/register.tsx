import { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useUser } from '../user/UserContext';

type RegisterProps = {
    onClose: () => void;
};

export function Register({ onClose }: RegisterProps) {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const { register } = useUser();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = (): string => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const nameRegex = /^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż\s-]{3,}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (Object.values(form).some(field => !field.trim())) {
            return 'Wszystkie pola są wymagane.';
        }

        if (!nameRegex.test(form.firstName)) {
            return 'Imię musi zawierać min. 3 litery i tylko litery.';
        }

        if (!nameRegex.test(form.lastName)) {
            return 'Nazwisko musi zawierać min. 3 litery i tylko litery.';
        }

        if (!emailRegex.test(form.email)) {
            return 'Nieprawidłowy adres e-mail.';
        }

        if (!passwordRegex.test(form.password)) {
            return 'Hasło musi mieć min. 8 znaków, 1 wielką literę i 1 cyfrę.';
        }

        if (form.password !== form.confirmPassword) {
            return 'Hasła nie pasują do siebie.';
        }

        return '';
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        register(form.email, form.password);
        setSuccessMessage('Rejestracja zakończona sukcesem. Możesz się zalogować!');

        setTimeout(() => {
            onClose();
        }, 2000);

        setForm({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <div className="login-overlay">
            <div className="login-modal">
                <Card className="p-4 shadow login-card">
                    <div className="text-center">
                        <img src="/image/3.png" alt="Logo" className="mb-4" style={{ width: '100px' }} />
                        <h4 className="mb-4 text-danger">Rejestracja</h4>
                    </div>

                    {successMessage && <Alert variant="success">{successMessage}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-danger">Imię</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                placeholder="Wprowadź imię"
                                value={form.firstName}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="text-danger">Nazwisko</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                placeholder="Wprowadź nazwisko"
                                value={form.lastName}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="text-danger">Adres e-mail</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Wprowadź e-mail"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="text-danger">Hasło</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Wprowadź hasło"
                                value={form.password}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="text-danger">Potwierdź hasło</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                placeholder="Potwierdź hasło"
                                value={form.confirmPassword}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button type="submit" className="w-100 btn btn-danger">
                            Zarejestruj się
                        </Button>
                    </Form>

                    <Button className="mt-3 btn btn-secondary w-100" onClick={onClose}>
                        Zamknij
                    </Button>
                </Card>
            </div>
        </div>
    );
}
