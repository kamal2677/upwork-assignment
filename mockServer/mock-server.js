const express = require('express');
const app = express();
const cors = require('cors');
const studentsData = require('./Data/studentsData.json');
const schoolsData = require('./Data/schoolsData.json');
const legalGuardianData = require('./Data/legalGuardianData.json');
// allow cors from local host
app.use(cors());

app.get('/students/options', (request, response) => response.send(studentsData.map(x => ({ id: x.id, name: x.name }))));
app.get('/students/:id', (request, response) => {
  const student = studentsData.find(x => x.id === parseInt(request.params.id));
  response.send(student);
});
app.get('/schools/:id', (request, response) => {
  const schools = schoolsData.find(x => x.id === parseInt(request.params.id));
  response.send(schools);
});
app.get('/guardians/:id', (request, response) => {
  const guardian = legalGuardianData.find(x => x.id === parseInt(request.params.id));
  response.send(guardian);
});

app.listen(3001, () => {
  console.log('Listen on the port 3001...');
});
