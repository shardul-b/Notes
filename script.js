'use strict'
//for DOM 
const selector=value=>document.querySelector(value);
//for element creation
const creator=value=>document.createElement(value);
selector('.create-new').addEventListener('click',()=>{
	const link=creator('a');
	link.setAttribute('href', './note.html');
	link.classList.add('note-link');
	const div=creator('div');
	div.classList.add('note','note-card','flex-space');
	const span=creator('span');
	span.innerHTML="Note Title";
	span.classList.add('note-title');
	div.appendChild(span);
	const date=creator('span');
	date.classList.add('note-date');
	/*const options = { 
		day: '2-digit',
	  	month: 'short', 
	  	year: 'numeric', 
	};*/
	date.innerHTML=new Date().toLocaleDateString('en-GB');
	div.appendChild(date);
	link.appendChild(div);
	selector('.notes-container').appendChild(link);
});
selector('.mode-select').addEventListener('click',()=>{
	selector('.moon').classList.toggle('hide');
	selector('.sun').classList.toggle('hide');
})