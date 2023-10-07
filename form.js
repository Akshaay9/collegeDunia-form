// Consts
let userDetails = {
  userName: "",
  userMobileNumber: "",
  userAddress: "",
  userQualification: "",
  userCourseChoosen: "",
  userCouseDuration: "",
  userCourseFee: "",
  userCourseStartDate: "",
  userCoursePaymentOption: "",
};

// Selectors
const userName = document.getElementById("name");
const userMobileNumber = document.getElementById("mobileNum");
const userAddress = document.getElementById("address");
const userQualification = document.getElementById("qualification");
const userCourseChoosen = document.getElementById("courseChoosen");
const userCouseDuration = document.querySelectorAll(
  'input[name="courseDuration"]'
);
const userCourseFee = document.getElementById("fee");
const userCourseStartDate = document.getElementById("startDate");
const userCoursePaymentOption = document.querySelectorAll(
  'input[name="paymentOption"]'
);
const userSumitForm = document.getElementById("submitForm");
const userClearForm = document.getElementById("clearnForm");

userName.addEventListener("input", (e) => {
  const value = e.target.value;
  userDetails.userName = value;
});

userMobileNumber.addEventListener("input", (e) => {
  const value = e.target.value;
  userDetails.userMobileNumber = value;
});

userAddress.addEventListener("input", (e) => {
  const value = e.target.value;
  userDetails.userAddress = value;
});

userQualification.addEventListener("input", (e) => {
  const value = e.target.value;
  userDetails.userQualification = value;
});

userCourseChoosen.addEventListener("change", (e) => {
  const value = e.target.value;
  userDetails.userCourseChoosen = value;
});

userCouseDuration.forEach((ele) => {
  ele.addEventListener("change", (e) => {
    userDetails.userCouseDuration = e.target.value;
  });
});

userCourseFee.addEventListener("change", (e) => {
  const value = e.target.value;
  userDetails.userCourseFee = value;
});

userCourseStartDate.addEventListener("change", (e) => {
  const value = e.target.value;
  userDetails.userCourseStartDate = value;
});
userCoursePaymentOption.forEach((ele) => {
  ele.addEventListener("change", (e) => {
    userDetails.userCoursePaymentOption = e.target.value;
  });
});

userSumitForm.addEventListener("click", () => {
  localStorage.setItem("form", JSON.stringify(userDetails));
  window.location.href = `bill-details.html`;
});

const clearForm = () => {
  userDetails = {
    userName: "",
    userMobileNumber: "",
    userAddress: "",
    userQualification: "",
    userCourseChoosen: "",
    userCouseDuration: "",
    userCourseFee: "",
    userCourseStartDate: "",
    userCoursePaymentOption: "",
  };
  userName.value = "";
  userMobileNumber.value = "";
  userAddress.value = "";
  userQualification.value = "";
  userCourseChoosen.value = "";
  userCouseDuration.value = "";
  userCourseFee.value = "";
  userCourseStartDate.value = "";
  userCoursePaymentOption.value = "";
};

userClearForm.addEventListener("click", clearForm);
