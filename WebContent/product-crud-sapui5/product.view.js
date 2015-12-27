sap.ui.jsview("product-crud-sapui5.product", {
	
	//-----------------------------------------------------------------------------------------------------------------
	/**
	 * Specifies the Controller belonging to this View
	 */
	getControllerName : function(){
		return "product-crud-sapui5.product";
	},

	//-----------------------------------------------------------------------------------------------------------------
	/**
	 * 
	 */
	createContent : function(oController) {
		
		// 1 - create a MatrixLayout
		var oMatrix = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed: true,
			width: '300px',
			columns: 3
		});

		// 2 - create a new row with 3 buttons: create, edit and remove
		oMatrix.createRow(
			
		    new sap.ui.commons.Button({
			  text : "Create",
			  width: '100px',
			  press: function() {
				oController.create();
			  }
		   }),

		   new sap.ui.commons.Button({
			  text : "Edit",
			  width: '100px',
			  press: function() {
				oController.edit();
			  }
		   }),

		   new sap.ui.commons.Button({
			  text : "Remove",
			  width: '100px',
			  press: function() {
				oController.remove();
			  }
		   })
		);
		
		// 3 - create a new form with text fields
		var oLayout = new sap.ui.layout.form.SimpleForm("formId",{
			title: "Product Maintainence",
			content: [
			   new sap.ui.commons.Label({text: "ID"}),
			   new sap.ui.commons.TextField("id",{width: '200px', editable:false}),
			
			   new sap.ui.commons.Label({text: "Name"}),
			   new sap.ui.commons.TextField("name",{width: '200px'}),
			          
			   new sap.ui.commons.Label({text: "Description"}),
			   new sap.ui.commons.TextField("description",{width: '200px'}),
			   
			   new sap.ui.commons.Label({text: "Price"}),
			   new sap.ui.commons.TextField("price",{width: '200px'}),
			   
			   new sap.ui.commons.Label({text: "Rating"}),
			   new sap.ui.commons.TextField("rating",{width: '200px'}),
			   
			   new sap.ui.commons.Label({text: "ReleaseDate"}),
			   new sap.ui.commons.TextField("date",{width: '200px', value: "2015-12-28T:12:05:00"}),
			   
			   new sap.ui.commons.Label({text: ""}),
			   new sap.ui.commons.Button({
				   text: "Save",
				   width: "100px",
				   press: function(){
					   onController.save();
				   }
		       })
		    ]
		});
		
		// 4 - create a table
		var oTable = new sap.ui.table.Table("tableId", {
			visibleRowCount: 5,
			editable: false,
		});
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "ID"}),
			visible: true,
			template: new sap.ui.commons.TextView({text: "products>ID"})
		}))
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Name"}),
			visible: true,
			template: new sap.ui.commons.TextView({text: "products>Name"})
		}))		
		
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text: "Description"}),
			visible: true,
			template: new sap.ui.commons.TextView({text: "products>Description"})
		}));
		
		oTable.bindRows("products>/Products");
		
		// 5 - return matrix layout and the form
		var element = [oMatrix, oTable, oLayout];

		return element;
	},
	//-----------------------------------------------------------------------------------------------------------------

});
