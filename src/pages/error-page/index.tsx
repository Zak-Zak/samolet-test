import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

interface ErrorPageProps {
    error: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
    return (
        <Result
            status="error"
            title="Ошибка"
            subTitle={error}
            extra={
                <Button type="primary">
                    <Link to="/">На главную</Link>
                </Button>
            }
        />
    );
};
