import type { User } from "../types/user";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserList = ({ users, onEdit, onDelete }: Props) => {
  if (users.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
        <p className="text-slate-500">No users found. Add one to get started.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-1 xl:grid-cols-2">
      {users.map((user) => (
        <div
          key={user.id}
          className="group bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-700 font-bold text-lg border border-blue-50/50">
                {user.firstName[0]}
                {user.lastName[0]}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg leading-tight">
                  {user.firstName} {user.lastName}
                </h3>
                <div className="flex flex-col mt-1 space-y-0.5">
                  <span className="text-sm text-slate-500 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {user.email}
                  </span>
                  <span className="text-sm text-slate-500 flex items-center gap-1.5">
                     <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {user.phone}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity sm:opacity-100">
               <button
                  onClick={() => onEdit(user)}
                  className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  aria-label="Edit"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button
                  onClick={() => onDelete(user.id!)}
                  className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  aria-label="Delete"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
