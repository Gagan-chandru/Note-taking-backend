import express from "express"
import {createnote,deletenote,getnote, updatenote} from "../controllers/note.controller.js"

const router = express.Router();
router.post('/create-note',createnote);
router.get('/get-note',getnote);
router.put('/update-note/:id',updatenote);
router.delete('/delete-note/:id',deletenote);

export default router