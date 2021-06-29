const catchAsync = require('../utils/catchAsync');
const sampleService = require('./sample.service');

const getList = catchAsync(async (req, res, next) => {
  const samplesList = await sampleService.getList();

  res.format({
    html: () => {
      res.render('index', { samplesList });
    },
    default: () => {
      res.json(samplesList);
    },
  });
});

module.exports = {
  getList,
}
