import React, { Component } from 'react';
import ActivityItem from './ActivityItem.js';

class Content extends Component {
  render() {
      const {activities} = this.props;
    return (

<div className="content">
<div className="line"></div>
{activities.map((activity) => {
return (
    <ActivityItem activity={activity} />
);
})}
</div>
        );
  }
}

export default Content;