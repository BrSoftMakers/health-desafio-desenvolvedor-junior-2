import React from "react";

export default function formatTelephone(event: React.FocusEvent<HTMLInputElement>) {
	return event.currentTarget.value = event.currentTarget.value
    	.replace(/[^\d]/g, "")
    	.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
}
