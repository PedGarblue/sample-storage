// resolves request after calling a middleware or
// controller to avoid crash the app if something happens
const catchAsync = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(err => next(err));
};

module.exports = catchAsync;
