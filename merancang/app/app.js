$('.navbar-nav a').click(function(){
	$('.navbar-toggle').click()
})

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: [
        	"Linguistik", 
        	"Logis-Matematis", 
        	"Spasial", 
        	"Kinestetik-Jasmani", 
        	"Musikal", 
        	"Antarpribadi",
        	"Intrapribadi",
        	"Naturalis"
        ],
        datasets: [{
            label: 'Multiple Intelligence',
            data: [12, 19, 3, 5, 2, 3, 1, 9],
            backgroundColor: [
                'rgba(244, 67, 54, 0.2)',
                'rgba(255, 152, 0, 0.2)',
                'rgba(255, 235, 59, 0.2)',
                'rgba(76, 175, 80, 0.2)',
                'rgba(33, 150, 243, 0.2)',
                'rgba(63, 81, 181, 0.2)',
                'rgba(156, 39, 176, 0.2)',
                'rgba(121, 85, 72, 0.2)'
            ],
            borderColor: [
                'rgba(244, 67, 54, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(255, 235, 59, 1)',
                'rgba(76, 175, 80, 1)',
                'rgba(33, 150, 243, 1)',
                'rgba(63, 81, 181, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(121, 85, 72, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});