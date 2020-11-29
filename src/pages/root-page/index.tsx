import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { regionsSelector } from '../../selectors/regions';
import { regionsActions } from '../../actions/regions';
import { STATUS } from '../../types/status';
import { ErrorPage } from '../error-page';
import { RegionsTable } from '../../components/regions-table';
import { PageLoader } from '../../components/page-loader';

import styles from './root-page.module.css';
import Title from 'antd/lib/typography/Title';
import { PageLayout } from '../../components/page-layout';

export const RootPage: React.FC = () => {
    const dispatch = useDispatch();
    const { requestStatus, requestError, regions } = useSelector(regionsSelector);

    const [search, setSearch] = useState('');
    const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }, [setSearch]);

    const filteredRegions = useMemo(() => {
        if (!regions?.length) {
            return [];
        }

        return regions.filter(
            (item) => item.fullname.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, regions]);

    useEffect(() => {
        if (requestStatus !== STATUS.SUCCESS) {
            dispatch(regionsActions.request());
        }
    }, [dispatch]);

    let content: JSX.Element;

    switch (requestStatus) {
        case STATUS.NONE:
        case STATUS.PENDING:
            content = <PageLoader />;
            break;
        case STATUS.SUCCESS:
            content = (
                <>
                    <Title>Регионы</Title>
                    <div className={ styles.inputWrapper }>
                        <Input
                            placeholder="Введите название департамента"
                            value={ search }
                            onChange={ handleSearchChange }
                        />
                    </div>
                    <RegionsTable items={ filteredRegions }/>
                </>
            );
            break;
        default:
            return (
                <ErrorPage error={ requestError }/>
            );
    }

    return (
        <PageLayout>
            { content }
        </PageLayout>
    );
};
