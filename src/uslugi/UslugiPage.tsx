import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './uslugi.css';

export const Uslugi = () => {
    const [activeDescription, setActiveDescription] = useState<{ description: string, image?: string } | null>(null);
    const [activeService, setActiveService] = useState<string | null>(null);

    const uslugi = {
        opieka: [
            {
                label: "Wizyty domowe i firmowe",
                icon: "🩺",
                image: "/image/zdrowotna.jpg",
                description: "Zapewniamy wizyty w domu lub firmie, aby zapewnić szybki dostęp do opieki medycznej. Nasz zespół wykwalifikowanych specjalistów dociera na miejsce zgodnie z ustalonym terminem. Dzięki temu pacjenci nie muszą tracić czasu na dojazdy i oczekiwanie w kolejkach. Wizyta odbywa się w komfortowych warunkach, dostosowanych do potrzeb osoby chorej. Naszym celem jest maksymalna wygoda i skuteczność leczenia w miejscu, które pacjent zna i w którym czuje się bezpiecznie."
            },
            {
                label: "Telekonsultacje z lekarzami",
                icon: "📞",
                image: "/image/teleporada.jpg",
                description: "Oferujemy możliwość konsultacji z lekarzami za pomocą telemedycyny. Dzięki nowoczesnym technologiom pacjenci mogą skonsultować się ze specjalistą bez wychodzenia z domu. Wystarczy komputer, tablet lub telefon z dostępem do internetu. Rozmowa odbywa się w bezpiecznym i poufnym środowisku online. To szybki, wygodny i skuteczny sposób na uzyskanie porady medycznej, zwłaszcza w nagłych przypadkach lub przy ograniczonej mobilności."
            },
            {
                label: "Dyżur ratowników 24/7",
                icon: "🚨",
                image: "/image/dyzur.jpg",
                description: "Oferujemy całodobowy dyżur ratowników medycznych dostępnych w razie potrzeby. Nasi doświadczeni ratownicy są gotowi do natychmiastowej interwencji o każdej porze dnia i nocy. Dzięki ich obecności możliwe jest szybkie udzielenie pierwszej pomocy w nagłych przypadkach. Działamy sprawnie i profesjonalnie, zapewniając pacjentom poczucie bezpieczeństwa. Nasz zespół to nie tylko wsparcie w kryzysowych sytuacjach, ale także pewność, że pomoc jest zawsze w zasięgu ręki."
            },
            {
                label: "Dostęp do specjalistów",
                icon: "👩‍⚕️",
                image: "/image/spec.jpg",
                description: "Zapewniamy dostęp do szerokiej gamy specjalistów medycznych. Współpracujemy z lekarzami różnych dziedzin, takich jak kardiologia, dermatologia, ortopedia czy neurologia. Dzięki temu pacjenci mogą liczyć na kompleksową opiekę bez konieczności szukania specjalistów na własną rękę. Wizyty są umawiane w dogodnych terminach, a cały proces jest maksymalnie uproszczony. Naszym celem jest zapewnienie szybkiej i profesjonalnej pomocy dopasowanej do indywidualnych potrzeb każdego pacjenta."
            }
        ],
        transport: [
            {
                label: "Karetki i pojazdy specjalistyczne",
                icon: "🚑",
                image: "/image/ambu.jpg",
                description: "Nasze pojazdy są w pełni wyposażone do transportu medycznego pacjentów w różnych stanach. Każda karetka posiada nowoczesny sprzęt ratowniczy, w tym defibrylatory, tlen, nosze oraz środki do monitorowania parametrów życiowych. Dzięki temu jesteśmy w stanie zapewnić bezpieczny i komfortowy transport zarówno pacjentom stabilnym, jak i wymagającym opieki w trakcie przewozu. Nasi ratownicy medyczni są odpowiednio przeszkoleni, aby reagować na wszelkie sytuacje podczas transportu. Dbamy o to, by każdy przejazd odbywał się sprawnie, bezpiecznie i z najwyższym standardem opieki."
            },
            {
                label: "Przewóz między placówkami",
                icon: "🏥",
                image: "/image/tran.jpg",
                description: "Zapewniamy bezpieczny transport pacjentów pomiędzy szpitalami i ośrodkami zdrowia. Nasze pojazdy są wyposażone w najwyższej jakości sprzęt medyczny, który umożliwia ciągłe monitorowanie stanu zdrowia pacjenta podczas transportu. Nasi wykwalifikowani ratownicy medyczni dbają o komfort i bezpieczeństwo pacjenta, reagując na wszelkie zmiany w jego stanie. Transport odbywa się zgodnie z zaleceniami lekarzy, zapewniając odpowiednią opiekę w trakcie przewozu. Dzięki temu pacjenci mogą być pewni, że trafią do odpowiedniego ośrodka w sposób profesjonalny i bezpieczny."
            },
            {
                label: "Transport leżący",
                icon: "🛏️",
                image: "/image/transport.jpg",
                description: "Specjalistyczny transport dla pacjentów, którzy nie mogą siedzieć w trakcie transportu, jest dostosowany do ich indywidualnych potrzeb zdrowotnych. Nasze pojazdy są wyposażone w specjalne leżanki i nosze, które umożliwiają wygodny i bezpieczny transport pacjentów w pozycji leżącej. Zespół ratowników medycznych, który towarzyszy pacjentowi, zapewnia stały nadzór nad jego stanem zdrowia i w razie potrzeby udziela niezbędnej pomocy. Transport odbywa się w komfortowych warunkach, zapewniając pacjentowi minimalny dyskomfort i maksymalne bezpieczeństwo. Dzięki naszemu sprzętowi i doświadczeniu, pacjenci, którzy nie mogą siedzieć, są transportowani w sposób jak najbardziej profesjonalny i bezpieczny."
            },
            {
                label: "Opieka ratownika w trakcie przejazdu",
                icon: "🧑‍⚕️",
                image: "/image/jedziemy.jpg",
                description: "Podczas transportu nad pacjentem czuwa wykwalifikowany ratownik medyczny, który monitoruje jego stan zdrowia. Ratownik jest odpowiedzialny za udzielanie niezbędnej pomocy w trakcie przewozu, zapewniając stabilność pacjenta. Dzięki swojej wiedzy i doświadczeniu, potrafi szybko reagować na zmieniające się warunki zdrowotne, zapewniając bezpieczeństwo podczas całego transportu. W razie potrzeby, ratownik używa nowoczesnego sprzętu medycznego, aby wspierać pacjenta i utrzymać jego parametry życiowe w normie. Działania te mają na celu nie tylko szybki przewóz, ale także zapewnienie wysokiego standardu opieki przez cały czas trwania transportu."
            }
        ],
        zabezpieczenie: [
            {
                label: "Imprezy masowe i firmowe",
                icon: "🎪",
                image: "/image/impra.jpg",
                description: "Zabezpieczamy różnorodne wydarzenia – od imprez plenerowych po koncerty, zapewniając bezpieczeństwo uczestnikom. Nasz zespół ratowników medycznych jest obecny na miejscu, gotowy do interwencji w przypadku wypadków, kontuzji czy nagłych problemów zdrowotnych. W zależności od charakteru wydarzenia, dostosowujemy zakres zabezpieczenia, aby zapewnić jak najlepszą ochronę. Posiadamy odpowiedni sprzęt medyczny, w tym punkty pierwszej pomocy i karetki, które są gotowe do szybkiej reakcji. Dzięki naszej profesjonalnej obsłudze uczestnicy wydarzeń mogą czuć się pewnie i komfortowo, wiedząc, że w razie potrzeby pomoc jest zawsze dostępna."
            },
            {
                label: "Karetka z zespołem gotowym do akcji",
                icon: "🚨",
                image: "/image/8.jpg",
                description: "W razie potrzeby nasza karetka z zespołem ratunkowym jest gotowa do szybkiej interwencji. Nasz zespół ratowników medycznych jest wyszkolony do radzenia sobie w każdej sytuacji, zapewniając profesjonalną pomoc w nagłych przypadkach. Karetka jest w pełni wyposażona w nowoczesny sprzęt medyczny, co umożliwia udzielenie pierwszej pomocy oraz stabilizowanie stanu pacjenta podczas transportu. Nasze pojazdy są przystosowane do szybkiego dotarcia w każde miejsce, a dzięki ścisłej współpracy z innymi służbami ratunkowymi możemy działać bez zbędnych opóźnień. Działamy błyskawicznie, aby zapewnić pacjentom najlepszą możliwą opiekę w trudnych momentach."
            },
            {
                label: "Punkty pierwszej pomocy",
                icon: "🩹",
                image: "/image/punt.jpg",
                description: "Zapewniamy punkty pierwszej pomocy podczas wydarzeń, aby szybko reagować na wszelkie wypadki i zagrożenia zdrowia. Nasze stanowiska są wyposażone w niezbędny sprzęt medyczny, taki jak apteczki, defibrylatory, tlen i materiały opatrunkowe, które umożliwiają udzielenie natychmiastowej pomocy. Wykwalifikowani ratownicy medyczni są obecni na miejscu, gotowi do szybkiej interwencji w przypadku kontuzji, urazów lub innych problemów zdrowotnych. Punkty pierwszej pomocy są strategicznie rozmieszczone, aby zapewnić łatwy dostęp do opieki w każdej części wydarzenia. Dzięki temu uczestnicy mogą czuć się bezpiecznie, wiedząc, że pomoc jest zawsze w zasięgu ręki."
            },
            {
                label: "Współpraca z organizatorem",
                icon: "📋",
                image: "/image/wspol.jpg",
                description: "Ściśle współpracujemy z organizatorami wydarzeń na każdym etapie przygotowań. Wspólnie analizujemy potrzeby i potencjalne zagrożenia związane z danym przedsięwzięciem. Tworzymy szczegółowe plany zabezpieczenia, dostosowane do charakteru i wielkości wydarzenia. Regularnie konsultujemy się z organizatorami, aby na bieżąco wprowadzać niezbędne poprawki. Dzięki temu możemy zagwarantować pełne bezpieczeństwo uczestników i sprawny przebieg całego wydarzenia."
            }
        ],
        kryzys: [
            {
                label: "Natychmiastowa reakcja i ewakuacja",
                icon: "🆘",
                image: "/image/ewakuacja.jpg",
                description: "Błyskawiczna mobilizacja do ewakuacji i ratowania osób w sytuacjach kryzysowych to nasza priorytetowa procedura. W momencie zagrożenia nasz zespół natychmiast przystępuje do działań, zapewniając szybki i skuteczny transport osób w bezpieczne miejsce. Każdy członek ekipy jest odpowiednio przeszkolony, by sprawnie reagować w ekstremalnych warunkach, minimalizując ryzyko dla osób poszkodowanych. Korzystamy z nowoczesnych środków transportu oraz sprzętu, aby jak najszybciej dotrzeć do miejsca zdarzenia i przeprowadzić ewakuację. Dzięki doskonałej organizacji i ścisłej współpracy z innymi służbami ratunkowymi, jesteśmy w stanie przeprowadzić ewakuację w rekordowym czasie, ratując życie i zdrowie osób zagrożonych."
            },
            {
                label: "Zabezpieczanie miejsc zdarzeń",
                icon: "🔥",
                image: "/image/stop.jpg",
                description: "Zabezpieczamy miejsca zdarzeń w celu ochrony zdrowia i życia osób poszkodowanych. Nasz zespół ratowników medycznych natychmiast reaguje, tworząc strefy bezpieczeństwa i zapewniając odpowiednią opiekę rannym. Dbamy o to, by miejsce zdarzenia było odpowiednio zabezpieczone przed dalszymi zagrożeniami, takimi jak pożar, wybuch czy ruch pojazdów. Współpracujemy z innymi służbami ratunkowymi, aby zminimalizować ryzyko i zapewnić skuteczną pomoc medyczną. Naszym celem jest zapewnienie jak najszybszej pomocy poszkodowanym, minimalizując czas oczekiwania na transport do placówek medycznych."
            },
            {
                label: "Współpraca ze służbami ratunkowymi",
                icon: "🤝",
                image: "/image/wspolpraca.jpg",
                description: "Oferujemy szkolenia dla personelu w zakresie reagowania w sytuacjach kryzysowych. Nasze kursy są prowadzone przez doświadczonych specjalistów, którzy dzielą się wiedzą na temat pierwszej pomocy, obsługi sprzętu ratowniczego oraz postępowania w nagłych wypadkach. Szkolenia obejmują zarówno teoretyczne, jak i praktyczne aspekty, dzięki czemu uczestnicy nabywają umiejętności niezbędne w sytuacjach stresowych. Uczestnicy uczą się, jak skutecznie działać w przypadku wypadków, pożarów czy zagrożeń zdrowia. Naszym celem jest przygotowanie personelu do szybkiej i profesjonalnej reakcji, co ma kluczowe znaczenie w zapewnieniu bezpieczeństwa w każdej placówce."
            },
            {
                label: "Szkolenia i przygotowanie personelu",
                icon: "📚",
                image: "/image/szkolenia.jpg",
                description: "Oferujemy szkolenia dla personelu w zakresie reagowania w sytuacjach kryzysowych. Nasze kursy są prowadzone przez doświadczonych specjalistów, którzy dzielą się wiedzą na temat pierwszej pomocy, obsługi sprzętu ratowniczego oraz postępowania w nagłych wypadkach. Szkolenia obejmują zarówno teoretyczne, jak i praktyczne aspekty, dzięki czemu uczestnicy nabywają umiejętności niezbędne w sytuacjach stresowych. Uczestnicy uczą się, jak skutecznie działać w przypadku wypadków, pożarów czy zagrożeń zdrowia. Naszym celem jest przygotowanie personelu do szybkiej i profesjonalnej reakcji, co ma kluczowe znaczenie w zapewnieniu bezpieczeństwa w każdej placówce."
            }
        ]
    };

    const handleServiceClick = (service: string) => {
        setActiveService(service);
        setActiveDescription(null);
    };

    const handleDescriptionClick = (usluga: { description: string, image?: string }) => {
        setActiveDescription(usluga);
    };

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4"><b>Zakres naszych usług</b></h2>

            <Tabs
                defaultActiveKey="opieka"
                id="uslugi-tabs"
                className="mb-3 justify-content-center"
                onSelect={(key) => handleServiceClick(key!)}
            >
                <Tab className="big-gap" eventKey="opieka" title="Opieka" />
                <Tab className="big-gap" eventKey="transport" title="Transport medyczny" />
                <Tab className="big-gap" eventKey="zabezpieczenie" title="Zabezpieczenie wydarzeń" />
                <Tab className="big-gap" eventKey="kryzys" title="Reagowanie kryzysowe" />
            </Tabs>

            <Row className="mb-4">
                <Col xs={12} md={4}>
                    <div className="d-flex flex-column align-items-start">
                        {activeService && uslugi[activeService].map((usluga, index) => (
                            <Button
                                key={index}
                                variant="link"
                                className="w-100 text-start py-2 mb-2"
                                onClick={() => handleDescriptionClick(usluga)}
                                style={{ fontSize: "0.9rem", fontWeight: "600", color: "black", textDecoration: "none" }}
                            >
                                {usluga.icon} {usluga.label}
                            </Button>
                        ))}
                    </div>
                </Col>

                <Col xs={12} md={8}>
                    {activeDescription && (
                        <Card>
                            <div style={{ position: 'relative', borderRadius: '0.5rem', overflow: 'hidden' }}>
                                {activeDescription.image && (
                                    <img
                                        src={activeDescription.image}
                                        alt="Usługa"
                                        className="img-fluid w-100"
                                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                                    />
                                )}
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        background: 'rgba(0, 0, 0, 0.6)',
                                        color: 'white',
                                        padding: '1rem',
                                        fontSize: '0.95rem',
                                    }}
                                >
                                    {activeDescription.description}
                                </div>
                            </div>
                        </Card>
                    )}
                </Col>
            </Row>
            <div className="text-center mt-4">
                <Link to="/cennik">
                    <Button variant="primary">Zobacz nasz cennik</Button>
                </Link>
            </div>
        </Container>
    );
};
