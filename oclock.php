<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Occlock</title>
		<link rel="stylesheet" href="oclock.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<!-- <script src="horloge.js" refer></script> -->
		<!-- <script src="reveil.js" refer></script> -->
		<script src="minuteur.js" defer></script>
	</head>

	<body>
		
		<form name="Clock">
			<p><input type="text" name="Horloge" size="8" style="font-family: Courier New"></p>
		</form>
		
	
	
		<form name="minuteur" action="" method="post" id="minuteur-form">
			<h1 class="project-title">Minuteur</h1>
			<input type="text" id="minute" maxlength="2" value="0"/> <p>:</p> <input type="text" id="seconde" maxlength="2" value="0"/>
			<button id="add_minute">&uarr;</button> <button id="add_seconde">&uarr;</button>
			<button id="del_minute">&darr;</button> <button id="del_seconde">&darr;</button>
			<button id="start_minuteur">Start</button>
		</form>


		<div id="alert-zone">
			<p></p>
		</div>
	</body>
</html>