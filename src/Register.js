import React from 'react'
import ReactDOM from 'react-dom'

class Register extends React.component {
  constructor(props){
    super()
  }

  getInitialState() {
    return{
      step: 1
    }
  }

  render() {
		switch (this.state.step) {
			case 1:
				return <AccountFields />
			case 2:
				return <SurveyFields />
			case 3:
				return <Confirmation />
			case 4:
				return <Success />

    }
  }
}
