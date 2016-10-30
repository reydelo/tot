let Calendar = React.createClass({
  render() {
    return(
      <div id='calendar'>
        <div className='calendar-nav'>
          <h1>My Calendar</h1>
          <div className='btn-group btn-group-xs' role='group'>
            <button className='btn btn-white'>&nbsp;<i className='fa fa-angle-left'></i>&nbsp;</button>
            <button className='btn btn-white'>Today</button>
            <button className='btn btn-white'>&nbsp;<i className='fa fa-angle-right'></i>&nbsp;</button>
          </div>
          <div className='btn-group btn-group-lg' role='group'>
            <button className='btn btn-white'>Week</button>
            <button className='btn btn-white'>Month</button>
            <button className='btn btn-red'>Year</button>
          </div>
        </div>
        <CalendarGrid />
      </div>
    );
  }
});
