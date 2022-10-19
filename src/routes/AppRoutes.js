import { BrowserRouter, Route, Routes } from "react-router-dom";
import TheLayout from "../common/TheLayout";
import AutoMessage from "../pages/automeaning/AutoMessage";
import Login from "../pages/Login";
import Offer from "../pages/Offer";
import Trades from "../pages/trades/Trades";
function AppRouter() {
    return (
        <>
            {/* <BrowserRouter> */}
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login />} />

                    {/* <Route
                        exact
                        path="/dashboard"
                        render={(props) => (
                            <TheLayout {...props}>
                                <Dashboard />
                            </TheLayout>
                        )}
                    /> */}
                    <Route
                        exact
                        path="/trades"
                        element={<Trades />}
                    />
                    {/* <Route element={<TheLayout/>} ><Route path="/trades" component={<Trades/>}></Route></Route> */}

                    <Route
                        exact
                        path="/automeaning"
                        // render={(props) => (
                        //     <TheLayout {...props}>
                        //         <AutoMessage />
                        //     </TheLayout>
                        // )}
                        element={<AutoMessage />}
                    />
                    <Route
                        exact
                        path="/offer"
                        // render={(props) => (
                        //     <TheLayout {...props}>
                        //         <Offer />
                        //     </TheLayout>
                        // )}
                        element={<Offer />}
                    />

                </Routes>
            </BrowserRouter>
            {/* </BrowserRouter> */}
        </>
    );
}
export default AppRouter;
