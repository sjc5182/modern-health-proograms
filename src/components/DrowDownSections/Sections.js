import React, { Fragment } from 'react'
import SectionsList from '../DrowDownSections/SectionList'

 export default class Section extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    toggle: false
    }
   }

  toggle = () => {
    this.setState(state => ({
      toggle: !state.toggle
    }))
  }

  render(){
    const { ProgramName } = this.props

    console.log(localStorage.getItem(ProgramName.name))
    return(
      <Fragment>
        <div className = 'sideBar-progarm-box'>{ProgramName.name}
          {!this.state.toggle 
          ? <i className="fas fa-chevron-up" onClick = {() => this.toggle()} style = {{paddingRight: '1rem'}} />
          : <i className="fas fa-chevron-down" onClick = {() => this.toggle()} style = {{paddingRight: '1rem'}} />}
        </div>
        {this.state.toggle 
          ? 
            <SectionsList List = {ProgramName.sections}/>
          :
            null
        }
      </Fragment>
    )
  }
 }