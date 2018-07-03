import React, { Component } from 'react';
import moment from 'moment';
import './Calender.css';

class Calender extends Component {
    constructor(props) {
        super(props);
        this.width = props.width || "350px";
        this.style = props.style || {};
        this.style.width = this.width;
    }

    state = {
        dateContext: moment(), // use for navigating between month and year
        today: moment(),    // use For Current Date
        showMonthPopup: false,
        showYearPopup: false,
        selectedDay: null
    }

    weekdays = moment.weekdays();
    weekdaysShort = moment.weekdaysShort();
    months = moment.months();

    year = () => {
        return this.state.dateContext.format("Y");
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () => {
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D"); 
    }

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d');
        return firstDay;
    }

    setMonth = (month) => {
        let monthNo = this.months.indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("month", monthNo);
        this.setState({
            dateContext: dateContext
        });
    }

    nextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onNextMonth && this.props.onNextMonth();
    }

    prevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onPrevMonth && this.props.onPrevMonth();
    }

    onSelectChange = (e, data) => {
        this.setMonth(data);
        this.props.onMonthChange && this.props.onMonthChange();
    }

    SelectList = (props) => {
        let popup = props.data.map((data) => {
            return(
                <div key={data}>
                    <a href="#" onClick={(e) => {this.onSelectChange(e, data)}}>
                        {data}
                    </a>
                </div>
            );
        });
        return(
            <div className="month-popup">
                {popup}
            </div>
        );
    }

    onChangeMonth = (e, month) => {
        this.setState({
            showMonthPopup: !this.state.showMonthPopup
        });
    }

    monthNav = () => {
        return(
            <span className="label-month" onClick={(e) => {this.onChangeMonth(e, this.month())}}>
                {this.month()}
                {this.state.showMonthPopup &&
                    <this.SelectList data={this.months} />
                }
            </span>
        )
    }

    showYearEditor = () => {
        this.setState({
            showYearNav: true
        });
    }

    setYear = (year) => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({
            dateContext: dateContext
        })
    }


    onYearChange = (e) => {
        this.setYear(e.target.value);
        this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    }

    onKeyUpYear = (e) => {
        if(e.which === 13 || e.which === 27){
            this.setYear(e.target.value);
            this.setState({
                showYearNav: false
            });
        }
    }

    yearNav = () => {
        return (
            this.state.showYearNav ? 
            <input
                defaultValue={this.year()}
                className="editor-year"
                ref={(yearInput) => { this.yearInput = yearInput }}
                onKeyUp= { (e) => this.onKeyUpYear(e) }
                onChange={(e) => this.onYearChange(e)}
                type="number"
                placeholder="Year"
            />
            :
            <span className="label-year"
                onDoubleClick = {
                    (e) => {this.showYearEditor()}
                }>
                {this.year()}
            </span>
        );
    }

    onDayClick = (e, day) => {
        this.setState({
            selectedDay: day
        }, () => {
            console.log("SELECTED DAY: ", this.state.selectedDay);
        });

        this.props.onDayClick && this.props.onDayClick(e, day);
        
    }

    render() {
        // Map the Weekday i.e Sun, Mon, Tues etc as <td>
        let weekdays = this.weekdaysShort.map((day) => {
            return(
                <td key={day} className="week-day">
                    {day}
                </td>
            )
        });

        let Blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
                Blanks.push(
                    <td key={i * 100} className="emptySlot">
                        {""}
                    </td>
            );
        }

        console.log('Blanks: ', Blanks);

        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++ ) {
            let className = (d == this.currentDay() ? "day current-day" : "day");
            let selectedClass = (d === this.state.selectedDay ? " selected-day " : "");
            daysInMonth.push(
                <td key={d} className={className + selectedClass}>
                    <span onClick={(e) => {this.onDayClick(e, d)}}>{d}</span>
                </td>
            );
        }

        console.log("days: ", daysInMonth);

        const totalSlots = [...Blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if((i % 7) !== 0){
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if(i === totalSlots.length - 1){
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });

        let trElems = rows.map((d, i) => {
            return(
                <tr key={i*100}>
                    {d}
                </tr>
            );
        })

        return (
            <div className='calendar-container' style={this.style}>
                <table className="calendar">
                    <thead>
                        <tr className="calendar-header">
                            <td colSpan="5">
                                <this.monthNav />
                                {"  "}
                                <this.yearNav />
                            </td>
                            <td colSpan="2" className="nav-month">
                                <i className="prev fa fa-fw fa-chevron-left"
                                    onClick={(e) => {this.prevMonth()}}>

                                </i>
                                <i className="prev fa fa-fw fa-chevron-right"
                                    onClick={(e) => {this.nextMonth()}}>
                                    
                                </i>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {weekdays}
                        </tr>
                        {trElems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Calender;