var ThoughtDateForm = React.createClass({
  getInitialState() {
    return {
      recipient_id: this.props.recipientId,
      event_date: '',
      name: ''
    };
  },

  handleChange(e) {
    let name = e.target.name;
    let obj = {};
    obj[name] = e.target.value;
    this.setState(obj);
  },

  handleSubmit(e) {
    e.preventDefault();
    $.post(
      '/api/v1/thought_dates',
      {thought_date: this.state},
      function(data) {
        this.props.handleThoughtDateSubmit(data);
        this.props.handleToggle();
      }.bind(this),
      'JSON'
    );
  },

  handleCancel(e) {
    e.preventDefault();
    this.props.handleToggle();
  },

  valid() {
    // TODO: Check for type of state, not just presence
    return (this.state.recipient_id && this.state.name && this.state.event_date);
  },

  render() {
    // <%= select_tag('thought_date[name]', options_for_select( EventType.all_names ), {prompt: 'select event type', className: 'form-control'} )  %>
    return (
      <div id='thought-date-form'>
        <form className='thought-date-form m-t-15' onSubmit={this.handleSubmit}>
          <input type='hidden' name='recipient_id' value={this.state.recipientId} onChange={this.handleChange}></input>

          <div className='row'>
            <div className='col-md-5'>
              <div className='form-group'>
                <label htmlFor='name'>Event Type *</label>
                <input type='text' className='form-control' name='name' value={this.state.name} onChange={this.handleChange}></input>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='form-group'>
                <label htmlFor='event_date'>Event Date *</label>
                <input type='date' className='form-control date' name='event_date' value={this.state.event_date} onChange={this.handleChange}></input>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12 m-b-15'>
              <label className='m-0'>Pick a card</label>
              <h6>You can choose a card at a later date if you like</h6>
              <button id='view-all-cards' className='btn btn-white'>View All Cards</button>
            </div>
          </div>

          <div className='row'>
            <div className='button-group'>
              <button id='submit-thoughtdate' type='submit' className='btn btn-red'
              disabled={!this.valid()}>Submit</button>
              <button className='btn btn-grey' onClick={this.handleCancel}>Cancel</button>
            </div>
          </div>

        </form>
      </div>
    )
  }
});
