export const modules = [
  {
    id: 'elektrotechnik',
    titel: 'Elektrotechnik',
    icon: '⚡',
    farbe: 'blue',
    beschreibung: 'Grundlagen der Elektrotechnik: Ohm, Kirchhoff, AC/DC, Leistung',
    lektionen: [
      {
        id: 'ohm',
        titel: 'Ohmsches Gesetz',
        inhalt: `Das Ohmsche Gesetz ist das Fundament der Elektrotechnik und beschreibt den Zusammenhang zwischen elektrischer Spannung (U), Widerstand (R) und Stromstärke (I).

## Grundformel
U = R × I

- U = Spannung in Volt [V]
- R = Widerstand in Ohm [Ω]
- I = Stromstärke in Ampere [A]

## Umgestellte Formeln
- R = U / I  (Widerstand berechnen)
- I = U / R  (Strom berechnen)

## Beispiel 1 – Strom berechnen
Eine Lampe hat einen Widerstand von 100 Ω und wird an 230 V betrieben.
I = U / R = 230 V / 100 Ω = 2,3 A

## Beispiel 2 – Widerstand berechnen
Durch ein Bauteil fliessen 0,5 A bei einer Spannung von 12 V.
R = U / I = 12 V / 0,5 A = 24 Ω

## Merkhilfe (Dreieck)
Schreibe U oben, R unten links, I unten rechts. Decke die gesuchte Grösse ab – die verbleibenden zeigen die Rechenoperation.

## Wichtig für den Automatiker
In der Automatisierungstechnik begegnest du dem Ohmschen Gesetz täglich: Bei der Auslegung von Sicherungen, der Berechnung von Vorwiderständen für Sensoren oder der Analyse von Stromkreisen in Steuerungsanlagen.`,
      },
      {
        id: 'kirchhoff',
        titel: 'Kirchhoffsche Gesetze',
        inhalt: `Die Kirchhoffschen Gesetze ermöglichen die Berechnung komplexer elektrischer Netzwerke mit mehreren Maschen und Knoten.

## 1. Kirchhoffsches Gesetz – Knotensatz
An jedem Knoten ist die Summe aller zufliessenden Ströme gleich der Summe aller abfliessenden Ströme.

ΣI_zu = ΣI_ab  oder  ΣI = 0

Beispiel: In einen Knoten fliessen I1 = 3 A und I2 = 2 A ein. Der abfliessende Strom I3 = 5 A.

## 2. Kirchhoffsches Gesetz – Maschensatz
In jeder geschlossenen Masche ist die Summe aller Spannungsabfälle gleich der Summe aller Quellenspannungen.

ΣU = 0  oder  ΣU_Quellen = ΣU_Verbraucher

Beispiel: Eine Masche mit Batterie U0 = 12 V, Widerstand R1 mit U1 = 4 V und R2 mit U2 = 8 V:
12 V = 4 V + 8 V ✓

## Reihenschaltung (Maschensatz anwenden)
- Gesamtwiderstand: R_ges = R1 + R2 + R3
- Strom überall gleich: I = I1 = I2 = I3
- Spannung teilt sich auf: U = U1 + U2 + U3

## Parallelschaltung (Knotensatz anwenden)
- Spannung überall gleich: U = U1 = U2 = U3
- Strom teilt sich auf: I = I1 + I2 + I3
- Gesamtwiderstand: 1/R_ges = 1/R1 + 1/R2 + 1/R3

## Praxisbeispiel
In einer Steuerungsanlage werden mehrere Magnetventile parallel an 24 V DC betrieben. Mit dem Knotensatz kann die gesamte Stromaufnahme berechnet werden, um die richtige Sicherung zu dimensionieren.`,
      },
      {
        id: 'ac-dc',
        titel: 'Gleich- und Wechselstrom',
        inhalt: `Elektrischer Strom tritt in zwei grundlegenden Formen auf: Gleichstrom (DC) und Wechselstrom (AC). Im Berufsalltag eines Automatikers begegnest du beiden Formen ständig.

## Gleichstrom (DC – Direct Current)
Der Gleichstrom fliesst immer in dieselbe Richtung. Die Spannung ist konstant.

Typische Anwendungen:
- Steuerkreise: 24 V DC (Standard in der Automatisierung)
- Akkus und Batterien
- Elektronische Bauteile (SPS-Eingänge, Sensoren)
- Gleichstromantriebe

## Wechselstrom (AC – Alternating Current)
Der Wechselstrom wechselt periodisch seine Richtung. Die Spannung schwankt sinusförmig.

Wichtige Kennwerte:
- Frequenz f = 50 Hz (in Europa, d.h. 50 Schwingungen pro Sekunde)
- Periodendauer T = 1/f = 1/50 = 0,02 s = 20 ms
- Spitzenspannung: û = U_eff × √2 = 230 × 1,414 = 325 V
- Effektivwert: U_eff = 230 V (Netzspannung Schweiz)

## Effektivwert
Der Effektivwert ist die Spannung, die dieselbe Wärmeleistung erzeugt wie der entsprechende Gleichstrom.
U_eff = û / √2

## Drehstrom (3-Phasenwechselstrom)
In der Industrie wird Drehstrom (3 Phasen, je 230 V gegen Null = 400 V zwischen Phasen) für Motoren verwendet.
- Strangspannung: 230 V
- Verkettete Spannung (Leiterspannung): U_L = √3 × 230 = 400 V

## Praxistipp
Steuerungen arbeiten fast immer mit 24 V DC, die Leistungskreise (Motoren, Heizungen) mit 400 V AC Drehstrom.`,
      },
      {
        id: 'leistung',
        titel: 'Elektrische Leistung',
        inhalt: `Die elektrische Leistung gibt an, wie viel Energie pro Zeiteinheit umgesetzt wird. Für den Automatiker ist sie wichtig bei der Auslegung von Antrieben, Sicherungen und Transformatoren.

## Gleichstrom-Leistung
P = U × I

- P = Leistung in Watt [W]
- U = Spannung in Volt [V]
- I = Stromstärke in Ampere [A]

Mit dem Ohmschen Gesetz ergibt sich auch:
- P = U² / R
- P = I² × R

## Wechselstrom-Leistung
Bei Wechselstrom muss der Leistungsfaktor cos φ (Phasenwinkel zwischen Strom und Spannung) berücksichtigt werden.

Wirkleistung:   P = U × I × cos φ  [W]
Scheinleistung: S = U × I           [VA]
Blindleistung:  Q = U × I × sin φ  [var]

S² = P² + Q²

## Leistungsfaktor cos φ
- Ohmscher Verbraucher (Heizung): cos φ = 1
- Elektromotor: cos φ ≈ 0,75–0,9
- Schlechter cos φ belastet das Netz → Blindstromkompensation

## Energie
W = P × t

- W = Energie in Wattstunden [Wh] oder Joule [J]
- 1 kWh = 3 600 000 J

## Beispiel – Motorauslegung
Ein Antriebsmotor benötigt 5,5 kW Wirkleistung bei cos φ = 0,8.
Scheinleistung: S = P / cos φ = 5500 / 0,8 = 6875 VA
Strom bei 400 V Drehstrom: I = S / (√3 × U) = 6875 / (1,732 × 400) ≈ 9,9 A`,
      },
      {
        id: 'kondensator-spule',
        titel: 'Kondensatoren und Spulen',
        inhalt: `Kondensatoren und Spulen sind reaktive Bauteile, die Energie speichern und in der Automatisierungstechnik vielseitig eingesetzt werden.

## Kondensator
Ein Kondensator speichert elektrische Energie in einem elektrischen Feld.

Kapazität: C = Q / U  [Farad, F]
Energie:   W = ½ × C × U²

Typische Einheiten: µF (Mikrofarad), nF (Nanofarad), pF (Pikofarad)

Anwendungen:
- Entstörung von Steuersignalen
- Pufferkondensatoren in Netzteilen
- Blindstromkompensation
- Zeitglieder (RC-Glieder)

Im Wechselstromkreis: kapazitiver Widerstand Xc = 1 / (2π × f × C)
Strom eilt der Spannung um 90° voraus.

## Spule (Induktivität)
Eine Spule speichert Energie in einem magnetischen Feld.

Induktivität: L  [Henry, H]
Energie:      W = ½ × L × I²

Anwendungen:
- Relais und Schütze (Elektromagnet)
- Motoren (Statorwicklung)
- Drosseln zur Entstörung
- Transformatoren

Im Wechselstromkreis: induktiver Widerstand XL = 2π × f × L
Spannung eilt dem Strom um 90° voraus.

## Reihenschwingkreis
Kondensator + Spule in Reihe → Resonanzfrequenz:
f0 = 1 / (2π × √(L × C))

## Praxisrelevanz
Beim Schalten induktiver Lasten (Relais, Magnetventile) entstehen Abschaltspannungsspitzen (Induktionsstösse). Zum Schutz werden Freilaufdioden parallel zur Last geschaltet.`,
      },
    ],
  },
  {
    id: 'sps',
    titel: 'SPS-Programmierung',
    icon: '🖥️',
    farbe: 'green',
    beschreibung: 'Siemens S7, TIA Portal, KOP, FUP, Ablaufsteuerungen',
    lektionen: [
      {
        id: 'sps-grundlagen',
        titel: 'Was ist eine SPS?',
        inhalt: `Eine Speicherprogrammierbare Steuerung (SPS) ist das Herzstück moderner Automatisierungsanlagen. Sie ersetzt klassische Relaissteuerungen und ermöglicht flexible, änderbare Programme.

## Aufbau einer SPS
Eine SPS besteht aus folgenden Hauptkomponenten:

1. Zentraleinheit (CPU): Verarbeitet das Programm
2. Netzteil: Versorgt die SPS mit Spannung
3. Eingabe-Baugruppen (I): Digitale/analoge Eingänge (Sensoren, Taster)
4. Ausgabe-Baugruppen (Q): Digitale/analoge Ausgänge (Aktoren, Ventile, Motoren)
5. Kommunikationsschnittstellen: Profibus, Profinet, Ethernet

## Arbeitsweise (zyklische Verarbeitung)
1. Eingänge einlesen (Prozessabbild der Eingänge PAE)
2. Programm ausführen (Benutzerlogik)
3. Ausgänge schreiben (Prozessabbild der Ausgänge PAA)
Zykluszeit: typisch 1–50 ms

## Siemens SIMATIC S7-Familie
- S7-300: Klassische Mittelklasse-SPS (wird abgelöst)
- S7-400: Hochleistungs-SPS für grosse Anlagen
- S7-1200: Kompakte SPS für kleine bis mittlere Anwendungen
- S7-1500: Moderne Hochleistungs-SPS (Nachfolger S7-300/400)

## TIA Portal (Totally Integrated Automation)
TIA Portal ist die Programmiersoftware von Siemens für S7-1200 und S7-1500. Es vereint:
- Programmiereditor (KOP, FUP, AWL, SCL, Graph)
- Hardware-Konfiguration
- Visualisierung (SIMATIC WinCC)
- Netzwerkkonfiguration

## Adressierung
Eingänge: I0.0, I0.1, ... I0.7, I1.0 ...
Ausgänge: Q0.0, Q0.1, ... Q0.7, Q1.0 ...
Merker:   M0.0, M0.1 ... (interne Hilfsgrössen)
Datenbaustein: DB1.DBX0.0, DB1.DBW2 ...`,
      },
      {
        id: 'kop',
        titel: 'Kontaktplan (KOP/LAD)',
        inhalt: `Der Kontaktplan (KOP, engl. Ladder Diagram LAD) ist die am weitesten verbreitete SPS-Programmiersprache. Er ist angelehnt an Stromlaufpläne mit Relaistechnik.

## Grundelemente des KOP

### Öffner (Normally Open Contact) – Schliesser
Symbol: --| |--
Schaltverhalten: Durchgang wenn Bit = 1
Adresse: I0.0, M5.3, Q1.2 etc.

### Schliesser (Normally Closed Contact) – Öffner
Symbol: --|/|--
Schaltverhalten: Durchgang wenn Bit = 0

### Ausgangs-Spule (Output Coil)
Symbol: --( )--
Funktion: Setzt das zugeordnete Bit auf 1 wenn Strom fliesst

### Setz-Spule (Set)
Symbol: --(S)--
Funktion: Setzt Bit auf 1, bleibt gesetzt bis Reset

### Rücksetz-Spule (Reset)
Symbol: --(R)--
Funktion: Setzt Bit zurück auf 0

## Beispiel: Motorsteuerung mit Selbsthaltung
Netzwerk 1: Einschalten
I0.0 (Einschalttaster) UND NICHT I0.1 (Ausschalttaster) → Q0.0 (Motor)
Selbsthaltung: Q0.0 parallel zu I0.0

## Timer in KOP
TON (Timer On-Delay): Einschaltverzögerung
TOF (Timer Off-Delay): Ausschaltverzögerung
TP  (Timer Pulse): Impulsgeber

Beispiel TON:
Wenn I0.0 = 1 für t ≥ 5 s → Q0.0 = 1

## Zähler in KOP
CTU: Aufwärtszähler
CTD: Abwärtszähler
CTUD: Auf-/Abwärtszähler

## Praxistipp
In der Schweiz wird KOP (deutsch) oder LAD (englisch) am häufigsten in Aufzügen, Verpackungsmaschinen und Fertigungsanlagen verwendet.`,
      },
      {
        id: 'fup',
        titel: 'Funktionsplan (FUP/FBD)',
        inhalt: `Der Funktionsplan (FUP, engl. Function Block Diagram FBD) verwendet logische Gatter-Symbole ähnlich der Digitaltechnik. Er eignet sich gut für Regelungsaufgaben.

## Grundgatter im FUP

### AND-Gatter
Ausgabe = 1 nur wenn ALLE Eingänge = 1
Anwendung: Sicherheitsverriegelungen (alle Schutztüren müssen geschlossen sein)

### OR-Gatter
Ausgabe = 1 wenn MINDESTENS EIN Eingang = 1
Anwendung: Mehrere Starttaster können Anlage starten

### NOT (Negation)
Ausgabe = Invertierter Eingang
Anwendung: Umwandlung von Öffnersignalen

### NAND, NOR, XOR
- NAND = Negiertes AND
- NOR = Negiertes OR
- XOR = Exklusives OR (Ausgabe 1 wenn Eingänge VERSCHIEDEN)

## Bausteine im FUP
Zusätzlich zu Gattern können komplexe Bausteine (Function Blocks) verwendet werden:
- Zeitbausteine (TON, TOF, TP)
- Zähler (CTU, CTD)
- Arithmetik (ADD, SUB, MUL, DIV)
- Vergleicher (CMP: ==, <>, >, <, >=, <=)
- Datentransfer (MOVE)

## Beispiel: Temperaturüberwachung
Analogeingang IW64 (Temperatursensor 0–100°C):
1. MOVE: IW64 → MD10 (Istwert speichern)
2. CMP >: MD10 > MD20 (Sollwert) → M0.0
3. AND: M0.0 UND I0.0 (Anlage läuft) → Q0.5 (Kühlung ein)

## Vergleich KOP vs FUP
- KOP: Intuitiv für Elektriker (ähnlich Stromlaufplan)
- FUP: Intuitiv für Elektroniker/Ingenieure (ähnlich Schaltbild)
- Beide erzeugen dasselbe ausführbare Programm`,
      },
      {
        id: 'ablaufsteuerung',
        titel: 'Ablaufsteuerung (GRAPH/SFC)',
        inhalt: `Die Ablaufsteuerung (Sequential Function Chart, SFC) ist ideal für schrittweise ablaufende Prozesse wie Produktionsmaschinen oder Dosieranlagen.

## Grundstruktur einer Ablaufsteuerung
Eine SFC besteht aus:
- Schritten (Steps): Zustände der Anlage
- Transitionen: Bedingungen zum Weiterschaltenr
- Aktionen: Was in einem Schritt ausgeführt wird

## Beispiel: Befüllanlage

Schritt 0: Grundstellung (Anlage leer, alle Ventile zu)
  ↓ Transition: Starttaste gedrückt (I0.0 = 1)
Schritt 1: Einlassventil öffnen (Q0.0 = 1)
  ↓ Transition: Füllstand OK (I1.0 = 1) ODER Zeit 30s abgelaufen
Schritt 2: Einlassventil schliessen, Pumpe ein (Q0.1 = 1)
  ↓ Transition: Zieldruck erreicht (I1.1 = 1)
Schritt 3: Pumpe aus, Auslassventil öffnen (Q0.2 = 1)
  ↓ Transition: Tank leer (I1.2 = 1)
Schritt 0: Zurück zu Grundstellung

## Aktionstypen
- N (Non-stored): Aktion aktiv solange Schritt aktiv
- S (Set): Aktion einschalten, bleibt aktiv
- R (Reset): Aktion ausschalten

## Aktive Schritte
Der aktive Schritt wird im TIA Portal farblich hervorgehoben – ideal für Inbetriebnahme und Fehlersuche.

## Parallelzweige
Mehrere Zweige können gleichzeitig aktiv sein (Simultanverzweigung), z.B. wenn zwei Achsen gleichzeitig verfahren.

## Praxishinweis
In der Schweizer Industrie (Pharma, Lebensmittel, Verpackung) sind Ablaufsteuerungen sehr häufig. SIMATIC GRAPH ist das entsprechende Tool im TIA Portal.`,
      },
      {
        id: 'tia-portal',
        titel: 'TIA Portal Grundlagen',
        inhalt: `TIA Portal (Totally Integrated Automation Portal) ist die zentrale Softwareumgebung von Siemens für die Programmierung, Konfiguration und Diagnose von Automatisierungsanlagen.

## Projektstruktur im TIA Portal
Ein TIA-Projekt enthält:
- Geräte & Netzwerke: Hardware-Konfiguration der SPS und I/O
- Programmblöcke: Anwenderprogramm
- PLC-Variablen: Adressierung aller Signale
- Technologieobjekte: Achsen, Regler etc.

## Wichtige Programmbausteine

### OB (Organisationsbausteine)
- OB1: Hauptprogramm (zyklisch aufgerufen)
- OB30–OB38: Zeitgesteuert (z.B. alle 100 ms)
- OB100: Anlauforganisationsbaustein (einmalig beim Start)
- OB80, OB82...: Fehler-OBs

### FC (Funktionen)
- Haben kein statisches Gedächtnis
- Werden mit aktuellen Parametern aufgerufen
- Beispiel: FC_Motorsteuerung

### FB (Funktionsbausteine)
- Haben statisches Gedächtnis (Instanz-Datenbaustein)
- Speichern Zustände zwischen Aufrufen
- Beispiel: FB_Ventilsteuerung mit DB1

### DB (Datenbausteine)
- Globale DB: Allen Bausteinen zugänglich
- Instanz-DB: Gehört zu einem FB

## Hardware-Konfiguration
1. CPU auswählen (z.B. CPU 1515-2 PN)
2. I/O-Baugruppen hinzufügen
3. Adressen zuweisen
4. In SPS laden

## Online-Betrieb und Diagnose
- Online gehen: Verbindung zur SPS herstellen
- Signalzustände beobachten (Monitoring)
- Variable forcen (für Tests)
- Diagnosepuffer auslesen (Fehlerliste)

## Upload vs. Download
- Download: PC → SPS (Programm übertragen)
- Upload: SPS → PC (Programm sichern)`,
      },
    ],
  },
  {
    id: 'pneumatik',
    titel: 'Pneumatik & Hydraulik',
    icon: '💨',
    farbe: 'cyan',
    beschreibung: 'Druckluft, Wegeventile, Zylinder, Hydraulik-Grundlagen',
    lektionen: [
      {
        id: 'pneumatik-grundlagen',
        titel: 'Grundlagen der Pneumatik',
        inhalt: `Pneumatik nutzt Druckluft als Energieträger zur Erzeugung von Kräften und Bewegungen. In der Schweizer Fertigungs- und Automatisierungsindustrie ist Pneumatik unverzichtbar.

## Physikalische Grundlagen

### Druck
p = F / A

- p = Druck [Pa] oder [bar]
- F = Kraft [N]
- A = Fläche [m²]

Umrechnungen:
- 1 bar = 100 000 Pa = 100 kPa
- 1 bar ≈ 1 kgf/cm²

Betriebsdruck in der Pneumatik: typisch 6–8 bar

### Boyles Gesetz (isotherm)
p1 × V1 = p2 × V2
(bei konstanter Temperatur)

## Druckluft-Aufbereitung (Wartungseinheit FRL)
Filter → Regler → Öler (F-R-L-Einheit)

1. Filter: Entfernt Schmutz, Wasser, Öl
2. Druckregler (Manoreduktionsventil): Stellt Arbeitsdruck ein (z.B. 6 bar)
3. Öler: Dosiert Schmieröl für ältere Pneumatikkomponenten (moderne Systeme oft ölfrei)

## Leitungsberechnung
Zu kleine Leitungen → Druckverlust, langsamere Aktuatoren
Faustregel: v_Luft ≤ 15 m/s in Leitungen

## Energieeinsparung
Druckluft ist teuer! 1 m³ Druckluft kostet ca. 2–3 Rappen in der Schweiz.
Massnahmen:
- Leckverluste minimieren (akustische Lecksuche)
- Betriebsdruck nur so hoch wie nötig
- Abschaltung bei Stillstand`,
      },
      {
        id: 'ventile',
        titel: 'Pneumatische Ventile',
        inhalt: `Wegeventile steuern die Richtung des Druckluftstroms und damit die Bewegungsrichtung und -position von Zylindern und Motoren.

## Ventilbezeichnung (Wege/Stellungen)
Format: Wege / Normalstellungen

Beispiele:
- 3/2-Wegeventil: 3 Anschlüsse, 2 Schaltstellungen
- 4/2-Wegeventil: 4 Anschlüsse, 2 Schaltstellungen
- 5/2-Wegeventil: 5 Anschlüsse, 2 Schaltstellungen
- 5/3-Wegeventil: 5 Anschlüsse, 3 Schaltstellungen (Mittelstellung!)

## Anschlussbezeichnungen (ISO 5599)
- 1: Druckluft (P)
- 2, 4: Arbeitsanschlüsse (A, B)
- 3, 5: Entlüftung (R, S)
- 12, 14: Steueranschlüsse (Pilot)

## 5/2-Wegeventil (am häufigsten)
Schaltzustand 1: 1→2 offen, 4→5 offen (Zylinder fährt aus)
Schaltzustand 2: 1→4 offen, 2→3 offen (Zylinder fährt ein)

## Betätigung von Ventilen
- Elektromagnetisch (Magnetventil/Solenoid): 24 V DC, schnell, fernsteuerbar → Standard in SPS-Anlagen
- Mechanisch: Endschalter, Roller
- Manuell: Hebel, Druckknopf
- Pneumatisch: Vorsteuerventil

## Sperrventile
- Rückschlagventil: Strömung nur in eine Richtung
- Drosselrückschlagventil: Drosselt in einer Richtung, freier Durchgang in andere Richtung → Geschwindigkeitsregelung von Zylindern

## Druckventile
- Druckbegrenzungsventil: Schutzt System vor Überdruck
- Druckregelventil: Hält Ausgangsdruck konstant
- Drucksequenzventil: Schaltet bei Druckanstieg`,
      },
      {
        id: 'zylinder',
        titel: 'Pneumatische Zylinder',
        inhalt: `Pneumatische Zylinder wandeln Druckluftenergie in eine geradlinige Bewegung um. Sie sind die häufigsten Aktoren in der Automatisierungstechnik.

## Einfachwirkender Zylinder (Single Acting)
- Druckluft nur auf einer Seite
- Rückstellung durch Federkraft
- Anschlüsse: 1 Druckluft + 1 Entlüftung
- Einsatz: Klemmvorrichtungen, Hebebühnen (sicherer Grundzustand)

## Doppeltwirkender Zylinder (Double Acting)
- Druckluft auf beiden Seiten (Anschluss 2 und 4)
- Ausfahren: Druck auf Seite A
- Einfahren: Druck auf Seite B
- Höhere Kräfte in beiden Richtungen
- Standard in der Industrie

## Kraftberechnung
F = p × A × η

- F = Kraft [N]
- p = Druck [Pa oder N/m²]
- A = Kolbenfläche [m²] = π × d² / 4
- η = Wirkungsgrad (ca. 0,85–0,95)

Beispiel: d = 63 mm, p = 6 bar
A = π × 0,063² / 4 = 0,00312 m²
F = 600 000 × 0,00312 × 0,9 = 1685 N ≈ 172 kgf

## Wichtige Bauformen
- Kompaktzylinder: kurzer Hub, wenig Bauraum
- Führungszylinder: verhindert Verdrehung
- Schwenkzylinder: Drehbewegung (z.B. Greifer)
- Rodless Cylinder: Kolben ohne sichtbare Kolbenstange
- Tandemzylinder: Doppelte Kraft, gleicher Durchmesser

## Endlagendämpfung
Zylinder haben einstellbare pneumatische Dämpfer am Hubende, um harte Aufschläge zu vermeiden und die Lebensdauer zu erhöhen.

## Positionsmessung
- Reed-Kontakte: Magnetischer Endschalter aussen am Zylinder
- Analoges Wegmesssystem: Kontinuierliche Position (Potentiometer, Linearpotentiometer)`,
      },
      {
        id: 'hydraulik',
        titel: 'Hydraulik Grundlagen',
        inhalt: `Hydraulik nutzt Flüssigkeit (Hydrauliköl) als Energieträger und ermöglicht deutlich höhere Kräfte als Pneumatik bei kompakten Abmessungen.

## Pascalsches Prinzip
Druck, der auf eine eingeschlossene Flüssigkeit ausgeübt wird, pflanzt sich gleichmässig in alle Richtungen fort.

p = F1/A1 = F2/A2

Hydraulische Kraftverstärkung:
F2 = F1 × (A2/A1)

Beispiel: Hydraulikpresse
A1 = 1 cm², A2 = 100 cm², F1 = 100 N
F2 = 100 × (100/1) = 10 000 N = 1 Tonne!

## Vergleich Pneumatik vs. Hydraulik

| Merkmal         | Pneumatik       | Hydraulik        |
|-----------------|-----------------|------------------|
| Druck           | 6–10 bar        | 100–350 bar      |
| Kräfte          | bis ca. 50 kN   | bis mehrere MN   |
| Geschwindigkeit | sehr schnell    | langsamer        |
| Positionierung  | schwierig       | gut möglich      |
| Leckage         | unkritisch (Luft)| Umweltproblem    |
| Wartung         | einfach         | aufwendig        |

## Hydraulische Komponenten
- Hydraulikpumpe: Erzeugt Volumenstrom (Zahnradpumpe, Kolbenpumpe)
- Hydraulikzylinder: Linear-Aktor (sehr hohe Kräfte)
- Hydraulikmotor: Drehbewegung
- Proportionalventil: Stufenlose Regelung von Druck/Strom
- Hydraulikspeicher: Druckspeicher (Blase, Kolben)
- Wärmetauscher: Ölkühlung

## Sicherheit
Hydrauliksysteme stehen unter sehr hohem Druck! Niemals auf Leckagen zeigen (Ölstrahl kann Haut durchdringen). Anlage immer drucklos schalten vor Wartungsarbeiten. PSA: Schutzbrille, Handschuhe obligatorisch!`,
      },
    ],
  },
  {
    id: 'antriebstechnik',
    titel: 'Antriebstechnik',
    icon: '⚙️',
    farbe: 'orange',
    beschreibung: 'Elektromotoren, Frequenzumrichter, Getriebe, Servosysteme',
    lektionen: [
      {
        id: 'motoren',
        titel: 'Elektromotoren',
        inhalt: `Elektromotoren sind die wichtigsten Aktoren in der Automatisierungstechnik. Sie wandeln elektrische Energie in mechanische Bewegung um.

## Drehstrom-Asynchronmotor (AM)
Der Asynchronmotor ist der Standardmotor in der Industrie. Er ist robust, wartungsarm und günstig.

Funktionsprinzip:
- Drehstrom erzeugt ein rotierendes Magnetfeld im Stator
- Das Magnetfeld induziert Ströme im Rotor (Kurzschlussläufer)
- Rotor wird mitgenommen (mit Schlupf: n_Rotor < n_Magnetfeld)

Synchrondrehzahl: n_s = 60 × f / p
- f = Frequenz [Hz]
- p = Polpaarzahl
- Bei 50 Hz, p=2: n_s = 60 × 50 / 2 = 1500 U/min
- Tatsächliche Drehzahl ca. 1450 U/min (3,3% Schlupf)

Nenngrössen auf dem Typenschild:
- P_N = Nennleistung [kW]
- n_N = Nenndrehzahl [U/min]
- M_N = Nennmoment [Nm]  → M_N = P_N × 9550 / n_N
- η_N = Wirkungsgrad (IE3-Klasse > 90%)
- U_N = Nennspannung (400 V Δ oder 690 V Y)

## Schaltung: Stern-Dreieck
Anlauf im Stern (Y): Spannung am Motor = 230 V, geringerer Anlaufstrom
Betrieb im Dreieck (Δ): Spannung am Motor = 400 V, volle Leistung
Umschaltung nach ca. 3–5 Sekunden

## Motorschutz
- Motorschutzschalter: Thermischer Schutz (Bimetall) + magnetischer Kurzschlussschutz
- Kaltleiterfühler (PTC): Temperaturüberwachung der Wicklung
- Thermistor: Meldet Übertemperatur an SPS`,
      },
      {
        id: 'frequenzumrichter',
        titel: 'Frequenzumrichter (FU)',
        inhalt: `Der Frequenzumrichter (auch VFD – Variable Frequency Drive oder Umrichter) ermöglicht die stufenlose Drehzahlregelung von Asynchronmotoren und spart erheblich Energie.

## Funktionsprinzip
1. Gleichrichter: AC (400 V) → DC (Zwischenkreis ca. 560 V)
2. Zwischenkreis: Kondensatoren glätten die Spannung
3. Wechselrichter (Inverter): DC → AC mit variabler Frequenz und Spannung (IGBT-Transistoren, PWM)

## Vorteile des Frequenzumrichters
- Stufenlose Drehzahlregelung (0 bis über Nenndrehzahl)
- Sanftanlauf: Kein hoher Anlaufstrom (statt 6×I_N nur ca. 1,5×I_N)
- Energiesparen: Lüfter/Pumpen: P ~ n³ → halbierte Drehzahl = 1/8 Leistung!
- Motorschutzfunktionen integriert
- Bremsenergie rückspeisbar (regenerativ)

## Wichtige Parameter
- Ausgangsfrequenz f: 0–50 Hz (0–100% Drehzahl)
- Hochlaufzeit (Rampe): Zeit von 0 auf Nenndrehzahl (z.B. 5 s)
- Tieflaufzeit: Zeit von Nenndrehzahl auf 0
- Boostspannung: Erhöht Drehmoment bei niedriger Drehzahl

## Steuermethoden
- U/f-Steuerung: Spannung proportional zur Frequenz, einfach, robust
- Vektorregelung (FOC): Hohe Dynamik, gutes Drehmoment auch bei Stillstand
- Sensorless Vector: Ohne Drehgeber, guter Kompromiss

## Siemens SINAMICS
- G120: Standard-Umrichter für Pumpen, Lüfter, Förderbänder
- S120: Servo-/Mehrachsantrieb für CNC und Robotic
- V20: Einfacher Basisumrichter

## EMV-Massnahmen
Frequenzumrichter erzeugen elektromagnetische Störungen (PWM)!
- Abgeschirmte Motorleitungen verwenden
- EMV-Filter einbauen
- Erdung sorgfältig ausführen`,
      },
      {
        id: 'getriebe',
        titel: 'Getriebe und Kupplungen',
        inhalt: `Getriebe passen Drehzahl und Drehmoment zwischen Motor und Arbeitsmaschine an. Kupplungen verbinden Wellen und können Stösse dämpfen.

## Übersetzungsverhältnis
i = n_1 / n_2 = M_2 / M_1 = z_2 / z_1

- i > 1: Untersetzung (Drehzahl sinkt, Drehmoment steigt)
- i < 1: Übersetzung (Drehzahl steigt, Drehmoment sinkt)
- z = Zähnezahl

Beispiel: Motor n_1 = 1450 U/min, i = 10
Abtriebsdrehzahl n_2 = 1450 / 10 = 145 U/min
Abtriebsmoment M_2 = M_1 × i × η = 10 Nm × 10 × 0,95 = 95 Nm

## Getriebetypen

### Stirnradgetriebe
- Einfach und günstig
- Hoher Wirkungsgrad (η ≈ 0,98 pro Stufe)
- Gerade oder schräge Verzahnung

### Schneckengetriebe
- Grosse Übersetzung in einer Stufe (i = 5–100)
- Selbsthemmend (kein Rücktreiben möglich)
- Schlechterer Wirkungsgrad (η ≈ 0,5–0,9)
- Kompakte Bauform (90° Achswinkel)

### Planetengetriebe
- Sehr kompakt bei hohem Übersetzungsverhältnis
- Hoher Wirkungsgrad
- Häufig in Servoantrieben

## Kupplungstypen

### Starre Kupplung
Keine Dämpfung, hohe Präzision, kein Winkelversatz erlaubt

### Elastische Kupplung (Klauenkupplung)
Gummiring dämpft Stösse, toleriert geringen Versatz

### Oldham-Kupplung
Toleriert axialen und seitlichen Versatz gut

### Magnetkupplung
Berührungslose Kraftübertragung durch Magneten (z.B. in Pumpen)

### Sicherheitskupplung
Trennt bei Überlast (Rutschkupplung) – schützt Maschine`,
      },
      {
        id: 'servo',
        titel: 'Servo- und Schrittmotoren',
        inhalt: `Servo- und Schrittmotoren ermöglichen präzise Positionierung und werden in CNC-Maschinen, Robotern und Handling-Systemen eingesetzt.

## Schrittmotor (Stepper Motor)
Bewegt sich in diskreten Schritten (Winkelinkrementen).

Typische Schrittwinkel:
- 1,8° pro Schritt → 200 Schritte / Umdrehung (Standardmotor)
- Mit Mikroschritt-Treiber: bis 1/256 Schritte → 51 200 Schritte / Umdrehung

Vorteile:
- Preisgünstig
- Kein Encoder nötig (open-loop)
- Einfache Steuerung

Nachteile:
- Verliert Schritte bei Überlast
- Verliert Drehmoment bei hoher Drehzahl
- Hoher Energieverbrauch im Stillstand

Anwendung: 3D-Drucker, CNC-Graviermaschinen, Dosiereinheiten

## Servomotor
Permanentmagnet-Synchronmotor mit Drehgeber (Encoder), geregelt durch Servoumrichter.

Regelprinzip (Kaskadenregelung):
Lageregeler → Drehzahlregler → Stromregler → Motor

Vorteile:
- Hochdynamisch (schnelle Positionierung)
- Hohes Drehmoment auch bei niedriger Drehzahl
- Exakte Positionierung (Positioniergenauigkeit < 0,01°)
- Energieeffizient (nur Energie wenn Drehmoment gefordert)

Komponenten:
- Servomotor mit Encoder (Absolutwertgeber oder Inkrementalgeber)
- Servoverstärker/Regler (z.B. Siemens SINAMICS S120, Beckhoff AX5000)

## Encoder-Typen
- Inkrementalgeber: Zählt Pulse, braucht Referenzfahrt
- Absolutwertgeber (SSI, EnDat): Kennt Position immer, kein Referenzieren nötig
- Resolver: Analog, sehr robust (Hochtemperatur, Vibration)

## Anwendungen Servosysteme
- CNC-Werkzeugmaschinen (Drehen, Fräsen)
- Industrieroboter (6-Achsen)
- Verpackungsmaschinen
- Spritzgiessmaschinen`,
      },
    ],
  },
  {
    id: 'messtechnik',
    titel: 'Messtechnik',
    icon: '📏',
    farbe: 'purple',
    beschreibung: 'Sensoren, Aktoren, Temperatur, Druck, Signalverarbeitung',
    lektionen: [
      {
        id: 'messung-grundlagen',
        titel: 'Grundlagen der Messtechnik',
        inhalt: `Messtechnik ist die Wissenschaft des Messens. Für den Automatiker ist sie entscheidend für die Erfassung von Prozessgrössen wie Temperatur, Druck, Füllstand und Durchfluss.

## Grundbegriffe

### Messbereich
Der Bereich, innerhalb dem ein Sensor zuverlässig messen kann.
Beispiel: Temperatursensor -20°C bis +200°C

### Messbereichsendwert und Anfangswert
MBE = obere Grenze, MBA = untere Grenze
Messbereichsbreite = MBE - MBA

### Auflösung
Kleinste erkennbare Änderung des Messwerts.
Beispiel: Drucktransmitter mit 0,01 bar Auflösung

### Genauigkeit / Messabweichung
Systematische Abweichung (Linearitätsfehler, Offsetfehler)
Zufällige Abweichung (Rauschen, Wiederholbarkeit)

Angabe oft in % vom Messbereichsendwert (%MBE)
Beispiel: ±0,5%MBE bei 100 bar → Fehler ±0,5 bar

### Reproduzierbarkeit (Wiederholbarkeit)
Streuung bei wiederholter Messung unter gleichen Bedingungen.

### Hysterese
Unterschiedlicher Messwert bei steigendem vs. sinkendem Eingangssignal.

## Messkette
Prozess → Aufnehmer (Sensor) → Wandler → Signal → Auswertung (SPS)

## Standardsignale in der Industrie
- 4–20 mA: Analoges Stromsignal (störsicher, Leitungsbrucherkennung bei 0 mA)
- 0–10 V: Analoges Spannungssignal (günstiger, empfindlicher für Störungen)
- 0/24 V: Digitales Signal (Grenzwertschalter)
- HART: Digitale Kommunikation über 4-20mA-Leitung
- Profibus PA, Foundation Fieldbus: Digitale Feldbussysteme`,
      },
      {
        id: 'sensoren',
        titel: 'Sensoren und Aktoren',
        inhalt: `Sensoren erfassen physikalische Grössen und wandeln sie in elektrische Signale um. Aktoren bewirken physikalische Aktionen aufgrund elektrischer Signale.

## Näherungsschalter (Proximity Switches)

### Induktiver Näherungsschalter
- Erkennt metallische Objekte (ohne Berührung)
- Wirkprinzip: Wirbelstromverluste im Magnetfeld der Spule
- Schaltabstand: 1–50 mm (je nach Bauform und Material)
- Ausgang: PNP oder NPN (Transistorausgang), 24 V DC
- Anwendung: Zählen von Teilen, Endlagen von Zylindern

### Kapazitiver Näherungsschalter
- Erkennt alle Materialien (Metall, Kunststoff, Flüssigkeiten)
- Wirkprinzip: Kapazitätsänderung des elektrischen Feldes
- Empfindlichkeit einstellbar (Potentiometer)
- Anwendung: Füllstandserkennung in Tanks, Papierdetektion

### Optischer Sensor (Lichtschranke)
- Einweg-Lichtschranke: Sender und Empfänger getrennt
- Reflexions-Lichtschranke: Sender+Empfänger + Reflektor
- Tastschalter: Direktreflexion vom Objekt
- Reichweite: mm bis 100 m
- Licht: Rot, Infrarot, Laser

## Encoder / Drehgeber
- Inkrementalgeber: Ausgabe von Pulsen pro Umdrehung (z.B. 1000 PPR)
- Absolutwertgeber: Gibt absolute Position aus (12-bit = 4096 Positionen)

## Aktoren
- Magnetventil: Elektrisch geschaltetes Wegeventil
- Schütz: Leistungsschalter (Motorsteuerung)
- Proportionalventil: Stufenlose Druckluft-/Hydraulikregelung
- Heizung: Heizpatrone, Halbleiterheizelement (SSR-gesteuert)
- Alarmhorn / Signalleuchte: Optische/akustische Meldung`,
      },
      {
        id: 'temperaturmessung',
        titel: 'Temperaturmessung',
        inhalt: `Temperatur ist eine der häufigsten Messgrössen in der Industrie. Verschiedene Messprinzipien decken unterschiedliche Temperaturbereiche ab.

## PT100 / PT1000 (Widerstandsthermometer RTD)
Funktionsprinzip: Elektrischer Widerstand von Platin ändert sich linear mit der Temperatur.

PT100: R = 100 Ω bei 0°C
PT1000: R = 1000 Ω bei 0°C

Kennlinie: R(T) = R0 × (1 + A×T + B×T²)
Vereinfacht: ΔR/°C ≈ 0,385 Ω bei PT100

Messbereich: -200°C bis +850°C
Genauigkeit: Klasse A: ±0,15°C bei 0°C, Klasse B: ±0,3°C

Anschluss:
- 2-Leiter: Einfach, Leitungswiderstand verfälscht Messung
- 3-Leiter: Kompensiert Leitungswiderstand einseitig
- 4-Leiter: Vollständige Leitungskompensation (beste Genauigkeit)

## Thermoelement (Thermocouple)
Funktionsprinzip: Seebeck-Effekt – zwei verschiedene Metalle erzeugen Thermospannung an der Messstelle.

Häufige Typen:
- Typ K (NiCr-Ni): -200°C bis 1300°C, robust, günstig (Standard)
- Typ J (Fe-CuNi): 0°C bis 700°C
- Typ T (Cu-CuNi): -200°C bis 350°C, sehr genau
- Typ S (Pt10Rh-Pt): 0°C bis 1750°C, sehr hohe Temperaturen

Thermospannung: ca. 40 µV/°C (Typ K)
Braucht Referenzstellenkompensation (Kaltstellenkompensation)

## NTC/PTC Thermistoren
- NTC (Negativer Temperaturkoeffizient): Widerstand sinkt bei Temperaturerhöhung → Motorschutzfühler
- PTC (Positiver Temperaturkoeffizient): Widerstand steigt stark an bei Übertemperatur → Sicherheitsabschaltung

## Infrarot-Pyrometer
Kontaktlose Temperaturmessung durch Wärmestrahlung
Anwendung: Metallverarbeitung, bewegte Teile, aggressive Medien`,
      },
      {
        id: 'druckmessung',
        titel: 'Druckmessung',
        inhalt: `Druckmessung ist in der Pneumatik, Hydraulik und Prozessautomatisierung allgegenwärtig.

## Druckarten

### Absolutdruck
Gemessen gegenüber dem absoluten Vakuum (0 bar abs)
Verwendung: Gas- und Dampfanwendungen

### Relativdruck (Überdruck)
Gemessen gegenüber dem Atmosphärendruck (0 bar ist Umgebungsdruck)
Anzeige auf Manometern, bei Pneumatik

### Differenzdruck
Druckunterschied zwischen zwei Messpunkten
Anwendung: Durchflussmessung (Blende), Filterwächter

Umrechnung: p_abs = p_rel + p_atm (p_atm ≈ 1,013 bar)

## Messgeräte

### Rohrfedermanometer
- Mechanisch, kein Strom nötig
- Bourdon-Rohr: Ovales Rohr, das sich bei Druck begradigt
- Genauigkeit: Klasse 1 oder 2,5 (1% oder 2,5% vom Endwert)
- Anwendung: Lokale Druckanzeige (nicht für SPS)

### Drucktransmitter (elektronisch)
- Piezoelektrisch: Quarz erzeugt Ladung bei Druckänderung (dynamisch)
- Piezoresistiv: Dehnmessstreifen auf Siliziummembran (statisch + dynamisch)
- Ausgangssignal: 4–20 mA oder 0–10 V

### Druckschalter (Pressostaat)
- Schaltet digital bei eingestelltem Druck
- Einstellbar: Schaltpunkt und Hysterese

## Typische Druckbereiche
- Pneumatik: 0–16 bar
- Hydraulik: 0–400 bar (Hochdruck bis 700 bar)
- Kältetechnik: -1 bis 30 bar (Vakuum bis Überdruck)

## Auswahl eines Drucktransmitters
Kriterien: Medium, Messbereich, Genauigkeit, Temperaturbereich, Prozessanschluss, Ausgangssignal, Ex-Schutz`,
      },
    ],
  },
  {
    id: 'mechanik',
    titel: 'Mechanik',
    icon: '🔧',
    farbe: 'red',
    beschreibung: 'Maschinenelemente, Toleranzen, Kräfte, Materialkunde',
    lektionen: [
      {
        id: 'maschinenelemente',
        titel: 'Maschinenelemente',
        inhalt: `Maschinenelemente sind standardisierte Bauteile, die in Maschinen und Anlagen häufig verwendet werden. Kenntnisse darüber sind für den Automatiker bei Montage, Wartung und Instandhaltung unerlässlich.

## Schrauben und Verbindungen

### Schraubentypen
- Zylinderschraube (DIN 912): Innensechskant, für präzise Verbindungen
- Sechskantschraube (DIN 933/931): Aussenantrieb, universell
- Senkschraube (DIN 7991): Bündig mit Oberfläche
- Gewindestift (DIN 913): Befestigung ohne Kopf

### Festigkeitsklassen
Format: X.Y → Zugfestigkeit = X×100 MPa, Streckgrenze = X×Y×10 MPa
- 8.8: 800 MPa Zugfestigkeit (Standard maschinenbau)
- 10.9: 1000 MPa (hochbeansprucht)
- 12.9: 1200 MPa (sehr hoch, Schraubenköpfe oft schwarz)

### Anzugsdrehmoment
Muss eingehalten werden! Zu fest = Bruch/Streckung, zu locker = Lockerung
Werkzeug: Drehmomentschlüssel

## Wälzlager

### Kugellager (Rillenkugellager DIN 625)
- Radiale und geringe axiale Lasten
- Niedrige Reibung, hohe Drehzahl
- Kennzeichnung: 6204 → Kugellager, Baureihe 2, d=20mm

### Zylinderrollenlager
- Hohe radiale Lasten
- Kein Ausgleich von Winkelfehlern

### Kegelrollenlager
- Hohe radiale und axiale Lasten
- Immer paarweise einbauen

### Einbau und Montage
Lager niemals mit Hammer einschlagen! Induktives Lagerheizgerät oder hydraulische Presse verwenden.

## Federn
- Schraubendruckfeder: Aufnahme von Druckkräften
- Schraubenzugfeder: Aufnahme von Zugkräften
- Tellerfeder: Hohe Kraft auf kleinem Raum

Hookesches Gesetz: F = c × x  (c = Federkonstante [N/mm])`,
      },
      {
        id: 'toleranzen',
        titel: 'Toleranzen und Passungen',
        inhalt: `Toleranzen definieren die zulässige Abweichung von Nennmassen. Passungen beschreiben das Spiel oder die Überdeckung zwischen zusammengebauten Teilen.

## ISO-Toleranzsystem (DIN ISO 286)

### Toleranzfeld
Definiert durch:
- Grundabmass (Position relativ zu Nulllinie): Buchstabe
  - Grossbuchstaben: Bohrung (z.B. H, F, G)
  - Kleinbuchstaben: Welle (z.B. h, f, g, k, n, p)
- Toleranzgrad (Breite): Zahl IT1–IT18 (IT5–IT11 üblich im Maschinenbau)

### Häufige Toleranzfelder
Bohrung:
- H7: Enge Toleranz, Standard-Passbohrung
- H8, H9: Etwas weiter

Welle:
- h6: Enge Toleranz (Schiebesitz)
- f7: Spielpassung (Gleitlager)
- k6: Leichte Übergangspassung
- p6: Leichte Presspassung

## Passungsarten

### Spielpassung
Bohrung immer grösser als Welle → Spiel vorhanden
Beispiel: H7/f7, H8/e8
Anwendung: Gleitlager, leicht demontierbare Verbindungen

### Übergangspassung
Kann Spiel oder Überdeckung haben → ungewiss
Beispiel: H7/k6, H7/m6
Anwendung: Wälzlager-Einbau, Zentrierverbindungen

### Presspassung (Überdeckungspassung)
Welle immer grösser als Bohrung → Fügemuss mit Kraft/Wärme
Beispiel: H7/p6, H7/s6
Anwendung: Permanente, hochbeanspruchte Verbindungen (Zahnräder auf Wellen)

## Messen und Prüfen
- Schieblehre (Messschieber): ±0,05 mm Genauigkeit
- Mikrometerschraube: ±0,01 mm Genauigkeit
- Rachenlehren / Grenzlehrdorne: schnelle Gut/Ausschuss-Prüfung
- Messuhr: Formabweichungen, Rundlauffehler`,
      },
      {
        id: 'kraefte',
        titel: 'Kräfte und Momente',
        inhalt: `Die Mechanik beschreibt das Verhalten von Körpern unter dem Einfluss von Kräften und Momenten. Für die Auslegung von Maschinen und Komponenten ist dieses Wissen grundlegend.

## Newtonsche Gesetze

### 1. Gesetz (Trägheitsgesetz)
Ein Körper bleibt in Ruhe oder gleichförmiger Bewegung, solange keine Kraft wirkt.

### 2. Gesetz (Aktionsgesetz)
F = m × a
- F = Kraft [N]
- m = Masse [kg]
- a = Beschleunigung [m/s²]

### 3. Gesetz (Reaktionsgesetz)
Actio = Reactio: Jede Kraft erzeugt eine gleich grosse, entgegengesetzte Gegenkraft.

## Gewichtskraft
G = m × g  (g = 9,81 m/s² ≈ 10 m/s²)
Beispiel: m = 50 kg → G = 50 × 9,81 = 490,5 N

## Drehmoment (Moment)
M = F × r (senkrecht)
- M = Drehmoment [Nm]
- F = Kraft [N]
- r = Hebelarm [m]

Beispiel: Schrauben mit F = 100 N, Schlüssellänge r = 0,2 m
M = 100 × 0,2 = 20 Nm

## Hebelgesetz
F1 × l1 = F2 × l2

Anwendung: Einachsige Gleichgewichtsbedingung für Maschinenteile

## Reibung
Haftreibung: F_R = µ_H × F_N (vor der Bewegung)
Gleitreibung: F_R = µ_G × F_N (während der Bewegung)
µ = Reibungskoeffizient (Stahl auf Stahl trocken: µ ≈ 0,15)

## Maschinendynamik
Leistung: P = F × v = M × ω
- v = Geschwindigkeit [m/s]
- ω = Winkelgeschwindigkeit [rad/s] = 2π × n/60

Wirkungsgrad: η = P_ab / P_zu
P_ab = P_zu × η  (immer < P_zu durch Verluste)`,
      },
      {
        id: 'materialien',
        titel: 'Materialkunde und Werkzeuge',
        inhalt: `Kenntnisse über Werkstoffe helfen dem Automatiker bei der Auswahl geeigneter Materialien und beim Erkennen von Verschleiss und Schäden.

## Wichtige Werkstoffe

### Baustahl (S235, S355)
- S235: Streckgrenze ≥ 235 MPa, gut schweissbar
- S355: Streckgrenze ≥ 355 MPa, höhere Festigkeit
- Anwendung: Maschinengestelle, Halterungen, Konsolen

### Vergütungsstahl (42CrMo4)
- Hohe Zugfestigkeit (bis 1100 MPa) nach Vergüten
- Wellen, Zahnräder, hochbelastete Maschinenteile

### Edelstahl (1.4301 / V2A, 1.4404 / V4A)
- 1.4301 (AISI 304): Lebensmittel, allgemein korrosiv
- 1.4404 (AISI 316L): Chemie, Meeresklima (Molybdänzusatz)
- Anwendung: Lebensmittelindustrie, Pharmaindustrie, Aussen

### Aluminium (AlMgSi1 / EN AW-6082)
- Leicht (ρ = 2,7 g/cm³ vs. Stahl 7,85 g/cm³)
- Gut bearbeitbar, korrosionsbeständig
- Anwendung: Gehäuse, Halterungen, Profillsysteme

### Kunststoffe
- PA (Polyamid): Gleitlager, Zahnräder (gut Selbstschmierend)
- POM (Delrin): Präzisionsteile, gute Masshaltigkeit
- PTFE (Teflon): Chemisch resistent, niedrigster Reibwert

## Wichtige Werkzeuge

### Messwerkzeuge
- Messschieber/Schieblehre: Längen, Breiten, Tiefen (±0,05 mm)
- Mikrometerschraube: Aussen-/Innen-/Tiefenmessung (±0,01 mm)
- Messuhr: Formtoleranzen, Rundlauf (±0,01 mm)
- Bügelmessschraube: Wanddicken

### Handwerkzeuge
- Drehmomentschlüssel: Vorgeschriebene Anzugsmomente einhalten
- Ringmaulschlüssel, Steckschlüssel
- Inbusschlüssel (Imbus): Zylinderschrauben
- Torx: Sternförmiger Antrieb`,
      },
    ],
  },
  {
    id: 'digitaltechnik',
    titel: 'Digitaltechnik',
    icon: '💻',
    farbe: 'indigo',
    beschreibung: 'Zahlensysteme, Logikgatter, Boolesche Algebra, Flipflops',
    lektionen: [
      {
        id: 'zahlensysteme',
        titel: 'Zahlensysteme',
        inhalt: `In der Digitaltechnik und SPS-Programmierung arbeitet man mit verschiedenen Zahlensystemen. Das Verständnis von Binär, Hexadezimal und BCD ist für jeden Automatiker wichtig.

## Dezimalsystem (Basis 10)
Stellenwerte: ..., 1000, 100, 10, 1
Ziffern: 0–9

## Binärsystem (Basis 2)
Stellenwerte: ..., 8, 4, 2, 1 (Potenzen von 2: 2³, 2², 2¹, 2⁰)
Ziffern: 0, 1 (entspricht Aus/Ein, LOW/HIGH, Falsch/Wahr)

Umrechnung Dezimal → Binär (Beispiel: 13):
13 ÷ 2 = 6 Rest 1
6 ÷ 2 = 3 Rest 0
3 ÷ 2 = 1 Rest 1
1 ÷ 2 = 0 Rest 1
Ergebnis (von unten nach oben): 1101₂

Prüfung: 1×8 + 1×4 + 0×2 + 1×1 = 8 + 4 + 0 + 1 = 13 ✓

## Hexadezimalsystem (Basis 16)
Ziffern: 0–9 und A(10), B(11), C(12), D(13), E(14), F(15)
Stellenwerte: 4096, 256, 16, 1

Beispiel: 0xFF = 15×16 + 15 = 255

4 Binärstellen entsprechen 1 Hexadezimalstelle:
0000=0, 0001=1, ..., 1001=9, 1010=A, 1011=B, 1100=C, 1101=D, 1110=E, 1111=F

Beispiel: 1101 0110₂ = D6₁₆ = 214₁₀

## Datengrössen
- 1 Bit: Kleinste Einheit (0 oder 1)
- 1 Byte = 8 Bit: Wertebereich 0–255 (00–FF)
- 1 Word = 16 Bit: Wertebereich 0–65535 (0000–FFFF)
- 1 DWord = 32 Bit
- 1 kB = 1024 Byte, 1 MB = 1024 kB

## In der SPS
- Eingangsbyte IB0: Enthält Bits I0.0 bis I0.7
- Merkerwort MW10: Enthält MB10 und MB11 (2 Bytes = 16 Bits)
- Reale Zahlen werden als REAL (32-Bit IEEE 754) gespeichert`,
      },
      {
        id: 'logikgatter',
        titel: 'Logikgatter',
        inhalt: `Logikgatter sind die Grundbausteine der Digitaltechnik. Sie verarbeiten binäre Signale und liefern einen binären Ausgang.

## Grundgatter

### AND-Gatter (UND)
Ausgang = 1 nur wenn ALLE Eingänge = 1

Wahrheitstabelle (2 Eingänge):
A=0, B=0 → Y=0
A=0, B=1 → Y=0
A=1, B=0 → Y=0
A=1, B=1 → Y=1

Boolesche Formel: Y = A AND B = A · B

### OR-Gatter (ODER)
Ausgang = 1 wenn MINDESTENS EIN Eingang = 1

A=0, B=0 → Y=0
A=0, B=1 → Y=1
A=1, B=0 → Y=1
A=1, B=1 → Y=1

Formel: Y = A OR B = A + B

### NOT-Gatter (NICHT)
Ausgang = Invertierter Eingang (Negation)

A=0 → Y=1
A=1 → Y=0

Formel: Y = NOT A = Ā

### NAND-Gatter (Nicht-UND)
Ausgang = Negiertes AND
Y = NOT(A AND B) = Ā·B̄

NAND ist universell: Alle anderen Gatter können nur mit NAND gebaut werden!

### NOR-Gatter (Nicht-ODER)
Y = NOT(A OR B)

NOR ist ebenfalls universell!

### XOR-Gatter (Exklusives ODER)
Ausgang = 1 wenn Eingänge VERSCHIEDEN sind

A=0, B=0 → Y=0
A=0, B=1 → Y=1
A=1, B=0 → Y=1
A=1, B=1 → Y=0

Anwendung: Paritätsprüfung, Halbaddierer

## Anwendung in der SPS
In KOP entsprechen:
- Schliesser in Reihe = AND
- Schliesser parallel = OR
- Öffner = NOT

In FUP werden direkt AND/OR/NOT-Gatter gezeichnet.`,
      },
      {
        id: 'boolesche-algebra',
        titel: 'Boolesche Algebra',
        inhalt: `Die Boolesche Algebra ermöglicht die mathematische Beschreibung und Vereinfachung logischer Schaltungen.

## Grundregeln

### Identitätsgesetze
A AND 1 = A
A OR 0 = A

### Nullgesetze
A AND 0 = 0
A OR 1 = 1

### Idempotenzgesetze
A AND A = A
A OR A = A

### Komplementgesetze
A AND Ā = 0  (Variable UND ihre Negation = immer 0)
A OR Ā = 1   (Variable ODER ihre Negation = immer 1)

### Kommutativgesetze
A AND B = B AND A
A OR B = B OR A

### Assoziativgesetze
(A AND B) AND C = A AND (B AND C)
(A OR B) OR C = A OR (B OR C)

### Distributivgesetze
A AND (B OR C) = (A AND B) OR (A AND C)
A OR (B AND C) = (A OR B) AND (A OR C)

### De Morgansche Gesetze (sehr wichtig!)
NOT(A AND B) = NOT A OR NOT B
NOT(A OR B) = NOT A AND NOT B

## Vereinfachungsbeispiel
Y = A·B + A·B̄
  = A·(B + B̄)    (Distributivgesetz)
  = A·1            (Komplementgesetz)
  = A

## Karnaugh-Veitch-Diagramm (KV-Diagramm)
Grafische Methode zur Vereinfachung boolescher Funktionen.
Benachbarte Felder mit 1en werden zu Gruppen zusammengefasst (Gruppen: 1, 2, 4, 8, ...).
Je grösser die Gruppe, desto einfacher der Term.`,
      },
      {
        id: 'flipflops',
        titel: 'Flipflops und Schaltwerke',
        inhalt: `Flipflops sind bistabile Kippstufen – sie können zwei stabile Zustände annehmen und sind die Grundbausteine von Speichern und Schaltwerken.

## RS-Flipflop (Set-Reset)
Eingänge: S (Set), R (Reset)
Ausgang: Q und Q̄

S=1, R=0 → Q=1 (gesetzt)
S=0, R=1 → Q=0 (rückgesetzt)
S=0, R=0 → Q=Q (Zustand gespeichert)
S=1, R=1 → Verboten! (undefiniert)

Anwendung in der SPS: SET/RESET-Spulen im KOP entsprechen einem RS-Flipflop.

## D-Flipflop (Data/Delay)
Eingang: D (Daten), Takt CLK
Bei steigender Taktflanke wird D-Eingang in Q übernommen.

Anwendung: Datenregister, Schieberegister, Zähler

## JK-Flipflop (Jack-Kilby)
J=0, K=0 → Q unverändert
J=1, K=0 → Q=1 (Set)
J=0, K=1 → Q=0 (Reset)
J=1, K=1 → Q togglet (wechselt Zustand)

## Schaltwerk vs. Schaltnetz
- Schaltnetz: Ausgang hängt nur vom aktuellen Eingang ab (kombinatorisch)
- Schaltwerk: Ausgang hängt von aktuellem Eingang UND gespeichertem Zustand ab (sequenziell)

SPS-Ablaufsteuerungen sind Schaltwerke!

## Register und Zähler
- Schieberegister: Bits werden bei jedem Takt eine Position weitergeschoben
- Binärzähler: Zählt Taktimpulse (4-Bit-Zähler: 0–15)
- Dezimalzähler (BCD): 0–9, dann Übertrag

## Praxisrelevanz
Flipflops und Schaltwerke sind die theoretische Grundlage für:
- SPS-Merker und gesetzte Ausgänge
- Zeitglieder und Zähler
- Busprotokolle (RS232, SPI, I2C)`,
      },
    ],
  },
  {
    id: 'arbeitssicherheit',
    titel: 'Arbeitssicherheit',
    icon: '🦺',
    farbe: 'yellow',
    beschreibung: 'NIN, SUVA, Schutzklassen, Erste Hilfe, PSA, Brandschutz',
    lektionen: [
      {
        id: 'nin-normen',
        titel: 'NIN und SUVA – Schweizer Normen',
        inhalt: `In der Schweiz regeln klare Normen und Vorschriften die elektrische Sicherheit. Diese zu kennen ist für jeden Automatiker Pflicht.

## NIN – Niederspannungs-Installations-Norm
Die NIN (Ausgabe 2020) ist die Schweizer Norm für elektrische Niederspannungsinstallationen. Sie basiert auf IEC 60364 und enthält schweizspezifische Ergänzungen.

Herausgeber: Electrosuisse (ehemals SEV)
Verbindlichkeit: In der Schweiz gesetzlich vorgeschrieben

Wichtige Kapitel:
- NIN 4: Schutz gegen elektrischen Schlag (Basisschutz, Fehlerschutz)
- NIN 5: Auswahl und Errichtung von Betriebsmitteln
- NIN 7: Räume und Anlagen besonderer Art (z.B. Bäder, Medizin)

## SUVA – Unfallverhütungsvorschriften
Die SUVA ist die Schweizerische Unfallversicherungsanstalt und gibt Vorschriften zur Unfallverhütung aus.

Wichtige Dokumente:
- SUVA 2153: Elektrische Gefährdungen am Arbeitsplatz
- BGV A3 (deutsch): Elektrische Anlagen und Betriebsmittel

## 5 Sicherheitsregeln (Freischalten)
Vor Arbeiten an elektrischen Anlagen MÜSSEN folgende Schritte in dieser Reihenfolge durchgeführt werden:

1. Freischalten (Anlage stromlos schalten)
2. Gegen Wiedereinschalten sichern (Schloss, Schild)
3. Spannungsfreiheit feststellen (Spannungsprüfer)
4. Erden und Kurzschliessen (Hochspannung)
5. Benachbarte spannungsführende Teile abdecken/abschranken

Diese Regeln können Leben retten!

## Schutzklassen
- Schutzklasse I: Schutzleiter (geerdet, normaler Schutzkontaktstecker)
- Schutzklasse II: Schutzisolierung (doppelte Isolierung, kein Schutzleiter)
- Schutzklasse III: Schutzkleinspannung (SELV ≤ 50 V AC / 120 V DC)`,
      },
      {
        id: 'schutz-erdung',
        titel: 'Schutzmassnähmen und Erdung',
        inhalt: `Schutzmassnähmen verhindern den elektrischen Schlag durch automatische Abschaltung oder durch Isolation vor gefährlichen Spannungen.

## Basisschutz (Direktberührungsschutz)
Schutz bei normalem Betrieb:
- Isolierung spannungsführender Teile (Isolierung nach EN/IEC)
- Abdeckungen und Gehäuse (IP-Schutzgrad)
- Abstände (Kriechstrecken und Luftstrecken)

## IP-Schutzgrad (IEC 60529)
Format: IP XY
- X = Schutz gegen feste Fremdkörper (0–6)
- Y = Schutz gegen Wasser (0–9)

Häufige IP-Grade:
- IP20: Schutz vor Berührung, kein Schutz vor Wasser (Schaltschrank innen)
- IP44: Spritzwasserschutz (Schaltschrank aussen)
- IP54: Staubdicht, Spritzwasser (Feldgeräte)
- IP67: Staubdicht, Kurzzeit-Eintauchen bis 1m/30min

## Fehlerschutz (indirekter Berührungsschutz)
Schutz bei Isolationsfehler:

### Schutzleiter (PE – Protective Earth)
Gehäuse werden mit Schutzleiter (grün-gelb) geerdet.
Bei Isolationsfehler → Fehlerstrom fliesst über Schutzleiter → Sicherung löst aus.

### FI-Schutzschalter (RCD – Residual Current Device)
Misst Differenz zwischen L und N.
Summenstrom ≠ 0 → Fehlerstrom → Auslösung in < 40 ms
Auslösestrom: 30 mA (Personenschutz), 300 mA (Brandschutz)

In der Industrie: FI/LS-Schalter (kombinierter FI + Leitungsschutzschalter)

## Erdung im Schaltschrank
- PE-Sammelpunkt (Erdungsschiene): Alle Gehäuse, Kabelschirme
- Schutzleiter (grün-gelb): Mindestquerschnitt = Querschnitt Aussenleiter bis 16mm²
- EMV-Erdung: Flächige Verbindung (nicht dünn und lang!)

## Berührungsspannung und Körperstrom
Gefährlicher Strom: > 10 mA (Muskelkrampf), > 80 mA (Herzkammerflimmern)
Widerstand Menschenkörper: 1000–100 000 Ω (nass viel weniger!)
Gefährliche Spannung: > 50 V AC (trockene Haut), > 25 V in feuchter Umgebung`,
      },
      {
        id: 'erste-hilfe',
        titel: 'Erste Hilfe bei Stromunfällen',
        inhalt: `Elektrounfälle können lebensbedrohlich sein. Schnelles, richtiges Handeln kann Leben retten. Jeder Automatiker muss die Grundmassnahmen kennen und regelmässig Erste-Hilfe-Kurse besuchen (Schweiz: alle 2 Jahre).

## Verhalten bei einem Elektrounfall

### STOPP – Selbstschutz zuerst!
Niemals die verunfallte Person direkt anfassen, wenn sie noch unter Strom steht!
Erst Anlage freischalten (Hauptschalter, Sicherung)!

Falls kein Freischalten möglich: Mit nicht leitendem Gegenstand (Holz, Kunststoff) Kontakt unterbrechen. Auf trockenem Untergrund stehen.

## LAABC-Schema (Reanimation)

L – LAGE prüfen: Umgebung sicher? (Stromgefahr gebannt?)
A – ANSPRECHEN: Person laut ansprechen, sachte schütteln
A – ALARMIEREN: Sofort Notruf 144 alarmieren (oder rufen lassen)
B – BEATMEN: Wenn keine Atmung → Atemwege freimachen, 2 Beatmungen (CPR-trainiert) oder nur Herzdruckmassage (Laie)
C – CIRCULATION (Herzdruckmassage):

Herzdruckmassage:
- 100–120 Mal pro Minute
- Drucktiefe: 5–6 cm
- Mitte des Brustkorbs
- 30 Kompressionen : 2 Beatmungen (wenn trainiert)

Bis Rettungsdienst übernimmt, nicht aufhören!

## AED – Automatischer Externer Defibrillator
In vielen Betrieben und öffentlichen Gebäuden vorhanden.
Gerät einschalten und Anweisungen befolgen – AED gibt Anweisungen, kann nicht falsch angewendet werden!

## Verbrennungen durch Strom
- Elektrische Verbrennung: Strom verbrennt Haut und tiefes Gewebe
- Lichtbogenverbrennung: Sehr heiss (> 10 000°C), schwerste Verletzungen
- Kühl mit Wasser (15–20°C, 10–15 min), steril abdecken

## Tetanuskrampf
Stromopfer können feststeckende Muskeln haben (Loskrampf nicht möglich).
Mögliche Sturzverletzungen beachten!`,
      },
      {
        id: 'psa-brandschutz',
        titel: 'PSA und Brandschutz',
        inhalt: `Persönliche Schutzausrüstung (PSA) und Brandschutz sind zentrale Elemente der Arbeitssicherheit in der Industrie.

## Persönliche Schutzausrüstung (PSA)

### Für Elektriker/Automatiker zwingend
- Sicherheitsschuhe S1P/S3: Antistatisch, Stahlkappe, Durchstichsichle Sohle
- Schutzbrille: Bei Funkenflug, Metallarbeiten, Schaltschrankarbeiten
- Helm: Bei Überkopfarbeiten oder Montage
- Gehörschutz: Bei lärmendem Umfeld (> 85 dB Dauerschall)

### Für Elektrische Arbeiten an spannungsführenden Teilen
- Isolierende Handschuhe (Klasse 00 bis 4, je nach Spannung):
  - Klasse 00: bis 500 V AC
  - Klasse 0:  bis 1000 V AC
  - Klasse 1:  bis 7500 V AC
- ARC-Flash-Schutzanzug: Bei Lichtbogengefahr in Schaltanlagen
- Isolierende Unterlage/Matte: Bei Arbeiten am spannungsführenden Teil

### Wann ist PSA anzuwenden?
Gemäss Gefährdungsbeurteilung. Im Zweifelsfall: IMMER!

## Brandschutz

### Brandklassen
A: Feste Stoffe (Holz, Papier, Kohle) → Wasser, Pulver, CO₂
B: Flüssigkeiten (Öl, Benzin, Lacke) → Schaum, Pulver, CO₂ (KEIN Wasser!)
C: Gase (Methan, Propan) → Pulver, Absperren
D: Metallbrand (Magnesium, Natrium) → Spezialpulver (KEIN Wasser!)
F: Speisefette → Speziallöscher

### Feuerlöscher
- ABC-Pulverlöscher: Universell, hinterlässt Rückstände (beschädigt Elektronik!)
- CO₂-Löscher: Für Elektronik/EDV, kein Rückstand, geringe Löschleistung
- Wasserlöscher: Nur Klasse A
- Schaumlöscher: Klasse A und B

NIEMALS Wasserlöscher bei elektrischen Anlagen! (Leitfähigkeit → Stromschlag)

### Brandschutz im Schaltschrank
- Schaltschränke regelmässig auf Kabelschäden/Überhitzung prüfen
- Kabeleinführungen abdichten (Brandabschottung)
- Keine brennbaren Materialien im Schaltschrank lagern
- Temperaturfühler/Thermostat überwachen Schranktemperatur

### Evakuierung
Sammelplatz kennen, Fluchtwege freihalten, im Brandfall: Aufzug verboten!`,
      },
    ],
  },
]
