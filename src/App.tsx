import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import Home from './home/homePage';
import { Zespol } from './pracownik/Zespol';
import { Zaopatrzenia } from './profil/ZaopatrzeniaPage';
import Ustawienia from './profil/Ustawienia';
import { Kontakt } from './kontakt/KontaktPage';
import { Uslugi } from './uslugi/UslugiPage';
import { Onas } from './podstrony/OnasPage.tsx';
import CennikPage from './podstrony/CennikPage';
import { UserProvider } from './user/UserContext';
import AbonamentDetails from './abonament/abonament';
import EmergencyCard from './emergency/EmergencyCard';
import LeafletMap from './user/LeafletMap';
import EventSection from './eventy/Eventy';
import Biznes from './biznes/Biznes';
import Profil from './profil/Profil';
import CzekamySection from './home/Czekamy';
import { Register } from './user/register';
import Medicaments from './emergency/medicaments';
import  Faktura  from './Faktoring/FakturyPage';
import { Kursy } from './Kurs/Kursy';
import { Kurs } from './Kurs/Kurs';
import { Misja } from './pracownik/Misja';
import  ListaFaktur  from './Faktoring/ListaFakturPage';
import  Pracownik  from './Kadry/PracownikPage';
import ListaPracownikow from './Kadry/ListaPracownikowPage'
import  Pacjent  from './Pacjenci/PacjentPage';
import  Pacjenci  from './Pacjenci/ListaPacjentowPage';
import  Zasoby  from './Magazyn/MaterialyPage'
import  ListaZasobow from './Magazyn/ListaMaterialowPage';
import UstawieniaAdmin from './profil/UstawieniaAdmin';
import Uzytkownicy from './profil/ListaUzytkownikow';

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="emergency" element={<EmergencyCard />} />
                        <Route path="Misja" element={<Misja />} />
                        <Route path="kursy" element={<Kursy />} />
                        <Route path="kurs" element={<Kurs />} />
                        <Route path="leki" element={<Medicaments />} />
                        <Route path="czekamy" element={<CzekamySection />} />
                        <Route path="Profil" element={<Profil />} />
                        <Route path="lokalizacja" element={<LeafletMap />} />
                        <Route path="O-nas" element={<Onas />} />
                        <Route path="Eventy" element={<EventSection />} />
                        <Route path="Biznes" element={<Biznes />} />
                        <Route path="Cennik" element={<CennikPage />} />
                        <Route path="Zespol" element={<Zespol />} />
                        <Route path="Abonament" element={<AbonamentDetails />} />
                        <Route path="Zaopatrzenia" element={<Zaopatrzenia />} />
                        <Route path="Ustawienia" element={<Ustawienia />} />
                        <Route path="Kontakt" element={<Kontakt />} />
                        <Route path="Uslugi" element={<Uslugi />} />
                        <Route path="listaFaktur" element={<ListaFaktur />} />
                        <Route path="faktura" element={<Faktura />} />
                        <Route path="pracownik" element={<Pracownik />} />
                        <Route path="listaPracownikow" element={<ListaPracownikow />} />
                        <Route path="pacjent" element={<Pacjent />} />
                        <Route path="listaPacjentow" element={<Pacjenci />} />
                        <Route path="Zasoby" element={<Zasoby />} />
                        <Route path="listaUzytkownikow" element={<Uzytkownicy />} />
                        <Route path="listaZasobow" element={<ListaZasobow />} />
                        <Route path="ustawieniaAdmin" element={<UstawieniaAdmin />} />
                        <Route path="rejestracja" element={<Register onClose={() => window.history.back()} />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
