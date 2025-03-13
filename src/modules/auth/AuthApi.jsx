const API_URL = "/data/Users.json"; 

const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Erreur lors du chargement des utilisateurs");
    return await response.json();
  } catch (error) {
    console.error("Erreur de chargement des utilisateurs:", error);
    throw new Error("Impossible de récupérer les données");
  }
};

// 🔹 Connexion utilisateur
export const loginUser = async (email, password) => {
  try {
    const usersData = await fetchUsers();
    const user = usersData.users.find((u) => u.email === email && u.password === password);
    if (!user) throw new Error("Identifiants incorrects");

    return { user, token: "fake-jwt-token" };
  } catch (error) {
    throw new Error("Erreur de connexion");
  }
};

// 🔹 Inscription utilisateur
export const registerUser = async (name, email, password, role) => {
  try {
    const usersData = await fetchUsers();
    if (usersData.users.some((u) => u.email === email)) {
      throw new Error("L'email est déjà utilisé");
    }

    const newUser = { id: usersData.users.length + 1, name, email, password, role };
    usersData.users.push(newUser);

    return { user: newUser, token: "fake-jwt-token" };
  } catch (error) {
    throw new Error("Erreur d'inscription");
  }
};
