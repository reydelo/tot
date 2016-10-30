let Body = React.createClass({
  getInitialState() {
    return {
      thoughtDates: [],
      currentContent: 'home'
    }
  },

  componentDidMount() {
    $.getJSON('/api/v1/thought_dates.json', (response) => {
      this.setState({
        thoughtDates: response
      });
    });
  },

  updateState() { // this could probably be optimized
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

  handleThoughtDateSubmit(thoughtDate) {
    this.updateState();
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

  handleContentChange(content) {
    this.setState({currentContent: content});
  },

  currentContent() {
    let currentContent = this.state.currentContent;
    if (currentContent === 'home') {
      return(
        <Home />
      );
    } else if (currentContent === 'recipients') {
      return(
        <Recipients updateState={this.updateState} handleThoughtDateSubmit={this.handleThoughtDateSubmit}/>
      );
    } else if (currentContent === 'calendar') {
      return(
        <Calendar />
      );
    } else {
      return null;
    }
  },

  render() {
    // <AllThoughtDates thoughtDates={this.state.thoughtDates} handleDelete={this.handleDelete}/>
    return(
      <div className='body-container'>
        <div className='body-content'>
          <BodyNav currentContent={this.state.currentContent} handleContentChange={this.handleContentChange}/>
          {this.currentContent()}
        </div>
        <Sidebar thoughtDates={this.state.thoughtDates}/>
      </div>
    );
  }
});
