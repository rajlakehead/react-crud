import { useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import { useUsers } from "../hooks/useUsers";
import type { User } from "../types/user";

const UsersPage = () => {
  const { users, loading, error, addUser, editUser, removeUser } = useUsers();
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleSubmit = (data: User) => {
    if (editingUser?.id) {
      editUser(editingUser.id, data);
      setEditingUser(null);
    } else {
      addUser(data);
    }
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8 items-start">
      {/* Form Section */}
      <div className="lg:col-span-4 bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-24">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            {editingUser ? "Edit User" : "Add New User"}
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            {editingUser
              ? "Update the user's details below."
              : "Fill in the information to create a new user."}
          </p>
        </div>
        
        <UserForm
          initialValues={editingUser || undefined}
          onSubmit={handleSubmit}
          submitLabel={editingUser ? "Update User" : "Create User"}
        />
        
        {editingUser && (
           <button 
             onClick={() => setEditingUser(null)}
             className="w-full mt-3 text-sm text-slate-500 hover:text-slate-700 py-2"
           >
             Cancel Editing
           </button>
        )}
      </div>

      {/* List Section */}
      <div className="lg:col-span-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Users Directory</h2>
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {users.length} Users
          </span>
        </div>

        {loading && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 border-dashed">
            <p className="text-slate-500">Loading users...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg border border-red-200">
            {error}
          </div>
        )}

        {!loading && !error && (
          <UserList
            users={users}
            onEdit={setEditingUser}
            onDelete={removeUser}
          />
        )}
      </div>
    </div>
  );
};

export default UsersPage;
