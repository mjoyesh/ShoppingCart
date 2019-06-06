import React , { Component } from 'react';

class RadioButton extends Component{
    render(){
        const { name , colorButtonToggle , imageKeys, handleChange } = this.props;
        let selectRadio = {
            "background" : imageKeys
        }
        return(
            <div className="radio">
                <ul>
                    {
                        selectRadio.background.map((item,i) => {
                                return(
                                    <li key={i} onClick={colorButtonToggle}>
                                        <label className="radio-container">
                                        <input
                                            className="radio-button"
                                            type="radio"
                                            onClick={(e) => handleChange(e)}
                                            value={item}
                                            name={`${name} radio`}/>
                                        <span style = {{backgroundColor: item}} className="checkmark"></span>
                                        </label>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default RadioButton;