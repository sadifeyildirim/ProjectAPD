//@ui5-bundle project1/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"project1/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("project1.Component",{metadata:{manifest:"json"}})});
},
	"project1/i18n/i18n.properties":'# This is the resource bundle for project1\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.',
	"project1/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"project1","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.12.5","toolsId":"6e22ead9-f921-4e6d-bad4-1ad87dd2b397"},"dataSources":{"mainService":{"uri":"odata/v4/btp/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.121.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"project1.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"HeaderList","target":"HeaderList"},{"pattern":"Header({key}):?query:","name":"HeaderObjectPage","target":"HeaderObjectPage"},{"pattern":"Header({key})/items({key2}):?query:","name":"ItemObjectPage","target":"ItemObjectPage"}],"targets":{"HeaderList":{"type":"Component","id":"HeaderList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Header","variantManagement":"Page","navigation":{"Header":{"detail":{"route":"HeaderObjectPage"}}}}}},"HeaderObjectPage":{"type":"Component","id":"HeaderObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Header","navigation":{"items":{"detail":{"route":"ItemObjectPage"}}}}}},"ItemObjectPage":{"type":"Component","id":"ItemObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Header/items"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"Project_APD.service"}}'
}});
