
export class MissingParamError extends Error {
    constructor(paramName: string) {
        super(`${paramName} is required`)
        this.name = 'MissingParamError'
    }
}