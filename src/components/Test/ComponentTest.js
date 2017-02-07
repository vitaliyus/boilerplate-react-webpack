/**
 * Created by vitaliy on 29.12.16.
 */

/**/
import React from 'react';

class ComponentTest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<p onChange={this.props.onChangeHandle} onClick={this.props.onClickHandle} >
      When we started doing this, concerns about JSX vanished. Writing "dumb components" feels just the same as
      Handlebars or ERB templates but with the full power of JavaScript. We realized that it wasn't JSX that bothered us as
      much as the nagging feeling that components were just smaller balls of mud. For a while, our components were just
      smaller balls of mud but this pattern helped break the cycle.</p>);
  }
}

ComponentTest.propsDefault = {};

ComponentTest.propTypes = {
  onChangeHandle: React.PropTypes.any,
  onClickHandle: React.PropTypes.any
};

export default ComponentTest;
