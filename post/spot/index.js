const Cloudant = require('@cloudant/cloudant');
const _ = require('lodash');

const login = (params) => {
  const cloudant = new Cloudant({ url: params.cloudantUrl, plugins: 'promises' });
  return Promise.resolve(_.merge(params, { db: cloudant.db.use('spots') }));
};

const createSpot = (params) => {
  if ('spot' in params) return params.db.insert(params.spot);
  else return Promise.resolve({ error: 'No spot attached' });
}

const main = (params) => {
  return login(params)
    .then(createSpot);
};

module.exports = {
  main,
};