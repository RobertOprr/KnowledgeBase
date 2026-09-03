# Software-ul nu se instalează sau se blochează la pornire

## Simptom

O aplicație nu reușește să se instaleze, sau se instalează dar se
blochează imediat după deschidere.

## Cauze posibile

- Spațiu insuficient pe disc pentru instalare.
- Software preliminar lipsă sau învechit (de exemplu, .NET Framework sau
  un Visual C++ Redistributable).
- Fișierele de instalare sau ale aplicației sunt corupte.
- Permisiuni insuficiente ale utilizatorului pentru a instala sau scrie
  în foldere protejate.
- O versiune mai veche și conflictuală a aceluiași software este încă
  instalată.
- Antivirusul sau soluția de protecție blochează instalatorul sau
  procesele aplicației.
- Aplicația este incompatibilă cu versiunea curentă a sistemului de
  operare.

## Rezolvare pas cu pas

1. Confirmă că există suficient spațiu liber pe disc pentru instalare.
2. Redescarcă instalatorul din sursa oficială, în cazul în care fișierul
   original este corupt, și verifică dimensiunea fișierului dacă este
   afișată.
3. Rulează instalatorul ca administrator.
4. Verifică Event Viewer (Windows Logs > Application) pentru o eroare
   care corespunde blocării, pentru un indiciu despre o dependență
   lipsă.
5. Instalează sau repară dependințele comune (.NET Framework, Visual C++
   Redistributables) dacă aplicația are nevoie de ele.
6. Dezinstalează complet orice versiune existentă sau mai veche a
   software-ului înainte de reinstalare.
7. Dezactivează temporar antivirusul sau protecția endpoint pentru a
   exclude o blocare, apoi reinstalează și reactivează protecția după
   aceea.
8. Confirmă că aplicația este suportată pe versiunea curentă a sistemului
   de operare.
9. Deschide aplicația și confirmă că pornește și funcționează corect
   înainte de a închide tichetul.

## Când se escaladează

- Aplicația necesită o licență sau o implementare printr-un instrument de
  gestionare software la care nu ai acces.
- Blocarea indică o problemă mai profundă la nivel de sistem de operare,
  precum eșecuri repetate la mai multe aplicații fără legătură între ele.
- Problema afectează mai mulți utilizatori simultan, sugerând un pachet
  de implementare sau o actualizare defectă.
- Rezolvarea necesită procesul propriu de suport al furnizorului
  software pentru o problemă cunoscută.

---

**Tot ai nevoie de ajutor?** [Trimite un tichet](https://helpdesk-frontend-idzb.onrender.com/?source=kb_software_install-crash){: target="_blank" rel="noopener" } și menționează acest articol. Agentul va ști deja ce pași ai încercat.
