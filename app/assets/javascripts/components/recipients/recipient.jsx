let Recipient = React.createClass({
  getInitialState() {
    return {
      edit: false,
      newThoughtDate: false
    };
  },

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      edit: !this.state.edit
    });
  },

  handleEdit: function(e) {
    e.preventDefault();
    let data = {
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      relationship: this.refs.relationship.value,
      address: this.refs.address.value,
      city: this.refs.city.value,
      state: this.refs.state.value,
      zip_code: this.refs.zip_code.value
    };
    $.ajax({
      method: 'PUT',
      url: 'api/v1/recipients/' + this.props.recipient.id,
      dataType: 'JSON',
      data: {
        recipient: data
      },
      success: function(data) {
        this.setState({
          edit: false
        });
        this.props.handleEditRecipient(this.props.recipient, data);
      }.bind(this)
    });
  },

  handleDelete: function(e) {
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: 'api/v1/recipients/' + this.props.recipient.id,
      dataType: 'JSON',
      success: function() {
        this.props.handleDeleteRecipient(this.props.recipient);
      }.bind(this)
    });
  },

  thoughtDateButton() {
    if (this.state.edit || this.state.newThoughtDate) {
      return null;
    } else {
      return(
        <button id='new-recipient-thoughtdate' className='btn btn-white' onClick={this.handleNewThoughtDateToggle}>Add New Thought Date</button>
      );
    }
  },

  recipientActions() {
    if (this.state.edit || this.state.newThoughtDate) {
      return null;
    } else {
      return(
        <div className='recipient-actions'>
          <span><a onClick={this.handleToggle} id='edit-recipient'>Edit Info</a></span>
          <span><a onClick={this.handleDelete} id='edit-recipient'>Delete</a></span>
        </div>

      );
    }
  },

  recipientAddress() {
    if (this.props.recipient.address) {
      return(
        <p>{this.props.recipient.address} {this.props.recipient.city}, {this.props.recipient.state}  {this.props.recipient.zip_code}</p>
      );
    } else {
      return null;
    }
  },

  handleNewThoughtDateToggle() {
    this.setState({
      newThoughtDate: !this.state.newThoughtDate
    });
  },

  handleThoughtDateSubmit() {
    this.props.handleThoughtDateSubmit();
  },

  newThoughtDate() {
    if (this.state.newThoughtDate) {
      return(
        <ThoughtDateForm handleThoughtDateSubmit={this.props.handleThoughtDateSubmit} handleToggle={this.handleNewThoughtDateToggle} recipientId={this.props.recipient.id}/>
      );
    } else {
      return null;
    }
  },

  states() { // FIXME: create reusable create/update form to remove this duplication
    return [
      {value: '', label: 'Select State'},
      {value: 'AK', label: 'AK'},
      {value: 'AL', label: 'AL'},
      {value: 'AR', label: 'AR'},
      {value: 'AZ', label: 'AZ'},
      {value: 'CA', label: 'CA'},
      {value: 'CO', label: 'CO'},
      {value: 'CT', label: 'CT'},
      {value: 'DC', label: 'DC'},
      {value: 'DE', label: 'DE'},
      {value: 'FL', label: 'FL'},
      {value: 'GA', label: 'GA'},
      {value: 'HI', label: 'HI'},
      {value: 'IA', label: 'IA'},
      {value: 'ID', label: 'ID'},
      {value: 'IL', label: 'IL'},
      {value: 'IN', label: 'IN'},
      {value: 'KS', label: 'KS'},
      {value: 'KY', label: 'KY'},
      {value: 'LA', label: 'LA'},
      {value: 'MA', label: 'MA'},
      {value: 'MD', label: 'MD'},
      {value: 'ME', label: 'ME'},
      {value: 'MI', label: 'MI'},
      {value: 'MN', label: 'MN'},
      {value: 'MO', label: 'MO'},
      {value: 'MS', label: 'MS'},
      {value: 'MT', label: 'MT'},
      {value: 'NC', label: 'NC'},
      {value: 'ND', label: 'ND'},
      {value: 'NE', label: 'NE'},
      {value: 'NH', label: 'NH'},
      {value: 'NJ', label: 'NJ'},
      {value: 'NM', label: 'NM'},
      {value: 'NV', label: 'NV'},
      {value: 'NY', label: 'NY'},
      {value: 'OH', label: 'OH'},
      {value: 'OK', label: 'OK'},
      {value: 'OR', label: 'OR'},
      {value: 'PA', label: 'PA'},
      {value: 'RI', label: 'RI'},
      {value: 'SC', label: 'SC'},
      {value: 'SD', label: 'SD'},
      {value: 'TN', label: 'TN'},
      {value: 'TX', label: 'TX'},
      {value: 'UT', label: 'UT'},
      {value: 'VA', label: 'VA'},
      {value: 'VT', label: 'VT'},
      {value: 'WA', label: 'WA'},
      {value: 'WI', label: 'WI'},
      {value: 'WV', label: 'WV'},
      {value: 'WY', label: 'WY'}
    ]
  },

  recipientBlock() {
    return(
      <div id='recipient-header'>
        <div className='inline-flex'>
          <h2>{this.props.recipient.first_name} {this.props.recipient.last_name}</h2>
          <p className='p-l-5'>({this.props.recipient.relationship})</p>
          {this.recipientActions()}
        </div>
        {this.recipientAddress()}
        {this.thoughtDateButton()}
        {this.newThoughtDate()}
        {this.recipientForm()}
      </div>
    );
  },

  recipientForm() {
    if (this.state.edit) {
      return(
        <form id="edit-recipient-form">
          <div className='row'>
            <div className='col-md-5'>
              <div className='form-group'>
                <label htmlFor='first_name'>Recipient's First Name *</label>
                <input type='text' className='form-control' ref='first_name'
                  defaultValue={this.props.recipient.first_name}></input>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='form-group'>
                <label htmlFor='last_name'>Recipient's Last Name *</label>
                <input type='text' className='form-control' ref='last_name'
                  defaultValue={this.props.recipient.last_name}></input>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-5'>
              <div className='form-group'>
                <label htmlFor='relationship'>Recipient's Relationship to You *</label>
                <input type='text' className='form-control' ref='relationship'
                  defaultValue={this.props.recipient.relationship}></input>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='form-group'>
                <label htmlFor='address'>Recipient's Address</label>
                <input type='text' className='form-control' ref='address'
                  defaultValue={this.props.recipient.address}></input>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label htmlFor='city'>City</label>
                <input type='text' className='form-control' ref='city'
                  defaultValue={this.props.recipient.city}></input>
              </div>
            </div>
            <div className='col-md-3 col-xs-6'>
              <div className='form-group'>
                <label htmlFor='state'>State</label>
                <select ref='state' defaultValue={this.props.recipient.state} className='form-control'>
                  {this.states().map(function(state) {
                    return <option key={state.value} value={state.value}>{state.label}</option>
                  }.bind(this))}
                </select>
              </div>
            </div>
            <div className='col-md-3 col-xs-6'>
              <div className='form-group'>
                <label htmlFor='zip_code'>Zip Code</label>
                <input type='text' className='form-control' ref='zip_code'
                  defaultValue={this.props.recipient.zip_code}></input>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='button-group'>
              <button id='submit-recip' onClick={this.handleEdit} className='btn btn-red'>Update</button>
              <button onClick={this.handleToggle} className='btn btn-grey'>Cancel</button>
            </div>
          </div>

        </form>
      );
    } else {
      return null;
    }
  },

  render() {
    return this.recipientBlock();
  }
})
