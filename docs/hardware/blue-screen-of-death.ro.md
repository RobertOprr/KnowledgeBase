# Ecran albastru (Blue Screen of Death)

## Simptom

Calculatorul se blochează cu un ecran albastru și un mesaj de eroare,
apoi repornește neașteptat, uneori repetat.

## Cauze posibile

- Un driver defect sau incompatibil, mai ales după o actualizare
  recentă.
- Memorie RAM defectă sau incompatibilă.
- Supraîncălzirea componentelor hardware.
- Un fișier de sistem corupt sau o actualizare Windows eșuată.
- Un hard disk sau dispozitiv de stocare defect.
- Hardware periferic incompatibil sau defect.

## Rezolvare pas cu pas

1. Notează codul exact de eroare afișat pe ecranul albastru (de exemplu,
   „IRQL_NOT_LESS_OR_EQUAL”), sau găsește-l ulterior în Reliability
   History sau Event Viewer.
2. Verifică dacă blocările au început imediat după o actualizare de
   driver sau Windows și revino la versiunea anterioară dacă da.
3. Deconectează orice periferic sau hardware adăugat recent și verifică
   dacă blocările încetează.
4. Rulează Windows Memory Diagnostic pentru a exclude o memorie RAM
   defectă.
5. Verifică starea de sănătate a discului și rulează o verificare de
   disc.
6. Actualizează driverele video, de chipset și de rețea la cele mai
   recente versiuni stabile.
7. Verifică supraîncălzirea: confirmă că ventilatoarele funcționează și
   orificiile de ventilație nu sunt blocate, mai ales la laptopuri.
8. Rulează System File Checker (`sfc /scannow`) pentru a repara fișierele
   de sistem corupte.
9. Confirmă că dispozitivul funcționează stabil pentru o perioadă de
   utilizare normală înainte de a-l returna utilizatorului.

## Când se escaladează

- Același cod de eroare reapare după revenirea driverului, testarea
  memoriei și verificarea discului.
- Memory Diagnostic sau verificarea stării discului raportează o
  defecțiune hardware reală.
- Blocările au loc atât de frecvent încât diagnosticele de bază nu se
  pot finaliza.
- Problema a început după o actualizare majoră Windows și afectează mai
  multe dispozitive, sugerând o problemă de compatibilitate mai amplă.

---

**Tot ai nevoie de ajutor?** [Trimite un tichet](https://helpdesk-frontend-idzb.onrender.com/?source=kb_hardware_bsod){: target="_blank" rel="noopener" } și menționează acest articol. Agentul va ști deja ce pași ai încercat.
