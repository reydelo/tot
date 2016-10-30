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
    if (this.props.edit) {
      return(
        <form id='new-recipient-form' onSubmit={this.handleSubmit}>
          <div id='edit-recipient-div'>
            <div className='row'>
              <div className='col-md-5'>
                <div className='form-group'>
                  <label htmlFor='first_name'>Recipient's First Name *</label>
                  <input type='text' className='form-control' name='first_name'
                    value={this.state.first_name} onChange={this.handleChange}></input>
                </div>
              </div>
              <div className='col-md-5'>
                <div className='form-group'>
                  <label htmlFor='last_name'>Recipient's Last Name *</label>
                  <input type='text' className='form-control' name='last_name'
                    value={this.state.last_name} onChange={this.handleChange}></input>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-5'>
                <div className='form-group'>
                  <label htmlFor='relationship'>Recipient's Relationship to You *</label>
                  <input type='text' className='form-control' name='relationship'
                    value={this.state.relationship} onChange={this.handleChange}></input>
                </div>
              </div>
              <div className='col-md-5'>
                <div className='form-group'>
                  <label htmlFor='address'>Recipient's Address</label>
                  <input type='text' className='form-control' name='address'
                    value={this.state.address} onChange={this.handleChange}></input>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-4'>
                <div className='form-group'>
                  <label htmlFor='city'>City</label>
                  <input type='text' className='form-control' name='city'
                    value={this.state.city} onChange={this.handleChange}></input>
                </div>
              </div>
              <div className='col-md-3 col-xs-6'>
                <div className='form-group'>
                  <label htmlFor='state'>State</label>
                  <input type='text' className='form-control' name='state'
                    value={this.state.state} onChange={this.handleChange}></input>
                </div>
              </div>
              <div className='col-md-3 col-xs-6'>
                <div className='form-group'>
                  <label htmlFor='zip_code'>Zip Code</label>
                  <input type='text' className='form-control' name='zip_code'
                    value={this.state.zip_code} onChange={this.handleChange}></input>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='button-group'>
                <input type='submit' id='submit-edit-recip' disabled={!this.valid()} className='btn btn-red'></input>
                <a id='cancel-edit-recip' onClick={this.props.handleNewToggle} className='btn btn-grey'>Cancel</a>
              </div>
            </div>

          </div>
        </form>
      );
    } else {
      return null;
    }
  }
});
