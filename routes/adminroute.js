import UserModel2 from "../model/admin.js";

export async function getAdmin(req, res) {
  UserModel2.find({})
    .then((users) => {
      res.json(users);
      console.log(users);
    })
    .catch((err) => console.log(err));
}
export async function userlogin(req, res) {
  const { Username, Password } = req.body;

  try {
    const user = await UserModel2.findOne({
      username: Username,
      password: Password,
    });

    if (user) {
      // If user exists, send success message and redirect to afterlogin.html
      res.json({ message: "success" });
    } else {
      // If user doesn't exist, send error message
      res
        .status(404)
        .json({ message: "Invalid username or password. Please try again." });
    }
  } catch (err) {
    // If an error occurs during the query, send internal server error message
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}
