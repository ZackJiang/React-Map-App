import React from 'react'

class DropDown extends React.PureComponent {

    render() {
        const { onDropDownChanged } = this.props;

        return <select defaultValue='0' onChange={onDropDownChanged}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
    }
}

export default DropDown