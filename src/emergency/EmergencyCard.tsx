import React, { useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

interface Symptom {
    icon: string;
    label: string;
    description: string;
    location: string;
    actionRecommendations: string[]; // Dodajemy zalecenia do objawu
}

const EmergencyCard: React.FC = () => {
    const [selectedSymptom, setSelectedSymptom] = useState<Symptom | null>(null);

    const symptoms: Symptom[] = [
        {
            icon: '💢',
            label: 'Ból',
            description: 'Nieprzyjemne odczucie, mogące wskazywać na uraz lub chorobę.',
            location: 'Może występować w klatce piersiowej, brzuchu, głowie, kończynach.',
            actionRecommendations: [
                'Zadzwoń na 112',
                'Pozostań w spokoju',
                'Ustal lokalizację',
                'Zanotuj godzinę',
            ],
        },
        {
            icon: '🌡️',
            label: 'Gorączka',
            description: 'Podwyższona temperatura ciała, zwykle związana z infekcją.',
            location: 'Całe ciało – uczucie gorąca, potliwość.',
            actionRecommendations: [
                'Zadzwoń na 112',
                'Połóż się i odpocznij',
                'Zanotuj temperaturę ciała',
                'Spróbuj wypić wodę',
            ],
        },
        {
            icon: '🤢',
            label: 'Nudności',
            description: 'Uczucie potrzeby wymiotów.',
            location: 'Najczęściej w okolicy brzucha, głowy (migrena).',
            actionRecommendations: [
                'Zadzwoń na 112',
                'Pozostań w pozycji siedzącej',
                'Unikaj intensywnych zapachów',
            ],
        },
        {
            icon: '😵',
            label: 'Zawroty głowy',
            description: 'Utrata równowagi, uczucie wirowania.',
            location: 'Związane z głową, uszami (błędnik), oczami.',
            actionRecommendations: [
                'Zadzwoń na 112',
                'Usiądź i odpocznij',
                'Nie wykonuj gwałtownych ruchów',
            ],
        },
        {
            icon: '💨',
            label: 'Duszność',
            description: 'Trudności w oddychaniu, uczucie braku powietrza.',
            location: 'Najczęściej klatka piersiowa, płuca.',
            actionRecommendations: [
                'Zadzwoń na 112',
                'Postaraj się uspokoić',
                'Pozostań w pozycji półsiedzącej',
            ],
        },
        {
            icon: '❤️',
            label: 'Palpitacje',
            description: 'Uczucie szybkiego lub nieregularnego bicia serca.',
            location: 'Klatka piersiowa.',
            actionRecommendations: [
                'Zadzwoń na 112',
                'Spokojnie oddychaj',
                'Ustal godziny, kiedy wystąpiły objawy',
            ],
        },
        {
            icon: '🥵',
            label: 'Pocenie się',
            description: 'Nadmierne wydzielanie potu, często przy stresie lub gorączce.',
            location: 'Całe ciało – dłonie, pachy, twarz.',
            actionRecommendations: [
                'Zadzwoń na 112',
                'Spróbuj się ochłodzić',
                'Połóż się w chłodnym miejscu',
            ],
        },
        {
            icon: '🧍‍♂️',
            label: 'Osłabienie',
            description: 'Zmniejszona siła mięśniowa lub zmęczenie.',
            location: 'Mięśnie kończyn, całe ciało.',
            actionRecommendations: [
                'Zadzwoń na 112',
                'Pozostań na miejscu',
                'Nie wykonuj żadnych ciężkich prac',
            ],
        },
    ];

    return (
        <Container className="py-5">
            <Card className="shadow">
                <Card.Body>
                    <Card.Title className="fs-3 text-danger">Niepokoi Cię stan Twojego zdrowia?</Card.Title>
                    <Card.Text>
                        Jakie masz objawy? Jeśli coś Cię niepokoi, nie czekaj, natychmiast skontaktuj się z nami.
                    </Card.Text>

                    {/* Lista objawów */}
                    <h5 className="mb-3">Objawy:</h5>
                    <Row className="mb-4">
                        {symptoms.map((item, idx) => (
                            <Col xs={6} md={3} className="mb-3 text-center" key={idx}>
                                <Button
                                    variant={selectedSymptom?.label === item.label ? 'danger' : 'outline-danger'}
                                    className="w-100"
                                    onClick={() => setSelectedSymptom(item)}
                                >
                                    <span
                                        style={{
                                            fontSize: '1.5rem',
                                            color: selectedSymptom?.label === item.label ? 'red' : 'inherit',
                                        }}
                                    >
                                        {item.icon}
                                    </span>
                                    <br />
                                    {item.label}
                                </Button>
                            </Col>
                        ))}
                    </Row>

                    {/* Jeśli objaw został wybrany, pokazujemy jego opis i miejsce występowania */}
                    {selectedSymptom && (
                        <Card className="mb-4">
                            <Card.Body>
                                <h6
                                    className="text-danger"
                                    style={{
                                        color: selectedSymptom ? 'red' : 'inherit', // Zmieniamy kolor tekstu na czerwony
                                    }}
                                >
                                    {selectedSymptom.icon} {selectedSymptom.label}
                                </h6>
                                <p>
                                    <strong>Opis:</strong>{' '}
                                    <span
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: '1rem',
                                            color: selectedSymptom ? 'darkred' : 'inherit',
                                        }}
                                    >
                                        {selectedSymptom.description}
                                    </span>
                                </p>
                                <p>
                                    <strong>Gdzie może występować:</strong>{' '}
                                    <span
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: '1rem',
                                            color: selectedSymptom ? 'darkred' : 'inherit',
                                        }}
                                    >
                                        {selectedSymptom.location}
                                    </span>
                                </p>
                            </Card.Body>
                        </Card>
                    )}

                    {/* Sekcja Zalecane postępowanie */}
                    {selectedSymptom && (
                        <>
                            <h5 className="mb-3">Zalecane postępowanie:</h5>
                            <Row className="mb-4">
                                {selectedSymptom.actionRecommendations.map((recommendation, idx) => (
                                    <Col xs={6} md={3} className="mb-3 text-center" key={idx}>
                                        <Button variant="outline-primary" className="w-100">
                                            <span style={{ fontSize: '1.5rem' }}>✔️</span>
                                            <br />
                                            {recommendation}
                                        </Button>
                                    </Col>
                                ))}
                            </Row>
                        </>
                    )}

                    {/* Cennik */}
                    <h5 className="mt-4">Sprawdź ceny</h5>
                    <Row>
                        <Col xs={12} md={6}>
                            <Card className="mb-3 shadow-sm">
                                <Card.Body>
                                    <Card.Title>Abonament</Card.Title>
                                    <Card.Text>Od 155 zł miesięcznie</Card.Text>
                                    <Button variant="danger" href="/abonament">Zapisz się</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={6}>
                            <Card className="mb-3 shadow-sm">
                                <Card.Body>
                                    <Card.Title>Jednorazowa wizyta domowa</Card.Title>
                                    <Card.Text>Skontaktuj się z nami po szczegóły.</Card.Text>
                                    <Button variant="danger" href="tel:883112106">Zadzwoń teraz</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default EmergencyCard;
