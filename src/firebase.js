import FirebaseApp from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import config from './config';

FirebaseApp.initializeApp(config.firebase);

export const db = FirebaseApp.database();
export const auth = FirebaseApp.auth();
