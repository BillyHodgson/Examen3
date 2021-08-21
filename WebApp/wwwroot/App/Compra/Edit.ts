namespace CompraEdit {


    var Entity = $("#AppEdit").data("entity");

    var Formulario = new Vue({
        data: {
            Formulario: "#FormEdit",
            Entity: Entity,

        },

        methods: {

            CalculoMontoTotalFn() {
                var total = ((this.Entity.Impuesto / 100) * this.Entity.Monto) + this.Entity.Monto;
                return total;
            },
            CompraServicio(entity) {

                if (entity.IdCompra == null) {
                    return App.AxiosProvider.CompraGuardar(entity);
                } else {
                    return App.AxiosProvider.CompraActualizar(entity);
                }
            },
            Save() {

                if (BValidateData(this.Formulario)) {

                    Loading.fire("Guardando");
                    this.CompraServicio(this.Entity).then(data => {

                        Loading.close();

                        if (data.CodeError == 0) {
                            Toast.fire({ title: "Se ha realizado la compra!", icon: "success" })
                                .then(() => window.location.href = "Compra/Grid")
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

        computed: {
            CalculoMontoTotalCP: function (): number {
                var total = ((this.Entity.Impuesto / 100) * this.Entity.Monto) + this.Entity.Monto;
                return total;
            }
        }

    });

    Formulario.$mount("#AppEdit")
}