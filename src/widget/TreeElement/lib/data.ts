
export interface IDataTree {
    id: string;
    label: string;
    children?: IDataTree[];
    selected?: boolean;
}

export const DataTree: IDataTree[] = [
    {
        id: '1',
        label: "model",
        children: [
            {
                id: '2',
                label: 'Meat',
            },
            {
                id: '3',
                label: 'Salad',
                children: [
                    {
                        id: '4',
                        label: 'Tomatoes'
                    },
                    {
                        id: "5",
                        label: "Cabbage"
                    }
                ]
            }
        ]
    },
    {
        id: '6',
        label: "services",
        children: [
            {
                id: '7',
                label: 'user',
            },
            {
                id: '8',
                label: 'auth',
                children: [
                    {
                        id: '9',
                        label: 'Tomatoes'
                    },
                    {
                        id: "10",
                        label: "Cabbage"
                    }
                ]
            }
        ]
    }
]