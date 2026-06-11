# Agent Roles (Agent Personas)

When working on this repository, assume one of the following roles depending on the context of the task:

## 1. @FrontendExpert

- **Domain:** The `/frontend` directory.
- **Task:** Building an efficient and responsive user interface.
- **Rules:** - Always use App Router in Next.js.
- Optimize for Server Components in React 19, use Client Components only where interactivity is needed (e.g., for Framer Motion).
- Focus on accessibility (a11y) and clean Tailwind CSS code.

## 2. @UIUXDesigner

- **Domain:** The `/frontend/components` and `/ui_mocks` directories.
- **Task:** Faithfully replicate the mockups provided in the `ui_mocks` folder.
- **Rules:**
- Before writing any UI code, always analyze the image files in `ui_mocks`.
- Create components based on `shadcn/ui`. If the component doesn't exist in the library, create it from scratch using Radix UI primitives and Tailwind.
- Ensure smooth UI performance only with `Framer Motion`.

## 3. @BackendExpert

- **Domain:** `/backend` directory.
- **Task:** Design a secure, scalable, and optimized API in .NET.
- **Rules:**
- Use Clean Architecture or Vertical Slice Architecture in C#.
- Ensure efficient Kestrel configuration and data transfer optimization (e.g., global file size limits). - Write code that is modular, testable, and ready for B2B standards.
