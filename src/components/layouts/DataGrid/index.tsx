import { ReactElement, ReactNode } from 'react';

const Title = ({ children }: { children: ReactNode }) => {
    return <h2>{children}</h2>;
};

const SubTitle = ({ children }: { children: ReactNode }) => {
    return <h3>{children}</h3>;
};

const DataGrid = ({
    children,
}: {
    children: ReactElement | ReactElement[];
}) => {
    return <div>{children}</div>;
};

DataGrid.SubTitle = SubTitle;

DataGrid.Title = Title;

export default DataGrid;
