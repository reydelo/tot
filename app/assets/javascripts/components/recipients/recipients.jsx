let Recipients = React.createClass({
  getInitialState() {
    return {
      recipients: []
    };
  },

  componentDidMount() {
    $.getJSON('/api/v1/recipients.json', (response) => {
      this.setState({ recipients: response })
    });
  },

  getDefaultProps: function() {
    return {
      recipients: []
    };
  },

  addRecipient: function(recipient) {
    let recipients = React.addons.update(
      this.state.recipients, {
        $push: [recipient]
      }
    );
    this.setState({recipients: recipients});
  },

  updateRecipient: function(recipient, data) {
    let index = this.state.recipients.indexOf(recipient);
    let recipients = React.addons.update(
      this.state.recipients, {
        $splice: [[index, 1, data]]
      }
    );
    this.replaceState({recipients: recipients});
  },

  deleteRecipient: function(recipient) {
    let index = this.state.recipients.indexOf(recipient);
    let recipients = React.addons.update(
      this.state.recipients, {
        $splice: [[index, 1]]
      }
    );
    this.replaceState({recipients: recipients});
  },

  render: function() {
    return(
      <div className='recipients'>
        <h2 className='title'>Recipients</h2>
        <br></br>
        <RecipientForm handleNewRecipient={this.addRecipient} />
        <br></br>
        <div className='table-responsive'>
          <table className='table table-bordered table-condensed'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Relationship</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.recipients.map(function(recipient) {
                return <Recipient key={recipient.id} recipient={recipient}
                  handleDeleteRecipient={this.deleteRecipient} handleEditRecipient={this.updateRecipient} />
              }.bind(this))}
            </tbody>
          </table>
        </div>

      </div>
    )
  }
});
