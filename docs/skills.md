# Technology Guidelines (Tech Stack Skills)

## Frontend Stack

- **Framework:** Next.js 16.2.9
- We exclusively use the App Router (`/app`).
- We favor Server Actions for data mutations over traditional API endpoints for internal components.
- **Library:** React 19
- We actively use new hooks (e.g., `useActionState`, `useFormStatus`).
- We eliminate unnecessary `useMemo` and `useCallback` when the React Compiler can handle them.
- **Styling:** Tailwind CSS + shadcn/ui
- We don't write custom CSS unless absolutely necessary. We use utility classes.
- We structure our code so that component variants are managed by `cva` (Class Variance Authority). \* **Animations:** Framer Motion
- Entry/exit animations (AnimatePresence) for all dynamic list items and page transitions.
- **Language:** TypeScript
- Strict mode enabled.
- No use of `any`. We prefer fully typed interfaces for API props and responses.
