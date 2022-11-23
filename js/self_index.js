// 開關子選單 & 更動網址列
let subState = false;
let subMove = true;
$('#toService').click(function(){
    subState = $(this).hasClass('--active');
    $('#toProtection').removeClass('--active');
    if(subMove){ $(this).toggleClass('--active');}
})
$('#toProtection').click(function(){
    subState = $(this).hasClass('--active');
    $('#toService').removeClass('--active');
    if(subMove){ $(this).toggleClass('--active');}   
})
$('.routerHref').click(function(){
    $('#header').removeClass('--open');
    $('#toService,#toProtection').removeClass('--active');
    location = $(this).attr('data-href');
})
$('#toService li,#toProtection li').mouseenter(()=>{ subMove = false;}).mouseleave(()=>{subMove = true;})

// 離開子選單點擊其他地方
$('#toService,#toProtection').mouseenter(()=>{ subState = false;}).mouseleave(()=>{subState = true;})
$(document).click(()=>{
    if(subState){ $('#toService,#toProtection').removeClass('--active');}  
})

$(document).scroll(function(){
    let nowTop = $(this).scrollTop();
    if(nowTop > 0){
        $('#header').addClass('--fix');
    }else{
        $('#header').removeClass('--fix');
    }
})

$('#ham_btn').click(()=>{
    $('#header').toggleClass('--open');
})

$('#menu li').click(()=>{
    $('#header').removeClass('--open');
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
