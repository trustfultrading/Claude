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
  { id: 37, modul: 'arbeitssicherheit', vorderseite: 'Notrufnummer Schweiz', rueckseite: '144 – Sanität (Rettungsdienst)\n117 – Polizei\n118 – Feuerwehr\n145 – Toxikologisches Zentrum\n\nEuro-Notruf: 112\n(funktioniert EU-weit, auch ohne SIM)' },
  { id: 38, modul: 'arbeitssicherheit', vorderseite: 'Leiterbauliche Schutzmassnähmen', rueckseite: 'Basisschutz (Direktberührung):\n- Isolierung\n- Abdeckung / Gehäuse\n- Abstände\n\nFehlerschutz (indirekter Kontakt):\n- Schutzleiter (PE)\n- FI-Schalter\n- Schutzkleinspannung' },

  // Elektrotechnik – weitere Karten
  { id: 39, modul: 'elektrotechnik', vorderseite: 'Drehstrom – Stern vs. Dreieck', rueckseite: 'Stern (Y):\nU_Strang = U_Netz / √3 = 400/1,73 = 230 V\nI_Strang = I_Leiter\n\nDreieck (Δ):\nU_Strang = U_Netz = 400 V\nI_Leiter = I_Strang × √3\n\nMotor-Anlauf: Stern → nach 3–5 s → Dreieck' },
  { id: 40, modul: 'elektrotechnik', vorderseite: 'Transformator – Übersetzungsverhältnis', rueckseite: 'ü = U1 / U2 = N1 / N2 = I2 / I1\n\nU1 = Primärspannung, U2 = Sekundärspannung\nN = Windungszahl\n\nBeispiel: 400V → 24V\nü = 400/24 = 16,7\nScheinleistung: S = U × I [VA]' },
  { id: 41, modul: 'elektrotechnik', vorderseite: 'Widerstand und Temperatur', rueckseite: 'Metalle (Kupfer, Aluminium):\nWiderstand steigt mit Temperatur\nR_T = R_20 × (1 + α × ΔT)\nα(Kupfer) = 0,00393 /K\n\nHalbleiter (NTC):\nWiderstand SINKT mit Temperatur' },

  // SPS – weitere Karten
  { id: 42, modul: 'sps', vorderseite: 'Profibus vs. Profinet', rueckseite: 'Profibus DP:\n- Serielle Feldbus-Technologie (RS-485)\n- bis 12 Mbit/s\n- 9-poliger Sub-D Stecker\n- Ältere Anlagen\n\nProfinet:\n- Industrielles Ethernet\n- 100 Mbit/s (Echtzeit)\n- RJ45 / M12-Stecker\n- Neuere Anlagen (Standard heute)' },
  { id: 43, modul: 'sps', vorderseite: 'Analoge SPS-Signale', rueckseite: 'Eingang (AIW): analoges Signal → Zahlenwert\n0–10 V → 0–27648 (Siemens S7)\n4–20 mA → 5530–27648\n\nAusgang (AQW): Zahlenwert → analoges Signal\n0–10 V oder 4–20 mA\n\nAuflösung typisch: 12–16 Bit' },
  { id: 44, modul: 'sps', vorderseite: 'Zähler-Typen SPS', rueckseite: 'CTU – Count Up: Aufwärtszähler\nCTD – Count Down: Abwärtszähler\nCTUD – Count Up/Down: Auf-/Abwärts\n\nParameter:\nCU/CD: Zähleingang\nR: Reset\nPV: Vorwahlwert\nQ: Ausgang (1 wenn CV≥PV)\nCV: Aktueller Zählwert' },

  // Pneumatik – weitere Karten
  { id: 45, modul: 'pneumatik', vorderseite: 'Boyles Gesetz (Pneumatik)', rueckseite: 'p1 × V1 = p2 × V2\n(bei konstanter Temperatur)\n\nBeispiel:\np1=1bar, V1=10L → p2=6bar\nV2 = 1×10/6 = 1,67 L\n\nAnwendung: Druckluftbehälter, Kompressorauslegung' },
  { id: 46, modul: 'pneumatik', vorderseite: 'Druckluftqualität (ISO 8573)', rueckseite: 'Druckluft nach ISO 8573 wird in Klassen eingeteilt:\n\nReststaub: Klasse 1 (Feinst) bis 9\nRestfeuchte: Drucktaupunkt -70°C bis +10°C\nRestöl: < 0,01 mg/m³ (Klasse 1)\n\nLackanwendungen, Pharma → höhere Klassen nötig' },
  { id: 47, modul: 'pneumatik', vorderseite: 'Hydraulikpumpentypen', rueckseite: 'Zahnradpumpe:\n- Günstig, robust, für mittlere Drücke (bis ~250 bar)\n- Konstante Förderleistung\n\nKolbenpumpe:\n- Sehr hohe Drücke (bis 700 bar)\n- Variable Fördermenge möglich\n\nFlügelzellenpumpe:\n- Leise, gleichmässige Förderung' },

  // Antriebstechnik – weitere Karten
  { id: 48, modul: 'antriebstechnik', vorderseite: 'Motorschutz – Thermisches Relais', rueckseite: 'Schützt Motor vor Überlast (Übertemperatur der Wicklung)\n\nEinstellung: Auf Motornennstrom I_N einstellen!\nAuslösezeit: Sekunden bis Minuten (Bimetall)\n\nNach Auslösung:\n→ Manuelle Rückstellung erforderlich\n→ Ursache suchen! (Überlast? Klemme? Blockierung?)' },
  { id: 49, modul: 'antriebstechnik', vorderseite: 'Energieeffizienz IE-Klassen', rueckseite: 'IE1: Standard Efficiency (veraltet)\nIE2: High Efficiency\nIE3: Premium Efficiency (> 90%)\nIE4: Super Premium Efficiency\n\nEU-Pflicht seit 2015: IE3 ab 0,75–375 kW\nEU seit 2023: IE3 ab 0,12 kW\n\nIE3 spart 3–10% Energie vs. IE2!' },
  { id: 50, modul: 'antriebstechnik', vorderseite: 'Leistungsformel Drehbewegung', rueckseite: 'P = M × ω\n\nω = Winkelgeschwindigkeit [rad/s]\nω = 2π × n / 60\n\nP = M × 2π × n / 60\n\nUmgestellt: M = P × 60 / (2π × n) = P × 9550 / n\n\nP [W], M [Nm], n [U/min]' },

  // Messtechnik – weitere Karten
  { id: 51, modul: 'messtechnik', vorderseite: 'Durchflussmessung – Methoden', rueckseite: 'Magnetisch-Induktiv (MID):\n- Leitfähige Flüssigkeiten\n- Kein Druckverlust, keine beweglichen Teile\n\nCoriolis:\n- Massendurchfluss direkt\n- Auch für Gase, sehr genau\n\nUltraschall:\n- Nicht-invasiv (clamp-on)\n\nBlende/Venturi:\n- Differenzdruckmessung' },
  { id: 52, modul: 'messtechnik', vorderseite: 'Signalarten in der Automatisierung', rueckseite: 'Digital (binär):\n0 V = AUS, 24 V = EIN\nNäherungsschalter, Endschalter\n\nAnalog:\n4–20 mA: Strom, störsicher\n0–10 V: Spannung, günstiger\n±10 V: Bidirektionale Werte\n\nFeldbus:\nProfinet, Profibus, IO-Link' },
  { id: 53, modul: 'messtechnik', vorderseite: 'Füllstandsmessung – Methoden', rueckseite: 'Schwimmer: Mechanisch, einfach\nDruckmessung: p = ρ × g × h (hydrostatisch)\nUltraschall: Berührungslos, Schallreflexion\nRadar (VEGAPULS): Berührungslos, auch bei Schaum\nLeitfähigkeitssonde: Leitfähige Medien\nVibrationsgrenzschalter: Grenzwert' },

  // Mechanik – weitere Karten
  { id: 54, modul: 'mechanik', vorderseite: 'Wälzlagerbezeichnung (z.B. 6204)', rueckseite: '6204:\n6 = Rillenkugellager (Bauart)\n2 = Breitenreihe\n04 = Bohrungszahl → d = 04 × 5 = 20 mm\n\nBohrung:\n00=10mm, 01=12mm, 02=15mm, 03=17mm\nAb 04: Zahl × 5 = Innendurchmesser\n\nSuffix: C3 = erweitertes Radialspiel' },
  { id: 55, modul: 'mechanik', vorderseite: 'Oberfläche und Rauheit (Ra)', rueckseite: 'Ra = arithmetischer Mittenrauwert [µm]\n\nRa 0,8: Feinschliff (Lagerflächen)\nRa 1,6: Schleifen/Drehen fein\nRa 3,2: Drehen normal\nRa 6,3: Fräsen normal\nRa 12,5: Sägen, grobes Drehen\n\nSymbol im Zeichnung: ∇ = unbearbeitet\n∇∇ = bearbeitet, Ra Angabe nötig' },
  { id: 56, modul: 'mechanik', vorderseite: 'Materialdehnung (Wärmeausdehnung)', rueckseite: 'ΔL = L0 × α × ΔT\n\nα = Längenausdehnungskoeffizient\nStahl: α ≈ 12 × 10⁻⁶ /K\nAluminium: α ≈ 23 × 10⁻⁶ /K\n\nBeispiel: 5m Stahlrohr, ΔT=50°C:\nΔL = 5000 × 12×10⁻⁶ × 50 = 3 mm\n→ Dehnfugen nötig!' },

  // Digitaltechnik – weitere Karten
  { id: 57, modul: 'digitaltechnik', vorderseite: 'ASCII-Code', rueckseite: 'ASCII = American Standard Code for Information Interchange\n\nZeichen werden als 7-Bit-Zahlen codiert:\nA = 65 = 0x41\nZ = 90 = 0x5A\na = 97 = 0x61\n0 = 48 = 0x30\n\nBedeutung in der SPS: Textanzeigen, Barcode-Scanner' },
  { id: 58, modul: 'digitaltechnik', vorderseite: 'Halbaddierer und Volladdierer', rueckseite: 'Halbaddierer (1 Bit + 1 Bit):\nSumme S = A XOR B\nÜbertrag C = A AND B\n\nVolladdierer (+ Eingangsübertrag Cin):\nS = A XOR B XOR Cin\nCout = (A AND B) OR (Cin AND (A XOR B))\n\nGrundlage der Arithmetik in Prozessoren' },
  { id: 59, modul: 'digitaltechnik', vorderseite: 'Zwei-Komplement (negative Zahlen)', rueckseite: 'Darstellung negativer Zahlen in Binär:\n\n8-Bit Beispiel: -5 darstellen\n1. +5 = 0000 0101\n2. Invertieren: 1111 1010\n3. +1: 1111 1011 = -5\n\nWertebereich 8-Bit:\n-128 bis +127\nMSB=1 → negative Zahl' },

  // Elektriker Grundlagen – Karten
  { id: 60, modul: 'elektriker', vorderseite: 'Kabelbezeichnung NYM-J 5×2,5', rueckseite: 'N = Normleitung (VDE)\nY = PVC-Isolierung\nM = Mantelleitung\nJ = mit Schutzleiter (PE)\n5 = 5 Adern\n2,5 = Querschnitt 2,5 mm²\n\nVerwendung: Festinstallation, Schaltschrankbau' },
  { id: 61, modul: 'elektriker', vorderseite: 'LSS-Auslösecharakteristiken', rueckseite: 'B (3–5× In): Leitungsschutz, Beleuchtung, Steckdosen\nC (5–10× In): Standard, Motoren, Transformatoren\nD (10–20× In): Hohe Anlaufströme, grosse Motoren\n\nThermisch: träge (Überlast, Bimetall)\nMagnetisch: sofort (Kurzschluss, Elektromagnet)' },
  { id: 62, modul: 'elektriker', vorderseite: 'Schütz – Aufbau und Funktion', rueckseite: 'Elektromagnetisch betätigter Leistungsschalter\n\nTeile:\n- Spule: zieht Anker an (Steuerspannung 24V/230V)\n- Hauptkontakte: schalten Last (400V, bis 100A+)\n- Hilfskontakte: im Steuerstromkreis\n\nAnwendung: Motorsteuerung, Ein/Aus-Betrieb\nBetätigungen: >1 Mio. Schaltspiele möglich' },
  { id: 63, modul: 'elektriker', vorderseite: 'Aderendhülsen-Farben (DIN 46228)', rueckseite: '0,5 mm²: weiss\n0,75 mm²: grau\n1,0 mm²: rot\n1,5 mm²: schwarz\n2,5 mm²: blau\n4,0 mm²: grau (doppeltisoliert)\n6,0 mm²: gelb\n10 mm²: rot (doppeltisoliert)\n\nGrösse muss zum Leiterquerschnitt passen!' },
  { id: 64, modul: 'elektriker', vorderseite: 'Querschnitte und Stromtragfähigkeit (Cu)', rueckseite: '1,5 mm² → 16 A (Beleuchtung)\n2,5 mm² → 20 A (Steckdosen)\n4 mm²   → 25 A\n6 mm²   → 32 A\n10 mm²  → 40 A\n16 mm²  → 53 A\n25 mm²  → 70 A\n\nFaustformel: 6 A/mm² (Kupfer, Normalbetrieb)' },
  { id: 65, modul: 'elektriker', vorderseite: 'Selektivität Schutzeinrichtungen', rueckseite: 'Selektivität = Nur die dem Fehler nächste Sicherung löst aus\n\nBedingung:\nVorgelagerte Sicherung >> nachgelagerte Sicherung\n(Mindestens 1 Nennstromstufe Unterschied)\n\nZiel: Fehler in einem Kreis schaltet NICHT die gesamte Anlage ab\n→ Restbetrieb erhalten!' },
  { id: 66, modul: 'elektriker', vorderseite: 'Schaltschranktemperatur – Grenzwert', rueckseite: 'Maximal-Innentemperatur: 35°C\n(Basis-Nennwerte der Bauteile)\n\nBei höherer Temperatur:\n→ Korrekturfaktoren auf Ströme anwenden\n→ Wärmetauscher oder Klimagerät einbauen\n\nVerlustleistung berechnen:\nP_V = Summe aller Bauteilwärmen\nLüftungsquerschnitt: A = P_V / (α × ΔT)' },
  { id: 67, modul: 'elektriker', vorderseite: 'Pflichtprüfungen Elektroanlagen (NIN)', rueckseite: 'Vor Inbetriebnahme zwingend:\n\n1. Sichtprüfung (Vollständigkeit, Schäden)\n2. Durchgangsprüfung (alle Verbindungen)\n3. Isolationsmessung ≥ 1 MΩ (500 V DC)\n4. Schutzleiterwiderstand < 0,3 Ω\n5. FI-Prüfung: Auslösung bei I_FI\n6. Spannungsprüfung (Messung unter Last)' },
  { id: 68, modul: 'elektriker', vorderseite: 'Betriebsmittelkennzeichen (BMK)', rueckseite: '-F: Schutzeinrichtung (LSS, FI, Sicherung)\n-K: Schütz, Relais\n-M: Motor\n-Q: Leistungsschalter, Motorschutz\n-R: Widerstand\n-S: Schalter, Taster\n-T: Transformator\n-H: Leuchte, Signalgeber\n-X: Klemmenleiste\n-C: Kondensator\n-L: Spule' },
]
