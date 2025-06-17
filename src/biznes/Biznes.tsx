import React, { useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import './Biznes.css';

const Biznes = () => {
    const [activeTab, setActiveTab] = useState('opiekamedyczna');

    return (
        <section id="biznes" className="biznes-section" style={{ backgroundColor: '#f5f5f5' }}>
            <div className="section-header">
                <h2><b>Zdrowie Twojej firmy – nasza odpowiedzialność</b></h2>
            </div>
            <Tab.Container id="business-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                <Nav variant="pills" className="mb-4 justify-content-center">
                    <Nav.Item><Nav.Link eventKey="opiekamedyczna">🩺 Opieka medyczna</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="badania">📅 Badania profilaktyczne</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="szybkareakcja">🚑 Szybka reakcja</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="ekonsultacje">🖥️ E-konsultacje</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="infolinia">📞 Infolinia</Nav.Link></Nav.Item>
                </Nav>

                <Tab.Content>
                    <Tab.Pane eventKey="opiekamedyczna" className='big-gap'>
                        <h4>Opieka medyczna w Twojej firmie</h4>
                        <p>
                            Zapewniamy stały dostęp do lekarzy i personelu medycznego, bez konieczności opuszczania biura. Nasze usługi medyczne obejmują zarówno codzienną profilaktykę, jak i pomoc w nagłych wypadkach.
                        </p>
                        <ul>
                            <li>💼 Regularne wizyty lekarskie w miejscu pracy</li>
                            <li>🔄 Dopasowanie godzin do harmonogramu firmy</li>
                            <li>🩺 Diagnostyka podstawowa i specjalistyczna</li>
                            <li>📋 Prowadzenie dokumentacji zdrowotnej pracowników</li>
                            <li>🧑‍⚕️ Stały kontakt z lekarzem rodzinnym lub medycyny pracy</li>
                        </ul>
                        <p><b>Korzyść:</b> Pracownicy nie tracą czasu na dojazdy, a ich zdrowie jest pod kontrolą.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="badania" className='big-gap'>
                        <h4>Badania profilaktyczne i okresowe</h4>
                        <p>
                            Regularne badania to nie tylko wymóg prawny – to inwestycja w zdrowie i wydajność Twoich pracowników. Dzięki nam przeprowadzisz wszystkie badania bez zbędnych formalności.
                        </p>
                        <ul>
                            <li>🔬 Badania wstępne, okresowe i kontrolne</li>
                            <li>🧪 Pełna diagnostyka laboratoryjna</li>
                            <li>👨‍⚕️ Konsultacje ze specjalistami (laryngolog, okulista, ortopeda)</li>
                            <li>📈 Statystyki i raporty zdrowotne dla działu HR</li>
                            <li>⏱️ Szybkie terminy i minimalizacja formalności</li>
                        </ul>
                        <p><b>Korzyść:</b> Zmniejszenie absencji chorobowej i zgodność z przepisami BHP.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="szybkareakcja" className='big-gap'>
                        <h4>Szybka reakcja i pierwsza pomoc</h4>
                        <p>
                            Każda minuta może być kluczowa – dlatego oferujemy natychmiastową reakcję w nagłych przypadkach. Posiadamy mobilny zespół gotowy do interwencji na terenie firmy.
                        </p>
                        <ul>
                            <li>🚨 Interwencje w mniej niż 30 minut</li>
                            <li>🆘 Dostępność ratownika medycznego lub lekarza 24/7</li>
                            <li>🚑 Transport medyczny w nagłych sytuacjach</li>
                            <li>📦 Wyposażenie w defibrylatory i apteczki</li>
                            <li>🎓 Szkolenia z pierwszej pomocy dla zespołu</li>
                        </ul>
                        <p><b>Korzyść:</b> Budujesz zaufanie wśród pracowników i zwiększasz bezpieczeństwo pracy.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="ekonsultacje" className='big-gap'>
                        <h4>E-konsultacje i telemedycyna</h4>
                        <p>
                            Skonsultuj się z lekarzem z dowolnego miejsca – z domu, biura czy delegacji. Nasze e-konsultacje to oszczędność czasu i komfortowy dostęp do specjalistów.
                        </p>
                        <ul>
                            <li>💬 Konsultacje przez wideo i czat</li>
                            <li>🧑‍⚕️ Dostęp do lekarzy POZ i specjalistów</li>
                            <li>📑 Możliwość wystawienia e-recepty, e-zwolnienia</li>
                            <li>📲 Panel pacjenta z historią wizyt i wynikami</li>
                            <li>🌐 Bezpieczne połączenia szyfrowane</li>
                        </ul>
                        <p><b>Korzyść:</b> Szybki kontakt z lekarzem, niezależnie od lokalizacji pracownika.</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="infolinia" className='big-gap'>
                        <h4>Infolinia zdrowotna dla firm</h4>
                        <p>
                            Całodobowa linia wsparcia zdrowotnego dostępna dla Twojej kadry. Zadzwoń, zapytaj, skonsultuj – bez kolejek i zbędnego oczekiwania.
                        </p>
                        <ul>
                            <li>📞 Telefoniczny kontakt z lekarzem 24/7</li>
                            <li>🩺 Możliwość umówienia wizyty lub e-konsultacji</li>
                            <li>🧘‍♀️ Wsparcie psychologiczne i wellbeing</li>
                            <li>🗂️ Przechowywanie historii zgłoszeń</li>
                            <li>📚 Edukacja zdrowotna i porady sezonowe</li>
                        </ul>
                        <p><b>Korzyść:</b> Stały dostęp do pomocy zwiększa poczucie bezpieczeństwa wśród pracowników.</p>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            <div className="cta-box text-center mt-5 p-4">
                <h3 className="mb-3">Chcesz zadbać o zdrowie swojej firmy?</h3>
                <p className="mb-4">Wybierz jeden z naszych pakietów i zapewnij swoim pracownikom kompleksową opiekę medyczną już dziś.</p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <a href="/abonament" className="btn btn-outline-primary btn-lg">
                        Pakiety abonamentowe
                    </a>
                    <a href="/cennik" className="btn btn-outline-primary btn-lg">
                        Sprawdź cennik
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Biznes;
