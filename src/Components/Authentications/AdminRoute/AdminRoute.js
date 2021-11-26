import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    if (isLoading) {
        return <>
            <div class="flex justify-center items-center">
                <div
                    class="
                                            animate-spin
                                            rounded-full
                                            h-32
                                            w-32
                                            border-t-2 border-b-2 border-purple-500
                                            "
                ></div>
            </div>
        </>
    }

    console.log(admin)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;