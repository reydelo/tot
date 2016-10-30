let Sidebar = React.createClass({
  upcomingEvents: function() {
    console.log(this.props.thoughtDates);

    return this.props.thoughtDates.map((thoughtDate) => {
      formattedDate = moment(thoughtDate.event_date).format("MMM DD");
      return (
        <div key={thoughtDate.id} className='thought-date-list'>
          <a href='#'>
            <div>
              <h5>{formattedDate}</h5>
              <h6>{thoughtDate.recipient.first_name + ' ' + thoughtDate.recipient.last_name + '\'s'} {thoughtDate.name}</h6>
            </div>
          </a>
          <button className='btn btn-red btn-xs'>Add Card</button>
        </div>
      );
    });
  },

  noUpcomingEvents: function() {
    return(
      <div className='no-thought-dates'>
        <p>You currently have no upcoming events.</p>
        <p>To have upcoming events, select a recipient, create a new Thought Date, and pick the perfect card!</p>
      </div>
    );
  },

  hasEvents: function() {
    let myComponent;
    if (this.props.thoughtDates.length) {
      myComponent = this.upcomingEvents();
    } else {
      myComponent = this.noUpcomingEvents();
    }
    return myComponent
  },

  render() {
    return(
      <div className="sidebar hidden-xs">
        <div id="sidebar-events">
          <h4>Upcoming Events</h4>
          {this.hasEvents()}
        </div>
      </div>
    );
  }
});
