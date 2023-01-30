const Mark = require('../../models/Marks');

const UpdateMarks = async (req, res) => {
  try {
    const mark = await Mark.findByIdAndUpdate(req.query.id, req.body);
    if (mark) {
      res.status(200).send({ data: mark, message: 'Successfully Updated Mark.' });
    } else {
      res.status(200).send({ data: mark, message: 'No Mark Found to Update.' });
    }
  } catch (err) {
    res.status(500).send({ error: err, message: 'Updating Mark Failed' });
  }
}

module.exports = UpdateMarks;