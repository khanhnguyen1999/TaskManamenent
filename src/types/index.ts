export interface Task {
    id: number;
    name: string;
    description: string;
    status: 'incomplete' | 'complete';
}

export interface TasksState {
    tasks: Task[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
