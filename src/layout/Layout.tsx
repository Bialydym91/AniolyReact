


import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import './layout.css';
import { useUser } from '../user/UserContext';
import { Register } from '../user/register';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export function Layout() {
    const [homeExpanded, setHomeExpanded] = useState(false);
    const { user, login, logout } = useUser();
    const [collapsed, setCollapsed] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showRegister, setShowRegister] = useState(false);

    const handleLogout = () => {
        logout();
        window.location.href = '/';
    };

    const toggleSidebar = () => {
        setCollapsed(prev => !prev);
    };
  
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id: string) => {
        if (location.pathname !== '/') {

            navigate(`/#${id}`);
        } else {

            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };


    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);
    const handleSearch = () => {
        console.log('Szukam:', searchQuery);

        const elements = document.querySelectorAll('[data-searchable]');
        let found = false;

        elements.forEach((el) => {
            if (el.textContent && el.textContent.toLowerCase().includes(searchQuery.toLowerCase())) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                el.classList.add('highlight');
                found = true;

                setTimeout(() => {
                    el.classList.remove('highlight');
                }, 2000);
            }
        });

        if (!found) {
            alert('Nie znaleziono pasujących wyników.');
        }
    };
    return (
        <div className="d-flex" style={{ minHeight: '100vh', overflow: 'hidden' }}>

            <div className={`sidebar bg-black text-white p-3 d-flex flex-column align-items-center align-items-sm-start ${collapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}
                style={{
                    transition: 'width 0.3s ease',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    zIndex: 1040,
                }}>
                <div className="mb-4 text-center w-100">
                    {collapsed ? (
                        <div
                            onClick={toggleSidebar}
                            className="hamburger-menu"
                            style={{
                                cursor: 'pointer',
                                fontSize: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '4px',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <div className="bar" style={{ width: '25px', height: '3px', backgroundColor: 'white' }}></div>
                            <div className="bar" style={{ width: '25px', height: '3px', backgroundColor: 'white' }}></div>
                            <div className="bar" style={{ width: '25px', height: '3px', backgroundColor: 'white' }}></div>
                        </div>
                    ) : (
                        <Image src="/image/anioły.jpg" className="img-fluid" />
                    )}
                </div>

                <Nav className="flex-column w-100">

                    <Nav.Link as={Link} to="/" className="text-white">
                        <Nav.Item className="text-white w-100">
                            <div
                                onClick={() => setHomeExpanded(prev => !prev)}
                                className="d-flex align-items-center w-100 py-2 px-2"
                                style={{ cursor: 'pointer' }}
                            >
                                <span>🏠</span>
                                <span className={`ms-2 ${collapsed ? 'd-none' : ''}`}>Strona główna</span>
                                {!collapsed && (
                                    <span className="ms-auto">{homeExpanded ? '▲' : '▼'}</span>
                                )}
                            </div>

                            {!collapsed && homeExpanded && (
                                <ul className="list-unstyled ps-4">
                                    <li>
                                        <button
                                            className="btn btn-link text-white ps-0 text-decoration-none"
                                            onClick={() => scrollToSection('kontakt')}
                                        >
                                            📞 Kontakt
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="btn btn-link text-white ps-0 text-decoration-none"
                                            onClick={() => scrollToSection('czekamy')}
                                        >
                                            ⏳ Czekamy
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="btn btn-link text-white ps-0 text-decoration-none"
                                            onClick={() => scrollToSection('o-nas')}
                                        >
                                            🏢 O nas
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="btn btn-link text-white ps-0 text-decoration-none"
                                            onClick={() => scrollToSection('cennik')}
                                        >
                                            💰 Cennik
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="btn btn-link text-white ps-0 text-decoration-none"
                                            onClick={() => scrollToSection('uslugi')}
                                        >
                                            🛠️ Usługi
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            className="btn btn-link text-white ps-0 text-decoration-none"
                                            onClick={() => scrollToSection('biznes')}
                                        >
                                            👤 Dla Firm
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </Nav.Item>
                    </Nav.Link>

                    <hr className="border-light w-100" />


                    <Nav.Item className="text-white ms-2">
                        <strong className={collapsed ? 'd-none' : ''}>Cennik i Abonamenty</strong>
                        <ul className={`list-unstyled ms-2 ${collapsed ? 'd-none' : ''}`}>
                            <li>
                                {user ? (
                                    <Nav.Link as={Link} to="/Abonament" className="text-white">
                                        📦 Abonament
                                    </Nav.Link>
                                ) : null}
                                <Nav.Link as={Link} to="/Cennik" className="text-white">
                                    💸 Cennik
                                </Nav.Link>
                            </li>
                        </ul>
                    </Nav.Item>


                    <Nav.Item className="text-white ms-2">
                        <strong className={collapsed ? 'd-none' : ''}>Kontakt</strong>
                        <ul className={`list-unstyled ms-2 ${collapsed ? 'd-none' : ''}`}>
                            <li>
                                <Nav.Link as={Link} to="/Kontakt" className="text-white">
                                    📞 Kontakt
                                </Nav.Link>
                            </li>
                        </ul>
                    </Nav.Item>


                    <Nav.Item className="text-white ms-2">
                        <strong className={collapsed ? 'd-none' : ''}>Usługi Ratownicze</strong>
                        <ul className={`list-unstyled ms-2 ${collapsed ? 'd-none' : ''}`}>
                            <li>
                                <Nav.Link as={Link} to="/Uslugi" className="text-white">
                                    🛠️ Usługi
                                </Nav.Link>
                            </li>
                            <li>
                                <Nav.Link as={Link} to="/eventy" className="text-white">
                                    🎉 Wydarzenia
                                </Nav.Link>
                            </li>
                            <li>
                                <Nav.Link as={Link} to="/biznes" className="text-white">
                                    👤 Dla Firm
                                </Nav.Link>
                            </li>
                        </ul>
                    </Nav.Item>

                    <Nav.Item className="text-white ms-2">
                        <strong className={collapsed ? 'd-none' : ''}>Edukacja i Bezpieczeństwo</strong>
                        <ul className={`list-unstyled ms-2 ${collapsed ? 'd-none' : ''}`}>
                            <li>
                                {user ? (
                                    <>
                                        
                                        <Nav.Link as={Link} to="/emergency" className="text-white">
                                            🚨 Objawy
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/leki" className="text-white">
                                            💊 Rodzaje leków
                                        </Nav.Link>
                                    </>
                                ) : (
                                    <p className="text-white">Dla zalogowanych</p>
                                )}
                            </li>
                        </ul>
                    </Nav.Item>
                    <Nav.Item className="text-white ms-2">
                        <strong className={collapsed ? 'd-none' : ''}>Cel i Misja</strong>
                        <ul className={`list-unstyled ms-2 ${collapsed ? 'd-none' : ''}`}>
                            <li>
                                <Nav.Link as={Link} to="/Zespol" className="text-white">
                                    👨‍⚕️ Zespół
                                </Nav.Link>
                            </li>
                            <li>
                                <Nav.Link as={Link} to="/Misja" className="text-white">
                                    🌟 Misja
                                </Nav.Link>
                            </li>
                            
                        </ul>
                    </Nav.Item>
                    <Nav.Item className="text-white ms-2">
                        {user?.rola === "Admin" && (
                            <>
                                <strong className={collapsed ? 'd-none' : ''}>Panel Administratora</strong>
                                <ul className={`list-unstyled ms-2 ${collapsed ? 'd-none' : ''}`}>
                                    <li className="mb-3">
                                        <strong className="text-white">👨‍⚕️ Kadry</strong>
                                        <Nav.Link as={Link} to="/pracownik" className="text-white ms-3">
                                            ➕ Dodaj pracownika
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/listaPracownikow" className="text-white ms-3">
                                            📋 Lista pracowników
                                        </Nav.Link>
                                    </li>

                                    <li className="mb-3">
                                        <strong className="text-white">🎓 Kursy</strong>
                                        <Nav.Link as={Link} to="/kurs" className="text-white ms-3">
                                            ➕ Nowy kurs
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/kursy" className="text-white ms-3">
                                            📚 Lista kursów
                                        </Nav.Link>
                                    </li>

                                    <li className="mb-3">
                                        <strong className="text-white">🧾 Faktury</strong>
                                        <Nav.Link as={Link} to="/faktura" className="text-white ms-3">
                                            ➕ Wystaw fakturę
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/listaFaktur" className="text-white ms-3">
                                            📋 Lista faktur
                                        </Nav.Link>
                                    </li>

                                    <li className="mb-3">
                                        <strong className="text-white">🏥 Magazyn</strong>
                                        <Nav.Link as={Link} to="/zasoby" className="text-white ms-3">
                                            ➕ Nowy zasób
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/listaZasobow" className="text-white ms-3">
                                            📦 Lista zasobów
                                        </Nav.Link>
                                    </li>

                                    <li className="mb-3">
                                        <strong className="text-white">🩺 Pacjenci</strong>
                                        <Nav.Link as={Link} to="/pacjent" className="text-white ms-3">
                                            ➕ Dodaj pacjenta
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/listaPacjentow" className="text-white ms-3">
                                            📋 Lista pacjentów
                                        </Nav.Link>
                                    </li>

                                    <li className="mb-3">
                                        <strong className="text-white">⚙️ Panel Administratora</strong>
                                        <Nav.Link as={Link} to="/ustawieniaAdmin" className="text-white ms-3">
                                            🛠️ Ustawienia
                                        </Nav.Link>
                                        <Nav.Link as={Link} to="/listaUzytkownikow" className="text-white ms-3">
                                            👥 Użytkownicy
                                        </Nav.Link>
                                    </li>
                                </ul>
                            </>
                        )}

                    </Nav.Item>

                  

                    <hr className="border-light w-100" />
                </Nav>
            </div>


            <div className="d-flex flex-column flex-grow-1"
                style={{
                    marginLeft: collapsed ? '60px' : '220px',
                    transition: 'margin-left 0.3s ease',
                    width: '100%',
                }}>
                <Navbar expand="lg" className="bg-dark navbar-dark shadow-sm px-4 py-3">
                    <div className="d-flex w-100 justify-content-between align-items-center">
                        <div onClick={toggleSidebar} className="hamburger-menu d-lg-none" style={{
                            cursor: 'pointer',
                            fontSize: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: '15px',
                        }}>
                            <div className="bar" style={{ width: '25px', height: '3px', backgroundColor: 'white' }}></div>
                            <div className="bar" style={{ width: '25px', height: '3px', backgroundColor: 'white' }}></div>
                            <div className="bar" style={{ width: '25px', height: '3px', backgroundColor: 'white' }}></div>
                        </div>

                        <Form className="d-flex"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSearch();
                            }}
                        >
                            <Form.Control
                                type="search"
                                placeholder="Szukaj"
                                className="me-2"
                                style={{ width: '180px' }}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="btn btn-outline-light">Szukaj</button>
                        </Form>

                        <Nav className="d-flex gap-3 align-items-center">
                            {!user && (
                                <>
                                    <button onClick={() => setShowLogin(true)} className="ms-3 btn btn-sm btn-outline-light">
                                        Zaloguj się
                                    </button>
                                    <Link to="/rejestracja" className="ms-3 btn btn-sm btn-outline-light">
                                        Zarejestruj się
                                    </Link>
                                </>
                            )}

                            {user && (
                                <>
                                    <div className="dropdown">
                                        <button className="btn btn-outline-light  dropdown-toggle  d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <Image src="/image/icona.jpg" roundedCircle style={{ width: '32px', height: '32px' }} />
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><Link className="dropdown-item" to="/profil">🧑‍⚕️ Profil</Link></li>
                                            <li><Link className="dropdown-item" to="/Ustawienia">⚙️ Ustawienia</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><button className="dropdown-item text-danger" onClick={handleLogout}>🚪 Wyloguj się</button></li>
                                        </ul>
                                    </div>
                                </>
                            )}

                        </Nav>
                    </div>
                </Navbar>


                {showLogin && (
                    <div className="login-overlay">
                        <div className="login-modal">
                            <Card className="p-4 shadow login-card">
                                <div className="text-center">
                                    <img src="/image/3.png" alt="Logo" className="mb-4" style={{ width: '100px' }} />
                                    <h4 className="mb-4" style={{ color: '#dc3545' }}>Logowanie</h4>
                                </div>

                                <Form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const form = e.target as HTMLFormElement;
                                        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                                        const password = (form.elements.namedItem('password') as HTMLInputElement).value;

                                        if (email === 'dawid91@gmail.com' && password === '1') {
                                            login({
                                                email,
                                                rola: 'Admin',
                                                username: 'dawid91'
                                            });
                                            setShowLogin(false);
                                        }
                                    }}
                                >
                                    <Form.Group className="mb-3">
                                        <Form.Label style={{ color: '#dc3545' }}>Adres e-mail</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Wprowadź e-mail" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label style={{ color: '#dc3545' }}>Hasło</Form.Label>
                                        <Form.Control type="password" name="password" placeholder="Wprowadź hasło" required />
                                    </Form.Group>

                                    <button type="submit" className="w-100 btn btn-danger">Zaloguj się</button>
                                    <button className="mt-2 w-100 btn btn-secondary" onClick={() => setShowLogin(false)}>
                                        Zamknij
                                    </button>
                                </Form>
                            </Card>
                        </div>
                    </div>
                )}
                {showRegister && (
                    <div className="login-overlay">
                        <div className="login-modal">
                            <Card className="p-4 shadow login-card">
                                <div className="text-center">
                                    <img src="/image/3.png" alt="Logo" className="mb-4" style={{ width: '100px' }} />
                                    <h4 className="mb-4" style={{ color: '#dc3545' }}>Rejestracja</h4>
                                </div>

                                <Register onClose={() => setShowRegister(false)} />

                                <button className="mt-3 btn btn-secondary w-100" onClick={() => setShowRegister(false)}>
                                    Zamknij
                                </button>
                            </Card>
                        </div>
                    </div>
                )}


                <main className="flex-grow-1 px-3 py-4" style={{ backgroundColor: 'whitesmoke', overflowY: 'auto' }}>
                    <Container fluid>

                        <Outlet />
                    </Container>
                </main>


                <footer className="bg-dark text-white py-3 mt-auto">
                    <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <p className="ms-3 mb-2 mb-md-0 text-center text-md-start">
                                    &copy; {new Date().getFullYear()} Anioły Adrenaliny | Wszelkie prawa zastrzeżone
                        </p>
                        <div className="d-flex align-items-center gap-3">
                            <span className="me-2">Śledź nas:</span>
                            <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="text-white fs-5"><i className="bi bi-tiktok"></i></a>
                        </div>
                    </Container>
                </footer>
            </div>
        </div>
    );
}
