import React, { ReactNode } from "react";
import { Layout } from "antd";

import styles from "./page-layout.module.css";
import { STATUS } from "../../types/status";
import { PageLoader } from "../page-loader";
import { ErrorPage } from "../../pages/error-page";
import { useSelector } from "react-redux";
import { regionsSelector } from "../../selectors/regions";

export const PageLayout: React.FC = ({ children }) => {
    const { requestStatus, requestError } = useSelector(regionsSelector);

    let content: ReactNode;

    switch (requestStatus) {
        case STATUS.NONE:
        case STATUS.PENDING:
            content = <PageLoader />;
            break;
        case STATUS.FAILURE:
            content = <ErrorPage error={requestError} />;
            break;
        default:
            content = children;
    }

    return <Layout className={styles.root}>{content}</Layout>;
};
