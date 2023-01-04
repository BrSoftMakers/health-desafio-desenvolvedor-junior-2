export default function formatTelephone(telephoneNumber: string) {
	return telephoneNumber = telephoneNumber
    	.replace(/[^\d]/g, "")
    	.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
}
