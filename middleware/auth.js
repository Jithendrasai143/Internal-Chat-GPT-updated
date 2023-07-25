// const User = require("../models/User");
// const jwt = require("jsonwebtoken");
// const ErrorResponse = require("../utils/errorResponse");

// const protect = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     token = req.headers.authorization.split(" ")[1];
//   }

//   if (!token) {
//     return next(new ErrorResponse("Not authorized to access this route", 401));
//   }

//   try {
//     const decodedToken = jwt.verify(token, "hhajhekaka");

//     const user = await User.findById(decodedToken.id);

//     if (!user) {
//       return next(new ErrorResponse("No user found", 404));
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     return next(new ErrorResponse("Not authorized to access this route", 401));
//   }
// };

// module.exports = { protect };

const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const jwtSecretKey = "akljajhejaakjk"; // Replace with your actual secret key


const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }

  try {
    const decodedToken = jwt.verify(token, jwtSecretKey); // Replace YOUR_SECRET_KEY with your actual secret key

    const user = await User.findById(decodedToken.id);

    if (!user) {
      return next(new ErrorResponse("No user found", 404));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
};

module.exports = { protect };
