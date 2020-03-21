<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Occlock</title>
		<link rel="stylesheet" href="oclockbis.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<!-- <script src="horloge.js" refer></script> -->
		<!-- <script src="reveil.js" refer></script> -->
		<script src="minuteur.js" defer></script>
		<script src="reveil.js" defer></script>
	</head>

	<body>
  		<button id="reveil">Réveil/Horloge</button>
		
	
	
	
		<form name="minuteur" action="" id="minuteur-form">
			<h1 class="project-title">Minuteur</h1>
			<input type="text" id="minute" maxlength="2" value="0"/> <p>:</p> <input type="text" id="seconde" maxlength="2" value="0"/>
			<button id="add_minute">&uarr;</button> <button id="add_seconde">&uarr;</button>
			<button id="del_minute">&darr;</button> <button id="del_seconde">&darr;</button>
			<button id="start_minuteur">Start</button>
		</form>
		
		<form name="chronometre" action="" id="chronometre-form">
			<h1>Chronometre</h1>
			<span>
				<p id="chrono-minute">00</p> : <p id="chrono-seconde">00</p> : <p id="chrono-miliSeconde">00</p>
			</span>
			<span id="btn-zone">
				<button id="start_chronometre">Marche</button>
				<button id="tour">Tour</button>
			</span>
			
			
			<div id="chrono-table-wrapper">
				<table id="chrono-table">
					<tr>
						<th>Tour</th>
						<th>Minute</th>
						<th>Seconde</th>
						<th>MiliSeconde</th>
					</tr>
				</table>
			</div>
			<button id="reset_chronometre">Reset</button>
		</form>
			

		<div id="alert-zone">
			<p></p>
		</div>
	</body>
</html>