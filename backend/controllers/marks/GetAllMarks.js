const Mark = require('../../models/Marks');

const GetAllMarks = async (req, res) => {
  try {
    let marks = [];
    let status = false;

    if (req.query.status === 'Pass') {
      status = true;
    } else if (req.query.status === 'Pass') {
      status = false;
    }

    if (req.query.grade !== '' && req.query.status !== '') {
      marks = await Mark.find({ grade: req.query.grade, isPass: status });
    } else if (req.query.grade !== '') {
      marks = await Mark.find({ grade: req.query.grade });
    } else if (req.query.status !== '') {
      marks = await Mark.find({ isPass: status });
    } else {
      marks = await Mark.find();
    }
    res.status(200).send({ data: marks, message: 'Successfully Fetched Data' });
  } catch (err) {
    res.status(500).send({ error: err, message: 'Failed to Fetch Data.' });
  }
}

module.exports = GetAllMarks;