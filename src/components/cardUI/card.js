import React from 'react';
import Modal from 'react-modal';


import './card-style.css'

const Card = (props)=> {
    const [modalIsOpen,setIsOpen] = React.useState(false);

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

    function openModal() {
        setIsOpen(true);
      }

      function closeModal(){
        setIsOpen(false);
      } 
    return(
       <div className="card text-center">
           <div className="overfloW">
               <img src={props.imgsrc} alt="people" className="card-img-top"/>
           </div>
           <div className="card-body text-dark">
                <h4 className="card-title">{props.name}</h4> 
                <p className="card-text text-secondary">
                  
                </p>
                <p>
                    Capital : {props.capital} <br/>
                    Region : {props.region}<br/>
                    Population : {props.population}

                </p>
            
                <div>
        <a onClick={openModal} className="btn btn-outline-success">More</a>
        <Modal
                isOpen={modalIsOpen}
                onRequestClose={()=>closeModal}
                contentLabel="Example Modal"
                style={customStyles}
                >

                <div className="card text-center">
           <div className="overfloW" style={{display:'center',justifyContent:'center'}}>
               <img src={props.imgsrc} alt="people" className="card-img-top"/>
           </div>
           <div className="card-body text-dark">
                <h4 className="card-title">{props.name}</h4> 
                <p className="card-text text-secondary">
                  
                </p>
                <div>
                    Capital : {props.capital} <br/>
                    Region : {props.region}<br/>
                    Population : {props.population}<br/>
                    Language: {props.language}<br/>
                    Neighbours:{props.neighbours}<br/>
                    Currencies:{props.currencies}<br/>
                    Timezone:{props.timezone}<br/>
                    Neighbours:{props.neighbour}<br/>
                    Language:{props.language}


                </div>
                <a onClick={closeModal} className="btn btn-outline-success">Close</a>
                </div>
        </div>
                
        </Modal>
                </div>
             
             
              
            </div>       
       </div> 
       
    )

}


export default Card;