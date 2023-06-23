const yup = require("yup");

// Validation schema using Yup
const headSchema = yup.object().shape({
  website: yup.string().required("Website is required"),
  webPageUrl: yup.string().required("Web Page URL is required").min(2),
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  keywords: yup.string().required("Keywords are required"),
  ogTitle: yup.string().required("Open Graph Title is required"),
  ogDescription: yup.string().required("Open Graph Description is required"),
  ogImageUrl: yup.string().required("Open Graph Image URL is required"),
  twitterTitle: yup.string().required("Twitter Title is required"),
  twitterDescription: yup.string().required("Twitter Description is required"),
  twitterImage: yup.string().required("Twitter Image URL is required")
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
