import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "BEN SALEM INES",
      profession: "Radiology Technician",
      imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1zIwqSTYuAUsreqSEcrIrK4MvKXFB45F27508PjV0ho0Vgc74_by_GFhYAJLmDfkMTzA&usqp=CAU",
      bio: 'bio',
      isVisible:false,
      intervall:null,
      timer:0
    };
  }
    toggleVisibility = ()=>{
      this.setState({
        isVisible: !this.state.isVisible
      })
  }
  componentDidMount(){
console.log('componentDidMount()');
this.setState({
  intervall:setInterval(() => {
    this.setState({timer:this.state.timer +1})
  }, 1000)
})
  }
  componentDidUpdate(){
    console.log('componentDidUpdate()')
  }
  render() {
    console.log('render()')
    return (
      <div className='class'>
        <button className='visibility' onClick={this.toggleVisibility}> {this.state.isVisible ? 'HIDE PROFILE': 'SHOW PROFILE'} </button>
        {this.state.isVisible? 
        <div class="profile">
        <h1>{this.state.fName}</h1>
        <h4>{this.state.profession}</h4>
        <img src={this.state.imgLink} alt='profile'/> <p>{this.state.bio}</p>
        </div>
        : (<h5>click the button to show profile</h5>)}
        <>
        <h3 className='time'>{this.state.timer}</h3>
        </>
      </div>
    );
  }
}

export default App;
