# Depanare conectivitate Wi-Fi și rețea

## Simptom

Utilizatorul nu se poate conecta la Wi-Fi sau este conectat dar nu are
acces la internet.

## Cauze posibile

- Wi-Fi este dezactivat pe dispozitiv.
- A fost introdusă parola Wi-Fi greșită.
- Dispozitivul este în afara razei de acțiune sau semnalul este slab.
- O problemă la router sau punctul de acces afectează mai mulți utilizatori.
- Un conflict de adresă IP sau un lease DHCP expirat.
- Un driver de adaptor de rețea învechit.

## Rezolvare pas cu pas

1. Confirmă că Wi-Fi este activat pe dispozitiv.
2. Verifică dacă alți utilizatori din apropiere sunt afectați. Dacă da,
   tratează problema ca fiind la nivel de rețea, nu la nivel de dispozitiv
   individual.
3. Cere utilizatorului să uite rețeaua și să se reconecteze, introducând
   parola cu atenție.
4. Apropie-te de router sau de punctul de acces și verifică intensitatea
   semnalului.
5. Repornește routerul sau punctul de acces, dacă ai acces la el, apoi
   așteaptă 1–2 minute înainte de a te reconecta.
6. Pe dispozitivul utilizatorului, eliberează și reînnoiește adresa IP
   (`ipconfig /release` apoi `ipconfig /renew` pe Windows).
7. Golește cache-ul DNS (`ipconfig /flushdns`) și încearcă din nou să
   navighezi.
8. Dacă problema este izolată la acest dispozitiv, actualizează driverul
   adaptorului de rețea.
9. Confirmă că utilizatorul poate naviga pe internet și accesa resursele
   interne înainte de a închide tichetul.

## Când se escaladează

- Mai mulți utilizatori din aceeași locație sunt afectați, ceea ce indică o
  problemă la router, switch sau la furnizorul de internet.
- Problema persistă după actualizarea driverului și o resetare completă a
  rețelei.
- Suspectezi o defecțiune hardware la router, switch sau punctul de acces.
- Utilizatorul are nevoie de acces la resurse exclusiv interne care necesită
  configurare din partea echipei de rețea.
