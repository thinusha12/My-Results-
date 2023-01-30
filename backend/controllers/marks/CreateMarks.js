const Mark = require('../../models/Marks');

const CreateMarks = async (req, res) => {
  try {
    const mark = new Mark(req.body);
    await mark.save();
    res.status(201).send({ data: mark, message: 'Successfully Created Mark.' });
  } catch (err) {
    res.status(500).send({ error: err, message: 'Failed to Create Mark.' });
  }
}

module.exports = CreateMarks;