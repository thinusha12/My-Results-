const Mark = require('../../models/Marks');

const DeleteMarks = async (req, res) => {
  try {
    const mark = await Mark.findByIdAndDelete(req.query.id);
    if (mark) {
      res.status(200).send({ data: mark, message: 'Successfully Deleted Mark.' });
    } else {
      res.status(200).send({ data: mark, message: 'No Mark Found to Delete.' });
    }
  } catch (err) {
    res.status(500).send({ error: err, message: 'Deleting Mark Failed' });
  }
}

module.exports = DeleteMarks;