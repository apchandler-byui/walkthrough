sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"
], 
    function(Controller, MessageToast) {
    "use strict";

    return Controller.extend("demo.walkthrough.controller.App", {
        
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