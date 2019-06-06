import React , { Component } from 'react';


class SelectSize extends Component{
    render(){
        let {name, handleChange} = this.props;
        return(
            <select className="selectSize" name={`${name} sizeName`} onChange={(e)=>handleChange(e)}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>
        )
    }
}

export default SelectSize;