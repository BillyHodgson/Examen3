"use strict";
var ProductoEdit;
(function (ProductoEdit) {
    var Entity = $("#AppEdit").data("entity");
    var Formulario = new Vue({
        data: {
            Formulario: "#FormEdit",
            Entity: Entity,
        },
        methods: {
            ProductoServicio: function (entity) {
                if (entity.IdProducto == null) {
                    return App.AxiosProvider.ProductoGuardar(entity);
                }
                else {
                    return App.AxiosProvider.ProductoActualizar(entity);
                }
            },
            Save: function () {
                if (BValidateData(this.Formulario)) {
                    Loading.fire("Guardando");
                    //var test = this.CalculoMontoTotalFn();
                    //    test = this.CalculoMontoTotalCP;
                    this.ProductoServicio(this.Entity).then(function (data) {
                        Loading.close();
                        if (data.CodeError == 0) {
                            Toast.fire({ title: "Se ha guardado el Producto!", icon: "success" })
                                .then(function () { return window.location.href = "Producto/Grid"; });
                        }
                        else {
                            Toast.fire({ title: data.MsgError, icon: "error" });
                        }
                    }).catch(function (c) { return console.log(c); });
                }
                else {
                    Toast.fire({ title: "Por favor complete los campos requeridos!", icon: "error" });
                }
            }
        },
        mounted: function () {
            CreateValidator(this.Formulario);
        },
    });
    Formulario.$mount("#AppEdit");
})(ProductoEdit || (ProductoEdit = {}));
//# sourceMappingURL=Edit.js.map