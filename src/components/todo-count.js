import React from 'react';
import _ from 'lodash';

export default class TodoCount extends React.Component {

    // 获取任务数量

    renderTasksCount() {
        const tasksCount =  _.size(this.props.todos);
        return tasksCount == 1 ? '1 task:' : (tasksCount + ' tasks:');
    }

    render(){
        const countStyle = {
            padding: '5px 10px'
        };

        return <p className="bg-info" style={ countStyle }>{ this.renderTasksCount() }</p>
    }
    
}