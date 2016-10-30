let Body = React.createClass({
  getInitialState() {
    return { thoughtDates: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/thought_dates.json', (response) => {
      this.setState({
        thoughtDates: response
      });
    });
  },

  removeThoughtDateClient(id) {
    let newState = this.state.thoughtDates.filter((thoughtDate) => {
      return thoughtDate.id != id;
    });
    this.setState({thoughtDates: newState});
  },

  handleSubmit(thoughtDate) {
    let newState = this.state.thoughtDates.concat(thoughtDate);
    this.setState({ thoughtDates: newState })
  },

  handleDelete(id) {
    let self = this;
    $.ajax({
        url: `/api/v1/thought_dates/${id}`,
        type: 'DELETE',
        success(response) {
          self.removeThoughtDateClient(id);
        }
    });
  },

  render() {
    return(
      <div>
        <Recipients />
        <NewThoughtDate handleSubmit={this.handleSubmit}/>
        <AllThoughtDates thoughtDates={this.state.thoughtDates} handleDelete={this.handleDelete}/>
      </div>
    );
  }
});
