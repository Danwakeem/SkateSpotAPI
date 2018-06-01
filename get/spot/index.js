const Cloudant = require('@cloudant/cloudant');
const _ = require('lodash');

const login = (params) => {
  const cloudant = new Cloudant({ url: params.cloudantUrl, plugins: 'promises' });
  return Promise.resolve(_.merge(params, { db: cloudant.db.use('spots') }));
};

const fetchGeoLocations = (params) => {
  // const dbParams = { lat: 42.34690635, lon: -71.13687953, radius: 25000, include_docs: true };
  const hasParams = ('lat' in params) && ('long' in params) && ('radius' in params);
  if (hasParams) {
    const dbParams = { lat: params.lat, lon: params.lon, radius: params.radius, include_docs: true };
    return params.db.geo('geo', 'lookup', dbParams);
  } else return Promise.resolve({ error: 'Missing_Params' });
};

const main = (params) => {
  return login(params)
    .then(fetchGeoLocations);
};

module.exports = {
  main,
};
