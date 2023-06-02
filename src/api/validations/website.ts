const yup = require("yup");

// Validation schema using Yup
const websiteSchema = yup.object().shape({
  name: yup.string().required("Please Provide Website Name").min(2),

  url: yup.string().required("Website Url Required"),
});

// Validation middleware
export const validateWebsite = (req, res, next) => {
  const userData = req.body; // Assuming the request body contains user data

  websiteSchema
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
