import React from "react";

import { ErrorBoundary } from "../error-boundary";

export const App: React.FC = ({ children }) => {
    return <ErrorBoundary>{children}</ErrorBoundary>;
};
