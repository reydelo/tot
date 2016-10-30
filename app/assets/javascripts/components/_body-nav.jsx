let BodyNav = React.createClass({
  isActiveRoute(route) {
    if (route === this.props.currentContent) {
      return 'active';
    } else {
      return null;
    }
  },

  render() {
    return(
      <div className='pull-right visible-lg-block hidden-xs' id='body-nav'>
        <span className='font-link'>
          <a className={this.isActiveRoute('home')} onClick={() => this.props.handleContentChange('home')}>Home</a>
        </span>
        <span className='font-link'>
          <a className={this.isActiveRoute('recipients')} onClick={() => this.props.handleContentChange('recipients')}>My Recipients</a>
        </span>
        <span className='font-link'>
          <a className={this.isActiveRoute('calendar')} onClick={() => this.props.handleContentChange('calendar')}>My Calendar</a>
        </span>
      </div>
    );
  }
});
