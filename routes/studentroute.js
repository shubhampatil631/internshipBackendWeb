import UserModel from "../model/student.js";

export async function setStudent(req, res) {
  try {
    const newUser = await UserModel.create({
      stdname: req.body.stdname,
      college: req.body.college,
      course: req.body.course,
      branch: req.body.branch,
      internship: req.body.internship,
      emailid: req.body.emailid,
      subject: req.body.subject,
      msg: req.body.msg,
      mono: req.body.mono,
    });
    res.json(newUser);
    console.log(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
export async function getStudent(req, res) {
  try {
    const users = await UserModel.find({});
    res.json(users);
    console.log(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// stdname,
// college,
// course,
// branch,
// internship,
// mono,
// emailid,
// subject,
// msg,
