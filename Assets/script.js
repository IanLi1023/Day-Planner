$(document).ready(function () {

    let toDo = JSON.parse(window.localStorage.getItem('todos')) || []
    const currentHour = moment().hours()
    const currentDay = moment().format('dddd, MMMM Do')
    console.log(currentHour)


    function createDate() {
        $('#currentDay').text(currentDay)
    }
    createDate()

    function createDivs() {
        const calendar = $('#calendar')

        for (let i = 9; i <= 17; i++) {
            const timeBlock = $('<div>').addClass('row time-block').attr('id', i)
            const hourColumn = $('<div>').addClass('hour col-1').text(i + ':00')
            const textArea = $('<textarea>').addClass('description col-10')
            const btn = $('<button>').addClass('saveBtn col-1').html('<i class="fas fa-save"></i>')

            timeBlock.append(hourColumn).append(textArea).append(btn)
            calendar.append(timeBlock)
        }
    }
    createDivs()


    function createDivs() {
        const calendar = $('#calendar')

        for (let i = 9; i <= 17; i++) {
            const timeBlock = $('<div>').addClass('row time-block').attr('id', i)
            const hourColumn = $('<div>').addClass('hour col-1').text(i + ':00')
            const textArea = $('<textarea>').addClass('description col-10')
            const btn = $('<button>').addClass('saveBtn col-1').html('<i class="fas fa-save"></i>')

            timeBlock.append(hourColumn).append(textArea).append(btn)
            calendar.append(timeBlock)
        }
    }
    createDivs()

    function timeCompare() {
        $('.time-block').each(function () {
            const hour = parseInt($(this).attr('id'))
            if (currentHour > hour) {
                $(this).addClass('past')
            } else if (currentHour === hour) {
                $(this).addClass('present')
            } else {
                $(this).addClass('future')
            }
        })
    }
    timeCompare()

    $('.saveBtn').on('click', function () {
        const value = $(this).siblings('.description').val()
        const time = $(this).parent().attr('id')
        toDo.push({ time, value })
        window.localStorage.setItem('todos', JSON.stringify(toDo))
    })
    $('.description').each(function () {
        const id = $(this).parent().attr('id')

        for (let i = 0; i < toDo.length; i++) {
            const element = toDo[i];
            if (element.time === id) {
                $(this).text(element.value)
            }
        }

    })
})
