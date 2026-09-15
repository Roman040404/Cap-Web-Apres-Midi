# TP07 — Afficher le message (35 min)

**Objectif** : le message envoyé apparaît dans la liste.

**Fichier** : `atelier/public/js/app.js` (le HTML ne change pas).

## Étapes

1. Récupérez le champ et la liste : `document.querySelector('#message')` et `document.querySelector('#messages')`.
2. Dans l'écouteur `submit`, lisez le texte : `champ.value.trim()`.
3. Texte vide : écrivez « Le message ne doit pas être vide » dans le statut, remettez le focus (`champ.focus()`) et arrêtez (`return`).
4. Sinon : créez un `li` (`document.createElement('li')`), mettez-y « Vous : » suivi du texte avec `textContent`, ajoutez-le à la liste (`liste.append(li)`).
5. Videz le champ et le statut, remettez le focus dans le champ.

## Vérifier

- Un message apparaît dans la liste et le champ se vide.
- Un message fait seulement d'espaces est refusé.
- `<b>gras</b>` s'affiche tel quel, avec les chevrons, **pas en gras**.
- Aucune erreur dans la console (F12), à part le 404 habituel sur `favicon.ico`.

## Indices

<details><summary>« Cannot read properties of null »</summary>Un `querySelector` n'a rien trouvé : comparez l'identifiant avec `index.html`, caractère par caractère.</details>
<details><summary>La forme de l'écouteur</summary>

```js
formulaire.addEventListener('submit', (event) => {
  event.preventDefault();
  const texte = champ.value.trim();
  if (texte === '') {
    // statut, focus, return
  }
  // créer le li, l'ajouter, vider le champ
});
```

</details>

**Défi** : afficher « 12 / 280 » dans le statut pendant la frappe (événement `input` du champ).

**Dans le suivi** : pourquoi `textContent` et pas `innerHTML` ? Qu'aurait fait `<b>gras</b>` avec `innerHTML` ?

Suivant : [TP08](08-cerveau-regles.md)

dans le formulaire et l'afficher dans la liste.
Nous avons fait : Nous avons récupéré le champ du formulaire et la liste des messages, vérifié que le message n'est pas vide, puis créé un élément li pour afficher le message.
J'ai observé : Le message apparaît dans la liste après avoir cliqué sur « Envoyer » et le champ est ensuite vidé.
J'ai compris : textContent permet d'afficher le texte saisi sans interpréter du HTML. Par exemple, <b>gras</b> reste affiché comme du texte.
Je n'ai pas compris : Je n'ai pas encore totalement compris toutes les différences entre les méthodes de manipulation du DOM.
Réponse à la question « Dans le suivi » du TP : Il faut utiliser textContent plutôt que innerHTML pour afficher un message utilisateur afin d'éviter que du HTML saisi par l'utilisateur soit interprété.