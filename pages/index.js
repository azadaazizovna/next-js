import MainLayout from "./components/MainLayout";
import Home from "../section/Home";
import About from "../section/About";
import Services from "../section/Services";
import App from "../section/App";
import Contact from "../section/Contact";


export default function index() {
    return (
        <MainLayout>
            <Home />
            <About />
            <Services />
            <App />
            <Contact />
        </MainLayout>
    )
}
