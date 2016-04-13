import {Auth} from '../model/auth.model';
import {Injectable} from 'angular2/core';
@Injectable()
export class authService {
	setStatus(status:boolean) {
		if(status){
			localStorage.setItem("jwt","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
			/*return this.getStatus();*/
		}else{
			localStorage.removeItem("jwt");
			/*return this.getStatus();*/
		}
	}
	getStatus() {
		if(localStorage.getItem('jwt') !==null){
			return true;
		}else{
			return false;
		}
	}

	
}