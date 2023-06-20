import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfFormat'
})
export class CpfFormatPipe implements PipeTransform {
  transform(value: string): string {
    // Remove os pontos e espaços do CPF
    const cpf = value.replace(/\D/g, '');
    return cpf;
  }
}
