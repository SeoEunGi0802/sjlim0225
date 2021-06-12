

// 화면에 출력되는 대표 li에 대한 클릭이벤트와 span태그의 text 변경 구문 Start
$('#Naver_li').click(function () {
    $('#Naver_ul').toggle(300);
    $('#Naver_li span').text($('#Naver_li span').text() != "▶" ? "▶" : "▼");
})

$('#Kakao_li').click(function () {
    $('#Kakao_ul').toggle(300);
    $('#Kakao_li span').text($('#Kakao_li span').text() != "▶" ? "▶" : "▼");
})
// 화면에 출력되는 대표 li에 대한 클릭이벤트와 span태그의 text 변경 구문 End

// 마우스 hover이벤트를 추가 : hover시 밑줄과 옆에 ">" 출력하는 구문 Start
$('#Naver_ul').children("li").hover(function () {
    $(this).css('text-decoration', 'underline');
    $(this).children('span').show();
}, function () {
    $(this).css('text-decoration', 'none');
    $(this).children('span').hide();
});

$('#Kakao_ul').children("li").hover(function () {
    $(this).css('text-decoration', 'underline');
    $(this).children('span').show();
}, function () {
    $(this).css('text-decoration', 'none');
    $(this).children('span').hide();
});
// 마우스 hover이벤트를 추가 : hover시 밑줄과 옆에 ">" 출력하는 구문 End

// 클릭 이벤트 추가 : 클릭 시 클릭한 리스트에 해당하는 코드만 출력하고 나머지 선택하지 않은 코드는 전부 숨기는 구문 Start
$('#Naver_ul').children(this).click(function (e) {
    let classname = $(this).attr('class');
    $('#code_box div').not('.' + classname).hide(300);
    $('#code_box').children('.' + classname).toggle(300);
});
// 클릭 이벤트 추가 : 클릭 시 클릭한 리스트에 해당하는 코드만 출력하고 나머지 선택하지 않은 코드는 전부 숨기는 구문 End