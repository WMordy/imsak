var getDouaa = async () => {
    let resp = await fetch("/douaa")
    let data = await resp.json()
    
   
    let douaaBody = document.getElementById("douaa-body")
    douaaBody.innerText = data.douaa
}

var getVideo = async () => {
    let resp = await fetch("/video")
    let data = await resp.json()
    let frame = document.getElementById("ytb-frame")
    frame.innerHTML = `<iframe  width="90%" height="380"  src="${data.link}"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>  `
}

var DaySet = false
var cities = ["Makkah",
    "Madinah",
    "Riyadh",
    "Buraydah",
    "Dammam",
    "Abha",
    "Tabuk",
    "Ha'il",
    "Arar",
    "Jizan",
    "Najran",
    "Al Bahah",
    "Sakakah"

]
var arMonths = [
    "كانون الثاني - يناير",
    "شباط - فبراير",
    "آذار - مارس" ,
    "نيسان - أبريل",
    "أيار - مايو",
    "حزيران - يونيو",
    "تموز - يوليو",
    "آب - أغسطس",
    "أيلول - سبتمبر",
    "تشرين الأول - أكتوبر" ,
    "تشرين الثاني - نوفمبر",
    "كانون الأول - ديسمبر"
]
var citiesAr = ["مكة المكرمة",
    "المدينة المنورة",
    "الرياض",
    "بريدة",
    "الدمام",
    "أبها",
    "تبوك",
    "حائل",
    "عرعر",
    "جازان",
    "نجران",
    "الباحة",
    "سكاكا"

]
var numDay = [
    "الأول",
    "الثاني",
    "الثالث",
    "الربع",
    "الخامس",
    "السادس" ,
    "السابع",
    "الثامن",
    "التاسع",
    "العاشر",
    "الحادي عشر",
    "الثاني عشر",
    "الثالث عشر",
    "الرابع عشر",
    "الخامس عشر",
    "السادس عشر",
    "السابع عشر",
    "الثامن عشر",
    "التاسع عشر",
    "عشرون",
    "الحادي والعشرون",
    "الثاني والعشرون",
    "الثالث و العشرون",
    "الرابع و العشرون",
    "الخامس و العشرون",
    "السادس و العشرون",
    "السابع و العشرون",
    "الثامن و العشرون",
    "التاسع و العشرون",
    "الثلاثون "
]
var getDate = async () => {
    for(var i = 0 ; i < cities.length ; i++){
        let apiMsg = await fetch("https://api.aladhan.com/v1/timingsByAddress?address="+cities[i]+"&method=8")
        let response = await apiMsg.json()
        let timing = response.data.timings
        if(!DaySet){
            let hijri = response.data.date.hijri
        let gregorian = response.data.date.gregorian
        document.getElementById("arab-day").innerText = hijri.day
        document.getElementById("arab-mounth").innerText = hijri.month.number + " " + hijri.month.ar
        document.getElementById("arab-mounth-en").innerText = hijri.month.en
        document.getElementById("arab-year").innerText = hijri.year
    
        let douaaSection = document.getElementById("douaa-title")
        douaaSection.innerText = " "+`دعاء اليوم `+ numDay[Number.parseInt(hijri.day)-1]  

        document.getElementById("en-day").innerText = gregorian.day
        document.getElementById("en-mounth").innerText = arMonths[Number.parseInt(gregorian.month.number)-1] 
        document.getElementById("en-mounth-en").innerText = gregorian.month.en
        document.getElementById("en-year").innerText = gregorian.year
            DaySet = true
       
        }
        let sallaMadina = ` <tr>
        <td>${timing.Isha}</td>
        <td>${timing.Maghrib}</td>
        <td>${timing.Asr}</td>
        <td>${timing.Dhuhr}</td>
        <td>${timing.Sunrise}</td>
        <td>${timing.Fajr}</td>
       
        <th scope="row">${citiesAr[i]}</th>
      </tr>`
      document.getElementById("salla-table").innerHTML += sallaMadina
    }
    
}

getDouaa();
getVideo();
getDate();