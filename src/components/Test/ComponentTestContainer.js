/**
 * Created by vitaliy on 29.12.16.
 */
import React from 'react';
import ComponentTest from './ComponentTest';

function foo() {}

class ComponentTestContainer extends React.Component {
  render() {
    return <ComponentTest onChangeHandle={foo} onClickHandle={foo}/>;
  }
}

export default ComponentTestContainer;
