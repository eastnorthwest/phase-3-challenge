
function checkQuery(query) {
  if (!query.a || !query.b) {
    return 'Missing query parameters a and/or b';
  }
  if (parseInt(query.a) != query.a || parseInt(query.b) != query.b ) {
    return 'Please supply an integer for query parameters a and b';
  }
  return false;
}

module.exports = function(app, express)
{
  app.get('/', (request, response) => {
    response.send("Part 1: Simple Web App")
  })

  // zero
  app.get('/zero', (request, response) => {
    response.send(0)
  })

  // add
  app.get('/add', (request, response) => {

    var checkMessage = checkQuery(request.query);
    if (checkMessage) {
      response.status(500).send(checkMessage);
      return;
    }
    response.send((parseInt(request.query.a) + parseInt(request.query.b)).toString());
  });

  // subtract
  app.get('/subtract', (request, response) => {
    var checkMessage = checkQuery(request.query);
    if (checkMessage) {
      response.status(500).send(checkMessage);
      return;
    }
    response.send((parseInt(request.query.a) - parseInt(request.query.b)).toString());
  });

  // double
  app.get('/double/:number', (request, response) => {
    if ((!request.params.number) || (parseInt(request.params.number) != request.params.number)) {
      response.status(500).send("Please specify a number");
      return;
    }

    response.send((parseInt(request.params.number)*2).toString());
  });

  app.use((request, response) => {
    response.status(404).send('Path not found')
  })

}
