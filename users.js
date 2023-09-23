import express from 'express';

import { AdminUser, getAdminUser} from '../Controllers/users.js';
import { connectToMikrotik} from '../Controllers/Login.js'


const router = express.Router();

router.get ('/AdminUser', getAdminUser)
router.post('/AdminUser', AdminUser);

router.post('/login', connectToMikrotik);


export default router