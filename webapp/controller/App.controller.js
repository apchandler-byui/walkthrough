sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], 
    function(Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("demo.walkthrough.controller.App", {
        
        onInit: function() {
            var oData = {
                recipient: {
                    name: "World"
                }
            };
            var oModel = new JSONModel(oData);  
            this.getView().setModel(oModel);

            //Set the i18n model on the view
            var i18nModel = new ResourceModel({
                bundleName: "demo.walkthrough.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");
        },

        onShowHello: function() {
            //Read the recipient's name from the model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMessage", [sRecipient]);
            
            //Show the message in the MessageToast
            MessageToast.show(sMsg);
        }   
    });
});