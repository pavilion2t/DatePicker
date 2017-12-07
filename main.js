(function() {
	var datepicker = window.datepicker;
	//数据渲染函数
	var monthData;
	var $wrapper;
	datepicker.buildUi = function(year, month) {
		monthData = datepicker.getMonthData(year, month);
		var html = '		<div class="ui-datepicker-header">' +
			'<a href="#" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a>' +
			'<a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>' +
			'<span class="ui-datepicker-curr-month">' + monthData.year + '-' + monthData.month + '</span>' +
			'</div>' +
			'<div class="ui-datepicker-body">' +
			 '<table>' +
			  '<thead>' +
			    '<tr>' +
      			'<th>一</th>' +
      			'<th>二</th>' +
      			'<th>三</th>' +
      			'<th>四</th>' +
      			'<th>五</th>' +
      			'<th>六</th>' +
      			'<th>日</th>' +
			    '</tr>' +
			  '</thead>' +
			'<tbody>';

		for (var i = 0; i < monthData.length; i++) {
			var date = monthData[i];
			//i能被7整除，即每周第一天
			if (i % 7 === 0) {
				html += '<tr>';
			}

			html += '<td>' + date.showDate + '</td>'
				//余6，为每周的最后一天
			if (i % 7 === 6) {
				html += '</tr>';
			}
		 }
		 html += '</tbody>' +
			  '</table>' +
			'</div>';

		return html;
	};
	
  datepicker.init = function($dom) {
     var html = datepicker.buildUi();
     $dom.innerHTML = html;
  };

})();
