import React from 'react';


class Pagination extends React.Component{
  
  designPaginators = () => {
    let i = 1;
    var dummyArr = [];
    while(this.props.total / this.props.itemsPerPage > i){
      let j = i;
      dummyArr.push(<div className="m-3 btn btn-info" onClick={() => this.props.changeView(j,i)}>{i}</div>)
      i++;
    }
    return dummyArr;
  }
  
  render(){
    return (<div className="d-flex flex-row flex-nowrap " style={{overflow: "scroll"}}>
      {
        this.designPaginators()
      }
    </div>)
  }
}

export default Pagination