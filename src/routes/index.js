import Home from '~/Pages/Home';
import Register from "~/Pages/Register";

// public routes
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/register', component: Register}

]

const privateRoutes=[

]

export {publicRoutes , privateRoutes}