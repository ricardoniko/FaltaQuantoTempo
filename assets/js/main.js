var newYear=new Date("Jan 1, 2023 00:00:00").getTime();function counter(){var e=(new Date).getTime(),n=newYear-e,t=36e5,r=o(Math.floor(n/864e5),3),e=o(Math.floor(n%864e5/t),2),t=o(Math.floor(n%t/6e4),2),n=o(Math.floor(n%6e4/1e3),2);function o(e,n){return e.toString().padStart(n,"0")}document.getElementById("day").innerHTML=r,document.getElementById("hour").innerHTML=e,document.getElementById("minute").innerHTML=t,document.getElementById("second").innerHTML=n}setInterval(()=>{counter()},1e3);
