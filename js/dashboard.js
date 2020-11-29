const activeMenu = (activeState) => {
  let navNum = activeState - 1;
  const menuItems = document.querySelectorAll(".menuContainer .menuItem");

  menuItems.forEach(function (item, count) {
    item.classList.remove("active");
    if (count == navNum) {
      item.classList.add("active");
    }
  });
};

const mainApp = angular.module("dashboardApp", ["ngRoute"]);

mainApp.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/dashboard/getStarted.html",
      controller: "getStartedCtrl",
    })
    .when("/queue", {
      templateUrl: "pages/dashboard/queue.html",
      controller: "queueCtrl",
    })
    .when("/appointment", {
      templateUrl: "pages/dashboard/appointment.html",
      controller: "appointmentCtrl",
    })
    .when("/patients", {
      templateUrl: "pages/dashboard/patients.html",
      controller: "patientsCtrl",
    })
    .when("/business", {
      templateUrl: "pages/dashboard/business.html",
      controller: "businessCtrl",
    })
    .when("/settings", {
      templateUrl: "pages/dashboard/settings.html",
      controller: "settingsCtrl",
    })
    .when("/help", {
      templateUrl: "pages/dashboard/help.html",
      controller: "helpCtrl",
    })
    .otherwise({
      template: "<p class='error'>Error 404! Page not found</p>",
    });
});

mainApp
  .controller("getStartedCtrl", function () {
    console.log("Home");
    activeMenu(1);
  })
  .controller("queueCtrl", function () {
    console.log("queueCtrl");
    activeMenu(2);
  })
  .controller("appointmentCtrl", function () {
    console.log("appointmentCtrl");
    activeMenu(3);
  })
  .controller("patientsCtrl", function () {
    console.log("patientsCtrl");
    activeMenu(4);
  })
  .controller("businessCtrl", function () {
    console.log("businessCtrl");
    activeMenu(5);
  })
  .controller("settingsCtrl", function () {
    console.log("settingsCtrl");
    activeMenu(6);  
  })
  .controller("helpCtrl", function () {
    console.log("helpCtrl");
    activeMenu(7);
  });
