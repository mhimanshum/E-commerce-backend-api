const express = require('express');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const {
  createUser,
  loginUserCtrl,
  getAllUser,
  getAUser,
  deleteAUser,
  updateAUser,
  blockuser,
  unBlockuser,
  handleRefreshToken,
  logout,
  updatePassword,
} = require('../controller/userCtrl');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.get('/getalluser', getAllUser);
router.patch('/password', authMiddleware, updatePassword);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logout);
router.get('/:id', authMiddleware, isAdmin, getAUser);
router.delete('/:id', deleteAUser);
router.patch('/edit-user', authMiddleware, updateAUser);
router.patch('/block-user/:id', authMiddleware, isAdmin, blockuser);
router.patch('/unblock-user/:id', authMiddleware, isAdmin, unBlockuser);

module.exports = router;
