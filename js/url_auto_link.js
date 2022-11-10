//텍스트 url 자동 링크
$('.history').each(function() {
	var autolink = $(this).html().replace(/(https?:\/\/[^ ;|\\*'"!,()<>]+\/?)/ig,'<a href="$1" target="_blank">$1</a>');
	$(this).html(autolink);
});