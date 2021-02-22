import {Switch, Route, Router} from 'react-router-dom'
import React from 'react'

const NoMatchPage = () => {return (<h3>404 - Not found</h3>);};

export default () => {
    return (
      <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/:Move' component={SinglePage} />
            <Route component={NoMatchPage} /> 
        </Switch>
      </div>
        
    )
}