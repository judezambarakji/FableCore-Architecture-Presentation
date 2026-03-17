import { ReactNode } from 'react';

export enum SlideType {
    TITLE = 'TITLE',
    CONTENT = 'CONTENT',
    DIAGRAM = 'DIAGRAM',
    CHART = 'CHART',
    LIST = 'LIST'
}

export interface SlideContent {
    id: string;
    type: SlideType;
    title: string;
    subtitle?: string;
    content?: ReactNode;
    bullets?: string[];
    footer?: string;
}

export interface ChartDataPoint {
    name: string;
    value: number;
    description?: string;
}