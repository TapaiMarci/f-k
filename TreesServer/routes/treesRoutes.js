import express from 'express';
import * as treesControls from '../controller/treesController';
const router = express.Router();

router.get('/trees',treesControls.getAllTrees);
router.get('/trees/:id',treesControls.getTreesById);
router.post('/trees',treesControls.createTrees);
router.put('/trees/:id',treesControls.putTrees);
router.delete('/trees/:id',treesControls.deleteTrees);

export default router;