## react-demo01

2019/08/01-2019/08/06

## react-router-demo01

2019/08/10-2019/08/15

## react-router-demo02

2019/08/18

## react-koa-demo01

2019/08/28-2019/09/07

# React Note

## Install

- 安装脚手架

```bash
npm i create-react-app -g
```

- 使用脚手架创建一个项目

  ```bash
  npx create-react-app 项目名
  ```

## 组件

- 函数式组件

  ```js
  const CreateApp=(props)=>{
    return <h1>{props}</h1> 
      //如果多个标签用一个空标签+小扩号(<></>)包裹起来
      //（）代表一个域，表示一起的
  }
  const app = CreateApp("hhh")
  
  ReactDOM.render(
    app,
    document.getElementById('root')
  )
  ```

  > 所有组件首字母一定要大写

- class方式创建组件

  ```js
  //01
  class App2 extends Component{
    render(){
      return (
      <>
        <h1>zhu tou </h1>
        <h3>hhh</h3>
      </>
      )
    }
  }
  //02
  class App2 extends Component{
    render(){
      return (
      <>
        <h1>{this.props.title}</h1>
        <h3>{this.props.name}</h3>
      </>
      )
    }
  }
  //03 嵌套
  class App3 extends Component{
    render(){
      return(
        <>
        <h1>nao dong dong shi zhu tou</h1>
        <hr/>
        <App2 title="zhu tou" name="hhh"/>
        </>
      )
    }
  }
  ```

  > 该方式创建组件，调用参数一定要用this

props是父级组件传递给子组件

## 生命周期

### 什么是生命周期

 生命周期 就是 某些特定的时间点上执行的确定的函数，这些函数可以给最终的结果造成一定的影响。

### 常用的

1. componentDidMount()
2. componentDidUpdate()
3. componentWillUnmounted()

### getSnapshotBeforeUpdate（）

1. 这个生命周期函数在虚拟DOM 渲染之后 DOM 挂载之前，会返回一个快照，并发送给 componentDidUpdate（）的第三个参数，
2. 两个周期中对DOM 进行比较处理 ，
3. getSnapshotBeforeUpdate的触发事件是在更新界面DOM的前一瞬间
4. 主要应用场景是需要比较生成的虚拟DOM 和 渲染Dom的比较处理

### getDerivedStateFromProps （）

1. 当state需要从props初始化时，使用
2. 量不使用，维护俩者状态需要消耗额外资源，增加复杂度
3. 每次组件更新都会触发
4. 典型场景表单获取默认值
5. props传到到state是有风险的，必须要确定组件的数据是单一数据源，[见官方的说明 你可能不需要使用派生 state](https://zh-hans.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization)
6. 挂在和更新过程都会执行
7. 这个方法  是在constructor 之后  render 之前  shoudcomponentupdata 之
8. 这个方法用于 把props 内部的参数更新到state 上  用得很呢少
9. 这个方法 由个返回值是一个对象用于 覆盖 state* 

## Context

1. 引入 createContext（） 方法   从react中

2. 从 createContext（） 方法中导出  Provider 和comsumer

3. 通过provider 创建自定义的provider 

   - 其中 自定义的provider 中有需要共享的数据
   - Provider 是一个组件，在自定义的provider 中用Provider 组件包裹住{this.props.children} ,
   - 其中provider 的value中可以设置用于共享的值，且是一个对象。

4. 用自定义的provider 包裹住所需要共享数据的最外层

5. 在需要拿到共享数据的地方用consumer组件包裹住

6. 在consumer 组件内部是一个方法{function（arg）{}} 并且该方法的参数就对应了provider 中的value的对象。

   

   > consumer 函数不能返回一个空或者空格  必须返回一个组件
   >
   > Comsumer组件内部不能包含多个 组件只能由一个组件 

## 钩子 Hook  新

 它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

### useState

```javascript
import React, { Component,useState  } from 'react';
import ReactDOM from 'react-dom'

const App= (props) => {
//state 没有
// hook   就是用 Fun 组件的 State  的问题
    // count state 状态
    //setCount 就是修改state的方法
const [count,setCount] = useState(-5)//初始值
  return (
    <div>
<h1>
   您点击了{count}次
    </h1>

    <button onClick={() => {setCount(count+1)}}>点击</button>

    </div>
  )
}
ReactDOM.render(<App/>,document.querySelector('#root'))
```

### useEffect 

```javascript
import React, { Component,useState ,useEffect} from 'react';
useEffect(() => {
  document.title=`你点击了${count}次`
})

```

> 相当于周期函数当执行了  Setstate的时候就会出发这个函数
> 包括第一次渲染的时候。

### useEffect   的清除函数 return 一个函数将在组件卸载之前执行

```javascript
useEffect(() => {
  document.title=`你点击了${count}次`
  if(count===0){
    return () => {
      document.title=`不动了`
    }
  }
})
```

> 注意：
>
> 1. 只在最顶层使用 Hook
> 2. 只在 React 函数中调用 Hook
> 3. Hook 不能在 class 组件中使用 

### userEffect 的第二个参数可以优化组件的效率

```javascript
useEffect(() => {
  document.title=`你点击了${count}次`
  if(count===0){
    return () => {
      document.title=`不动了`
    }
  }
},count)
//只有在count变化的情况下才会执行这个函数
```



## 高阶组件Higher Order Component

### 高阶组件基础

高阶组件就是一个返回一个组件的函数

```javascript
// 在 within  中
import React, { Component } from 'react'
import axios from 'axios'


export default  (MyComnent) => { //一个方法

  return class  extends Component { //返回一个组件
    ajax=(config) => {//定义一个公共的函数
      const baseTodo= axios.create({
        baseURL:'https://jsonplaceholder.typicode.com',
      })
     const  getTodo=baseTodo.get(config.url)
      .then(r => r.data)
      return getTodo
    }  
    render(){
      console.log(this.props)
        // 把原来的props 传递给 元组件
        //把处理过的参数和函数传递处理后传递给原组件
      return <MyComnent {...this.props} ajax={this.ajax} />
    }
      }
}

//在App  中
import within from './within'
  componentDidMount(){
      // 使用的时候 从this.props 中去取出使用
    this.props.ajax({url:'/todos'}).then((data) => {
     this.setState({
      todos:data
     })
    })
  }

export default within(App)
```

### 高阶组件的装饰器模式





## Redux



