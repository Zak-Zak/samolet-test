import React, { useEffect } from "react";
import { Layout, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { regionsSelector } from '../../selectors/regions';
import { regionsActions } from '../../actions/regions';
import { STATUS } from '../../types/status';
import { ErrorPage } from '../error-page';

export const RootPage: React.FC = () => {
    const dispatch = useDispatch();
    const { requestStatus, requestError, regions } = useSelector(regionsSelector);

    useEffect(() => {
        dispatch(regionsActions.request());
    }, [dispatch]);

    let content: JSX.Element;

    switch (requestStatus) {
        case STATUS.NONE:
        case STATUS.PENDING:
            content = (<Spin />);
            break;
        case STATUS.FAILURE:
            content = (<ErrorPage error={ requestError }/>);
            break;
        case STATUS.SUCCESS:
            content = (<pre>{JSON.stringify(regions, null, 2)}</pre>);
    }

    return (
        <Layout>
            { content }
        </Layout>
    );
};
