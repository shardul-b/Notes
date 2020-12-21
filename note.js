const selector=value=>document.querySelector(value);
let [b,i,u]=[0,0,0];
/*selector('.note-content').addEventListener('mouseup', event=>{
	if(window.getSelection().toString().length ){
		if(b){
			//window.getSelection().toString().style.textDecoration = 'bold';
			document.execCommand('bold');
		}
	}
});
selector('.note-content').addEventListener('keyup', event=>{
	if(window.getSelection().toString().length){
		console.log(window.getSelection().toString())
	}
});*/
selector('.background').addEventListener('input',()=>{
	document.body.style.background=selector('.background').value;
	selector('.note-content').style.background=selector('.background').value;
})
selector('.text').addEventListener('input',()=>{
	document.body.style.color=selector('.text').value;
})
selector('.underline-button').addEventListener('click', ()=>{
	u=!u
	if(u){
		document.execCommand('underline');
		selector('.underline-button').style.borderTop='0.1em solid #000';
	}else{
		document.execCommand('underline')
		selector('.underline-button').style.borderTop='0'
	}
	//selector('.note-content').classList.toggle('underline');

})
selector('.bold-button').addEventListener('click', ()=>{
	b=!b
	if(b){
		document.execCommand('bold');
		selector('.bold-button').style.borderTop='0.1em solid #000';
	}else{
		document.execCommand('bold')
		selector('.bold-button').style.borderTop='0'
	}
	//selector('.note-content').classList.toggle('bold');
})
selector('.italic-button').addEventListener('click', ()=>{
	i=!i;
	if(i){
		document.execCommand('italic');
		selector('.italic-button').style.borderTop='0.1em solid #000';
	}else{
		document.execCommand('italic')
		selector('.italic-button').style.borderTop='0'	
	}
	//selector('.note-content').classList.toggle('italic');
})
