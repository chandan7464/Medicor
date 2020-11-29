const firstTime = angular.module("firstTime", ["ngRoute"]);

firstTime.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/firstLogin/welcome.html",
    })
    .when("/createClinic", {
      templateUrl: "pages/firstLogin/createClinic.html",
      controller: "clinicCtrl",
    })
    .when("/createDoctor", {
      templateUrl: "pages/firstLogin/addDoctor.html",
      controller: "docCtrl",
    })
    .when("/createStaff", {
      templateUrl: "pages/firstLogin/addStaff.html",
      controller: "crtStaffCtrl",
    })
    .when("/complete", {
      templateUrl: "pages/firstLogin/done.html",
    })
    .otherwise({
      template: "<p class='error'>Error 404! Page not found</p>",
    });
});

firstTime.controller("clinicCtrl", function () {
  fTop();
  elem("frmClinic").addEventListener("submit", function (e) {
    e.preventDefault();
    reDirect("#!/createDoctor");
  });
});
firstTime.controller("docCtrl", function () {
  fTop();
  elem("frmDoc").addEventListener("submit", function (e) {
    e.preventDefault();
    reDirect("#!/createStaff");
  });
});
firstTime.controller("crtStaffCtrl", function () {
  fTop();
  elem("frmStaff").addEventListener("submit", function (e) {
    e.preventDefault();
    reDirect("#!/complete");
  });
});
