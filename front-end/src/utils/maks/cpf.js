export function maskCpf(cpf) {
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3-");
    cpf = cpf.replace(/^(\d{3})\D*(\d{3})\D*(\d{3})\D*(\d{2})$/g, "$1.$2.$3-$4");

    return cpf;
}

export function unmaskCpf(cpf) {
    return cpf.replace(/[^\d]/g, "");
}
