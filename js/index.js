// 페이지 내에서  'Cntr + s'(저장) 키 방지 Start
$(document).bind('keydown', function (e) {
    if (e.ctrlKey && (e.which == 83)) {
        e.preventDefault();
        return false;
    }
});
// 페이지 내에서  'Cntr + s'(저장) 키 방지 End