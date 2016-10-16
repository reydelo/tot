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
      url: '/recipients/' + this.props.recipient.id,
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
      url: '/recipients/' + this.props.recipient.id,
      dataType: 'JSON',
      success: function() {
        this.props.handleDeleteRecipient(this.props.recipient)
      }.bind(this)
    });
  },

  recipientRow: function() {
    console.log(this.props);

    return(
      <tr>
        <td>{this.props.recipient.first_name}</td>
        <td>{this.props.recipient.last_name}</td>
        <td>{this.props.recipient.relationship}</td>
        <td>{this.props.recipient.address}</td>
        <td>{this.props.recipient.city}</td>
        <td>{this.props.recipient.state}</td>
        <td>{this.props.recipient.zip_code}</td>
        <td>
          <a className='btn btn-xs btn-primary' onClick={this.handleToggle}>Edit</a>
          <a className='btn btn-xs btn-danger' onClick={this.handleDelete}>Delete</a>
        </td>
      </tr>
    );
  },

  recipientForm: function() {
    return(
      <tr>
        <td>
          <input type='text' className='form-control' ref='first_name'
            defaultValue={this.props.recipient.first_name}></input>
        </td>
        <td>
          <input type='text' className='form-control' ref='last_name'
            defaultValue={this.props.recipient.last_name}></input>
        </td>
        <td>
          <input type='text' className='form-control' ref='relationship'
            defaultValue={this.props.recipient.relationship}></input>
        </td>
        <td>
          <input type='text' className='form-control' ref='address'
            defaultValue={this.props.recipient.address}></input>
        </td>
        <td>
          <input type='text' className='form-control' ref='city'
            defaultValue={this.props.recipient.city}></input>
        </td>
        <td>
          <input type='text' className='form-control' ref='state'
            defaultValue={this.props.recipient.state}></input>
        </td>
        <td>
          <input type='text' className='form-control' ref='zip_code'
            defaultValue={this.props.recipient.zip_code}></input>
        </td>
        <td>
          <a className='btn btn-xs btn-default' onClick={this.handleEdit}>Update</a>
          <a className='btn btn-xs btn-danger' onClick={this.handleToggle}>Cancel</a>
        </td>
      </tr>
    );
  },

  render: function() {
    if (this.state.edit) {
      return this.recipientForm();
    } else {
      return this.recipientRow();
    }
  }
})
