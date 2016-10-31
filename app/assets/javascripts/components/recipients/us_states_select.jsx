var UsStatesSelect = React.createClass({
  states() {
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

  render() {
    return (
      <select name='state' value={this.props.state} onChange={this.props.handleChange} className='form-control'>
        {this.states().map(function(state) {
          return <option key={state.value} value={state.value}>{state.label}</option>
        }.bind(this))}
      </select>
    );
  }
});
