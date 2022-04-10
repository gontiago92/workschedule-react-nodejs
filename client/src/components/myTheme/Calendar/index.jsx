import React, { useState, useEffect, useContext } from 'react'
import './Calendar.sass'
import moment from 'moment'
import 'moment/locale/fr'
import SearchBarWithMonth from '../SearchBarWithMonth'

const Calendar = (props) => {

    const [calendar, setCalendar] = useState([])
    const [events, setEvents] = useState([])
    const mom = moment()
    const [month, setMonth] = useState(moment())

    const startDay = month.clone().startOf('month').startOf('week')
    const endDay = month.clone().endOf('month').endOf('week')
    const dayGlobal = startDay.clone().subtract(1, 'day')



    const nextMonth = (e) => {
        e.preventDefault()
        const monthAfter = month.clone().add(1, 'month')
        setMonth(monthAfter)
    }

    const prevMonth = (e) => {
        e.preventDefault()
        const monthBefore = month.clone().subtract(1, 'month')
        setMonth(monthBefore)
    }

    const getDays = () => {

        const calendar = []

        while(dayGlobal.isBefore(endDay, 'day')) {
            calendar.push(
                Array(7)
                    .fill(0)
                    .map(() => dayGlobal.add(1, 'day').clone())
            )
        }

        setCalendar(calendar)

    }
    
    const getEvents = async () => {

        const response = await fetch('http://127.0.0.1:8080', {
            headers: { 'Content-Type': 'application/json' }
        });

        const results = await response.json();

        setEvents(results.events)

    }

    useEffect(() => {
        getDays()

        getEvents()

        
    }, [month])


    return (

            <div id='calendar'>
                <nav className='month-display'>     
                    <button className='prev' onClick={prevMonth}>
                        <i className="fa fa-chevron-left"></i>
                    </button>

                    <h2>{month.format('MMMM')} {month.format('YYYY')}</h2>

                    <button className='next' onClick={nextMonth}>
                        <i className="fa fa-chevron-right"></i>
                    </button>
                </nav>
                <SearchBarWithMonth nextMonth={nextMonth} prevMonth={prevMonth} month={month} />
                <table className={`weeks-${calendar.length}` }>
                    <tbody>
                    {
                        calendar.map((week,index) => (
                            
                            <tr key={index}>

                                
                                {
                                    week.map((day, i) => (
                                        <td key={i} className={day.format('MM') != month.format('MM') ? 'othermonth' : ''}>

                                            {index === 0 ? <div className='weekday'>{day.format('dddd')}</div> : ''}

                                            <div className={mom.isSame(day, 'day') ? 'day today' : 'day'}>
                                                <span>{day.format('DD')}</span>
                                                {
                                                    events.map((event, idx) => {
                                                        if(moment(event.starting_at).isSame(day, 'day')) {
                                                            return (
                                                                <div key={idx} className='event'>
                                                                <small>{event.title}</small>
                                                                <div>
                                                                    <small>{moment(event.starting_at).format('HH:mm')} - {moment(event.ending_at).format('HH:mm')}</small>
                                                                </div>
                                                            </div>
                                                            )
                                                        }
                                                    })
                                                }

                                                
                                            </div>
                                        </td>
                                    ))
                                }
                            </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
    )

}


export default Calendar