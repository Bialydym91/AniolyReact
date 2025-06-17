import React, { useState } from 'react';
import { Container, Card, Button, Row, Col, Tabs, Tab } from 'react-bootstrap';
import './medicaments.css';
interface Medication {
    name: string;
    description: string;
    indications: string;
    contraindications: string;
    recommendations: string[];
}

const Medicaments: React.FC = () => {
    const [selectedMedication, setSelectedMedication] = useState<Medication | null>(null);

    const categories: { [key: string]: Medication[] } = {
        'Przeciwbólowe': [
            {
                name: 'Ibuprofen',
                description: 'Działa przeciwbólowo, przeciwzapalnie i przeciwgorączkowo.',
                indications: 'Bóle głowy, mięśni, zębów, gorączka.',
                contraindications: 'Wrzody, niewydolność nerek, ciąża (III trymestr).',
                recommendations: ['Po posiłku', 'Max 1200 mg/dobę', 'Popij wodą'],
            },
            {
                name: 'Paracetamol',
                description: 'Przeciwbólowy i przeciwgorączkowy, łagodny dla żołądka.',
                indications: 'Bóle i gorączka.',
                contraindications: 'Choroby wątroby, alkoholizm.',
                recommendations: ['Nie przekraczaj 4g/dobę', 'Co 4–6h', 'Nie łącz z alkoholem'],
            },
            {
                name: 'Apap',
                description: 'Zawiera paracetamol – łagodzi ból i obniża gorączkę.',
                indications: 'Bóle różnego pochodzenia.',
                contraindications: 'Choroby wątroby.',
                recommendations: ['Maks 8 tabletek/dobę', 'Popij wodą'],
            },
            {
                name: 'Nurofen',
                description: 'Zawiera ibuprofen – szybko działa przeciwbólowo.',
                indications: 'Ból zębów, mięśni, miesiączkowy.',
                contraindications: 'Wrzody, astma aspirynowa.',
                recommendations: ['Nie na czczo', 'Nie stosuj dłużej niż 3 dni'],
            },
            {
                name: 'Pyralgina',
                description: 'Silny lek przeciwbólowy dostępny bez recepty.',
                indications: 'Silne bóle, gorączka oporna na inne leki.',
                contraindications: 'Choroby nerek, ciąża.',
                recommendations: ['Tylko doraźnie', 'Nie prowadź auta po zażyciu'],
            },
        ],
        'Maści i żele': [
            {
                name: 'Voltaren',
                description: 'Żel z diklofenakiem – działa przeciwzapalnie i przeciwbólowo.',
                indications: 'Stłuczenia, bóle mięśni, kontuzje.',
                contraindications: 'Uszkodzona skóra, uczulenie na NLPZ.',
                recommendations: ['Nakładaj cienką warstwę', '2–3x dziennie', 'Nie stosuj pod opatrunek'],
            },
            {
                name: 'Altacet',
                description: 'Żel ściągający i chłodzący, redukuje obrzęki.',
                indications: 'Siniaki, skręcenia, opuchlizna.',
                contraindications: 'Rany otwarte, nadwrażliwość.',
                recommendations: ['Delikatnie wsmarować', 'Nie stosować na błony śluzowe'],
            },
            {
                name: 'Ben-Gay',
                description: 'Rozgrzewająca maść na bóle mięśni i stawów.',
                indications: 'Bóle krzyża, pleców.',
                contraindications: 'Skóra uszkodzona, dzieci <12 r.ż.',
                recommendations: ['Unikać kontaktu z oczami', 'Myć ręce po użyciu'],
            },
            {
                name: 'Fastum',
                description: 'Żel z ketoprofenem – przeciwbólowy i przeciwzapalny.',
                indications: 'Zapalne dolegliwości mięśni i ścięgien.',
                contraindications: 'Ekspozycja na słońce, uszkodzona skóra.',
                recommendations: ['Nie wystawiaj skóry na słońce', 'Nie stosować dłużej niż 7 dni'],
            },
            {
                name: 'Maść arnikowa',
                description: 'Naturalna maść zmniejszająca siniaki i obrzęki.',
                indications: 'Stłuczenia, drobne urazy.',
                contraindications: 'Alergia na arnikę.',
                recommendations: ['Tylko na skórę', '2–3x dziennie'],
            },
        ],
        'Na biegunkę': [
            {
                name: 'Smecta',
                description: 'Chroni błonę śluzową jelit, wiąże toksyny.',
                indications: 'Biegunka, niestrawność.',
                contraindications: 'Niedrożność jelit.',
                recommendations: ['Rozpuścić w wodzie', 'Pić między posiłkami'],
            },
            {
                name: 'Loperamid',
                description: 'Hamuje perystaltykę jelit.',
                indications: 'Nagła biegunka.',
                contraindications: 'Gorączka, krew w stolcu.',
                recommendations: ['Nie dla dzieci <12 r.ż.', 'Max 4 tabletki/dzień'],
            },
            {
                name: 'Enterol',
                description: 'Probiotyk na bazie drożdży Saccharomyces boulardii.',
                indications: 'Biegunki, wspomaganie flory jelitowej.',
                contraindications: 'Pacjenci z cewnikiem żylnym.',
                recommendations: ['Nie rozgryzać kapsułki', 'Pić dużo płynów'],
            },
            {
                name: 'Nifuroksazyd',
                description: 'Lek przeciwbakteryjny działający w jelitach.',
                indications: 'Biegunka bakteryjna.',
                contraindications: 'Nadwrażliwość, dzieci <6 lat.',
                recommendations: ['Co 6h przez 3 dni', 'Nie mieszać z alkoholem'],
            },
            {
                name: 'ORS Hydration',
                description: 'Saszetki z elektrolitami do uzupełnienia płynów.',
                indications: 'Odwodnienie przy biegunce.',
                contraindications: 'Ciężka niewydolność nerek.',
                recommendations: ['1 saszetka na 200ml wody', 'Pić małymi łykami'],
            },
        ],
        'Na gardło i przeziębienie': [
            {
                name: 'Strepsils',
                description: 'Pastylki antybakteryjne i łagodzące ból gardła.',
                indications: 'Ból gardła, chrypka.',
                contraindications: 'Uczulenie na składniki.',
                recommendations: ['Ssij co 2–3h', 'Nie połykać w całości'],
            },
            {
                name: 'Xylometazolin',
                description: 'Spray do nosa – udrażnia zatoki.',
                indications: 'Katar, zatkany nos.',
                contraindications: 'Nadciśnienie, jaskra.',
                recommendations: ['Max 7 dni', 'Nie przekraczać dawki'],
            },
            {
                name: 'Fervex',
                description: 'Preparat na przeziębienie – przeciwbólowy, przeciwhistaminowy.',
                indications: 'Objawy grypy i przeziębienia.',
                contraindications: 'Wiek <15 lat, choroby wątroby.',
                recommendations: ['1 saszetka co 6h', 'Rozpuścić w ciepłej wodzie'],
            },
            {
                name: 'Theraflu',
                description: 'Złożony preparat na przeziębienie.',
                indications: 'Gorączka, katar, ból gardła.',
                contraindications: 'Nadciśnienie, choroby serca.',
                recommendations: ['Nie więcej niż 3 saszetki dziennie', 'Popić dużą ilością wody'],
            },
            {
                name: 'Isla Mint',
                description: 'Pastylki osłaniające błonę śluzową gardła.',
                indications: 'Chrypka, drapanie w gardle.',
                contraindications: 'Nadwrażliwość na składniki.',
                recommendations: ['Ssij powoli', 'Nie popijać bezpośrednio po spożyciu'],
            },
        ],
        'Inne': [
            {
                name: 'Allertec',
                description: 'Lek przeciwhistaminowy na alergię.',
                indications: 'Katar sienny, pokrzywka.',
                contraindications: 'Nadwrażliwość, ciąża.',
                recommendations: ['1 tabletka dziennie', 'Nie prowadź auta przy senności'],
            },
            {
                name: 'No-Spa',
                description: 'Rozkurczowy lek na ból brzucha.',
                indications: 'Skurcze żołądka, jelit, miesiączka.',
                contraindications: 'Niewydolność wątroby.',
                recommendations: ['1–2 tabletki do 3x dziennie', 'Nie stosować długotrwale'],
            },
            {
                name: 'Manti',
                description: 'Preparat zobojętniający kwas żołądkowy.',
                indications: 'Zgaga, nadkwasota.',
                contraindications: 'Ciężka niewydolność nerek.',
                recommendations: ['Po posiłku', 'Nie przekraczać dawki'],
            },
            {
                name: 'Ulgix wzdęcia',
                description: 'Zmniejsza napięcie gazów jelitowych.',
                indications: 'Wzdęcia, uczucie pełności.',
                contraindications: 'Nadwrażliwość.',
                recommendations: ['1–2 kapsułki po posiłku'],
            },
            {
                name: 'Melatonina',
                description: 'Reguluje rytm dobowy, ułatwia zasypianie.',
                indications: 'Problemy ze snem.',
                contraindications: 'Nie zalecana w ciąży.',
                recommendations: ['1 tabletka przed snem', 'Nie stosować z alkoholem'],
            },
        ],
    };

    return (
        <Container className="py-5">
            <Card className="shadow">
                <Card.Body>
                    <Card.Title className="fs-3 text-primary">Leki bez recepty – według kategorii</Card.Title>
                    <Card.Text>Wybierz kategorię i lek, aby zobaczyć szczegóły.</Card.Text>

                    <Tabs defaultActiveKey="Przeciwbólowe" className="big-gap   custom-tabs" justify>
                        {Object.entries(categories).map(([category, meds]) => (
                            <Tab eventKey={category} title={category} key={category}>
                                <Row className="mt-4">
                                    {meds.map((med, idx) => (
                                        <Col xs={6} md={3} className="mb-3 text-center" key={idx}>
                                            <Button
                                                variant={selectedMedication?.name === med.name ? 'primary' : 'outline-primary'}
                                                className="w-100"
                                                onClick={() => setSelectedMedication(med)}
                                            >
                                                💊<br />
                                                {med.name}
                                            </Button>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab>
                        ))}
                    </Tabs>

                    {selectedMedication && (
                        <Card className="mt-3">
                            <Card.Body>
                                <h5 className="text-primary">{selectedMedication.name}</h5>
                                <p><strong>Opis:</strong> {selectedMedication.description}</p>
                                <p><strong>Wskazania:</strong> {selectedMedication.indications}</p>
                                <p><strong>Kiedy nie brać:</strong> {selectedMedication.contraindications}</p>
                                <p><strong>Zalecenia:</strong></p>
                                <ul>
                                    {selectedMedication.recommendations.map((rec, idx) => (
                                        <li key={idx}>{rec}</li>
                                    ))}
                                </ul>
                            </Card.Body>
                        </Card>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Medicaments;
