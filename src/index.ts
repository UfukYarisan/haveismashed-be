// ... existing code ...
const delay = async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
};

import express, { Request, Response } from "express";
delay().then(() => {
    const app = express();
    const port = process.env.PORT || 3000;

    // Middleware
    app.use(express.json());

    // Routes
    app.get("/", (_req: Request, res: Response) => {
        res.json({ message: "Hello world!" });
    });

    // Health check endpoint
    app.get("/health", (_req: Request, res: Response) => {
        res.json({ status: "ok", timestamp: new Date().toISOString() });
    });

    // Error handling middleware
    app.use((err: Error, _req: Request, res: Response, _next: Function) => {
        console.error(err.stack);
        res.status(500).json({ error: "Something went wrong!" });
    });

    // Start server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
