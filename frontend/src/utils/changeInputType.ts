import formatTelephone from "./formatTelephone";

export default function changeInputType(inputRef: React.FocusEvent<HTMLInputElement>, selectValue: React.RefObject<HTMLSelectElement>) {

	const input = inputRef.target;
    const value = selectValue.current!.value;

    switch (value) {
        case "idade":
            input.type = "number";
            break;

        case "especie":
            input.type = "text";
            input.pattern = String(/gato|cachorro|cao/gi);
            break;

        case "telefoneDono":
			input.type = "tel";
			input.addEventListener("blur", () => input.value = formatTelephone(input.value));
            
        default:
            input.type = "text";
            break;
    }
}