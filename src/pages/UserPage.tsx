import UserForm from "../components/UserForm";
import type { User } from "../types/user";

const UsersPage = () => {
  const handleCreateUser = (data: User) => {
    console.log("User submitted:", data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          User Management
        </h2>

        <UserForm
          onSubmit={handleCreateUser}
          submitLabel="Create User"
        />
      </div>
    </div>
  );
};

export default UsersPage;
