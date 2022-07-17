window.onload = function () {
	let blockTitles = document.querySelectorAll('.block__title');
	if(blockTitles){
		for(let blockTitle of blockTitles){
		blockTitle.addEventListener('click', function(){
			this.lastElementChild.classList.toggle('active');
			let content = this.nextElementSibling;
			if(content.style.maxHeight) content.style.maxHeight = null; else content.style.maxHeight = content.scrollHeight + 'px';
		});
	}
	}
}