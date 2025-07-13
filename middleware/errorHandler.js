const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        success : false, 
        title: "Validation Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        success : false,
        title: "Unauthorized Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        success : false,
        title: "Forbidden Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.NOT_FOUND:
      res.json({
        success : false,
        title: "Not Found Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        success : false,
        title: "Server Error1",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      res.status(500).json({
        success : false,
        title: "Server Error2",
        message: err.message,
        stackTrace: err.stack,
      });
      //console.log("No Error, All Good");
      break;
  }
  res.json({ message: err.message });
};

module.exports = errorHandler;
