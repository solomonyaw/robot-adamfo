    import React,{Component} from "react";
    import CardList from '../components/CardList';
    import Appcss from '../containers/App.css';
    import Searchbox from '../components/Searchbox';
    import {robots} from '../robots';
    import Scroll from '../components/Scroll';
    
  

    class App extends Component
    {   
        constructor(){
            super()
            this.state =
            {
            robots: robots,
                searchfield: ""
            }
        }
         onsearchchange=(event)=> {
            this.setState({searchfield:event.target.value})
              
        }
    render() {
         const {robot,searchfield}= this.state;
        const filterrobots = robots.filter(robot=>{
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
         }
             )
             if(!robots.length)
             {
                 return <h1>Loading</h1>
             }
             else{
        return (
            <div className="tc">
            <h1 className="h1">Robot Adanfo</h1>
            <marquee direction="left" width="600" height="40" >
                <p className="info">Robot Adanfo is a Twi word which means Robot Friend. It is a search engine for pre-designed robot images.
                that displays images of </p></marquee>
                <img className="ghanaflag" src= {require('../ghana.png')} width="100" height="100"/>
            <Searchbox onsearchchange ={this.onsearchchange} />
        <Scroll>
        <CardList robots={filterrobots}/>
        </Scroll>
        <marquee direction="right" width="600" height="100" behavior="alternate"><footer>Designed By Solomon Yaw Adeklo during a Full stack Online Javascript Bootcamp </footer></marquee>

        </div>
        );}
    } 
    
    }

    export default App;