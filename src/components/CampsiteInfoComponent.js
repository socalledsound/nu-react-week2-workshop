import React, { Component } from 'react';

class CampsiteInfoComponent extends Component {

    render(){
        if(this.props.campsite){
            return (
                <div className="row">
                    hi
                </div>
            )
        }
        return (
            <div>
                error passing campsite
            </div>
        )
    }

}

export default CampsiteInfoComponent


