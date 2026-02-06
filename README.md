# User Management Dashboard

A User Management Dashboard built with **React, TypeScript, and Tailwind CSS**, supporting full **CRUD operations** using a hosted mock backend (**MockAPI.io**).  
The form structure is **configuration-driven**, allowing new fields to be added without changing form logic.

---

## 🚀 Tech Stack
- React + TypeScript
- Vite
- Tailwind CSS
- React Hook Form + Zod
- MockAPI.io (REST API)

---

## 📦 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/user-management-dashboard.git
cd user-management-dashboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add environment variables
Create a `.env` file in the project root:

```env
VITE_API_URL=https://<your-mockapi-project>.mockapi.io/api/v1
```

Replace the URL with your MockAPI project base URL.

### 4. Run the application
```bash
npm run dev
```

The app will be available at:
```
http://localhost:5173
```

---

## 🧩 Adding New Fields Using `formConfig`

The user form is generated dynamically using a configuration file.

### 1. Update `formConfig`
`src/config/formConfig.ts`

```ts
export const formConfig = [
  { name: "firstName", label: "First Name", type: "text" },
  { name: "lastName", label: "Last Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "role", label: "Role", type: "text" },
];
```

To add a new field (example: `phoneNumber`), add one line:

```ts
{ name: "phoneNumber", label: "Phone Number", type: "text" }
```

---

### 2. Update MockAPI
- Open your MockAPI project
- Add a new field to the `users` resource:
  - **Field name:** `phoneNumber`
  - **Type:** String

---

### 3. Update User type
`src/services/userApi.ts`
```ts
export type User = {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phoneNumber?: string;
};
```

---

### 4. Update validation schema
`UserForm.tsx`
```ts
phoneNumber: z.string().optional(),
```

That’s it — the form UI, validation, create, and edit flows update automatically.

---

## 🧠 Assumptions & Design Decisions

- The form is configuration-driven using a `formConfig` file for scalability.
- MockAPI.io is used instead of a custom backend for fast setup and deployment.
- API calls are abstracted into a service layer for clean separation of concerns.
- Form validation is handled using React Hook Form with Zod.
- User IDs are treated as strings, as provided by MockAPI.
- The UI prioritizes clarity and usability over heavy styling.

---

## 🌐 Deployment

- Frontend deployed on **Vercel**
- Backend powered by **MockAPI.io**
