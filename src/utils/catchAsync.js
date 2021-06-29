// resolves request after calling a middleware or controller
const catchAsync = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(err => next(err));
};

module.exports = catchAsync;
