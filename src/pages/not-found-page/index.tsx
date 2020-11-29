import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => (
    <Result
        status="404"
        title="404"
        subTitle="Страница не найдена"
        extra={
            <Button type="primary">
                <Link to="/">На главную</Link>
            </Button>
        }
    />
);
