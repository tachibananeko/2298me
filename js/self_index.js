$('#ham_btn').click(()=>{
    $('#header').toggleClass('--open');
});

$('#menu li').click(()=>{
    $('#header').removeClass('--open');
	console.log("OK")
})




AOS.init();
// Alex data_box
var data_box = $('#data_box');
var data_items = $('#data_box > li');
var runTime = 1500;//基礎值0.75秒
var minCount = 30; //最少跑次數
var windowHeight = $(window).innerHeight();
var isDataNumHandler=false;
$(window).scroll(()=>{
	if(!isDataNumHandler){
		var objTop = data_box.offset().top;
		var scroll =$(this).scrollTop()
		var objHeight =data_box.height()/4;
		if(objTop+objHeight<windowHeight + scroll){
			dataNumHandler();
			isDataNumHandler=true;
		}
	}
	
})
function dataNumHandler() {
	for (let i = 0; i < data_items.length; i++) {
		const element = data_items[i];
		console.log(element)

		runNumHandler(i,element.dataset.txt.replace(/,/gi,''));
	}
}
function runNumHandler(item,txt) {
	var sec = runTime/minCount;
	var startCount = 0;
	if(txt>minCount){
		var rangeCount = parseInt(txt / minCount);
	}else{
		var rangeCount = 1;
	}	
	var runNum = setInterval(()=>{	
		if(startCount<txt){
			startCount=startCount+rangeCount
			if(startCount>txt){
				startCount=txt;
			}
			data_items[item].dataset.txt=startCount;
		}else{
			let itemTxt = data_items[item].dataset.txt;
			if(itemTxt >999){
				itemTxt = parseInt(itemTxt).toFixed(2).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,')
				itemTxt = itemTxt.split('.')
				data_items[item].dataset.txt=itemTxt[0];
			}
			clearInterval(runNum);
		}     
    }, sec);
}
// Alex data_box
