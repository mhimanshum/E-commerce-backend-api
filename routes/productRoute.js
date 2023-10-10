const express = require('express');
const {
  createProduct,
  getAProduct,
  getAllProduct,
  deleteAProduct,
  updateAProduct,
} = require('../controller/productCtrl');
const router = express.Router();
const { isAdmin, authMiddleware } = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, isAdmin, createProduct);
router.get('/:id', getAProduct);
router.get('/', getAllProduct);
router.delete('/:id', authMiddleware, isAdmin, deleteAProduct);
router.patch('/:id', authMiddleware, isAdmin, updateAProduct);
module.exports = router;
