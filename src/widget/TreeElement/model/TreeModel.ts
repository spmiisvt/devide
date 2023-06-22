
export interface TreeModel {
    id: number;
    label: string;
    children?: TreeModel[];
    selected?: boolean;
}