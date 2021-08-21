namespace ProductoEdit {


    var Entity = $("#AppEdit").data("entity");

    var Formulario = new Vue({
        data: {
            Formulario: "#FormEdit",
            Entity: Entity,

        },

        methods: {

        
            ProductoServicio(entity) {

                if (entity.IdProducto == null) {
                    return App.AxiosProvider.ProductoGuardar(entity);
                } else {
                    return App.AxiosProvider.ProductoActualizar(entity);
                }
            },
            Save() {

                if (BValidateData(this.Formulario)) {

                    Loading.fire("Guardando");
                    //var test = this.CalculoMontoTotalFn();
                    //    test = this.CalculoMontoTotalCP;
                    this.ProductoServicio(this.Entity).then(data => {

                        Loading.close();

                        if (data.CodeError == 0) {
                            Toast.fire({ title: "Se ha guardado el Producto!", icon: "success" })
                                .then(() => window.location.href = "Producto/Grid")
                        } else {
                            Toast.fire({ title: data.MsgError, icon: "error" });

                        }


                    }).catch(c => console.log(c));



                } else {
                    Toast.fire({ title: "Por favor complete los campos requeridos!", icon: "error" });
                }

            }


        },
        mounted() {


            CreateValidator(this.Formulario);

        },

        

    });

    Formulario.$mount("#AppEdit")
}