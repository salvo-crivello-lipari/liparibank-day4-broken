# LipariBank Dashboard - Day 4 - Fix Mission

Benvenuto al quarto sprint! Questo progetto si concentra su **Context API, Suspense e architettura dello stato**. I 3 bug coprono ottimizzazione del context, lazy loading e risoluzione dei moduli.

---

## Come avviare

```bash
npm install
npm run dev
```

L'applicazione sarà disponibile su [http://localhost:5173](http://localhost:5173).

---

## Le tue 3 missioni

### Missione 1 — Re-render inutili in TransactionList

Apri la console del browser e clicca il pulsante **Dark / Light** nell'header. Osserva i log: vedrai `TransactionList rendered` ogni volta che cambia il tema, anche se `TransactionList` non usa assolutamente il tema.

Analizza come è strutturato il Context e perché ogni cambio di stato nel Provider causa il re-render di **tutti** i consumer, anche quelli che non dipendono da quella parte dello stato. Applica l'ottimizzazione corretta.

### Missione 2 — Crash navigando verso Investimenti

Avvia l'app e clicca su **Investimenti** nella sidebar. L'applicazione crasha con un errore simile a:

```
The default export of a module used with React.lazy must be a React component.
```

Il `GlobalErrorBoundary` intercetta l'errore e lo mostra a schermo. Clicca "Riprova" per tornare alla home, poi trova e correggi la causa nel file della pagina Investimenti.

### Missione 3 — Comportamento anomalo del pulsante Esci (o errore su Linux/Mac)

Su **Linux o Mac**: l'applicazione potrebbe non avviarsi con un errore `Cannot find module '../../core/auth/authContext'`.

Su **Windows**: il pulsante **Esci** nell'header non funziona come atteso, o in React DevTools vedi che `useAuth` restituisce valori inattesi (come se l'utente non fosse autenticato nonostante il Provider sia presente). Apri il Network tab e la console per ulteriori indizi.

Il problema riguarda come viene importato un modulo in `Header.tsx`. Confronta attentamente il percorso di import con il nome reale del file nel filesystem.

---

## Strumenti consigliati

- **React DevTools — Components** — per ispezionare l'albero dei Provider e i valori del context
- **React DevTools — Profiler** — per visualizzare quali componenti si ri-renderizzano e perché
- **Browser DevTools — Console** — per osservare i log di re-render
- **Browser DevTools — Network** — per debug del lazy loading
- **ESLint** — `npm run lint` per avvisi sui moduli non trovati

---

## Bonus Mission — Feature da Implementare (opzionale, ~1 ora)

Una volta risolti i 3 bug, crea un sistema di notifiche toast con un context dedicato.

### Requisiti

- Crea un `NotificationContext` separato con `NotificationProvider`
- Il context espone `showNotification(message, type)` e `dismissNotification(id)`
- Le notifiche si auto-rimuovono dopo **4 secondi** tramite `setTimeout` in `useEffect`
- Il componente `NotificationList` mostra al massimo **3 toast simultanei** in basso a destra dello schermo

### Criteri di accettazione

- [ ] `showNotification` aggiunge una notifica visibile nell'UI
- [ ] Le notifiche scompaiono automaticamente dopo 4 secondi
- [ ] `dismissNotification` rimuove immediatamente la notifica cliccata
- [ ] Sono visibili al massimo 3 toast simultanei (le più vecchie vengono soppresse)
- [ ] Il `NotificationContext` è separato dall'`AppContext` principale
- [ ] Nessun bug risolto in precedenza viene reintrodotto
