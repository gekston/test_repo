import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class SliderImg extends Component {
    state = {
        sliderCount: 1
    }

    render() {
        const { imgCollection } = this.props
        const ArrayOfImg = imgCollection[0].imgCollection
        console.log(imgCollection[0].imgCollection)
        const imgList = ArrayOfImg.map((index) =>
                <div className="wrapper_item" key={(index.id).toString()}>
                    <img className="wrapper_item-img" src={index.src} alt={index.id} />
                </div>
            )
        return (
            <div className="list_wrapper">{imgList}</div>
        )
    }
}

SliderImg.propTypes = {
    imgCollection: PropTypes.array.isRequired
}

export default SliderImg
