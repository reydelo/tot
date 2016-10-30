var NewThoughtDate= React.createClass({
  handleClick() {
    let self = this;
    let name = self.refs.name.value;
    let event_date = self.refs.event_date.value;
    let recipient_id = 4; //XXX
    $.ajax({
      url: '/api/v1/thought_dates',
      type: 'POST',
      data: {
        thought_date: {
          name: name,
          event_date: event_date,
          recipient_id: recipient_id
        }
      },
      success: function(response) {
        self.props.handleSubmit(response);
      },
      error(textStatus, errorThrown) {
        console.log('it failed!', textStatus, errorThrown);
      }
    });
  },

  render() {
    return (
      <div>
        <input ref='name' placeholder='Enter the name of the thought date' />
        <input ref='event_date' type='date' placeholder='Enter the event date' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
