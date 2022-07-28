AOS.init();

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 600) {
          $(".navbar").addClass('navbar-glass');
        }
        else{
            $(".navbar").removeClass('navbar-glass');  	
      }
    })
})

const countdown = () => {
    
    fetch('https://date-time-api.herokuapp.com/api/getTime').then(function (response) {

	    return response.json();

    }).then(function (data) {
        // const countDate = new Date("April 2, 2022 6:00:00").getTime();
        const countDate = new Date("April 1, 2022 18:00:00").getTime();
        var d = new Date(data);
        var est = d.toLocaleString('en-US', { timeZone: 'America/New_York' });
        const finalTime = new Date(est).getTime();
        const gap = countDate - finalTime;
        // const gap = countDate - d;

        const now = new Date().getTime();

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);
    
        document.querySelector('.day').innerText = textDay;
        document.querySelector('.hour').innerText = textHour;
        document.querySelector('.minute').innerText = textMinute;
        document.querySelector('.second').innerText = textSecond;

        // document.getElementById('dateNow').innerText = est+" "+"EST";
    
        if(gap < 1000){
            document.getElementById("homepageLink").href="mint.html";
            document.getElementById("homepageLink").target="_blank";
            document.getElementById("homepageButton").src = "./images/mint-btn-1.png";
            document.querySelector('.home-countdown-container').remove();
        }else{
            document.getElementById("homepageLink").href="https://twitter.com/babytrumpworld";
            document.getElementById("homepageLink").target="_blank";
            document.getElementById("homepageButton").src = "./images/twitter-btn.png";
        }

    }).catch(function (err) {
    	// There was an error
    	console.log('Something went wrong.', err);
    });
}

setInterval(countdown, 1000);