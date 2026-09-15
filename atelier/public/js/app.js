import { validateMessage, replyTo } from './brain.js';
import { renderMessages } from './view.js';

const formulaire = document.querySelector('#chat-form');
const statut = document.querySelector('#status');
const versionElt = document.querySelector('#version');
const champ = document.querySelector('#message');
const liste = document.querySelector('#messages');

const historique = [];

formulaire?.addEventListener('submit', (event) => {
  event.preventDefault();

  const resultat = validateMessage(champ.value);

  if (!resultat.ok) {
    statut.textContent = resultat.error;
    champ.focus();
    return;
  }

  const value = resultat.value;

  historique.push({
    role: 'user',
    text: value
  });

  historique.push({
    role: 'assistant',
    text: replyTo(value)
  });

  renderMessages(historique, liste);

  champ.value = '';
  statut.textContent = '';
  champ.focus();
});

fetch('/version.json', { headers: { accept: 'application/json' } })
  .then((reponse) => (reponse.ok ? reponse.json() : null))
  .then((donnees) => {
    if (donnees && typeof donnees.version === 'string' && versionElt) {
      versionElt.textContent = `version ${donnees.version}`;
    }
  })
  .catch(() => {});