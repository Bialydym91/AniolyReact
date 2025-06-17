import React from 'react';
import { Card, Container, Table, Badge } from 'react-bootstrap';
import { JSX } from 'react/jsx-dev-runtime';

type ProfilProps = {
    username?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    location?: string;
    accountStatus?: 'active' | 'inactive' | 'banned';
    createdAt?: string;
    theme?: 'light' | 'dark' | 'auto';
    language?: 'pl' | 'en' | 'de';
    privacy?: 'public' | 'private' | 'friends';
    notificationsEmail?: boolean;
    notificationsPush?: boolean;
    dateFormat?: string;
    rola?: string;
};

const themeMap: Record<'light' | 'dark' | 'auto', string> = {
    light: 'Jasny',
    dark: 'Ciemny',
    auto: 'Automatyczny',
};

const getThemeLabel = (t: keyof typeof themeMap): string => {
    return themeMap[t] || t;
};

const languageMap: Record<'pl' | 'en' | 'de', string> = {
    pl: 'Polski',
    en: 'Angielski',
    de: 'Niemiecki',
};

const getLanguageLabel = (l: keyof typeof languageMap): string => {
    return languageMap[l] || l;
};

const privacyMap: Record<'public' | 'private' | 'friends', string> = {
    public: 'Publiczny',
    private: 'Prywatny',
    friends: 'Tylko znajomi',
};

const getPrivacyLabel = (p: keyof typeof privacyMap): string => {
    return privacyMap[p] || p;
};

const getStatusBadge = (status: 'active' | 'inactive' | 'banned'): JSX.Element => {
    switch (status) {
        case 'active':
            return <Badge bg="success">Aktywne</Badge>;
        case 'inactive':
            return <Badge bg="secondary">Nieaktywne</Badge>;
        case 'banned':
            return <Badge bg="danger">Zablokowane</Badge>;
        default:
            return <Badge bg="warning">{status}</Badge>;
    }
};

const Profil: React.FC<ProfilProps> = ({
    username = 'dawid91',
    email = 'dawid91@gmail.com',
    firstName = 'Dawid',
    lastName = 'Dymek',
    phone = '+48 500 123 456',
    location = 'Warszawa, Polska',
    accountStatus = 'active',
    createdAt = '2023-06-15',
    theme = 'light',
    language = 'pl',
    privacy = 'public',
    notificationsEmail = true,
    notificationsPush = false,
    dateFormat = '30/11/1991',
    rola = 'Admin',
}) => {
    return (
        <Container className="py-5">
            <Card className="shadow-lg border-0">
                <Card.Body>
                    <Card.Title className="fs-3 mb-4 text-center">👤 Profil użytkownika</Card.Title>
                    <Table hover responsive="md" className="mb-0">
                        <tbody>
                            <tr>
                                <th>Nazwa użytkownika</th>
                                <td>{username}</td>
                            </tr>
                            <tr>
                                <th>Imię i nazwisko</th>
                                <td>{firstName} {lastName}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{email}</td>
                            </tr>
                            <tr>
                                <th>Numer telefonu</th>
                                <td>{phone}</td>
                            </tr>
                            <tr>
                                <th>Lokalizacja</th>
                                <td>{location}</td>
                            </tr>
                            <tr>
                                <th>Rola</th>
                                <td>{rola}</td>
                            </tr>
                            <tr>
                                <th>Język aplikacji</th>
                                <td>{getLanguageLabel(language)}</td>
                            </tr>
                            <tr>
                                <th>Motyw aplikacji</th>
                                <td>{getThemeLabel(theme)}</td>
                            </tr>
                            <tr>
                                <th>Widoczność profilu</th>
                                <td>{getPrivacyLabel(privacy)}</td>
                            </tr>
                            <tr>
                                <th>Format daty</th>
                                <td>{dateFormat}</td>
                            </tr>
                            <tr>
                                <th>Status konta</th>
                                <td>{getStatusBadge(accountStatus)}</td>
                            </tr>
                            <tr>
                                <th>Data utworzenia</th>
                                <td>{new Date(createdAt).toLocaleDateString()}</td>
                            </tr>
                            <tr>
                                <th>Powiadomienia e-mail</th>
                                <td>{notificationsEmail ? '✅ Tak' : '❌ Nie'}</td>
                            </tr>
                            <tr>
                                <th>Powiadomienia push</th>
                                <td>{notificationsPush ? '✅ Tak' : '❌ Nie'}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Profil;
