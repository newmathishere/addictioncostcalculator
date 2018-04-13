$(document).ready(function () {
	$("#submit").on("click", function (e) {
		e.preventDefault();

		var operation = $("input[name='operation']:checked").val();
		var number1 = parseFloat($("#deaths").val());
		var number2 = parseFloat($("#emergencyroom").val());
		var number3 = parseFloat($("#naloxone").val());
		var number4 = parseFloat($("#intensivecare").val());
		var number5 = parseFloat($("#methadone").val());
		var nyc = 500000000;

		var sum = addition(number1, number2, number3, number4, number5);


		$("#sum").val(sum);

		$(".results").text(writeText(sum));


		function writeText(sum) {
			if (sum > nyc) {
				return "This cost is greater than the amount in damages New York City is seeking in its lawsuit against opioid manufacturers."
			} else if (sum < nyc) {
				return "This cost is smaller than the amount in damages New York City is seeking in its lawsuit against opioid manufacturers."
			};

		};
	});
});

function addition(deaths, emergencyroom, naloxone, intensivecare, methadone) {
	var sum = (deaths * 800000) + (emergencyroom * 2168) + (naloxone * 75) + (intensivecare * 92400) + (methadone * 4700);
	return sum;
}
