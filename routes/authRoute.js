const express = require('express');
const {
  createUser,
  loginUserCtrl,
  getAllUser,
  getAUser,
  deleteAUser,
  updateAUser,
} = require('../controller/userCtrl');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.get('/getalluser', getAllUser);
router.get('/:id', getAUser);
router.delete('/:id', deleteAUser);
router.patch('/:id', updateAUser);
module.exports = router;
