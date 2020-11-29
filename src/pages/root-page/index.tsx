import React, { useEffect, useState } from "react";
import { Layout } from "antd";

import { getData } from "../../utils/api";

export const RootPage: React.FC = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then(setData);
    }, []);

    return (
        <Layout>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </Layout>
    );
};
