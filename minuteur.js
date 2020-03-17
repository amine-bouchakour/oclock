$(document).ready(function() {
	
	
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

	$("#alert-zone").click(function(){$("#alert-zone").css("display","none");});
});