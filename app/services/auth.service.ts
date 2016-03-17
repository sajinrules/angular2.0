import {Auth} from '../model/auth.model';

export var isLoggedIn: Auth = (localStorage.getItem('jwt') !==null);