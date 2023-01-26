export function maskPhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/\D/g, "");
    phoneNumber = phoneNumber.replace(/^(\d{2})(\d)/g, "($1) $2");
    phoneNumber = phoneNumber.replace(/(\d)(\d{4})$/, "$1-$2");
    return phoneNumber;
}

export function unmaskPhoneNumber(phoneNumber) {
    return phoneNumber.replace("[^d]", "");
}
