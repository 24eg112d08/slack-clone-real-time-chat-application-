export const register = (req, res) => res.json({ message: "register" });
export const login = (req, res) => res.json({ message: "login" });
export const logout = (req, res) => res.json({ message: "logout" });
export const getCurrentUser = (req, res) => res.json({ message: "current-user" });
export const refreshToken = (req, res) => res.json({ message: "refresh-token" });