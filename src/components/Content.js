import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'

export default class Content extends Component  {
  static propTypes = {
    themeColor: PropTypes.string,
    onSwitchColor: PropTypes.func
  }
  handleClick(color){
    if(this.props.onSwitchColor){
        this.props.onSwitchColor(color)
    }
  }
  render () {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
        <ThemeSwitch onSwitchColor={this.handleClick.bind(this)} themeColor={this.props.themeColor}/>
      </div>
    )
  }
}
