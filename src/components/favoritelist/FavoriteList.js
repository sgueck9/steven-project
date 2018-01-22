import React, { Component } from 'react';

class FavoriteList extends Component{
    constructor(props){
        super(props)
    
this.state =   {
    name:"CowboySteve",
    favTeams:['Broncos', 'Jazz', 'Celtics']
           
    }
}


    handleClick(){
    let newFavs= this.state.favTeams.slice()
    newFavs.push(this.state.newFavs);

    this.setState({
        favTeams:newFavs,
        newFavs:''
    })
}
render(){
    return(
        <div>
            <form onSubmit={(event)=>{
                event.preventDefault()
                this.handleClick()
            }}>
            New Favs:
            <input type='text'
            onChange={(event)=>{ this.setState({newFavs:event.target.value}) }}
            holder="Favorite Teams Here"
            value={this.state.newFavs}/>
            <button type="submit">Add New Team</button>
            </form>
            <div className='FavTeams'>
                These Are { this.state.name }'s Favorite Teams
                { this.state.favTeams.map( (fav)=>(
                    <div key={fav} className ='favs'>
                    { fav }
                    </div>
                ))}
                </div>
                </div>
    )
}
}


export default FavoriteList



