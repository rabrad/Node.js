'use strict';

function markAsDone(todo, request, response) {
  const id = request.params.id;
  return todo
    .setTheFlag(id, true)
    .then(todo => {
      response.status(201);
      response.json({ todo });
    })
    .catch(({ message, code }) => {
      response.status(code === 'not-found' ? 404 : 500);
      response.json({ error: message });
    });
}

module.exports = markAsDone;