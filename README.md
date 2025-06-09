# Node-TypeScript-Docker Backend Boilerplate

This project is a template for getting started quickly with TypeScript and Node.js. It makes it easy to set up development and production environments and supports Docker.

## 🚀 Features

-   Node.js development with TypeScript
-   Docker and Docker Compose support
-   VS Code/Cursor integration
-   Hot-reload and debugging support for Docker instance
-   Code formatting with Prettier
-   Separate configurations for development and production environments
-   Modular project structure

### Technical Specifications

-   **Node.js Version**: 22.x (Alpine-based Docker image)
-   **TypeScript Configuration**:
    -   Extends `@tsconfig/node22/tsconfig.json`
    -   Target: ES2024
    -   Module: NodeNext
    -   Module Resolution: NodeNext
    -   Strict Mode: Enabled
    -   Source Maps: Enabled
-   **Operating System Support**:
    -   Linux (Alpine)
    -   macOS
    -   Windows (WSL2 recommended)
-   **Development Tools**:
    -   VS Code/Cursor with TypeScript support
    -   Docker Desktop
    -   Node.js 22.x or higher

## 📁 Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── models/         # Data models
├── routes/         # API routes
├── services/       # Business logic services
└── index.ts        # Application entry point
```

## 🛠️ Requirements

-   Node.js 22+
-   Docker and Docker Compose
-   VS Code/Cursor (recommended)

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone [repo-url]
cd haveismashed-be
```

2. Install dependencies:

```bash
npm install
```

3. Start the development environment:

```bash
docker compose --profile dev up --build
```

4. Start the production environment:

```bash
docker compose --profile prod up --build
```

## 🔧 Development

### Development Mode

-   Hot-reload enabled
-   Debug port (9229) open
-   Source code mounted into container
-   Run with \`npm run dev:docker\`

### Production Mode

-   Optimized build
-   Debug disabled
-   Run with \`npm start\`

## 🐛 Debugging

To debug with VS Code/Cursor:

1. Select the "Debug Docker Attach Mode" configuration in VS Code
2. Set your breakpoints
3. Press F5 to start debug mode

## 📝 Code Formatting

The project is configured with Prettier. Auto-formatting is enabled in VS Code/Cursor.

## 🔄 Docker Commands

-   Start in development mode:

```bash
docker compose --profile dev up
```

-   Start in production mode:

```bash
docker compose --profile prod up
```

-   Stop the containers:

```bash
docker compose down
```

-   Rebuild containers:

```bash
docker compose --profile dev up --build
```

## 📦 Build

To compile TypeScript code to JavaScript:

```bash
npm run build
```

## 🔄 Future Improvements

-   **Debugging Enhancement**: Current implementation uses a delay mechanism to allow debugger attachment during application startup. This is a temporary solution to address the source map synchronization issue with `inspect-brk`. A more robust solution would involve proper source map configuration and debugging setup to enable immediate breakpoint binding without artificial delays.

-   **Code Quality Tools**: Integration of additional development tools such as ESLint for linting, Husky for git hooks can be added.
