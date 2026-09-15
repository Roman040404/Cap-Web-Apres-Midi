import { validateMessage, replyTo } from './brain.js';

const formulaire = document.querySelector('#chat-form');
const statut = document.querySelector('#status');
const versionElt = document.querySelector('#version');
const champ = document.querySelector('#message');
const liste = document.querySelector('#messages');

formulaire?.addEventListener('submit', (event) => {
  event.preventDefault();

  const resultat = validateMessage(champ.value);

  if (!resultat.ok) {
    statut.textContent = resultat.error;
    champ.focus();
    return;
  }

  const value = resultat.value;

  const li = document.createElement('li');
  li.textContent = `Vous : ${value}`;
  liste.append(li);

  const reponse = document.createElement('li');
  reponse.textContent = `Cap Web : ${replyTo(value)}`;
  liste.append(reponse);

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