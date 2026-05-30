export const karteikarten = [
  // Elektrotechnik
  { id: 1, modul: 'elektrotechnik', vorderseite: 'Ohmsches Gesetz', rueckseite: 'U = R × I\n\nSpannung [V] = Widerstand [Ω] × Stromstärke [A]\n\nUmgestellt:\nR = U / I\nI = U / R' },
  { id: 2, modul: 'elektrotechnik', vorderseite: 'Elektrische Leistung (DC)', rueckseite: 'P = U × I\n\nAuch:\nP = U² / R\nP = I² × R\n\nEinheit: Watt [W]' },
  { id: 3, modul: 'elektrotechnik', vorderseite: 'Knotensatz (1. Kirchhoff)', rueckseite: 'ΣI = 0\n\nAm Knoten: Summe aller zufliessenden Ströme = Summe aller abfliessenden Ströme' },
  { id: 4, modul: 'elektrotechnik', vorderseite: 'Maschensatz (2. Kirchhoff)', rueckseite: 'ΣU = 0\n\nIn einer Masche: Summe aller Spannungsquellen = Summe aller Spannungsabfälle' },
  { id: 5, modul: 'elektrotechnik', vorderseite: 'Netzspannung Schweiz (Wechselstrom)', rueckseite: 'Effektivwert: 230 V\nFrequenz: 50 Hz\nSpitzenwert: û = 230 × √2 ≈ 325 V\nDrehstrom (L-L): 400 V' },
  { id: 6, modul: 'elektrotechnik', vorderseite: 'Reihenschaltung Widerstände', rueckseite: 'R_ges = R1 + R2 + R3\nStrom I überall gleich\nSpannung teilt sich auf: U = U1 + U2 + U3' },
  { id: 7, modul: 'elektrotechnik', vorderseite: 'Parallelschaltung Widerstände', rueckseite: '1/R_ges = 1/R1 + 1/R2 + 1/R3\nSpannung U überall gleich\nStrom teilt sich auf: I = I1 + I2 + I3' },

  // SPS
  { id: 8, modul: 'sps', vorderseite: 'SPS-Adressierung (Siemens)', rueckseite: 'Eingänge: I0.0 – I0.7 (Byte I0)\nAusgänge: Q0.0 – Q0.7 (Byte Q0)\nMerker: M0.0 – M0.7\nDatenbaustein: DB1.DBX0.0' },
  { id: 9, modul: 'sps', vorderseite: 'KOP-Elemente', rueckseite: '--| |--  Schliesser (NO): Durchgang wenn Bit=1\n--|/|-- Öffner (NC): Durchgang wenn Bit=0\n--( )-- Ausgangs-Spule: Setzt Bit\n--(S)-- Set-Spule: Dauerhaft setzen\n--(R)-- Reset-Spule: Zurücksetzen' },
  { id: 10, modul: 'sps', vorderseite: 'SPS-Bausteintypen', rueckseite: 'OB (Organisationsbaustein): Aufgerufen vom BS\nFC (Funktion): Kein Gedächtnis\nFB (Funktionsbaustein): Mit Instanz-DB (Gedächtnis)\nDB (Datenbaustein): Datenspeicher' },
  { id: 11, modul: 'sps', vorderseite: 'Timer-Typen in der SPS', rueckseite: 'TON: Einschaltverzögerung (On-Delay)\nTOF: Ausschaltverzögerung (Off-Delay)\nTP: Puls (Impulsgeber, monostabil)' },
  { id: 12, modul: 'sps', vorderseite: '5 SPS-Programmiersprachen (IEC 61131-3)', rueckseite: 'KOP – Kontaktplan (Ladder)\nFUP – Funktionsplan (FBD)\nAWL – Anweisungsliste (IL)\nSCL – Strukturierter Text (ST)\nAS/GRAPH – Ablaufsprache (SFC)' },

  // Pneumatik
  { id: 13, modul: 'pneumatik', vorderseite: 'Druckformel', rueckseite: 'p = F / A\n\nDruck [Pa oder bar] = Kraft [N] / Fläche [m²]\n\n1 bar = 100 000 Pa\nTyp. Betriebsdruck: 6–8 bar' },
  { id: 14, modul: 'pneumatik', vorderseite: 'Ventilbezeichnung', rueckseite: 'Format: Wege / Schaltstellungen\n\n5/2-Wegeventil:\n- 5 Anschlüsse\n- 2 Schaltstellungen\n\nAnschlüsse: 1(P), 2(A), 3(R), 4(B), 5(S)' },
  { id: 15, modul: 'pneumatik', vorderseite: 'FRL-Wartungseinheit', rueckseite: 'F – Filter: Schmutz und Wasser entfernen\nR – Regler (Druckminderer): Betriebsdruck einstellen\nL – Öler: Schmierung (bei modernen Anlagen oft entfallen)' },
  { id: 16, modul: 'pneumatik', vorderseite: 'Kraft Pneumatikzylinder', rueckseite: 'F = p × A × η\n\nA = π × d² / 4 (Kolbenfläche)\nη = Wirkungsgrad ≈ 0,85–0,95\n\nBeispiel: d=63mm, p=6bar:\nF ≈ 1700 N' },
  { id: 17, modul: 'pneumatik', vorderseite: 'Pascalsches Prinzip (Hydraulik)', rueckseite: 'Druck pflanzt sich gleichmässig fort\n\np = F1/A1 = F2/A2\nF2 = F1 × (A2/A1)\n\nBasis für hydraulische Kraftverstärkung!' },

  // Antriebstechnik
  { id: 18, modul: 'antriebstechnik', vorderseite: 'Synchrondrehzahl Asynchronmotor', rueckseite: 'n_s = 60 × f / p\n\nf = Frequenz [Hz]\np = Polpaarzahl\n\nBeispiel: 50 Hz, p=2:\nn_s = 1500 U/min\nLäuferdrehzahl ≈ 1450 U/min (Schlupf!)' },
  { id: 19, modul: 'antriebstechnik', vorderseite: 'Nennmoment Elektromotor', rueckseite: 'M_N = P_N × 9550 / n_N\n\nP_N [kW], n_N [U/min]\nM_N [Nm]\n\nBeispiel: 4 kW, 1450 U/min:\nM = 4 × 9550 / 1450 = 26,3 Nm' },
  { id: 20, modul: 'antriebstechnik', vorderseite: 'Übersetzungsverhältnis Getriebe', rueckseite: 'i = n1 / n2 = M2 / M1\n\nn2 = n1 / i  (Drehzahl sinkt)\nM2 = M1 × i × η  (Moment steigt)\n\nBeispiel i=10: n1=1500→n2=150 U/min\nM steigt um Faktor ~10' },
  { id: 21, modul: 'antriebstechnik', vorderseite: 'Frequenzumrichter Vorteile', rueckseite: '✓ Stufenlose Drehzahlregelung\n✓ Sanftanlauf (kein Anlaufstromstoss)\n✓ Energiesparen: P ~ n³\n  (halbierte Drehzahl = 1/8 Leistung!)\n✓ Motorschutz integriert' },

  // Messtechnik
  { id: 22, modul: 'messtechnik', vorderseite: 'Analoges Standardsignal', rueckseite: '4–20 mA Stromschnittstelle\n\n4 mA = Messbereichsanfang\n20 mA = Messbereichsende\n0 mA = Leitungsbruch!\n\nVorteil: Störsicher, Leitungsbrucherkennung' },
  { id: 23, modul: 'messtechnik', vorderseite: 'PT100 Widerstandsthermometer', rueckseite: 'PT100 = Platin, 100Ω bei 0°C\nPT1000 = 1000Ω bei 0°C\n\nÄnderung: ≈ 0,385 Ω/°C (PT100)\nMessbereich: -200°C bis +850°C\n\n4-Leiter-Messung für höchste Genauigkeit!' },
  { id: 24, modul: 'messtechnik', vorderseite: 'Sensortypen für Näherung', rueckseite: 'Induktiv: Metall erkennen (Wirbelstrom)\nKapazitiv: Alle Materialien (Kapazität)\nOptisch: Lichtschranke, Reflex, Taster\nUltraschall: Grosse Reichweite, alle Materialien' },
  { id: 25, modul: 'messtechnik', vorderseite: 'IP-Schutzgrad', rueckseite: 'Format: IP XY\nX = Schutz gegen Berührung/Fremdkörper (0–6)\nY = Schutz gegen Wasser (0–9K)\n\nIP20: Schaltsschrankinnenleben\nIP44: Spritzwasser\nIP54: Staubgeschützt + Spritzwasser\nIP67: Staubdicht + Eintauchen' },

  // Mechanik
  { id: 26, modul: 'mechanik', vorderseite: 'Schrauben Festigkeitsklassen', rueckseite: 'Format X.Y:\nZugfestigkeit = X × 100 MPa\nStreckgrenze = X×Y × 10 MPa\n\n4.6: 400 MPa / 240 MPa (weich)\n8.8: 800 MPa / 640 MPa (Standard)\n10.9: 1000 MPa / 900 MPa\n12.9: 1200 MPa / 1080 MPa (hart)' },
  { id: 27, modul: 'mechanik', vorderseite: 'Passungsarten', rueckseite: 'Spielpassung (H7/f7):\nBohrung > Welle, freies Spiel\n\nÜbergangspassung (H7/k6):\nKann Spiel oder Überdeckung haben\n\nPresspassung (H7/p6):\nWelle > Bohrung, Fügen mit Kraft/Wärme' },
  { id: 28, modul: 'mechanik', vorderseite: 'Drehmoment', rueckseite: 'M = F × r\n\nM = Drehmoment [Nm]\nF = Kraft [N]\nr = Hebelarm [m]\n\nBeispiel: Drehmomentschlüssel\nF=100N, l=0,3m → M=30 Nm' },

  // Digitaltechnik
  { id: 29, modul: 'digitaltechnik', vorderseite: 'Binär → Dezimal Umrechnung', rueckseite: 'Stellenwerte: ...8, 4, 2, 1\n\n1011₂ = 1×8 + 0×4 + 1×2 + 1×1\n       = 8 + 0 + 2 + 1 = 11₁₀\n\n1111₂ = 15₁₀\n1000 0000₂ = 128₁₀' },
  { id: 30, modul: 'digitaltechnik', vorderseite: 'Logikgatter Übersicht', rueckseite: 'AND: Y=1 wenn ALLE Eingänge=1\nOR:  Y=1 wenn EIN Eingang=1\nNOT: Y=1 wenn Eingang=0\nNAND: Y=NOT(AND)\nNOR: Y=NOT(OR)\nXOR: Y=1 wenn Eingänge VERSCHIEDEN' },
  { id: 31, modul: 'digitaltechnik', vorderseite: 'De Morgansche Gesetze', rueckseite: 'NOT(A AND B) = NOT A OR NOT B\nNOT(A OR B) = NOT A AND NOT B\n\nAnwendung: Vereinfachung logischer Schaltungen und Umformung von Ausdrücken' },
  { id: 32, modul: 'digitaltechnik', vorderseite: 'Datengrössen', rueckseite: '1 Bit: 0 oder 1\n1 Byte = 8 Bit (0–255)\n1 Word = 16 Bit (0–65535)\n1 DWord = 32 Bit\n\nIn SPS:\nI0.0 = 1 Bit\nIB0 = 1 Byte (I0.0–I0.7)\nIW0 = 1 Word (IB0+IB1)' },

  // Arbeitssicherheit
  { id: 33, modul: 'arbeitssicherheit', vorderseite: '5 Sicherheitsregeln (Reihenfolge!)', rueckseite: '1. FREISCHALTEN\n2. Gegen WIEDEREINSCHALTEN sichern\n3. SPANNUNGSFREIHEIT feststellen\n4. ERDEN und Kurzschliessen\n5. Benachbarte Teile ABSCHRANKEN\n\nNIE überspringen!' },
  { id: 34, modul: 'arbeitssicherheit', vorderseite: 'Brandklassen', rueckseite: 'A: Feste Stoffe (Holz, Papier)\nB: Flüssigkeiten (Öl, Benzin)\nC: Gase (Propan, Methan)\nD: Metalle (Mg, Na)\nF: Speisefette\n\nBei Elektrobrand: CO₂-Löscher!!\nNIE Wasser bei B oder Strom!' },
  { id: 35, modul: 'arbeitssicherheit', vorderseite: 'FI-Schutzschalter (RCD)', rueckseite: 'Misst Differenz I_L - I_N\nBei Differenz ≥ Auslösestrom → Abschaltung\n\n30 mA: Personenschutz\n300 mA: Brandschutz\n\nAuslösezeit: < 40 ms\n\nPflicht in Feuchträumen, Baustellen!' },
  { id: 36, modul: 'arbeitssicherheit', vorderseite: 'Schutzklassen (elektrisch)', rueckseite: 'SK I: Schutzleiter (geerdet, PE grün-gelb)\nSK II: Schutzisolierung (□ im Quadrat)\nSK III: Schutzkleinspannung SELV ≤50V AC / 120V DC\n\nSK I = Normale Geräte mit Schukostecker\nSK II = Elektrowerkzeug (doppelt isoliert)' },
]
