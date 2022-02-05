sap.ui.require(["sap/m/Text",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/BindingMode",
    "sap/ui/model/resource/ResourceModel"],
    function (Text, JSONModel, XMLView, BindingMode, ResourceModel) {
        "use strict"
        sap.ui.getCore().attachInit(function () {

            var oProductModel = new JSONModel();
            oProductModel.loadData("./model/Products.json");
            sap.ui.getCore().setModel(oProductModel, "products");

            // Create JSON Model from an object literal
            var oModel = new JSONModel({
                firstName: "Deepak",
                lastName: "Joshy",
                enabled: false,
                panelHeaderText: "Data Binding Basics",
                address: {
                    street: "WhiteField Lane",
                    city: "Bangalore",
                    zip: "570001",
                    country: "India"
                },
                salesAmount: 1234.6789,
                priceThreshold: 15,
                currencyCode: "EUR",
                country: "Germany"
            });

            var oResourceModel = new ResourceModel({
                bundleName: "sap.ui.demo.db.i18n.i18n",
                supportedLocales: ["", "de"],
                fallbackLocale: ""
            });

            sap.ui.getCore().setModel(oResourceModel, "i18n");

            // oModel.setDefaultBindingMode(BindingMode.OneWay);   // For One Way binding

            sap.ui.getCore().setModel(oModel);

            //Display XML View called App
            var oView = new XMLView({ viewName: "sap.ui.demo.db.view.App" })

            //Register the view with the message manager
            sap.ui.getCore().getMessageManager().registerObject(oView, true);


            // Display XML View
            // new XMLView({ viewName: "sap.ui.demo.db.view.App" }).placeAt("content");
            oView.placeAt("content");

        })
    }
)