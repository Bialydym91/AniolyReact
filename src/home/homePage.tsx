import { Button, Container, Row, Col } from 'react-bootstrap';
import './homePage.css';
import { useEffect } from 'react';
import CzekamySection from '../home/Czekamy'

'use client';

export default function Home() {


    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const el = document.getElementById(hash.substring(1));
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    return (
        <> <div>


            <div className="background-section" style={{ backgroundImage: 'url(/image/re.jpg)' }}>
                <div className="overlay">
                    <Container className="text-center hero-content">
                        <h1 className="hero-heading" data-searchable>
                            Anioły Adrenaliny
                        </h1>
                        <h2 className="hero-subheading" data-searchable>
                            Nasza adrenalina – Twoje życie
                        </h2>
                        <Button variant="danger" className="cta-btn">
                            Wezwij pomoc
                        </Button>
                    </Container>
                </div>

            </div>




            <section id="uslugi" data-searchable>
                <div className="section-header">
                    <h2 data-searchable><b>Nasze usługi medyczne</b></h2>
                </div>
                <div className="background-section" style={{ backgroundImage: 'url(/image/transport.jpg)' }}>
                    <div className="overlay">
                        <Container className="services-section" style={{ marginLeft: '50px' }}>
                            <Row className="align-items-center d-flex">
                                <Col md={6}>
                                    <h3>Opieka medyczna dostępna zawsze, gdy jej potrzebujesz</h3>
                                    <p data-searchable>
                                        Zapewniamy profesjonalną opiekę medyczną 24/7 – zarówno w siedzibie Twojej firmy, jak i w domu pacjenta. Działamy szybko, skutecznie i z troską o każdego człowieka.
                                    </p>
                                    <p>
                                        Nasi lekarze i ratownicy są gotowi do działania w każdej chwili, niezależnie od pory dnia czy nocy. Oferujemy elastyczne rozwiązania dopasowane do Twoich potrzeb.
                                    </p>
                                    <p>
                                        Po więcej szczegółów kliknij poniżej:
                                    </p>
                                    <Button href="/uslugi" variant="danger" className="cta-btn">
                                        Zobacz pełną ofertę
                                    </Button>
                                </Col>
                                <Col md={6}>
                                    <img
                                        src="/image/uslugi.jpg"
                                        alt="Usługi medyczne"
                                        className="img-fluid rounded shadow"
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                    />
                                </Col>
                            </Row>

                            <Row className="mt-4">
                                <Col>
                                    <h4>Oferujemy m.in.:</h4>
                                    <ul style={{ textAlign: 'left' }}>
                                        <li>🚑 Natychmiastowy przyjazd karetki pod wskazany adres</li>
                                        <li>🏠 Wizyty domowe lekarzy i pielęgniarek</li>
                                        <li>🩺 Diagnostyka i badania na miejscu</li>
                                        <li>🖥️ Konsultacje online z lekarzem bez wychodzenia z domu</li>
                                        <li>📅 Elastyczne pakiety usług dla osób prywatnych i firm</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>






            <section id="cennik" data-searchable>
                <div className="section-header" >
                    <h2 data-searchable><b>Cennik</b></h2>
                </div>
                <div className="background-section" style={{ backgroundImage: 'url(/image/cennik.jpg)' }}>
                    <div className="overlay">
                        <Container className="services-section" style={{ marginLeft: '50px' }}>
                            <Row className="align-items-center d-flex">
                                <Col md={6}>
                                    <h3>Wybierz najlepszą dla siebie opcję współpracy z nami</h3>
                                    <p data-searchable>
                                        Oferujemy różne opcje współpracy, które dostosujemy do Twoich potrzeb. Wybierz najlepszą dla siebie!
                                    </p>
                                    <p>Masz kilka opcji do wyboru:</p>

                                    <ul style={{ textAlign: 'left' }}>
                                        <li>💡 Stała opieka medyczna 24/7</li>
                                        <li>🏠 Jednorazowa wizyta domowa w dogodnym terminie</li>
                                        <li>🩺 Wykonanie badań w domu bez wychodzenia</li>
                                    </ul>

                                    <Button href="/abonament" variant="danger" className="cta-btn">
                                        Sprawdź abonament
                                    </Button>
                                </Col>

                            </Row>

                            <Row className="mt-4">
                                <Col>
                                    <h4>Nasza oferta:</h4>
                                    <ul style={{ textAlign: 'left' }}>
                                        <li>💼 Abonament: Stała opieka medyczna od 155 zł miesięcznie</li>
                                        <li>🚑 Jednorazowa wizyta domowa: Pomoc medyczna na miejscu, na życzenie</li>
                                        <li>🩺 Wykonanie badań: Wygodne badania bez wychodzenia z domu</li>
                                    </ul>
                                    <Button href="/cennik" variant="danger" className="cta-btn">
                                        Umów badania
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>


            <section id="biznes" data-searchable>
                <div className="section-header">
                    <h2 data-searchable><b>Zdrowie Twojej firmy – nasza odpowiedzialność</b></h2>
                </div>
                <div className="background-section" style={{ backgroundImage: 'url(/image/eloo.jpg)' }}>
                    <div className="overlay">
                        <Container className="services-section" style={{ marginLeft: '50px' }}>
                            <Row className="align-items-center">
                                <Col md={6}>
                                    <h3>Kompleksowa opieka dla Twojego zespołu</h3>
                                    <p data-searchable>
                                        Zapewniamy pełną opiekę medyczną dla firm – od wizyt lekarskich po stały monitoring zdrowia
                                        pracowników. Nasze usługi są elastyczne i dopasowane do potrzeb Twojego biznesu. Działamy
                                        szybko, sprawnie i profesjonalnie, aby Twoi pracownicy czuli się bezpiecznie.
                                    </p>
                                    <ul style={{ textAlign: 'left' }}>
                                        <li>🩺 Stała opieka medyczna na miejscu</li>
                                        <li>📅 Regularne badania profilaktyczne</li>
                                        <li>🚑 Szybka reakcja – dojazd w 30 minut</li>
                                        <li>🖥️ E-konsultacje i porady zdalne</li>
                                        <li>📞 24/7 dedykowana infolinia firmowa</li>
                                    </ul>
                                    <Button href="/biznes" variant="danger" className="cta-btn mt-3">
                                        Sprawdź ofertę dla firm
                                    </Button>
                                </Col>
                                <Col md={5} style={{ marginRight: '10px' }}>
                                    <img
                                        src="/image/opieka.jpg"
                                        alt="Zdrowie w Twojej firmie"
                                        className="img-fluid rounded shadow"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>

            <section id="event" data-searchable>
                <div className="section-header">
                    <h2><b>Bezpieczeństwo Twojego wydarzenia</b></h2>
                </div>
                <div className="background-section" style={{ backgroundImage: 'url(/image/07.jpg)', backgroundSize: 'cover' }}>
                    <div className="overlay" style={{ padding: '60px 20px', backgroundColor: 'rgba(0, 0, 0, 0.65)', color: '#fff' }}>
                        <Container className="services-section">
                            <Row className="align-items-center">
                                <Col md={6}>
                                    <h3>Zabezpieczenie medyczne eventów</h3>
                                    <p>
                                        Koncerty, biegi, eventy sportowe – nasi ratownicy dbają o bezpieczeństwo tysięcy uczestników.
                                    </p>
                                    <p>
                                        Szybko, profesjonalnie i kompleksowo. Chcesz wiedzieć więcej?
                                    </p>
                                    <Button href="/eventy" variant="danger" className="cta-btn mt-3">
                                        Zobacz ofertę
                                    </Button>
                                </Col>
                                <Col md={6}>
                                    <img
                                        src="/image/ratowniczki.jpeg"
                                        alt="Zespół ratowników"
                                        className="img-fluid rounded shadow"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>

            <section id="o-nas" data-searchable>
                <div className="section-header">
                    <h2 data-searchable><b>O nas</b></h2>
                </div>

                <div
                    className="background-section"
                    style={{
                        backgroundImage: 'url(/image/8.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                    }}
                >
                    <div
                        className="overlay"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            padding: '60px 20px',
                            color: '#fff',
                            minHeight: '100%',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Container className="services-section">
                            <Row className="justify-content-center">
                                <Col md={8}>
                                    <div
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            padding: '30px',
                                            borderRadius: '20px',
                                            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
                                            backdropFilter: 'blur(6px)',
                                            animation: 'fadeIn 1s ease-in-out',
                                        }}
                                    >
                                        <p>
                                            👋 Cześć! Jesteśmy <b>Aniołami adrenaliny</b> – nowoczesną firmą medyczną, stworzoną z potrzeby niesienia pomocy <i>dokładnie tam, gdzie jesteśmy najbardziej potrzebni</i>.
                                        </p>
                                        <p>
                                            🏥 Nasz zespół tworzą doświadczeni <b>ratownicy, lekarze i pielęgniarki</b>, dostępni dla Ciebie <b>24/7</b>. Dojeżdżamy na wezwanie – do domu, biura, wszędzie tam, gdzie jesteś.
                                        </p>
                                        <p>
                                            🚑 Posiadamy mobilne karetki z technologią 5G i najnowszym sprzętem diagnostycznym. Dzięki temu wiele badań wykonujemy <b>od razu na miejscu</b> – bez kolejek, bez stresu.
                                        </p>
                                        <p>
                                            💖 Wierzymy w opiekę opartą na zaufaniu, empatii i czasie poświęconym pacjentowi. U nas nie jesteś numerem – jesteś człowiekiem.
                                        </p>
                                        <div className="text-center mt-4">
                                            <Button
                                                variant="danger"
                                                className="cta-btn"
                                                href="Zespol"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ padding: '12px 30px', fontSize: '1.1rem' }}
                                            >
                                                🤝 Poznaj nas bliżej
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>


            <CzekamySection />
            <section id="kontakt" className="kontakt-section" data-searchable>
                <div className="section-header">
                    <h2 className="kontakt-title"><b>Kontakt</b></h2>
                </div>

                <div className="kontakt-background">
                    <div className="overlay"></div>

                    <Container className="kontakt-content">
                        <h4 className="kontakt-subtitle">Skontaktuj się z nami</h4>
                        <p className="kontakt-text">
                            Nasza siedziba znajduje się w dogodnej lokalizacji w centrum miasta – z łatwym dojazdem zarówno komunikacją miejską 🚍,
                            jak i samochodem 🚗. Dla naszych gości dostępny jest także <b>parking</b>.
                            <br /><br />
                            Aby zobaczyć dokładną lokalizację, sprawdź nas na&nbsp;
                            <a
                                href="/lokalizacja"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="kontakt-link"
                            >
                                tej stronie
                            </a>
                            <br /><br />
                            Masz pytania? Chcesz nas poznać bliżej? 🤝<br />
                            Zapraszamy – z przyjemnością doradzimy i odpowiemy na wszystko osobiście.
                            Zajrzyj do nas, nawet na kawę ☕!
                        </p>

                        <Button
                            variant="danger"
                            href="/kontakt"
                            className="kontakt-button"
                        >
                            Poznaj szczegóły kontaktu
                        </Button>
                    </Container>
                </div>
            </section>


        </div>




        </>
    );
}


