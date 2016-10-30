let AllThoughtDates = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  render() {
    let thoughtDates = this.props.thoughtDates.map((thoughtDate) => {
      return (
        <div key={thoughtDate.id}>
          <h3>{thoughtDate.name}</h3>
          <p>{thoughtDate.event_date}</p>
          <button onClick={this.handleDelete.bind(this, thoughtDate.id)}>Delete</button>
        </div>
      );
    });

    return(
      <div>
        {thoughtDates}
      </div>
    );
  }
});
