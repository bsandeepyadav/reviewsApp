// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  onClickLeftArrow = () => {
    const {activeIndex} = this.state
    if (activeIndex <= 0) {
      this.setState({activeIndex: 0})
    } else {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }

  onClickRightArrow = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props

    if (activeIndex >= reviewsList.length - 1) {
      this.setState({activeIndex: reviewsList.length - 1})
    } else {
      this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeIndex
    ]
    console.log(activeIndex)
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="profile-pic" />
        <div className="arrow-container">
          <button
            className="arrow-button"
            type="button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrows1"
            />
          </button>

          <h1 className="user-name">{username}</h1>
          <button
            className="arrow-button"
            type="button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrows2"
            />
          </button>
        </div>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
