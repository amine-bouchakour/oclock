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
	
// $("#add_minute").click(function(e)
	// {
		// e.preventDefault();
		// let current_value = $("#minute").val();
		
		// if(current_value == "")
		// {
			// current_value = 0;
		// }
		// else
		// {
			// current_value = parseInt($("#minute").val());
			// if(current_value < 59)
			// {
				// current_value += 1;
			// }
			// else
			// {
				// current_value = "0";
			// }			
		// }
		// $("#minute").val(current_value);
	// });
	
	// $("#add_seconde").click(function(e)
	// {
		// e.preventDefault();
		// let current_value = $("#seconde").val();
		// if(current_value == "")
		// {
			// current_value = 0;
		// }
		// else
		// {
			// current_value = parseInt($("#seconde").val());
			// if(current_value < 59)
			// {
				// current_value += 1;
			// }
			// else
			// {
				// current_value = "0";
			// }			
		// }
		// $("#seconde").val(current_value);
	// });
	
	// $("#del_minute").click(function(e)
	// {
		// e.preventDefault();
		// let current_value = $("#minute").val();
		
		// if(current_value == "")
		// {
			// current_value = 0;
		// }
		// else
		// {
			// current_value = parseInt($("#minute").val());
			// if(current_value > 0)
			// {
				// current_value -= 1;
			// }
			// else
			// {
				// current_value = "0";
			// }			
		// }
		// $("#minute").val(current_value);
	// });
	
	// $("#del_seconde").click(function(e)
	// {
		// e.preventDefault();
		// let current_value = $("#seconde").val();
		// if(current_value == "")
		// {
			// current_value = 0;
		// }
		// else
		// {
			// current_value = parseInt($("#seconde").val());
			// if(current_value > 0)
			// {
				// current_value -= 1;
			// }
			// else
			// {
				// current_value = "0";
			// }			
		// }
		// $("#seconde").val(current_value);
	// });
	// {
		// e.preventDefault();
		// let current_value = $("#seconde").val();
		// if(current_value == "")
		// {
			// current_value = 0;
		// }
		// else
		// {
			// current_value = parseInt($("#seconde").val());
			// if(current_value > 0)
			// {
				// current_value -= 1;
			// }
			// else
			// {
				// current_value = "0";
			// }			
		// }
		// $("#seconde").val(current_value);
	// });
	function generate_increment(i)
	{
		return function(e) 
		{
			e.preventDefault();
			console.log("oiu");
			if(i == 0 || i == 2)
			{
				current_value = $("#minute").val();
			}
			else if(i == 1 || i == 3)
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
				if(i == 0 || i == 1)
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
			
			if(i == 0 || i == 2)
			{
				$("#minute").val(current_value);
			}
			else
			{
				$("#seconde").val(current_value);
			}
		}
	}
	
	buttons = $("button");
	for(var i = 0; i<4;i++)
	{
		buttons[i].click(generate_increment(i));
	}
});