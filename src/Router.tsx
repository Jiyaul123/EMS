import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './Auth/Auth'
import IRouter from './interface/IRouter';
import empRoutes from './routes/empRoutes/empRoutes';
import PrivateRoutes from './view/Private.index';
import Login from './view/public/Login/Login';
import LoginBox from './view/public/Login/LoginBox';


function PrivateRouter({ children }: any) {
    const auth = Auth.checkAuth();
    return auth ? <PrivateRoutes /> : <Navigate to="/login" />
}

const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/emp-dash" element={<PrivateRouter />} />
                {empRoutes.map((data: IRouter) => {
                    return (
                        <Route
                            path={data.path + "/*"}
                            element={<data.element />}
                        />
                    )
                })}
                <Route path="/login" element={<LoginBox />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </>
    )
}

export default MainRouter