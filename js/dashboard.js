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

const showAddDoc = (item) => {
  elem(item).classList.add("allTimeShow");
};
const remAddDoc = (item) => {
  elem(item).classList.remove("allTimeShow");
};

const tvMode = (element) => {
  if (!document.fullscreenElement) {
    element.innerHTML = "Switch Back to Normal Mode";
    if (
      $(".dashboard").classList[$(".dashboard").classList.length - 1] !=
      "tvMode"
    ) {
      if ($(".menuContainer").requestFullscreen) {
        $(".menuContainer").requestFullscreen();
      } else if ($("main").webkitRequestFullscreen) {
        $(".menuContainer").webkitRequestFullscreen();
      } else if ($(".menuContainer").msRequestFullscreen) {
        $(".menuContainer").msRequestFullscreen();
      }

      $(".dashboard").classList.add("tvMode");
    } else {
      location.reload();
    }
  } else {
    location.reload();
  }
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
    .when("/doctors", {
      templateUrl: "pages/dashboard/addDoctors.html",
      controller: "docCtrl",
    })
    .otherwise({
      template: "<p class='error'>Error 404! Page not found</p>",
    });
});

mainApp
  .controller("getStartedCtrl", function () {
    activeMenu(1);
  })
  .controller("queueCtrl", function () {
    activeMenu(2);
  })
  .controller("appointmentCtrl", function () {
    activeMenu(3);
  })
  .controller("patientsCtrl", function () {
    activeMenu(4);
  })
  .controller("businessCtrl", function () {
    activeMenu(5);
  })
  .controller("settingsCtrl", function () {
    activeMenu(6);
  })
  .controller("helpCtrl", function () {
    activeMenu(7);
  })
  .controller("docCtrl", function () {
    activeMenu(0);
  });
