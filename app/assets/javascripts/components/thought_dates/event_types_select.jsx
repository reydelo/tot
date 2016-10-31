var EventTypesSelect = React.createClass({
  getInitialState() {
    return {
      options: []
    };
  },

  componentDidMount() {
    $.getJSON('/api/v1/event_types.json', (response) => {
      this.setState({
        options: response
      });
    });
  },

  render() {
    return (
      <select name='name' value={this.props.name} onChange={this.props.handleChange} className='form-control'>
        <option>Please select the event type</option>
        {this.state.options.map(function(eventType) {
          return <option key={eventType.id} value={eventType.name}>{eventType.name}</option>
        }.bind(this))}
      </select>
    );
  }
});
