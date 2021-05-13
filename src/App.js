import React, { Component } from 'react';
import SearchBox from './components/search_Box/search_box';
import CardList from './components/card_list/card_list';



class App extends Component{

    state= {
      countriesApiName:[],
      countries:[],
      searchfield:'',
      countriesApiCode:[],
      countriesApiCapital:[],
      capital:'',
      code:'',
      sortedByRegion:[],
      region:''
    }



  
  
  componentDidMount(){
   
    fetch('https://restcountries.eu/rest/v2/all').then(response => {
      return response.json()
    }).then(
      countries => {
        this.setState({countriesApiName:countries})       
      }   
    )
    
  }


getDataByName = ()=>{
  const { searchfield } = this.state
  if(searchfield){
      return fetch(`https://restcountries.eu/rest/v2/name/${searchfield}`).then(response=>response.json())
  }else{
      const data = fetch(`https://restcountries.eu/rest/v2/all`).then(response=>response.json())
      
      return data
  }
}

getDataByCapital = ()=>{
  const {searchfield} = this.state
  if(searchfield){
  return fetch(`https://restcountries.eu/rest/v2/capital/${searchfield}`).then(response=>response.json())
  }
  else{
    return fetch(`https://restcountries.eu/rest/v2/all`).then(response=>response.json())
  }
}

getDataByRegion = ()=>{
  
  if(this.state.region){
  return fetch(`https://restcountries.eu/rest/v2/region/${this.state.region}`).then(response=>response.json())
  }
  else{
    return fetch(`https://restcountries.eu/rest/v2/all`).then(response=>response.json())
  }
}

getDataByCode = ()=>{
  const{searchfield} = this.state
  
  if(searchfield && searchfield.length === 2){
  return fetch(`https://restcountries.eu/rest/v2/alpha/${searchfield}`).then(response=>response.json())
  } else{
    return fetch(`https://restcountries.eu/rest/v2/all`).then(response=>response.json())
  }
}

onCapitalChange = async (event) => {
  this.setState({searchfield:event.target.value})
  const countries =  await this.getDataByCapital();
  const countries2 = await this.getDataByName();
  const filteredCountries = countries.filter(country => countries2.find(country2 => country.capital === country2.capital));
  

  this.setState({
    countriesApiName:filteredCountries
  })
}

onCodeChange = async (event) => {
  this.setState({code:event.target.value})
  const countries = await this.getDataByCode()
  console.log(this.getDataByCode())
  this.setState({
    countriesApiName:countries
  })
}


  getSearchData = async() => {
    const countries =  await this.getDataByCapital();
    const countries2 = await this.getDataByName();

    
    let allCountries = [];
    if (Array.isArray(countries)){
      allCountries = [...countries]
    }

    if (Array.isArray(countries2)){
      allCountries = [...allCountries,...countries2]
    }
    return allCountries
}
 
  onSearchChange = async (event) => {
    this.setState({searchfield:event.target.value},()=>this.getCountries())
  }


  getCountries = async () => {
    const regionCountries = await this.getDataByRegion()
    const searchCountries  = await this.getSearchData();
    const filteredCountries = regionCountries.filter(country => searchCountries.find(country2 => country.capital === country2.capital));
    this.setState({countriesApiName:filteredCountries})
    
  }
 onRegionChange = (event) => {
   this.setState({region:event.target.value},()=>this.getCountries())
 
 }

  render(){
    
     
  
    return(
      <div >
        <div style={{display:"flex", justifyContent:"center",marginBottom:"5rem"}} >
          <div >
        <h1 >Country Explorer</h1>
        <SearchBox
        searchfield={this.state.searchfield}
        searchChange = {this.onSearchChange}
        placeholder = 'search countries'
        />
        
        <select onChange={this.onRegionChange}>
          <option value=''> Filter By Region</option>
          <option value='africa'> Africa</option>
          <option value='americas'> America</option>
          <option value='asia'> Asia</option>
          <option value='europe'> Europe</option>
          <option value='oceania'> Oceania</option>
        </select>
        </div>
        </div>
        <CardList
        countries={this.state.countriesApiName}
        />
      </div>
    )
  }
}

export default App;
