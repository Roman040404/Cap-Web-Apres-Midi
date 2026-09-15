# TP11 — Premier test automatique (25 min, approfondissement)

**Objectif** : `npm test` vérifie `brain.js` à votre place, en quelques millisecondes.

**Fichier** : créer `atelier/tests/brain.test.js` (modèle : `tests/server.test.js`).

## Étapes

1. En tête du fichier :

   ```js
   import { describe, it } from 'node:test';
   import assert from 'node:assert/strict';
   import { validateMessage, replyTo } from '../public/js/brain.js';
   ```

2. Écrivez au moins cinq tests :
   - une chaîne vide est refusée ;
   - `'  salut  '` est acceptée, avec `value` égal à `'salut'` ;
   - 280 caractères passent, 281 sont refusés (`'a'.repeat(281)`) ;
   - `replyTo('SALUT')` et `replyTo('salut')` donnent la même réponse ;
   - une phrase inconnue reçoit une réponse, différente de celle de « aide ».
3. Depuis `atelier` : `npm test`. Tout doit être vert.
4. Cassez exprès une règle de `brain.js` et relancez : un test doit devenir rouge. Réparez.
5. Facultatif : `npm ci` (une seule fois, une à deux minutes), puis `npm run lint`.

## Vérifier

- Au moins cinq tests de `brain.js` verts, en plus des tests du serveur.
- Vous avez vu un test rouge et compris son message.

## Indice

<details><summary>Un test complet</summary>

```js
describe('validateMessage', () => {
  it('refuse une chaîne vide', () => {
    assert.equal(validateMessage('   ').ok, false);
  });
  it('nettoie les espaces', () => {
    assert.deepEqual(validateMessage('  salut  '), { ok: true, value: 'salut' });
  });
});
```

</details>

**Dans le suivi** : le message exact du test rouge, et ce qu'il vous a appris.

Suivant : [TP12](12-bilan-sauvegarde.md)

J'ai prédit : Que nous allions créer des tests automatiques pour vérifier que les fonctions de brain.js fonctionnent correctement.
Nous avons fait : Nous avons créé tests/brain.test.js avec six tests pour vérifier la validation des messages et les réponses de Cap Web.
J'ai observé : Les 15 tests passent avec npm test, dont les six nouveaux tests de brain.js et les tests du serveur.
J'ai compris : Les tests automatiques permettent de vérifier rapidement qu'une fonction respecte les règles attendues et de détecter une erreur lorsqu'une modification casse le comportement prévu.
Je n'ai pas compris :
Message exact du test rouge : Le test concernant les 281 caractères a échoué lorsque la règle a été volontairement modifiée pour accepter 281 caractères.
Réponse à la question « Dans le suivi » du TP : Les tests automatiques permettent de vérifier rapidement le comportement de brain.js et de détecter les régressions lorsqu'une règle est modifiée.