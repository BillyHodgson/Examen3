"use strict";
var ProductoGrid;
(function (ProductoGrid) {
    function OnClickEliminar(id) {
        ComfirmAlert("Desea eliminar este Producto? ", "Eliminar", "warning", "#3085d6", "#d33")
            .then(function (result) {
            if (result.isConfirmed) {
                //animacion
                Loading.fire("Borrando..");
                App.AxiosProvider.ProductoEliminar(id).then(function (data) {
                    //cerrar animacion
                    Loading.close();
                    if (data.CodeError == 0) {
                        Toast.fire({ title: "Se elimino correctamente!", icon: "success" }).then(function () { return window.location.href = "Producto/Grid"; });
                    }
                    else {
                        Toast.fire({ title: data.MsgError, icon: "error" });
                    }
                });
            }
        });
    }
    ProductoGrid.OnClickEliminar = OnClickEliminar;
    $("#GridView").DataTable();
})(ProductoGrid || (ProductoGrid = {}));
//# sourceMappingURL=Grid.js.map