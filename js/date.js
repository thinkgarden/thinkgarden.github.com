
function getDatePreMonth(){
	var y = $("#nowYear").text();
	var mon = $("#nowMonth").text();
	var patt = new RegExp("\\d+");
	var year = parseInt(patt.exec(y));
	var month = parseInt(patt.exec(mon))-2;
	if(month < 0){
		month = 11;
		year = year-1;
	}
	console.log(year+":"+month);
	calendar.makeCalendar(year,month);
}

function getDateNextMonth(){
	var y = $("#nowYear").text();
	var mon = $("#nowMonth").text();
	var patt = new RegExp("\\d+");
	var year = parseInt(patt.exec(y));
	var month = parseInt(patt.exec(mon));
	if(month > 11){
		month = 0;
		year = year+1;
	}
	console.log(year+":"+month);
	calendar.makeCalendar(year,month);
}

function getDatePreYear(){
	var year = parseInt($("#preYear").text());
	calendar.makeCalendar(year,0);

}

function getDateNextYear(year,month){
	var year = parseInt($("#nextYear").text());
	calendar.makeCalendar(year,11);
}


/**
 * Calendar Script
 * Creates a calendar widget which can be used to select the date more easily than using just a text box
 * http://www.openjs.com/scripts/ui/calendar/
 *
 * Example:
 * <input type="text" name="date" id="date" />
 * <script type="text/javascript">
 * 		calendar.set("date");
 * </script>
 */
calendar = {
	month_names: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
	weekdays: ["S", "M", "T", "W", "T", "F", "S"],
	month_days: [31,28,31,30,31,30,31,31,30,31,30,31],
	//Get today's date - year, month, day and date
	today : new Date(),
	opt : {},
	data: [],

	//Functions
	wrt:function(txt) {
		this.data.push(txt);
	},
	
	/// Called when the user clicks on a date in the calendar.
	selectDate:function(year,month,day) {
		var ths = _calendar_active_instance;
		if(ths.opt['onDateSelect']) ths.opt['onDateSelect'].apply(ths, [year,month,day]); // Custom handler if the user wants it that way.
		else {
			document.getElementById(ths.opt["input"]).value = year + "-" + month + "-" + day; // Date format is :HARDCODE:
			ths.hideCalendar();
		}
	},
	/// Creates a calendar with the date given in the argument as the selected date.
	makeCalendar:function(y, mon) {
		this.cleanCalendar();
		var year = parseInt(y);
		var month= parseInt(mon);
		
		//Display the table
		var next_month = month+1;
		var next_month_year = year;
		if(next_month>=12) {
			next_month = 0;
			next_month_year++;
		}
		
		var previous_month = month-1;
		var previous_month_year = year;
		if(previous_month< 0) {
			previous_month = 11;
			previous_month_year--;
		}
		$("#nowYear").text(year+"年");
		$("#nowMonth").text(month+1+"月");
		$("#preYear").text(year-1);
		$("#nextYear").text(year+1);
		
		this.wrt("<table>");
		this.wrt("<thead><tr>");
		for(var weekday=0; weekday<7; weekday++) 
			this.wrt("<td>"+this.weekdays[weekday]+"</td>");
		this.wrt("</tr></thead>");
		this.wrt("<tbody>");
		//Get the first day of this month
		var first_day = new Date(year,month,1);
		var start_day = first_day.getDay();
		
		var d = 1;
		var flag = 0;
		//Leap year support
		if(year % 4 == 0) 
			this.month_days[1] = 29;
		else 
			this.month_days[1] = 28;
		
		var days_in_this_month = this.month_days[month];

		//Create the calender
		for(var i=0;i<=5;i++) {
			if(w >= days_in_this_month) 
				break;
			this.wrt("<tr>");
			for(var j=0;j<7;j++) {
				//If the days has overshooted the number of days in this month, stop writing
				if(d > days_in_this_month) 
					flag=0; 
				//If the first day of this month has come, start the date writing
				else if(j >= start_day && !flag) 
					flag=1;

				if(flag) {
					var w = d, mon = month+1;
					//Is it today?
					var class_name = '';
					var yea = this.today.getYear();
					if(yea < 1900) 
						yea += 1900;

					if(yea == year && this.today.getMonth() == month && this.today.getDate() == d) 
						class_name = " current-day";
					
					class_name += " " + this.weekdays[j].toLowerCase();

					this.wrt("<td class='"+class_name+"'>"+w+"</td>");
					d++;
				} else {
					this.wrt("<td class='ylzdate-empty'>&nbsp;</td>");
				}
			}
			this.wrt("</tr>");
		}
		this.wrt("</table>");
		document.getElementById("dateBox").innerHTML = this.data.join("");
		this.data = [];
	},
	
	/// Display the calendar - if a date exists in the input box, that will be selected in the calendar.
	showCalendar: function() {
		// Show the calendar with the date in the input as the selected date
		var existing_date = new Date();
		var the_year = existing_date.getYear();
		if(the_year < 1900) the_year += 1900;
		this.makeCalendar(the_year, existing_date.getMonth());
	},
	
	/// Hides the currently show calendar.
	cleanCalendar: function() {
		$("#nowYear").text("");
		$("#nowMonth").text("");
		$("#preYear").text("");
		$("#nextYear").text("");
		$("#dateBox").empty();
		
	},
	
	/// Setup a text input box to be a calendar box.
	// set: function(input_id, opt) {
	// 	var input = document.getElementById(input_id);
	// 	if(!input) return; //If the input field is not there, exit.
		
	// 	if(opt) this.opt = opt;

	// 	if(!this.opt['calendar']) this.init();
		
	// 	var ths = this;
	// 	if(this.opt['onclick']) input.onclick=this.opt['onclick'];
	// 	else {
	// 		input.onclick=function(){
	// 			ths.opt['input'] = this.id;
	// 			ths.showCalendar();
	// 		};
	// 	}
	// },
	
	
}
