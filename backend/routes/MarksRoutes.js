const router = require('express').Router();

const CreateMarks = require('../controllers/marks/CreateMarks');
const UpdateMarks = require('../controllers/marks/UpdateMarks');
const DeleteMarks = require('../controllers/marks/DeleteMarks');
const GetAllMarks = require('../controllers/marks/GetAllMarks');
const GetMarkByIdAndName = require('../controllers/marks/GetMarkByIdAndName');

router.post('/create', CreateMarks);
router.put('/update', UpdateMarks);
router.delete('/delete', DeleteMarks);
router.get('/get', GetAllMarks);
router.get('/find', GetMarkByIdAndName);

module.exports = router;