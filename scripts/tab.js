$(function() {
	var oPrev = document.getElementById('prev')
	var oNext = document.getElementById('next')
	var oChange = document.getElementById('change')
	var oWord = document.getElementById('word')
	var aDiv = oChange.getElementsByTagName('div')
	

	var aImg = ['sowork_login', 'hsskt', 'pc1', 'bjs', 'home', 'iridium', 'phone2', 'survey']
	var aImgName = ['PC端项目展示1', 'PC端项目展示2', 'PC端项目展示3', 'PC端项目展示4', '响应式项目展示1', '响应式项目展示2', '手机端项目展示1', '手机端项目展示2']
	
	oWord.innerHTML = aImgName[0]

	aDiv[0].style.transform = 'perspective(1000px) translateX(-550px) translateZ(-200px) rotateY(70deg)'
	aDiv[0].style.opacity = '0'
	aDiv[1].style.transform = 'perspective(1000px) translateX(-350px) translateZ(-100px) rotateY(70deg)'
	aDiv[2].style.transform = 'perspective(1000px)'
	aDiv[3].style.transform = 'perspective(1000px) translateX(350px) translateZ(-100px) rotateY(-70deg)'
	aDiv[4].style.transform = 'perspective(1000px) translateX(550px) translateZ(-200px) rotateY(-70deg)'
	aDiv[4].style.opacity = '0'
/*
	for(var j = 0; j < aImg.length; j++) {
		for(var i = 0; i < aDiv.length; i++) {
			aDiv[i].style.background = 'url(images/' + aImg[j] + '.png) no-repeat'
			aDiv[i].style.backgroundSize = '100% 100%'
		}
	}
*/
	
	aDiv[0].style.background = 'url(images/' + aImg[aImg.length-2] + '.png) no-repeat'
	aDiv[1].style.background = 'url(images/' + aImg[aImg.length-1] + '.png) no-repeat'
	aDiv[2].style.background = 'url(images/' + aImg[0] + '.png) no-repeat'
	aDiv[3].style.background = 'url(images/' + aImg[1] + '.png) no-repeat'
	aDiv[4].style.background = 'url(images/' + aImg[2] + '.png) no-repeat'
	
	for(var i=0;i<aDiv.length;i++){
		aDiv[i].style.backgroundSize = '100% 100%'
	}
	
	

	oPrev.onclick = function() {
		
	}


	var likTimer = null
	
	likTimer = setInterval(likNext, 2000)

	$('#prev').mousedown(function(){
		clearInterval(likTimer)
	})

	$('#prev').mouseup(function(){
		likPrev()
		likTimer = setInterval(likNext, 2000)
	})

	$('#next').mousedown(function(){
		clearInterval(likTimer)
	})

	$('#next').mouseup(function(){
		likNext()
		likTimer = setInterval(likNext, 2000)
	})
	
	$('#change').hover(function(){
		clearInterval(likTimer)
	},function(){
		likTimer = setInterval(likNext, 2000)
	})
	
	function likPrev(){
		for(var i = 0; i < aDiv.length; i++) {
			aDiv[i].style.transition = 'all 0.6s ease'
		}
		aDiv[0].style.transform = 'perspective(1000px) translateX(-350px) translateZ(-100px) rotateY(70deg)'
		aDiv[0].style.opacity = '1'
		aDiv[1].style.transform = 'perspective(1000px)'
		aDiv[2].style.transform = 'perspective(1000px) translateX(350px) translateZ(-100px) rotateY(-70deg)'
		aDiv[3].style.transform = 'perspective(1000px) translateX(550px) translateZ(-200px) rotateY(-70deg)'
		aDiv[3].style.opacity = '0'
		oChange.insertBefore(aDiv[4], aDiv[0])
		aDiv[0].style.transform = 'perspective(1000px) translateX(-550px) translateZ(-200px) rotateY(70deg)'
		aDiv[0].style.opacity = '0'
		aImg.unshift(aImg[aImg.length-1])
		aImg.splice(aImg.length-1,1)
		aImgName.unshift(aImgName[aImgName.length-1])
		aImgName.splice(aImgName.length-1,1)
		aDiv[0].style.background = 'url(images/' + aImg[aImg.length-2] + '.png) no-repeat'
		aDiv[0].style.backgroundSize = '100% 100%'
		oWord.innerHTML = aImgName[0]
	}
	
	function likNext(){
		for(var i = 0; i < aDiv.length; i++) {
			aDiv[i].style.transition = 'all 0.6s ease'
		}
		aDiv[1].style.transform = 'perspective(1000px) translateX(-550px) translateZ(-200px) rotateY(70deg)'
		aDiv[1].style.opacity = '0'
		aDiv[2].style.transform = 'perspective(1000px) translateX(-350px) translateZ(-100px) rotateY(70deg)'
		aDiv[3].style.transform = 'perspective(1000px)'
		aDiv[4].style.transform = 'perspective(1000px) translateX(350px) translateZ(-100px) rotateY(-70deg)'
		aDiv[4].style.opacity = '1'
		oChange.appendChild(aDiv[0])
		aDiv[4].style.transform = 'perspective(1000px) translateX(550px) translateZ(-200px) rotateY(-70deg)'
		aDiv[4].style.opacity = '0'
		aImg.push(aImg[0])
		aImg.splice(0,1)
		aImgName.push(aImgName[0])
		aImgName.splice(0,1)
		aDiv[4].style.background = 'url(images/' + aImg[2] + '.png) no-repeat'
		aDiv[4].style.backgroundSize = '100% 100%'
		oWord.innerHTML = aImgName[0]
	}
	
})