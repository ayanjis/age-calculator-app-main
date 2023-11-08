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

function updateTime() {
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let day = d.getDay()
    let date = d.getDate()
    let month = d.getMonth()
    let year = d.getFullYear()
    let twoDigitYear = year.toString().substr(-2)

    let newHours = h % 12
    let newDay = dayNames[day]
    let newMonth = monthNames[month]
    let newDate = `${newDay},${newMonth} ${date},${twoDigitYear}` 

    let ageYear = year - ($('Year').value)
    let ageMonth = 12 - ($('Month').value)
    let ageDay = ($('Day').value) - date
    let newAge = `${ageYear},${ageMonth},${ageDay}` 

    // console.log(day)

    if (($('Month').value) >= month && ($('Day').value) >= date) {
        ageYear = year - ($('Year').value)
        console.log(ageYear)
    } else {
        ageYear = (year - ($('Year').value)) - 1
        console.log(ageYear)
    }

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