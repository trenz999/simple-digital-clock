let clock = () => {
    let date = new Date()
    let hrs = date.getHours();
    let mins = date.getMinutes()
    let sec = date.getSeconds()
   

    let duration = 'AM'
    if(hrs == 0) {
         hrs = 12;
    }

   else if (hrs >= 12) {
        hrs = hrs - 12;
        duration = "PM";
    }
    hrs = hrs < '0' ? + hrs: hrs;
    mins = mins < '0' ? + mins: mins;
    sec = sec < '0' ? + sec : sec;

  let time = `${hrs}:${mins}:${sec}:${duration}`;
    document.getElementById('clock').innerText = time;
    setTimeout(clock, 1000);


}
clock ();