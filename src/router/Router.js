import { HashRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import Footage from "../components/footage/Footage";

const Router = () => {
    return (
        <HashRouter forceRefresh={true}>
            <Switch>
                <Route path='/' component={Dashboard} exact />
                <Route path='/footage' component={Footage} exact />
            </Switch>
        </HashRouter>
    )
}

export default Router