const userDetails = JSON.parse(localStorage.getItem("form"));
const {
  userName,
  userMobileNumber,
  userAddress,
  userQualification,
  userCourseChoosen,
  userCouseDuration,
  userCourseFee,
  userCourseStartDate,
  userCoursePaymentOption,
} = userDetails || {};

document.getElementById("name").innerHTML = userName;
document.getElementById("mobileNum").innerHTML = userMobileNumber;
document.getElementById("address").innerHTML = userAddress;
document.getElementById("qualification").innerHTML = userQualification;
document.getElementById("courseChoosen").innerHTML = userCourseChoosen;
document.getElementById("courseDuration").innerHTML = userCouseDuration;
document.getElementById("fee").innerHTML = userCourseFee;
document.getElementById("startDate").innerHTML = userCourseStartDate;
document.getElementById("paymentOption").innerHTML = userCoursePaymentOption;

document
  .getElementsByClassName("logOutBtn")[0]
  .addEventListener("click", () => {
    window.location.href = `/index.html`;
  });
