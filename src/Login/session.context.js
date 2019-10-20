import React from 'react';

const SessionContext = React.createContext({
    user: null,
    setUser: () => {}
});


export default SessionContext;