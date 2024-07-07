"use strict";

var getRandomJob = function getRandomJob() {
  var jobs = ['인간', '고양이'];
  var randomIndex = Math.floor(Math.random() * jobs.length);
  return jobs[randomIndex];
};
var minamTruth = function minamTruth() {
  var person = {
    name: '정호연',
    age: 27,
    job: getRandomJob()
  };
  return person;
};
var result = minamTruth();
console.log(result);