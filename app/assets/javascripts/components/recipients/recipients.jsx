let Recipients = React.createClass({
  getInitialState() {
    return {
      recipients: [],
      edit: false,
      query: ''
    };
  },

  componentDidMount() {
    $.getJSON('/api/v1/recipients.json', (response) => {
      this.setState({ recipients: response })
    });
  },

  handleNewToggle() {
    this.setState({
      edit: !this.state.edit
    });
  },

  handleSearch(e) {
    let self = this;
    let query = e.target.value;
    this.setState({query: query});
    $.ajax({
      url: '/api/v1/recipients/search',
      type: 'GET',
      data: {
        query: query
      },
      success(response) {
        self.setState({recipients: response});
      }
    });
  },

  addRecipient: function(recipient) {
    let recipients = React.addons.update(
      this.state.recipients, {
        $push: [recipient]
      }
    );
    this.setState({recipients: recipients, edit: false});
  },

  updateRecipient(recipient, data) {
    let index = this.state.recipients.indexOf(recipient);
    let recipients = React.addons.update(
      this.state.recipients, {
        $splice: [[index, 1, data]]
      }
    );
    this.replaceState({recipients: recipients});
    this.props.updateState();
  },

  deleteRecipient(recipient) {
    let index = this.state.recipients.indexOf(recipient);
    let recipients = React.addons.update(
      this.state.recipients, {
        $splice: [[index, 1]]
      }
    );
    this.replaceState({recipients: recipients});
  },

  hasRecipients() {
    let myComponent;
    if (this.state.recipients.length) {
      myComponent = this.showRecipients();
    } else {
      if (this.state.query) {
        myComponent = this.noSearchResults();
      } else {
        myComponent = this.noRecipients();
      }
    }
    return myComponent;
  },

  noRecipients() {
    return(
      <div>
        <p>You currently have no recipients.</p>
        <p>To add new recipients, click Add New Recipient</p>
      </div>
    );
  },

  noSearchResults() {
    return(
      <div>
        <p>No recipients found with the name {this.state.query}</p>
      </div>
    );
  },

  showRecipients() {
    return(
      <div id='recipient-detail'>
        <div>
          {this.state.recipients.map(function(recipient) {
            return <Recipient key={recipient.id} recipient={recipient}
              handleDeleteRecipient={this.deleteRecipient} handleEditRecipient={this.updateRecipient} />
          }.bind(this))}
        </div>
      </div>
    );
  },

  render() {
    return(
      <div>
        <h1>My Recipients</h1>
        <div className='add-search-recipient'>
          <a id='add-new-recipient' className='btn btn-red' onClick={this.handleNewToggle}>Add New Recipient</a>
          <input type='text' name='search-recipients' placeholder='search your recipients' onChange={this.handleSearch}></input>
          </div>
          <RecipientForm handleNewRecipient={this.addRecipient} handleNewToggle={this.handleNewToggle} edit={this.state.edit}/>
          {this.hasRecipients()}
      </div>
    );
  }
});
