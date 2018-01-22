import React, { Component } from 'react';
import logo from './von.gif';
import './App.css';
import axios from 'axios'
import FavoriteList from './components/favoritelist/FavoriteList'
import Btn from './button'


class App extends Component {
  constructor(props){
    super(props)
  
     this.state=  {
      user:{ },
      starwarschar:{name:''},
      poke:{name:''},
      myJoke:{setup:'', punchline:''},
      quote:''
    }
  
    this.buttonClick= this.buttonClick.bind(this)
    this.prez=this.prez.bind(this)
    this.jokey=this.jokey.bind(this)
    this.pokemon=this.pokemon.bind(this)
    this.starWars=this.starWars.bind(this)
  }


  buttonClick(){
    console.log('frontendmthd')
    axios.get('/api/favplayer').then((resp)=>{
      this.setState({ name: resp.data })
    })
   }


   newPlaya(){
     const newFavPlaya='My favorite NBA player is Donovan Mitchell'
     console.log('frontplaya')
     axios.put('/api/newplaya', {newFavPlaya} ).then((resp)=>{
       this.setState({name: resp.data})
     })
   
  }
  starWars(){
    
    axios.get('https://swapi.co/api/people/14').then((resp)=>{
      this.setState({starwarschar: resp.data})
    })}
   pokemon(){ 
    axios.get('http://pokeapi.co/api/v2/pokemon/9').then((resp)=>{
      this.setState({poke: resp.data})
    })
  }
      jokey(){
        axios.get('http://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke').then((resp)=>{
        this.setState(resp.data)
      })
    }
    prez(){
      axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then((resp)=>{
        this.setState({quote: resp.data})
      })
    }

      render() {
    return (
      <div className="App">
       
       <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Steven's Sports Favorites</h1>
  </header>
       
       <header>Steven's favorite sports teams and players</header>
         <div className='wikis'>
       
         </div>
         <div className='back'>
         <div className='social-media'>
         <button onClick = {()=> this.buttonClick()} >Fav NFL Player</button>
         <button><a href="https://www.facebook.com/steven.gueck.3"> Steven's FBook</a> </button>
         <button onClick= {()=> this.newPlaya()}>Fav NBA Player </button> 
         <div>{ this.state.name }
         </div>
         </div>
         
         <FavoriteList> </FavoriteList>
      
      
         <div className ='users'></div>
         <div className='adding'>
          Some of Steven's other favorite things!!
         </div>

         
         <Btn btnName='Mytery button' Cool={this.starWars}/>
         <div>{ this.state.starwarschar.name } </div>
         <Btn btnName='What' Cool={this.pokemon}/>
         <div>{ this.state.poke.name}</div>
         <Btn btnName='Click Me' Cool={this.jokey}/>
         <div>{this.state.setup}</div>
         <div>{this.state.punchline}</div>
         
         <Btn btnName='anotha one' Cool={this.prez}/>
         <div>{this.state.quote}</div>
         
         </div>
         </div>
      
       
      
    );
  }
}

export default App;
