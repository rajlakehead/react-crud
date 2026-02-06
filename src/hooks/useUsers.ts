import { useEffect, useState } from "react";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../api/users.api";
import type { User } from "../types/user";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await getUsers();
      setUsers(res.data);
    } catch {
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (user: User) => {
    const res = await createUser(user);
    setUsers((prev) => [...prev, res.data]);
  };

  const editUser = async (id: number, user: User) => {
    const res = await updateUser(id, user);
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? res.data : u))
    );
  };

  const removeUser = async (id: number) => {
    await deleteUser(id);
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    loading,
    error,
    addUser,
    editUser,
    removeUser,
  };
};
