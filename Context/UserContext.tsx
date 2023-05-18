// import React, { createContext } from 'react';
// import { useLocalStorage } from '../components/useLocalStorage';
// import { User } from '../products/typeUser';

// const UserContext = createContext();

// const UserProvider: React.FC = ({ children }) => {
//   const [user, setUser] = React.useState<User>({ name: '', address: '' })

//   React.useEffect(() => {


//   }, [])
//   return (
//     <UserContext.Provider value={user}>
//       {children}
//     </UserContext.Provider>
//   )
// }