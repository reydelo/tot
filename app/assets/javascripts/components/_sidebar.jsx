let Sidebar = React.createClass({
  upcomingEvents: function() {
    return this.props.thoughtDates.map((thoughtDate) => {
      // TODO: .strftime("%b %d")
      return (
        <div key={thoughtDate.id} className='thought-date-list'>
          <a href='#'>
            <div>
              <h5>{thoughtDate.event_date}</h5>
              <h6>{thoughtDate.name}</h6>
            </div>
          </a>
        </div>
      );
    });
  },

  noUpcomingEvents: function() {
    return(
      <div>
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
