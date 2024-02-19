import Swal from "sweetalert2";

const TIMER_FAILED_SWAL = 5000;

export function getSwal(info) {
  return Swal.fire({
    ...info
  });
}

export function getFailureSwal(text) {
  return Swal.fire({
    title: "Failed to succeed",
    text: text,
    icon: "error",
    timer: TIMER_FAILED_SWAL,
  });
}
