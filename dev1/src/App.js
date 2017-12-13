import React, { Component } from 'react';
import { Container1 } from './components/Container'
import './index.css'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      authors :[],
      isViewAll:false
    }
    this.deletAuthor =  this.deletAuthor.bind(this)
    this.addAuthor =  this.addAuthor.bind(this)
    this.viewAll =  this.viewAll.bind(this)

    this.viewDelete =  this.viewDelete.bind(this)
    this.purge =  this.purge.bind(this)
    
    
  }

  componentDidMount(){
    let arr = JSON.parse(localStorage.getItem('authors'))
    this.setState({authors:arr})
    
  }

  addAuthor(obj){ console.log(obj)
    const storage = JSON.parse(localStorage.getItem('authors'));
    console.log(storage)
    if(storage != null ){
      const arr = storage.slice();
      obj.active = true;
      arr.push(obj);
      localStorage.setItem('authors',JSON.stringify(arr))
      
      this.setState({authors:arr})
    }else{
      let tem = this.state.authors || [];
      obj.active = true;
      tem.push(obj)
      localStorage.setItem('authors',JSON.stringify(tem))

      this.setState({authors : tem})
      console.log(this.state.authors)
    }
      
  }

  deletAuthor(index){  console.log(index)
    let arr = JSON.parse(localStorage.getItem('authors'))
    arr[index].active = false; 
    const dl = arr.filter((vl)=>  vl.active == true);
    this.setState({authors : dl})
    localStorage.setItem('authors',JSON.stringify(arr))
    
  }
  viewAll(){  
    let arr = JSON.parse(localStorage.getItem('authors'))
    this.setState({authors : arr})
    
  }

  viewDelete(){
    let arr = JSON.parse(localStorage.getItem('authors'))
    const dl = arr.filter((vl)=>  vl.active == false);
    console.log(dl)
    this.setState({authors : dl})
  }

  purge(){
    localStorage.removeItem('authors')
    this.setState({authors : []})
    
  }

  render() {
    return (
      <div>
        <Container1 authors={this.state.authors} onDelete={this.deletAuthor} addAuthor={this.addAuthor} viewAll= {this.viewAll} isViewAll={this.state.isViewAll} viewDelete={this.viewDelete} purge={this.purge}/>
      </div>
    );
  }
}

export default App;
