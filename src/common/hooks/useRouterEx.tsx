import { useRouter } from 'next/router';

type Values = {
    [key: string]: string;
};

export const useRouterEx = () => {
    const router = useRouter();

    const asPathWithoutQueries = router.asPath.split('?')[0];

    const pushQuery = (queriesObject: Values) => {
        router.push({
            pathname: asPathWithoutQueries,
            query: { ...router.query, ...queriesObject },
        });
    };
    const replaceQuery = (queriesObject: Values) => {
        router.push({
            pathname: asPathWithoutQueries,
            query: { ...queriesObject },
        });
    };
    return {
        asPathWithoutQueries,
        pushQuery,
        replaceQuery,
    };
};
