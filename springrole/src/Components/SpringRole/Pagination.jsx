import React from 'react';


class Pagination extends React.Component{
  
  designPaginators = () => {
    let i = 1;
    var dummyArr = [];
    while(this.props.total / this.props.itemsPerPage > i){
      let j = i;
      dummyArr.push(<div className="m-3 btn btn-info" >{i}</div>)
      i++;
    }
    return dummyArr;
  }
  
  render(){
    return (<div className="d-flex flex-row flex-nowrap" style={{overflow: "scroll"}}
      onClick={(e) => this.props.changeView(e)}
            >
      {
        this.designPaginators()
      }
    </div>)
  }
}

export default Pagination