import React, { Component } from 'react';
import Moment from 'moment';
import EsLocale from 'moment/locale/es'
import { extendMoment } from 'moment-range';

import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

//const esLocale = require('moment/locale/es'); //for Indonesia locale
//Moment.locale('es',EsLocale);
const moment = extendMoment(Moment);

const days = [
  {id: 1, name: 'Lunes', shortName: 'Lun', initial: 'L'},
  {id: 2, name: 'Martes', shortName: 'Mar', initial: 'M'},
  {id: 3, name: 'Miercoles', shortName: 'Mie', initial: 'M'},
  {id: 4, name: 'Jueves', shortName: 'Jue', initial: 'J'},
  {id: 5, name: 'Viernes', shortName: 'Vie', initial: 'V'},
  {id: 6, name: 'Sabado', shortName: 'Sab', initial: 'S'},
  {id: 7, name: 'Domingo', shortName: 'Dom', initial: 'D'},
]

/*  funtion to get de days into and array of weeks of the month*/
const monthWeeks = (year, month) => {
  let start = moment([year, month]).startOf('month');
  const end = moment([year, month]).endOf('month');
  const range = moment.range(start, end);
  const monthDays = Array.from(range.by('day'));
  /* weeks of the month */
  const weeks = [];
  let week = []
  /* insert month's days into weeks*/
  for( let moment of monthDays ) {
    // if the first month's day
    if( moment.date() == 1 ) {
      week = [];
      // if it's sunday
      if( moment.format('d') == 0 ) {
        for( let i = 1; i < 7; i++ ) {
          week.push( null );
        }
      } else {
        for( let i = 1; i < moment.format('d'); i++ ) {
          week.push( null );
        }
      }
      weeks.push( week );
    } else {
      // if it's monday
      if( moment.format('d') == 1 ){
        week = [];
        weeks.push( week );
      }
    }
    week.push(moment);
    // to fill rest of final month's week
    if( moment.date() == end.date() && moment.format('d') != 0) {
      for( let i = moment.format('d'); i < 7; i++ ) {
        week.push( null );
      }
    }
  }
  return weeks;
}

class Day extends Component {
  constructor( props ){
    super( props );
    this.state = {
      selected: false,
      hoverColor: "#00BCD4",
      backgroundColor: "#00ACC1",

    }
  }

  handleClick = () =>
    this.setState({ selected: true });

  render(){
    return(
      <div>
        {
          this.state.selected ?
            <FlatButton
              backgroundColor = { this.state.backgroundColor }
              hoverColor = { this.state.backgroundColor }
              disableTouchRipple = { true }
              label={this.props.date}/>
          :
            <FlatButton
              hoverColor = { this.state.hoverColor }
              onClick = { this.handleClick }
              disableTouchRipple = { true }
              label={this.props.date}/>
        }

      </div>
    );
  }
}
class Month extends Component {
  constructor( props ){
    super( props );
    this.state = {
      year: this.props.year ,
      month: this.props.month 
    }
  }

  render() {
    return(
      <div>
        {/* days of week */}
        <div style = { styles.weekHeader }>
          {
            days.map(( day ) => (
              <div style = { styles.dayheader }>
                { day.initial }
              </div>
            ))
          }
        </div>
        {/* weeks and days */}
        <div>
          {
            monthWeeks(this.state.year, this.state.month).map( ( week ) => (
              <div style = { styles.week }>
                {
                  week.map( ( momentDay ) => (
                    <div style = { styles.dayheader }>
                      { momentDay
                        ?
                        <Day date = { momentDay.date() }/>
                        : ''
                      }
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

const styles = {
  month: {
    width: 300,

  },
  weekHeader: {
    display: 'flex',
  },
  dayheader: {
    flex: 1
  },
  week: {
    display: 'flex',
  },
  day: {

  }
}

class Calendar extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      current: moment(), // month on display
      now: moment(),
    }
  }

  handleNextMonth = () => {
    this.setState( {current: this.state.current.add(1, 'months')} );
  }

  handlePrevMonth = () => {
    this.setState( {current: this.state.current.subtract(1, 'months')} );
  }

  render() {
    return(
      <div>
        <h1>Calendar</h1>
        { /* header */ }
        <div>
          <div>{ this.state.current.year()}</div>
          <div>
            {
              this.state.current.format('dddd').toUpperCase()
              + ', '
              + this.state.current.format('MMM')
              + ' '
              + this.state.current.date()
            }
          </div>
        </div>
        <Divider/>
        { /* Month control*/ }
        <div>
          <IconButton
            onClick = { this.handlePrevMonth }
          >
            <HardwareKeyboardArrowLeft />
          </IconButton>
          <label>{ this.state.current.format('MMMM') }</label>
          <IconButton
            onClick = { this.handleNextMonth }
          >
            <HardwareKeyboardArrowRight />
          </IconButton>
        </div>
        { /* Month days */ }
        {
          <Month
            year = { this.state.current.year() }
            month = { this.state.current.month() }
          />
        }
      </div>
    );
  }
}

export default Calendar;
