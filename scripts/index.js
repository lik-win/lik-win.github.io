$(function(){
	
	var oUl = document.getElementById('ul')
	var aA = document.getElementById('navDot').children
	var flag = true
	var now = 0
	
	window.onresize = function(){
		window.location.reload()
	}
	
	var system ={};  
    var p = navigator.platform;       
    system.win = p.indexOf("Win") == 0;  
    system.mac = p.indexOf("Mac") == 0;  
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);     
    if(system.win||system.mac||system.xll){
    }else{
        alert('请在PC端打开此网站(http://91lik.win)，体验效果更佳哦 ^_^ ')
    }
	
	// 导航栏hover效果
	var $navA = $('#navHeader').children('a')
	function navActive(){
		now2 = Math.abs(now)
		$navA.css('color', '#fff')
		$navA.eq(now2).css('color', '#ff0')
	}
	navActive()
	var $navLeft = $('#navHeader').offset().left
	$('#navHome').hover(function(){
		$(this).html('首页');
		var $left = $(this).offset().left-$navLeft
		$('#navA_hover').css('left', $left)
		$(this).click(function(){
			$('#navA_hover').css('left', $left);
			now=0
			go2()
			navActive()
		})
	},function(){
		$(this).html('HOME');
	})
	$('#navResume').hover(function(){
		$(this).html('简历');
		var $left = $(this).offset().left-$navLeft
//		alert($left)
		$('#navA_hover').css('left', $left)
		/*$('#navA_hover').stop().animate({'left': '230px'},300,function(){
			$('#navA_hover').stop().animate({'left': '130px'},150,function(){
				$('#navA_hover').stop().animate({'left': '170px'},100)
			})
		});*/
		$(this).click(function(){
			$('#navA_hover').css('left', $left);
			now=-1
			go2()
			navActive()
		})
	},function(){
//		$('#navA_hover').css('left', '47px')
		$(this).html('RESUME');
		/*$('#navA_hover').stop().animate({'left': '10px'},300,function(){
			$('#navA_hover').stop().animate({'left': '60px'},150,function(){
				$('#navA_hover').stop().animate({'left': '47px'},100)
			})
		});*/
	})
	
	$('#navSkill').hover(function(){
		$(this).html('技术控');
		var $left = $(this).offset().left-$navLeft
//		alert($left)
		$('#navA_hover').css('left', $(this).offset().left-$navLeft)
		$('#navSkill').click(function(){
			$('#navA_hover').css('left', $left);
			now=-2
			go2()
			navActive()
		})
	},function(){
		$(this).html('SKILL');
	})
	
	$('#navWorks').hover(function(){
		$(this).html('作品集');
		var $left = $(this).offset().left-$navLeft
		$('#navA_hover').css('left', $left)
		$(this).click(function(){
			$('#navA_hover').css('left', $left);
			now=-3
			go2()
			navActive()
		})
	},function(){
		$(this).html('WORKS');
	})
	
	$('#navContact').hover(function(){
		$(this).html('联系我');
		var $left = $(this).offset().left-$navLeft
		$('#navA_hover').css('left', $left)
		$(this).click(function(){
			$('#navA_hover').css('left', $left);
			now=-4
			go2()
			navActive()
		})
	},function(){
		$(this).html('CONTACT');
	})
	
	$('#navHeader').mouseout(function(){
		$('#navA_hover').css('left', $navA.eq(Math.abs(now)).offset().left-$navLeft)
	})
	

	var isFirefox = typeof document.body.style.MozUserSelect != 'undefined';
	//console.log(isFirefox);
	
	//绑定滚轮事件
	window.addEventListener(isFirefox ? 'DOMMouseScroll' : "mousewheel", fn, false);

	for(var i = 0; i < aA.length; i++) {
		aA[i].index = i
		aA[i].onclick = function() {
			//alert(this.index)
			for(var i = 0; i < aA.length; i++) {
				aA[i].className = ''
			}
			now = -this.index
			this.className = 'active'
			$('#navA_hover').css('left', $navA.eq(Math.abs(now)).offset().left-$navLeft)
			go2()
			navActive()
		}
	}

	function fn(e) {
		e = e || event;
		//调整滚轮返回值兼容
		if(e.wheelDelta){
			a = e.wheelDelta > 0 ? 1 : -1
		}else{
			a = e.detail > 0 ? -1 : 1
		}
		//a = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail % 3 == 0 ? e.detail / 3 : e.detail);
		//alert(a)
		if(flag) {
			flag = false;
			setTimeout(go, 500)
		} else {
			return false;
		}
	}

	function go() {
		now += a;
		if(now > 0) {
			now = 0;
		} else if(now < -4) {
			now = -4;
		}
		go2()
		flag = true;
	}

	function go2() {
		var index = Math.abs(now);
		$("li").eq(index).addClass("move");
		$("li").eq(index).siblings("li").removeClass("move move2");
		$("#ewm").removeClass("change6").addClass("change_6");
		if(index == 4) {
			$("li").eq(4).addClass("move2");
		}
		var top = now * 100 + "vh";
		$('#navDot a').eq(-now).siblings('a').removeClass('active')
		$('#navDot a').eq(-now).addClass('active')
		$("ul").css({
			"top": top
		})
		$('#navA_hover').css('left', $navA.eq(-now).offset().left-$navLeft)
		navActive()

		console.log(now)
	}
	
	//$('<audio/>').attr({'id':'audio', 'src':'audio/Try_Everything.mp3','loop':'loop', 'autoplay':'autoplay'}).appendTo($('body'))
	
	var onOff = true
	$('#pause').click(function(){
		onOff = !onOff
		if(onOff){
			$('#pauseImg').attr({'src': 'images/pause.png', 'title': '静音'})
			$('#audio')[0].play()
		}else{
			$('#pauseImg').attr({'src': 'images/play.png', 'title': '播放'})
			$('#audio')[0].pause()
		}
	})
	
	// 跳转love
// 	$('#toLover').click(function(){
// 		var resVal = prompt('还记得我们的生日吗 ^_^!')
// 		if(resVal == '20180124'){
//             $(this).attr('href', 'http://www.91lik.win/I_LOVE_U/');
//             window.localStorage.setItem('love_day', '20180124true');
// 		}else{
//             // alert('对不起，密码输入有误！');
// 			$(this).attr('href', 'javascript:;')
//             window.localStorage.removeItem('love_day');
// 		}
// 	})

	// 简历下载
	$('#resDown').click(function(){
		var resVal = prompt('请输入密码(若不知道密码，请联系 Lik ^_^!)')
		if(resVal == 'lik0214'){
			$(this).attr('href', 'https://lik0214.github.io/download/Web前端求职_李凯_15652831973.pdf')
		}else{
			alert('对不起，密码输入有误！')
			$(this).attr('href', 'javascript:;')
		}
	})

})
