import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App'
import Header from './layout/header'
import Container from './layout/container'
// import Footer from './layout/footer'
import routes from './api/routes'
const SubRoute = (props) => {//自调用
  return (
    <>
      {props.apis.map((rou) => {
        if (rou.children) {
          return <SubRoute apis={rou.children} />
        }
        return <Route path={rou.path} exact={rou.exact} component={rou.component} />
      })}
    </>
  )
}

const MyRouter = () => {
  return (
    <Router>
      <App>
        <Header />
        <Container >
          <Switch>
            <SubRoute apis={routes.apis} />
          </Switch>
        </Container>
        {/* <Footer /> */}
      </App>
    </Router>
  )
}

export default MyRouter
