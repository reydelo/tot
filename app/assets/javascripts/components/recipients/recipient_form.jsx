let RecipientForm = React.createClass({
  getInitialState: function() {
    return {
      first_name: '',
      last_name: '',
      relationship: '',
      address: '',
      city: '',
      state: '',
      zip_code: ''
    }
  },

  handleChange: function(e) {
    let name = e.target.name;
    let obj = {};
    obj[name] = e.target.value;
    this.setState(obj);
  },

  valid: function() {
    // TODO: Check for type of state, not just presence
    return (this.state.first_name && this.state.relationship);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    $.post(
      '/api/v1/recipients',
      {recipient: this.state},
      function(data) {
        this.props.handleNewRecipient(data);
        this.setState(this.getInitialState());
      }.bind(this),
      'JSON'
    );
  },

  render: function() {
    return(
      <form className='form-inline' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input type='text' className='form-control'
            placeholder='First Name' name='first_name'
            value={this.state.first_name} onChange={this.handleChange}>
          </input>
        </div>
        <div className='form-group'>
          <input type='text' className='form-control'
            placeholder='Last Name' name='last_name'
            value={this.state.last_name} onChange={this.handleChange}>
          </input>
        </div>
        <div className='form-group'>
          <input type='text' className='form-control'
            placeholder='Relationship' name='relationship'
            value={this.state.relationship} onChange={this.handleChange}>
          </input>
        </div>
        <div className='form-group'>
          <input type='text' className='form-control'
            placeholder='Address' name='address'
            value={this.state.address} onChange={this.handleChange}>
          </input>
        </div>
        <div className='form-group'>
          <input type='text' className='form-control'
            placeholder='City' name='city'
            value={this.state.city} onChange={this.handleChange}>
          </input>
        </div>
        <div className='form-group'>
          <input type='text' className='form-control'
            placeholder='State' name='state'
            value={this.state.state} onChange={this.handleChange}>
          </input>
        </div>
        <div className='form-group'>
          <input type='text' className='form-control'
            placeholder='Zip Code' name='zip_code'
            value={this.state.zip_code} onChange={this.handleChange}>
          </input>
        </div>
        <div className='form-group'>
          <input type='submit'
            className='btn btn-primary' disabled={!this.valid()}>
          </input>
        </div>
      </form>
    );
  }


})
