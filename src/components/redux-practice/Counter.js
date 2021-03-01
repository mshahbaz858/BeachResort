import React, { Component } from 'react'
// 1
import {connect} from 'react-redux'

export default class Counter extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        ctr:state.counter
    };
}

// 2
export default connect(mapStateToProps, )(Counter);