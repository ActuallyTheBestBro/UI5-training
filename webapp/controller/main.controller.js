sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessgeBox, MessageToast, JSONModel, ResourceModel) {
    return Controller.extend("ui.first.app.controller.main", {
      onButtonPress: function (OEvent) {
        //OEvent.getSource().setText("Clicked");
        //MessgeBox.confirm("This message should appear in the confirmation");
        MessageToast.show("This message should appear in the message toast");
      },
      onInit: function () {
        MessageToast.show("My view is initialized");
        //this.onButtonPress();
        var students1 = [
          {
            name: "Student1",
            age: 21,
          },
          {
            name: "student2",
            age: 31,
          },
        ];
        var students = {
          studentsData: [
            {
              name: "Student1",
              age: 21,
            },
            {
              name: "student2",
              age: 31,
            },
          ],
          btnEnabled: false,
        };
        var oModel = new JSONModel(students);
        oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
        //this.getView().byId("MyTable").setModel(oModel);
        this.getView().setModel(oModel);

        var rModel = new ResourceModel({
          bundleName: "ui5.first.app.i18n",
        });
        this.getView().setModel(ResourceModel, "i18nResource");
      },
      onBeforeRendering: function () {
        MessageToast.show("Before My View is Rendered");
      },
      onAfterRendering: function () {
        MessageToast.show("After My View is Rendered");
      },
      onExit: function () {
        MessgeBox.show("View is destroyed");
      },
    });
  }
);
