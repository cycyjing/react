import React, { Component } from 'react'


const wrappedComponent =
//对参数进行一定操作

   (OldComponent) => {
    //操作
    //PP 模式
    return class extends Component {
    constructor(){
      super()
      this.state={
        name:''
      }
    }
    changeName=(name) => {
      this.setState({
        name
      })
    }
      render() {
        const newProps ={...this.props,refs:this.proc.bind(this),...this.state,changeName:this.changeName}
        return  <OldComponent {...newProps} />
        
      }
    }
  }






const wr=(config)=>{
  //对参数进行操作
  return (OldComponent) => {
    console.log(config.name);
    return  class extends OldComponent{
      //在这个组件离  因为这个组件继承了 OldComponent 
      //所以  OldComponent 内的一切参数和方法都可以进行调用
      render(){
      
         return super.render()//在这个地方也可以使用super
        
       
      }
    }
   }
}
const config ={
  name:'zhangsan'
}

@wr(config)

class OldComponent extends Component{
  handleClick=(e) => {
this.props.changeName(e.currentTarget.value)
  }
  render(){

      return <p onClick={this.handleClick}>{this.props.name}11111</p>
  
  }
}

export default OldComponent