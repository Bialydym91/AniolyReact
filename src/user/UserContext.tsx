import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

const UserContext = createContext<any>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<string | null>(localStorage.getItem('user'));
    const [users, setUsers] = useState<Map<string, string>>(new Map());


    useEffect(() => {
        const savedUsers = localStorage.getItem('users');
        if (savedUsers) {
            setUsers(new Map(JSON.parse(savedUsers)));
        }
    }, []);

    const login = (email: string) => {
        localStorage.setItem('user', email);
        setUser(email);
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    const register = (email: string, password: string) => {
        if (users.has(email)) {
            alert('Użytkownik już istnieje');
            return;
        }

        const newUsers = new Map(users);
        newUsers.set(email, password);
        setUsers(newUsers);


        localStorage.setItem('users', JSON.stringify(Array.from(newUsers.entries())));

        login(email);
    };

    return (
        <UserContext.Provider value={{ user, login, logout, register }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);
