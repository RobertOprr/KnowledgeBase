# Probleme de conexiune VPN

## Simptom

Utilizatorul nu se poate conecta la VPN sau se conectează cu succes dar nu
poate accesa resursele interne.

## Cauze posibile

- Credențiale VPN incorecte sau expirate.
- Software client VPN învechit.
- O problemă locală de conexiune la internet.
- Firewall sau antivirus care blochează conexiunea VPN.
- O problemă de server VPN sau de licențiere pe partea companiei.
- O configurare greșită de split tunneling sau de rutare.

## Rezolvare pas cu pas

1. Confirmă că utilizatorul are o conexiune la internet funcțională în
   afara VPN-ului.
2. Confirmă că credențialele VPN sunt corecte și nu au expirat.
3. Verifică dacă clientul VPN este la zi și actualizează-l dacă este
   necesar.
4. Repornește clientul VPN și încearcă reconectarea.
5. Dacă VPN-ul se conectează dar resursele sunt inaccesibile, confirmă că
   clientul a primit o adresă IP.
6. Fă ping către gateway-ul intern sau o resursă internă cunoscută pentru a
   testa conectivitatea.
7. Dezactivează temporar firewall-ul sau antivirusul terț pentru a exclude
   o blocare, apoi reactivează-l.
8. Golește setările din cache ale clientului VPN și reconectează-te.
9. Confirmă că utilizatorul poate accesa resursele interne înainte de a
   închide tichetul.

## Când se escaladează

- Clientul VPN se conectează, dar resursele interne rămân inaccesibile
  după verificările de bază.
- Mai mulți utilizatori raportează probleme VPN simultan, ceea ce indică o
  problemă pe partea de server.
- Autentificarea eșuează chiar și cu credențiale confirmate corecte, ceea ce
  indică o problemă de director sau de licențiere.
- Rezolvarea necesită modificări ale regulilor de firewall sau acces la
  configurarea serverului VPN pe care nu îl ai.
