import { Container, Table, Card, Tabs, Tab, Button, Form } from 'react-bootstrap';
import './Cennik.css';
import { useState } from 'react';

const Cennik = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const uslugi = {
        wizyty: {
            label: "Wizyty lekarskie",
            pozycje: [
                { nazwa: "Wizyta domowa – lekarz ogólny", zwykly: 250, abonament: 0 },
                { nazwa: "Wizyta domowa – pediatra", zwykly: 270, abonament: 30 },
                { nazwa: "Wizyta w nagłym przypadku", zwykly: 400, abonament: 100 },
                { nazwa: "Teleporada", zwykly: 120, abonament: 0 },
                { nazwa: "Konsultacja wieczorna (po 20:00)", zwykly: 320, abonament: 80 },
                { nazwa: "Wizyta domowa – dermatolog", zwykly: 300, abonament: 50 },
                { nazwa: "Wizyta domowa – ginekolog", zwykly: 350, abonament: 70 },
                { nazwa: "Konsultacja w gabinecie lekarskim", zwykly: 200, abonament: 50 },
                { nazwa: "Wizyta u dietetyka", zwykly: 250, abonament: 100 },
                { nazwa: "Wizyta u alergologa", zwykly: 300, abonament: 120 },
                { nazwa: "Konsultacja z internistą", zwykly: 270, abonament: 80 },
                { nazwa: "Wizyta kontrolna po operacji", zwykly: 220, abonament: 60 },
                { nazwa: "Wizyta u neurologa", zwykly: 350, abonament: 130 },
                { nazwa: "Teleporada dla osób starszych", zwykly: 100, abonament: 0 },
                { nazwa: "Wizyta domowa – ortopeda", zwykly: 330, abonament: 90 },
            ]
        },
        transport: {
            label: "Transport medyczny",
            pozycje: [
                { nazwa: "Transport do szpitala (do 15 km)", zwykly: 350, abonament: 50 },
                { nazwa: "Transport z opieką ratownika", zwykly: 500, abonament: 100 },
                { nazwa: "Transport nocny (22:00–6:00)", zwykly: 450, abonament: 150 },
                { nazwa: "Transport między miastami", zwykly: "od 800", abonament: "od 300" },
                { nazwa: "Transport z domów opieki", zwykly: 400, abonament: 100 },
                { nazwa: "Transport do sanatorium", zwykly: 600, abonament: 150 },
                { nazwa: "Transport dzieci do szpitala", zwykly: 350, abonament: 80 },
                { nazwa: "Transport z opieką medyczną", zwykly: 600, abonament: 200 },
                { nazwa: "Transport do kliniki rehabilitacyjnej", zwykly: 500, abonament: 120 },
                { nazwa: "Transport z osobą towarzyszącą", zwykly: 550, abonament: 150 },
                { nazwa: "Transport wózkiem inwalidzkim", zwykly: 350, abonament: 100 },
                { nazwa: "Transport na dializę", zwykly: 450, abonament: 130 },
                { nazwa: "Transport do prywatnej kliniki", zwykly: 700, abonament: 200 },
                { nazwa: "Transport z opieką pielęgniarską", zwykly: 550, abonament: 180 },
                { nazwa: "Transport specjalistyczny z respiratorem", zwykly: 1200, abonament: 1000 },
            ]
        },
        diagnostyka: {
            label: "Diagnostyka i badania",
            pozycje: [
                { nazwa: "EKG z dojazdem", zwykly: 180, abonament: 40 },
                { nazwa: "Pobranie krwi w domu", zwykly: 120, abonament: 0 },
                { nazwa: "USG jamy brzusznej", zwykly: 300, abonament: 100 },
                { nazwa: "Test CRP", zwykly: 100, abonament: 20 },
                { nazwa: "RTG klatki piersiowej", zwykly: 150, abonament: 50 },
                { nazwa: "Echokardiogram", zwykly: 400, abonament: 120 },
                { nazwa: "Badanie moczu", zwykly: 50, abonament: 0 },
                { nazwa: "Badanie poziomu cholesterolu", zwykly: 70, abonament: 20 },
                { nazwa: "Test na COVID-19", zwykly: 200, abonament: 50 },
                { nazwa: "Punkcja stawów", zwykly: 350, abonament: 100 },
                { nazwa: "Konsultacja laboratoryjna", zwykly: 100, abonament: 30 },
                { nazwa: "Morfologia krwi", zwykly: 80, abonament: 0 },
                { nazwa: "Badanie poziomu witaminy D", zwykly: 150, abonament: 50 },
                { nazwa: "Badanie poziomu hormonów", zwykly: 200, abonament: 60 },
                { nazwa: "Test alergiczny", zwykly: 250, abonament: 70 },
            ]
        },
        specjalisci: {
            label: "Opieka specjalistyczna",
            pozycje: [
                { nazwa: "Wizyta u kardiologa", zwykly: 350, abonament: 120 },
                { nazwa: "Wizyta u psychologa", zwykly: 280, abonament: 80 },
                { nazwa: "Fizjoterapia domowa", zwykly: 220, abonament: 50 },
                { nazwa: "Opieka pielęgniarska (1h)", zwykly: 150, abonament: 30 },
                { nazwa: "Wizyta u neurologa", zwykly: 350, abonament: 130 },
                { nazwa: "Wizyta u dermatologa", zwykly: 300, abonament: 70 },
                { nazwa: "Wizyta u stomatologa", zwykly: 250, abonament: 60 },
                { nazwa: "Wizyta u endokrynologa", zwykly: 350, abonament: 90 },
                { nazwa: "Wizyta u fizjoterapeuty", zwykly: 220, abonament: 50 },
                { nazwa: "Konsultacja psychoterapeutyczna", zwykly: 300, abonament: 100 },
                { nazwa: "Wizyta u alergologa", zwykly: 280, abonament: 80 },
                { nazwa: "Konsultacja dietetyczna", zwykly: 250, abonament: 70 },
                { nazwa: "Wizyta u ortopedy", zwykly: 330, abonament: 90 },
                { nazwa: "Konsultacja z logopedą", zwykly: 200, abonament: 60 },
                { nazwa: "Wizyta u chirurga", zwykly: 400, abonament: 120 },
            ]
        },
        profilaktyka: {
            label: "Profilaktyka i szczepienia",
            pozycje: [
                { nazwa: "Szczepienie przeciw grypie", zwykly: 90, abonament: 0 },
                { nazwa: "Badanie poziomu cukru", zwykly: 40, abonament: 0 },
                { nazwa: "Pomiar ciśnienia", zwykly: 30, abonament: 0 },
                { nazwa: "Profilaktyczna kontrola roczna", zwykly: 250, abonament: 100 },
                { nazwa: "Szczepienie przeciw pneumokokom", zwykly: 150, abonament: 0 },
                { nazwa: "Szczepienie przeciw tężcowi", zwykly: 70, abonament: 0 },
                { nazwa: "Szczepienie przeciw ospie wietrznej", zwykly: 120, abonament: 0 },
                { nazwa: "Szczepienie przeciw HPV", zwykly: 180, abonament: 50 },
                { nazwa: "Badanie mammograficzne", zwykly: 200, abonament: 70 },
                { nazwa: "Badanie cytologiczne", zwykly: 100, abonament: 30 },
                { nazwa: "Badanie densytometryczne", zwykly: 250, abonament: 80 },
                { nazwa: "Szczepienie przeciw wzw typu B", zwykly: 110, abonament: 40 },
                { nazwa: "Szczepienie przeciw wzw typu A", zwykly: 100, abonament: 30 },
                { nazwa: "Badanie urologa", zwykly: 180, abonament: 60 },
                { nazwa: "Badanie dermatologiczne", zwykly: 200, abonament: 70 },
            ]
        },
        eventy: {
            label: "Eventy",
            pozycje: [
                { nazwa: "Zabezpieczenie medyczne imprezy (1 zespół, do 4h)", zwykly: 1200, abonament: 1000 },
                { nazwa: "Każda dodatkowa godzina", zwykly: 250, abonament: 200 },
                { nazwa: "Punkt medyczny z namiotem i sprzętem", zwykly: 800, abonament: 600 },
                { nazwa: "Karetka z zespołem ratowniczym", zwykly: 1500, abonament: 1200 },
                { nazwa: "Wydarzenia masowe (powyżej 500 osób)", zwykly: "wycena indywidualna", abonament: "wycena indywidualna" },
                { nazwa: "Zabezpieczenie medyczne koncertu", zwykly: 1200, abonament: 1000 },
                { nazwa: "Zabezpieczenie medyczne festiwalu", zwykly: 1500, abonament: 1200 },
                { nazwa: "Zabezpieczenie medyczne biegu", zwykly: 1000, abonament: 800 },
                { nazwa: "Zabezpieczenie medyczne konferencji", zwykly: 800, abonament: 600 },
                { nazwa: "Zabezpieczenie medyczne wesela", zwykly: 700, abonament: 600 },
                { nazwa: "Zabezpieczenie medyczne wystawy", zwykly: 1000, abonament: 800 },
                { nazwa: "Transport medyczny na wydarzenie", zwykly: 600, abonament: 500 },
                { nazwa: "Zabezpieczenie medyczne na stadionie", zwykly: 1500, abonament: 1300 },
                { nazwa: "Zabezpieczenie medyczne w plenerze", zwykly: 1200, abonament: 1000 },
                { nazwa: "Zabezpieczenie medyczne na koncertach plenerowych", zwykly: 1400, abonament: 1200 },
            ]
        },
        dlaFirm: {
            label: "Dla firm",
            pozycje: [
                { nazwa: "Okresowe badania pracownicze", zwykly: 200, abonament: 100 },
                { nazwa: "Badania wstępne i kontrolne", zwykly: 180, abonament: 90 },
                { nazwa: "Pakiet profilaktyczny (mini-check-up)", zwykly: 350, abonament: 200 },
                { nazwa: "Program szczepień w firmie (grypa)", zwykly: 90, abonament: 0 },
                { nazwa: "Mobilny punkt pobrań krwi", zwykly: 250, abonament: 100 },
                { nazwa: "Szkolenie z pierwszej pomocy (do 10 os.)", zwykly: 800, abonament: 500 },
                { nazwa: "Konsultacja psychologiczna dla pracownika", zwykly: 280, abonament: 100 },
                { nazwa: "Teleporady dla pracowników (nielimitowane)", zwykly: "wycena indywidualna", abonament: "w pakiecie" },
                { nazwa: "Zabezpieczenie medyczne eventów firmowych", zwykly: 1200, abonament: 1000 },
                { nazwa: "Wizyty lekarskie w biurze (1x w tygodniu)", zwykly: 500, abonament: 300 },
                { nazwa: "Pakiet zdrowia psychicznego dla HR", zwykly: 700, abonament: 400 },
                { nazwa: "Opieka internistyczna w trybie pilnym", zwykly: 300, abonament: 100 },
                { nazwa: "Monitoring zdrowia (ciśnienie, cukier)", zwykly: 180, abonament: 50 },
                { nazwa: "Program „Zdrowe biuro” – ergonomia i profilaktyka", zwykly: 400, abonament: 200 },
                { nazwa: "Raport zdrowotny zbiorczy (HR)", zwykly: 250, abonament: 0 },
            ]
        }
    };

    return (
        <Container className="py-5">
            <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title className="fs-3 text-danger mb-4" data-searchable>📋 Cennik usług medycznych</Card.Title>
                    <Card.Text className="mb-4">
                        Sprawdź ceny naszych usług w zależności od posiadania abonamentu. <Button variant="danger" className="cta-btn" data-searchable>Zadzwoń: 883 112 106</Button>
                    </Card.Text>

                    {/* Form for search input */}
                    <Form>
                        <Form.Control
                            type="text"
                            placeholder="Wyszukaj usługę..."
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </Form>

                    {/* Tabs to display services */}
                    <Tabs defaultActiveKey="wizyty" id="services-tabs" className="mt-4">
                        {Object.keys(uslugi).map((key) => (
                            <Tab eventKey={key} title={uslugi[key].label} key={key} className='big-gap'>
                                <Table responsive hover className="mt-3">
                                    <thead>
                                        <tr>
                                            <th>Usługa</th>
                                            <th>Cena bez abonamentu</th>
                                            <th>Cena z abonamentem</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {uslugi[key].pozycje
                                            .filter(item =>
                                                item.nazwa.toLowerCase().includes(searchQuery)
                                            )
                                            .map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.nazwa}</td>
                                                    <td>{item.zwykly} PLN</td>
                                                    <td>{item.abonament} PLN</td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </Table>
                            </Tab>
                        ))}
                    </Tabs>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Cennik;
