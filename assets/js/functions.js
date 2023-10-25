dycalendar.draw({
    target: '#dycalendar',
    type: 'month',
    dayformat: "full",
    monthformat: "full",
    highlighttargetdate: true,
    prevnextbutton: 'show'
})

let sec = document.querySelector('.sec');
let dark = document.querySelector('.dark');

dark.onclick = function(){
    sec.classList.toggle('active')
}