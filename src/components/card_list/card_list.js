import React from 'react';
import Card from '../cardUI/card';



const CardList = ({countries}) => {
    
    return (
     
        countries.map((country, i) => {
            
            return(
            <div
            style={{display:'inline-flex'}}
            >
                <Card
                    key={i}
                    id={countries[i].id}
                    name = {countries[i].name}
                    capital = {countries[i].capital}
                    imgsrc = {countries[i].flags.svg}
                    region = {countries[i].region}
                    population = {countries[i].population}
                    // currencies = {countries[i].currencies[0].name}  // de rezolvat
                    timezone = {countries[i].timezones}
                    language = {countries[i].languages[0].name}
                    neighbour = {countries[i].borders}
                 />
                
            </div>)
        })
    )
}

export default CardList;