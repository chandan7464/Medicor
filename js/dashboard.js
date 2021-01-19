/* Custom Functions */
const activeMenu = (activeState, sub = 0) => {
  let navNum = activeState - 1;
  let subNavNum = sub - 1;
  const menuItems = document.querySelectorAll(".menuContainer .menuItem");
  const sumMenuItems = document.querySelectorAll(
    ".menuContainer .menuItemDropDown .links"
  );

  menuItems.forEach((item, count) => {
    item.classList.remove("active");
    if (count == navNum) {
      item.classList.add("active");
    }
  });
  sumMenuItems.forEach((item, count) => {
    item.classList.remove("sub_active");
    if (count == subNavNum) {
      item.classList.add("sub_active");
    }
  });
};

const findTheInitials = (name) => {
  name = name.split("");
  const _firstInitial = name[0];
  let _lastInitial = name[1];
  name.forEach((item, count) => {
    if (item == " ") {
      _lastInitial = name[count + 1];
    }
  });
  return `${_firstInitial}${_lastInitial}`;
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

const dropDownMenu = (element) => {
  const selElement = document.getElementById(element);
  let menuDropItems = selElement.childNodes;
  let _itemCounter = 0;
  menuDropItems.forEach((item) => {
    if (item.className != undefined) {
      let _tempClassName = "";
      for (let counter = 0; counter <= 4; counter++) {
        _tempClassName += item.className[counter];
      }
      if (_tempClassName == "links") {
        _itemCounter++;
      }
    }
  });
  let OpenHeight = 40 * _itemCounter;
  if (selElement.style.height < OpenHeight) {
    selElement.style.height = `${OpenHeight}px`;
  } else {
    selElement.removeAttribute("style");
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
    .when("/ScheduledAppointment", {
      templateUrl: "pages/dashboard/scheduledAppointment.html",
      controller: "ScheduledAppointmentCtrl",
    })
    .when("/FollowUpAppointment", {
      templateUrl: "pages/dashboard/fuAppointment.html",
      controller: "FollowUpAppointmentCtrl",
    })
    .when("/patients", {
      templateUrl: "pages/dashboard/patients.html",
      controller: "patientsCtrl",
    })
    .when("/business/:page", {
      templateUrl: "pages/dashboard/business.html",
      controller: "businessCtrl",
    })
    .when("/ClinicSettings", {
      templateUrl: "pages/dashboard/clinicSettings.html",
      controller: "ClinicSettingsCtrl",
    })
    .when("/doctors", {
      templateUrl: "pages/dashboard/addDoctors.html",
      controller: "docCtrl",
    })
    .when("/staff", {
      templateUrl: "pages/dashboard/staffs.html",
      controller: "staffCtrl",
    })
    .when("/patientProfile/:patientID/:page", {
      templateUrl: "pages/dashboard/patientProfile.html",
      controller: "patientProfileCtrl",
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
  .controller("ScheduledAppointmentCtrl", function () {
    activeMenu(3, 1);
  })
  .controller("FollowUpAppointmentCtrl", function () {
    activeMenu(3, 2);
  })
  .controller("patientsCtrl", function () {
    activeMenu(4);
  })
  .controller("docCtrl", function () {
    activeMenu(6, 4);
  })
  .controller("staffCtrl", function () {
    activeMenu(6, 5);
  })
  .controller("businessCtrl", function ($routeParams) {
    activeMenu(5);

    const btnLinks = document.querySelectorAll(
      ".patientProfile .btn-links_container .btn-links"
    );
    const sectionTabs = document.querySelectorAll(".patientProfile .tabs");

    const resetTab = () => {
      btnLinks.forEach((item) => {
        item.classList.forEach((childItem) => {
          if (childItem == "btn-links_active") {
            item.classList.remove("btn-links_active");
          }
        });
      });

      sectionTabs.forEach((item) => {
        item.classList.forEach((childItem) => {
          if (childItem == "tb-show") {
            item.classList.remove("tb-show");
          }
        });
      });
    };

    const activePatientTab = (tabNum) => {
      btnLinks[tabNum].classList.add("btn-links_active");
      sectionTabs[tabNum].classList.add("tb-show");
    };

    const changeTab = (page) => {
      resetTab();
      switch (page) {
        case "service_delivered":
          activePatientTab(0);
          break;
        case "payment_received":
          activePatientTab(1);
          break;
        case "bills_generated":
          activePatientTab(2);
          break;
        default:
          break;
      }
    };

    btnLinks.forEach((item) => {
      item.addEventListener("click", (e) => {
        window.location.href = "#!/business/" + e.path[0].id;
      });
    });

    changeTab($routeParams.page);
  })
  .controller("ClinicSettingsCtrl", function ($routeParams) {
    activeMenu(6, 3);
  })
  .controller("patientProfileCtrl", function ($routeParams) {
    activeMenu(0);

    const btnLinks = document.querySelectorAll(
      ".patientProfile .btn-links_container .btn-links"
    );
    const sectionTabs = document.querySelectorAll(".patientProfile .tabs");

    const resetTab = () => {
      btnLinks.forEach((item) => {
        item.classList.forEach((childItem) => {
          if (childItem == "btn-links_active") {
            item.classList.remove("btn-links_active");
          }
        });
      });

      sectionTabs.forEach((item) => {
        item.classList.forEach((childItem) => {
          if (childItem == "tb-show") {
            item.classList.remove("tb-show");
          }
        });
      });
    };

    const activePatientTab = (tabNum) => {
      btnLinks[tabNum].classList.add("btn-links_active");
      sectionTabs[tabNum].classList.add("tb-show");
    };

    const changeTab = (page) => {
      resetTab();
      switch (page) {
        case "p_details":
          activePatientTab(0);
          break;
        case "p_prescription":
          activePatientTab(1);
          break;
        case "p_history":
          activePatientTab(2);
          break;
        case "p_billing":
          activePatientTab(3);
          break;
        default:
          break;
      }
    };

    btnLinks.forEach((item) => {
      item.addEventListener("click", (e) => {
        window.location.href =
          "#!/patientProfile/" + $routeParams.patientID + "/" + e.path[0].id;
      });
    });

    changeTab($routeParams.page);
  });
