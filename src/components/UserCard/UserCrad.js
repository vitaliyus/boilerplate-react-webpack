/**
 * Created by vitaliy on 29.12.16.
 */
import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';

function UserCard() {
  return (<div>
    <Card>
      <CardHeader
        title='Super Client'
        subtitle='Junior'
        avatar='https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg'
      />
      <CardTitle title='Personal user info' subtitle='Simple' />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  </div>);
}

export default UserCard;
