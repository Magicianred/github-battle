var React = require('react');
var PropTypes = React.PropTypes;

function UserDetailsWrapper ({header, children}) {
  return (
    <div className='col-sm-6'>
    <p className='lead'>{header}</p>
    {children}
    </div>
  )
}

UserDetailsWrapper.header = {
  header: PropTypes.string.isRequired,
}

module.exports = UserDetailsWrapper;
