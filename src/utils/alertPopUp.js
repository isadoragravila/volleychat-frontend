import Swal from "sweetalert2";

export function alertPopUp(error) {
	Swal.fire({
		title: "Oops...",
		text: error,
		icon: "error",
		confirmButtonColor: "#142B73"
	});
}