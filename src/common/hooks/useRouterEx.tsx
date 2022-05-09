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

    const removeQuery = (queryKey: string) => {
        if (
            router.query === undefined ||
            !Object.keys(router.query).includes(queryKey)
        ) {
            throw new Error(
                '현재 urlQuery 에 해당 querykey가 존재하지 않습니다.',
            );
        }

        const urlQueries = router.query as Values;
        delete urlQueries[queryKey];
        router.push({
            pathname: asPathWithoutQueries,
            query: { ...urlQueries },
        });
    };

    return {
        asPathWithoutQueries,
        pushQuery,
        replaceQuery,
        removeQuery,
    };
};
