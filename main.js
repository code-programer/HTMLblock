class HTMLblock{
	constructor(tag, fun){
		this.tag = tag;
		this.fun = fun;
	}
	onload(hide = true){
		for(var a in document.getElementsByTagName(this.tag)){
			if(document.getElementsByTagName(this.tag)[a].innerHTML === undefined){
				console.log(undefined)
			}
			else{
				eval(this.fun + "('" + document.getElementsByTagName(this.tag)[a].innerHTML + "')")
			}
		}
		if(hide === undefined || hide == true){
			for(a in document.getElementsByTagName(this.tag)){
				document.getElementsByTagName(this.tag)[a].style.display = "none";
			}
		}
	}
}
