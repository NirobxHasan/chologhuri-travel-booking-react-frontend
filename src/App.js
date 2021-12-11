import logo from './logo.svg';
import './App.css';
import NavBar from './components/Shared/NavBar/NavBar';
import HeaderBanner from './components/Home/HeaderBanner/HeaderBanner';
import Services from './components/Home/Services/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage/HomePage';
import NotFound from './components/Shared/NotFound/NotFound';
import { Placeholder } from 'react-bootstrap';
import PlaceBooking from './components/Pages/PlaceBooking/PlaceBooking';
import Login from './components/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrder from './components/Pages/MyOrder/MyOrder';
import ManageAllOrder from './components/Pages/ManageAllOrder/ManageAllOrder';
import AddNewService from './components/Pages/AddNewService/AddNewService';
import Footer from './components/Shared/Footer/Footer';
import Registration from './components/Login/Registration/Registration';
import AddReviews from './components/Pages/AddReviews/AddReviews';
import AddBlog from './components/Blogs/AddBlog/AddBlog';
import Blogs from './components/Blogs/Blogs/Blogs';
import BlogDetails from './components/Blogs/BlogDetails/BlogDetails';
import Transports from './components/Home/Transport/Transports/Transports';
import BookedTransport from './components/Pages/BookedTransport/BookedTransport';
import MapDirection from './components/Pages/MapDirection/MapDirection';

function App() {
    return (
        <div>
            <AuthProvider>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/home">
                            <HomePage />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/registration">
                            <Registration />
                        </Route>
                        <PrivateRoute path="/placebooking/:id">
                            <PlaceBooking />
                        </PrivateRoute>
                        <PrivateRoute path="/myBooking">
                            <MyOrder />
                        </PrivateRoute>
                        <PrivateRoute path="/allBooking">
                            <ManageAllOrder />
                        </PrivateRoute>
                        <PrivateRoute path="/addnewservice">
                            <AddNewService />
                        </PrivateRoute>
                        <PrivateRoute path="/addreview">
                            <AddReviews />
                        </PrivateRoute>

                        <PrivateRoute exact path="/bookedTransport">
                            <BookedTransport />
                        </PrivateRoute>

                        <Route exact path="/map">
                            <MapDirection />
                        </Route>

                        <PrivateRoute path="/addblog">
                            <AddBlog />
                        </PrivateRoute>
                        <Route exact path="/blogs">
                            <Blogs />
                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetails />
                        </Route>

                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
