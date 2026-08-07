import sendMail from "../utils/sendEmail.js";

export const sendQuery = async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      status: "error",
      message: "Name, email and message are required",
    });
  }

  await sendMail(
    "kannan11071985@gmail.com",
    "Enquary Query from " + name,
    `Hello Kannan,\n\nYou have received a new query from ${name} (${email}):\n\n${message}\n\nRegards,\n${name}`,
  );

  res.status(200).json({
    status: "success",
    message: "Thank you for your query. We will get back to you soon.",
  });
};
