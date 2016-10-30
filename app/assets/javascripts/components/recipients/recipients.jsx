let Recipients = React.createClass({
  getInitialState() {
    return {
      recipients: [],
      edit: false
    };
  },

  componentDidMount() {
    $.getJSON('/api/v1/recipients.json', (response) => {
      this.setState({ recipients: response })
    });
  },

  handleNewToggle: function() {
    this.setState({
      edit: !this.state.edit
    });
  },

  handleSearch(e) {
    let self = this;
    let query = e.target.value;
    $.ajax({
      url: '/api/v1/recipients/search',
      type: 'GET',
      data: {
        query: query
      },
      success: function(response) {
        self.setState({recipients: response});
      }
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
    this.setState({recipients: recipients, edit: false});
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
      <div>
        <h1>My Recipients</h1>
        <div className='add-search-recipient'>
          <a id='add-new-recipient' className='btn btn-red' onClick={this.handleNewToggle}>Add New Recipient</a>
          <input type='text' name='search-recipients' placeholder='search your recipients' onChange={this.handleSearch}></input>
          </div>
          <RecipientForm handleNewRecipient={this.addRecipient} handleNewToggle={this.handleNewToggle} edit={this.state.edit}/>
          <div id='recipient-detail'>
            <div>
              {this.state.recipients.map(function(recipient) {
                return <Recipient key={recipient.id} recipient={recipient}
                  handleDeleteRecipient={this.deleteRecipient} handleEditRecipient={this.updateRecipient} />
              }.bind(this))}
            </div>
          </div>
      </div>
    )
  }
});
