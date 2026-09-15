# TP09 — Ranger en modules (30 min)

**Objectif** : même comportement, mais trois fichiers aux rôles clairs, et une conversation rangée dans un tableau.

**Fichiers** : créer `atelier/public/js/view.js` ; modifier `app.js` et `server/app.js`.

## Étapes

1. Dans `app.js`, créez `const historique = [];`. Chaque message y sera un objet `{ role: 'user', text: '…' }` ou `{ role: 'assistant', text: '…' }`.
2. Créez `view.js` avec `export function renderMessages(messages, container)` : un `li` par message (« Vous : » ou « Cap Web : », toujours `textContent`), puis `container.replaceChildren(...lignes)`.
3. Ajoutez `view.js` à la liste blanche du serveur, comme `brain.js` (une ligne au-dessus de celle de `app.js`, dans `FICHIERS` et `TYPES`), et redémarrez.
4. Dans `app.js` : importez `renderMessages`. Après validation, ajoutez les deux messages à `historique`, puis appelez `renderMessages(historique, liste)`. Supprimez les `createElement` de `app.js`.

## Vérifier

- Le comportement est identique au TP08.
- `app.js` ne contient plus de `createElement`, `brain.js` pas de `document`, `view.js` aucune règle de réponse.

## Indice

<details><summary>La forme de renderMessages</summary>

```js
export function renderMessages(messages, container) {
  const lignes = messages.map((msg) => {
    const li = document.createElement('li');
    // étiquette selon msg.role, puis textContent
    return li;
  });
  container.replaceChildren(...lignes);
}
```

</details>

**Défi** : messages de l'utilisateur à droite, Cap Web à gauche (`li.dataset.role` et CSS), vérifié à 360 px.

**Dans le suivi** : le rôle de chaque fichier, en une phrase chacun.

Suivant : [TP10](10-memoire.md)

J'ai prédit : Que nous allions séparer l'affichage des messages dans un fichier dédié et conserver la conversation dans un tableau.
Nous avons fait : Nous avons créé view.js pour gérer l'affichage des messages, modifié app.js pour gérer l'historique et modifié le serveur pour autoriser view.js.
J'ai observé : Le comportement de Cap Web reste identique au TP08, mais les messages sont maintenant stockés dans un tableau avec leur rôle.
J'ai compris : brain.js contient les règles de réponse, view.js s'occupe de l'affichage et app.js fait le lien entre les deux.
Je n'ai pas compris :
Réponse à la question « Dans le suivi » du TP : brain.js gère la logique de réponse, view.js gère l'affichage des messages et app.js gère les événements et l'historique de la conversation.