// There is no reason for the name here except as an
// example of how to set something for the POST
let name = 'unknown';
let names = ['bobby','rob','tommy','tim']

const hostIndex = (req, res) => {
  res.render('index', {
    title: 'home',
    pageName: 'Home Page',
    name: name,
  })
};

const hostPage1 = (req, res) => {
  const filtered = names.filter(x => x.length <= 4);

  res.render('page1', {
    title: 'page one',
    pageName: 'Home Page',
    name: name,
    names: filtered,
  })
};

const hostPage2 = (req, res) => {
  res.render('page2')
};

const getName = (req, res) => {
  res.json(name);
};

const setName = (req, res) => {
  if (!req.body.firstname || !req.body.lastname) {
    return res.status(400).json({
      error: 'first name and last name are both required',
      id: 'setNameMissingParams',
    })
  }

  name = req.body.firstname + " " + req.body.lastname;
  return res.status(200).json(name);
};

const notFound = (req, res) => {
  res.status(404).render('notFound', { page: req.url });
};

module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  getName,
  setName,
  notFound,
};
