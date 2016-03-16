export var auth: any = {
	isLoggedIn : function(){
		return (localStorage.getItem('jwt'));
	}
}