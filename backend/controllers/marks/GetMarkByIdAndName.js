const Mark = require('../../models/Marks');

const GetMarkByIdAndName = async (req, res) => {
  try {
    const marks = await Mark.find({ studentId: req.query.studentId, name: req.query.name });
    if (marks.length === 0) {
      res.status(200).send({ data: marks, message: 'No Student Found for Entered Details.' });
    } else {
      res.status(200).send({ data: marks, message: 'Successfully Fetched Data' });
    }
  } catch (err) {
    res.status(500).send({ error: err, message: 'Failed to Fetch Data.' });
  }
}

module.exports = GetMarkByIdAndName;