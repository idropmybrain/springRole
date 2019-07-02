import React from 'react';
import data from './../../data.json';
import Pagination from './Pagination';

const dummyData = data;

class SpringRole extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showDataArray : dummyData.slice(0,10),
      itemsPerPage: 10
    }
  }
  
  renderContent = (item) => {
    return <div>
      {item}
    </div>
  }
  renderCard = (item) => 
       {
         var dummyArr = [];
         for (var property in item) {
           if(property != 'id' && property !== 'web')
           dummyArr.push(this.renderContent(item[property]));
         }
         return dummyArr;
       }
       
       
  changeView = (num,i) => {
    console.log(num*this.state.itemsPerPage,num*this.props.itemsPerPage+this.props.itemsPerPage);
    this.setState({showDataArray : dummyData.slice(num*this.state.itemsPerPage - this.state.itemsPerPage,num*this.state.itemsPerPage)})
  }
  render(){
    return (<div className = "d-flex flex-column container mt-5">
      {
        this.state.showDataArray.map(item => (
          <div className="d-flex w-100 flex-row justify-content-between card p-2 mb-1 rounded-0">
            {this.renderCard(item)}
          </div>
        ))
      }
      <Pagination
        total={data.length}
        itemsPerPage = {this.state.itemsPerPage}
        changeView = {this.changeView}
        // onChnage = {}
      />
      {/* <div className="d-flex w-100 flex-row justify-content-between">
        {this.renderCard(dummyData)}
      </div> */}
    </div>)
  }
  
}

export default SpringRole;