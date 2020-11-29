import React from "react";
import { ErrorPage } from "../../pages/error-page";

type ErrorBoundaryProps = {
    children: React.ReactNode;
};

type ErrorBoundaryState = {
    hasError: boolean;
    error: string;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
    static getDerivedStateFromError(error: Error) {
        return {
            hasError: true,
            error: error.message,
        };
    }

    state: ErrorBoundaryState = {
        hasError: false,
        error: "",
    };

    render() {
        if (this.state.hasError) {
            return <ErrorPage error={this.state.error} />;
        }

        return this.props.children;
    }
}
