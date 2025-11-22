import { Component } from "react";

export class Filter extends Component {

    filterNames = () => {
        const inputFilter = document.querySelector("#filterInput")
        const inputValue = inputFilter.value
        this.props.filterData(inputValue)
    }
    render() {
        return(
            <div>
                <p>Find contacts by name</p>
                <input onInput={this.filterNames} id="filterInput" type="text" />
            </div>
        )
    }
}