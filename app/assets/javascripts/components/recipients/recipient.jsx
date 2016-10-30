let Recipient = React.createClass({
  getInitialState: function() {
    return {
      edit: false
    };
  },

  handleToggle: function(e) {
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
        this.props.handleDeleteRecipient(this.props.recipient)
      }.bind(this)
    });
  },

  recipientRow: function() {
    return(
      <div id='recipient-header'>
        <div className='inline-flex'>
          <h2>{this.props.recipient.first_name} {this.props.recipient.last_name}</h2>
          <p className='p-l-5'>({this.props.recipient.relationship})</p>
          <a href='#' onClick={this.handleToggle} id='edit-recipient'>Edit Info</a>
          <a href='#' onClick={this.handleDelete} id='edit-recipient'>X</a>
        </div>
        <p>{this.props.recipient.address}, {this.props.recipient.city}, {this.props.recipient.state}  {this.props.recipient.zip_code}</p>
        {this.recipientForm()}
        <button id='new-recipient-thoughtdate' className='btn btn-white'>Add New Thought Date</button>
      </div>
    );
  },

  recipientForm: function() {
    if (this.state.edit) {
      return(
        <div id='edit-recipient-div'>
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
                  <input type='text' className='form-control' ref='state'
                    defaultValue={this.props.recipient.state}></input>
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
              <a id='submit-edit-recip' onClick={this.handleEdit} className='btn btn-red'>Update</a>
              <a id='cancel-edit-recip' onClick={this.handleToggle} className='btn btn-grey'>Cancel</a>
            </div>
          </div>

        </div>
      );
    } else {
      return;
    }
  },

  render: function() {
    return this.recipientRow();
  }
})
