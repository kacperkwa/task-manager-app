export type Board = {
	id: string;
	title: string;
	columns: Column[];
	isCollaborative: boolean | null;
};

export type Column = {
	id: string;
	name: string;
	tasks: Task[];
};

export type ColumnName = {
	id: string;
	name: string;
};

export type Task = {
	id: string;
	name: string;
	description: string;
	subtasks: Subtask[];
	status: string;
};

export type Subtask = {
	id: string;
	name: string;
	isDone: boolean;
};
