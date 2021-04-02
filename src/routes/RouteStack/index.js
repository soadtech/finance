import Login from "../../containers/Login";
import SplashScreen from "../../containers/SplashScreen";
import Home from "../../containers/Home"
import Income from "../../containers/Income"
import Outcome from "../../containers/Outcome"
import AddAction from "../../containers/AddAction";

export default [
    {
        path: "SplashScreen",
        component: SplashScreen
    },
    {
        path: "Login",
        component: Login
    },
    {
        path: "Home",
        component: Home
    },
    {
        path: "Income",
        component: Income
    },
    {
        path: "Outcome",
        component: Outcome
    },
    {
        path: "AddAction",
        component: AddAction
    }
]
