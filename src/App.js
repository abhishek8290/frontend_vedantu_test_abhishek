import React, { Component } from 'react';
import './App.css';
const axios = require('axios');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded:false,
      isLoaded_repo:false,
      data:{},
      data_repo:[],
      followed_or_not:"FOLLOW"
    };
  }
   
  componentDidMount() {
    axios.get('https://api.github.com/users/supreetsingh247').then(resp => {
      this.setState({
                data:resp.data,
                isLoaded:true,

              });
              
    console.log(resp.data.name);
});
axios.get('https://api.github.com/users/supreetsingh247/repos').then(resp => {
                this.setState({
                          data_repo:resp.data,
                          isLoaded_repo:true,
              
                        });
              
              });


    
  }
  render() {
    console.log(data_repo);
    const {isLoaded,data,followed_or_not,data_repo,isLoaded_repo} = this.state;
   
    if(!isLoaded){
      return <div> ...is loading</div>

    }
    else {
      return (
        <div className="App">
          <img 
      src={data.avatar_url}
      style={{borderRadius:'50%',height:'150px',width:'150px'}}
      alt="new"
      />
          <div>{data.name} </div>
      <div>{data.login}</div>
      <div>{data.bio}</div>
      <button onClick={console.log('kdn')}>
  {followed_or_not}
</button>
      <div>{data.follower} follower</div>
      <div>{data.following} following</div>

        
        {data_repo.map(item => (
          <li key = {item.id}>{item.name}{item.description}</li>
        ))}
     
      


  
        </div>
      );

    }
    
  }
}

export default App;
