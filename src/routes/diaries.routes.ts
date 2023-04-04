import express from 'express';
import * as diaryServices from '../services/diaries.service';

const router = express.Router();

router.get('/',(_req,res)=>{
    console.log('someone pinged here!!');
    res.send(diaryServices.getEntriesWithoutSensitiveInfo()); //('Fetching all entry diaries');
});

export default router;