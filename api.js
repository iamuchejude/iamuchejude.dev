'use strict';

const express = require('express');
const app = express();
app.use(express.json());

const CANDIDATES = [];

const getCandidatesWithTheirSkillsCount = (candidates, skills) =>  {
  const candidateWithTheirSkillsCount = {};

  for (const candidate of candidates) {
    let skillsCount = 0;

    for (const skill of skills) {
      if (candidate.skills.includes(skill)) {
        skillsCount++;
      }
    }

    candidateWithTheirSkillsCount[candidate.id] = skillsCount;
  }
  
  return candidateWithTheirSkillsCount;
}

const getMostSkilledCandidates = candidates => {
  const maxSkillCount = Math.max.apply(null, Object.values(candidates));
  const mostSkilledCandidates = [];

  for (const [id, skillCount] of Object.entries(candidates)) {
    if (skillCount === maxSkillCount) {
      mostSkilledCandidates.push(id);
    }
  }

  return mostSkilledCandidates;
};

app.post('/candidates', function(request, response) {
  CANDIDATES.push(request.body);
  return response.status(201);
});

app.get('/candidates/search', function(request, response) {
  if (CANDIDATES.length < 1) return response.status(404);

  if (!request.query.skills) return response.status(400);

  // javascript,php => ['javascript','php']
  const skills = request.query.skills.split(',');

  // returns [] or [{}...] if candidate.skills contains at-least 1 request.skills[]
  const candidates = CANDIDATES.filter(candidate => {
    return skills.some(skill => candidate.skills.includes(skill));
  });

  if (candidates.length < 1) return response.status(404);

  const candidateWithTheirSkillsCount = getCandidatesWithTheirSkillsCount(candidates, skills);
  const mostSkilledCandidates = getMostSkilledCandidates(candidateWithTheirSkillsCount);

  const bestSkilled = bestFits.length === 1
    ? candidates.find(candidate => candidate.id === mostSkilledCandidates[0])
    : mostSkilledCandidates[Math.trunc(Math.random() * mostSkilledCandidates.length)];

  return response.status(200).json(bestSkilled);
});

app.listen(process.env.HTTP_PORT || 3000);
