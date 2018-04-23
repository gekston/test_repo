import React, { Component } from 'react'
import './style.css'

export default class SliderImg extends Component {
    state = {
        sliderCount: 1
    }

    render() {
        const { imgCollection } = this.props
        const ArrayOfImg = imgCollection[0].imgCollection
        console.log(imgCollection[0].imgCollection)
        const imgList = ArrayOfImg.map((index) =>
                <div className="wrapper_item" key={(index.id).toString()}>
                    <img className={"wrapper_item-img" + index.id} src={index.src} alt={index.id} />
                </div>
            )
        return (
            <div className="list_wrapper">{imgList}</div>
        )
    }
}
