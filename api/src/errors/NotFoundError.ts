export class NotFoundError extends Error {
	code: string;

	constructor(recurso?: string) {
		super(recurso ?  `${recurso}` : 'Recurso não encontrado');
		this.name = 'NotFoundError';
		this.code = 'P2025';
	}
}
