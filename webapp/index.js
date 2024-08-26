sap.ui.define(
  ["sap/m/Button", "sap/ui/core/mvc/XMLView"],
  function (Button, XMLView) {
    "use strict";
    // alert("UI5 is ready to use");

    //   new Button("myButton", {
    //     text: "Ui5 Button",
    //     enabled: true,
    //     type: sap.m.ButtonType.Accept,
    //     press: function (oEvent) {
    //       alert("Hwllo World");
    //     },
    //   }).placeAt("content");

    XMLView.create({
      viewName: "ui5.first.app.view.main",
    }).then((oView) => oView.placeAt("content"));
  }
);
