export interface AxiosResponse<T> {
	data: T;
	status: number;
	msg: string;
	err: string;
}
