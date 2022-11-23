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

AOS.init();