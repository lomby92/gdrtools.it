# GDRTools.it
Raccolta di tool creati dalla community per facilitare la vita dei master e dei giocatori di ruolo.

## Diritti d'autore
TODO

## Contribuire al progetto
TODO: spiega differenza tra issue e discussion


## Guida allo sviluppo
Questo sito è realizzato con [GatsbyJS](https://www.gatsbyjs.com/) e la UI è gestita tramite [Mantine](https://mantine.dev).

Nonostante questo sia un sito web è possibile eseguirelo in locale, cosa che facilita lo sviluppo e la possibilità di avere nuovi collaboratori che aiutino ad aggiungere nuove funzionalità.

Ogni pagina è pensata per essere responsive, ogni fix o aggiunta dovrà mantenere questa funzionalità.

### Step per lo sviluppo locale
Assicurarsi di avere [NVM](https://github.com/nvm-sh/nvm) installato
1. clonare il repository
2. eseguire `npm install` per installare le dipendenze
3. eseguire `npm run develop` per eseguire il sito localmente e restare in ascolto dei cambiamenti apportati
4. il sito è raggiungibile a http://localhost:8000/
5. inizia ad apportare modifiche e vedi i cambiamenti in automatico

### Logica delle pagine
Ogni nuovo gioco aggiunto dovrà avere una sua cartella dentro `src/pages`. Attenzione che il nome della cartella andrà a creare il path dell'URL per cui dovrà essere [Kebab-case](https://it.wikipedia.org/wiki/Kebab_case).

All'interno di ogni cartella ci deve essere per forza il file `index.js` che sarà la "home" del nostro gioco in cui ci sarà un disclamer su chi è proprietario del gioco e un link che rimanda al sito ufficiale. In aggiunta a questo, ci sarà una lista di bottoni per accedere ai singoli tool del gioco.

Ogni tool avrà una sua sottocartella all'interno della cartella del gioco, es: `src/pages/nome-gioco/nome-tool`. Così facendo ogni tool sarà uno strumento isolato dal resto degli elementi nel sito.
