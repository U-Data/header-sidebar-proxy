function generateRandomData(userContext, events, done) {
  // generate data with faker
  const id = Math.floor(Math.random() * 10000000);
  // add variables to virtual user's context
  userContext.vars.id = id;
  // execute
  return done();
}

module.exports = {
  generateRandomData,
};
