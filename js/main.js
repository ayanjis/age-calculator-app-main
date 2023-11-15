const $ = (id) => document.getElementById(id)
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug',  'Sept', 'Oct', 'Nov','Dec']

let html = document.documentElement
let isChecked = false
document.body.addEventListener('dblclick', () => {
    if (document.fullscreenElement !== html.requestFullscreen()) {
        html.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
})

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function updateTime() {
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let day = d.getDay()
    let date = d.getDate()
    let fmonth = d.getMonth()
    let month = fmonth + 1
    let year = d.getFullYear()
    let twoDigitYear = year.toString().substr(-2)
    let dayInBirthMonth = daysInMonth($('Month').value, year)

    let newHours = h % 12
    let newDay = dayNames[day]
    let newMonth = monthNames[month]

    let newDate = `${newDay},${newMonth} ${date},${twoDigitYear}` 

    let ageYear = Math.abs(year - ($('Year').value))
    let ageMonth = Math.abs(month - $('Month').value)
    let ageDay = Math.abs((dayInBirthMonth - $('Day').value) +  date)
    let newAge = 0

    // Calculate YEAR....

    if ($('Day').value > date && $('Month').value > month) {
        ageDay = Math.abs((date + 30) - $('Day').value)
        ageMonth = Math.abs((month  - 1) - $('Month').value)  
        newAge = `Y${ageYear},M${ageMonth},D${ageDay}`
        console.log(newAge)          
    } else if ($('Month').value > month) {
        ageMonth = (month + 12) - $('Month').value  
        ageYear = (year - 1) - $('Year').value
        newAge = `Y${ageYear},M${ageMonth},D${ageDay}`
        console.log(newAge)
    } else {
        ageDay = Math.abs(date  - $('Day').value)
        ageMonth = (month)  - $('Month').value
        ageYear = year - $('Year').value    
        newAge = `Y${ageYear},M${ageMonth},D${ageDay}`
        console.log(newAge)
    }

    // Calculate MONTH....
    // if ($('Month').value > (month + 1)) {
    //     ageMonth = (month + 12) - $('Month').value
    //     newAge = `Y${ageYear},M${ageMonth},D${ageDay}`
    //     console.log(newAge)
    // } else {
    //     ageMonth = month  - $('Month').value
    //     newAge = `Y${ageYear},M${ageMonth},D${ageDay}`
    //     console.log(newAge)
    // }

    // Calculate DAY....
    // if ($('Day').value > date) {
    //     ageDay = (date + 30) - $('Day').value
    //     newAge = `Y${ageYear},M${ageMonth},D${ageDay}`
    //     console.log(newAge)
    // } else {
    //     ageDay = date  - $('Day').value
    //     newAge = `Y${ageYear},M${ageMonth},D${ageDay}`
    //     console.log(newAge)
    // }

    // console.log(day)

    // if (($('Month').value) >= (month + 1) && ($('Day').value) >= date) {
    //     ageYear = year - ($('Year').value)
    //     newAge = `Y${ageYear},M${ageMonth},D${ageDay}`
    //     console.log(newAge)
    // } else {
    //     ageYear = (year - ($('Year').value)) - 1
    //     newAge = `Y${ageYear},M${ageMonth},D${ageDay}`
    //     console.log(newAge)
    // }

    // if ( h === 24 || h === 12 ) {
    //     newHours = `12`
    // }
    // if (newHours < 10) {
    //     newHours = `0${newHours}`
    // }
    // if (m < 10) {
    //     m = `0${m}`
    // }
    // if (s < 10) {
    //     s = `0${s}`
    // }

    // let t_str = newHours + ':' + m + ' '
    // if (newHours > 11) {
    //     t_str += 'PM'
    // } else {
    //     t_str += 'AM'
    // }

    // let newTime = `${newHours} : ${m} : ${s}`
    // console.log(newTime)

    // $('Date').textContent = newDate
    // $('Hours').textContent = newHours
    // $('Minutes').textContent = m
    // $('Seconds').textContent = s
}

setInterval(updateTime, 1000)



console.log(dinM)