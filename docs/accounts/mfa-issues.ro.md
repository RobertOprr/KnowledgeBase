# Probleme de autentificare multi-factor (MFA)

## Simptom

Utilizatorul nu poate finaliza autentificarea deoarece solicitarea de
autentificare multi-factor (MFA) (o notificare din aplicație, un cod sau
un apel telefonic) nu funcționează.

## Cauze posibile

- Utilizatorul și-a pierdut sau schimbat telefonul și nu mai are aplicația
  de autentificare instalată.
- Aplicația de autentificare este învechită sau nu primește notificări
  push.
- Telefonul nu are conexiune la internet sau date mobile.
- Utilizatorul introduce codul unic prea încet și acesta expiră.
- Metoda MFA nu a fost înregistrată corect de la început.

## Rezolvare pas cu pas

1. Confirmă ce metodă MFA încearcă să folosească utilizatorul: notificare
   din aplicație, cod SMS sau apel telefonic.
2. Cere utilizatorului să verifice dacă telefonul are conexiune la internet
   sau date mobile.
3. Cere utilizatorului să deschidă direct aplicația de autentificare, în
   loc să aștepte o notificare push, în cazul în care notificările întârzie.
4. Dacă se folosește un cod unic, confirmă că utilizatorul îl introduce
   înainte să expire și că ceasurile telefonului și calculatorului sunt
   corecte.
5. Încearcă o metodă MFA alternativă înregistrată, dacă există, precum un
   număr de telefon de rezervă.
6. Dacă utilizatorul are un telefon nou și a pierdut accesul la aplicația
   de autentificare, verifică-i identitatea prin procesul standard de
   verificare al organizației înainte de a face orice modificare.
7. După confirmarea identității, resetează sau reînregistrează metoda MFA
   pentru utilizator.
8. Cere utilizatorului să finalizeze un test complet de autentificare cu
   noua metodă MFA înainte de a încheia sesiunea.

## Când se escaladează

- Nu poți verifica identitatea utilizatorului prin verificările standard
  (de exemplu, un angajat nou fără manager disponibil pentru confirmare).
- Utilizatorul nu are nicio metodă MFA funcțională și are nevoie de o
  suprascriere din partea unui administrator.
- O politică de acces condiționat sau de securitate blochează autentificarea
  chiar și după ce MFA reușește.
- Utilizatorul raportează solicitări MFA pe care nu le-a inițiat, ceea ce
  poate indica un cont compromis.

---

**Tot ai nevoie de ajutor?** [Trimite un tichet](https://helpdesk-frontend-idzb.onrender.com/?source=kb_accounts_mfa){: target="_blank" rel="noopener" } și menționează acest articol. Agentul va ști deja ce pași ai încercat.
