const yup = require("yup");

// Validation schema using Yup
const headSchema = yup.object().shape({
  webPageUrl: yup.string().required().min(2),

  headTag: yup.string().required("Head Tag Required"),
});



// Validation middleware
export const validateHead = (req, res, next) => {
  const userData = req.body; // Assuming the request body contains user data

  headSchema
    .validate(userData)
    .then(() => {
      // Validation successful, proceed to the next middleware or route handler
      next();
    })
    .catch((error) => {
      // Validation failed, respond with error details
      res.status(400).json({ error: error.message });
    });
};
