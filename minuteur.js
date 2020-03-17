$(document).ready(function() {
	
	$("#alert-zone").click(function(){$("#alert-zone").css("display","none");});
	/*------------------------------ MINUTEUR ------------------------------*/
	
	$("#minute").keyup(function() {
		
		let value = $("#minute").val();
		if(value >= 60)
		{
			$("#minute").val(0);
		}
	});	
	
	$("#seconde").keyup(function() {
		
		let value = $("#seconde").val();
		if(value >= 60)
		{
			$("#seconde").val(0);
		}
	});
	
	var seconds;
	$("#start_minuteur").click(function(e)
	{
		e.preventDefault();
		seconds = setInterval(Timerun,1000);
		$("#start_minuteur").css("display","none");
	});
	
	function Timerun()
	{
		let minute = $("#minute");
		let seconde= $("#seconde");
		
		if(minute.val() == 0)
		{
			if(seconde.val() == 0)
			{
				$("#start_minuteur").css("display","block");
				$("#alert-zone").css("display","flex");
				$("#alert-zone").children()[0].innerText = "Le temps est écoulé";
				clearInterval(seconds);
			}
			else
			{
				seconde.val(parseInt(seconde.val())-1);
			}
			
		}
		else
		{
			if(seconde.val() != 0)
			{
				seconde.val(parseInt(seconde.val())-1);
			}
			else
			{
				minute.val(parseInt(minute.val())-1);
				seconde.val(59);
			}			
		}
	}
	
	$("button:not(#start_minuteur)").click(function(e){
		e.preventDefault();
		
		if(e.target.id == "add_minute" || e.target.id == "del_minute")
		{
			current_value = $("#minute").val();			
		}
		else
		{
			current_value = $("#seconde").val();
		}

		if(current_value == "")
		{
			current_value = 0;
		}
		else
		{
			current_value = parseInt(current_value);
			if(e.target.id == "add_minute" || e.target.id == "add_seconde")
			{
				if(current_value < 59)
				{
					current_value += 1;
				}
				else
				{
					current_value = "0";
				}			
			}
			else
			{
				if(current_value > 0)
				{
					current_value -= 1;
				}
				else
				{
					current_value = "0";
				}			
			}
		}
		
		if(e.target.id == "add_minute" || e.target.id == "del_minute")
		{
			$("#minute").val(current_value);
		}
		else
		{
			$("#seconde").val(current_value);
		}
	});

	
	/*------------------------------ CHRONOMETRE ------------------------------*/
	var milisec;
	$("#start_chronometre").click(function(e){
		e.preventDefault();
		if(e.target.innerText != "Arrêter")
		{
			e.target.innerText = "Arrêter";
			milisec = setInterval(chrono, 10);			
		}
		else
		{
			clearInterval(milisec);
		}
	});
	
	function chrono()
	{
		minute = parseInt($("#chrono-minute").text());
		seconde = parseInt($("#chrono-seconde").text());
		ms = parseInt($("#chrono-miliSeconde").text());
		
		if(ms < 990)
		{
			ms += 10;
			if(ms < 100)
			{
				ms = "0"+ms;
			}
			$("#chrono-miliSeconde").text(ms)
		}
		else
		{
			ms = 000;
			$("#chrono-miliSeconde").text(ms);
			seconde += 1;
			if(seconde < 10)
			{
				seconde = "0"+seconde;
			}
			$("#chrono-seconde").text(seconde);
		}
		
		if(seconde > 59)
		{
			seconde = 00;
			$("#chrono-seconde").text(seconde);
			minute += 1;
			$("#chrono-minute").text(minute);
		}
	}
	
	var tour = 1;
	$("#tour").click(function(e){
		e.preventDefault();
		
		minute = $("#chrono-minute").text();
		seconde = $("#chrono-seconde").text();
		ms = $("#chrono-miliSeconde").text();
		
		row = $("<tr></tr>");
		row.append($("<td></td>").text(tour));
		row.append($("<td></td>").text(minute));
		row.append($("<td></td>").text(seconde));
		row.append($("<td></td>").text(ms));
		
		$("#chrono-table").append(row);
		tour++;
	})
});