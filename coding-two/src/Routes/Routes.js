import { Route, Switch } from "react-router-dom";
import Form from "../Component/Form";
import Home from "../Component/Home";

export default function Routes() {
    return <>
        <Switch>
            <Route exact path="/form">
                <Form/>
            </Route>
            <Route exact path="/">
                <Home/>
            </Route>
       </Switch>
        </>
}