//your JS code here. If required.

let btn=document.querySelector("#btn");

btn.addEventListener("click",()=>{
	let text=document.querySelector("#text").value.trim();
let delay = parseInt(document.querySelector("#delay").value.trim());
	helper(delay,text);
	
})
function masg(params,text) {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(text);
		},params)
	})
}
async function helper(delay,text){
	try{
		let data=await masg(delay,text);
		alert(data);
	}catch(er){
		alert("error",er);
	}
}