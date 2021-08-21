using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WBL;

namespace WebApp.Pages.Producto
{
    
        public class EditModel : PageModel
        {
            private readonly IProductoService productoService;

            public EditModel(IProductoService productoService)
            {
                this.productoService = productoService;
            }

            [BindProperty]
            public ProductoEntity Entity { get; set; } = new ProductoEntity();

            [BindProperty(SupportsGet = true)]
            public int? id { get; set; }


            public async Task<IActionResult> OnGet()
            {

                try
                {
                if (!this.SessionOnline()) return RedirectToPage("../Login");
                if (id.HasValue)
                    {
                        Entity = await productoService.GetById(new() { ProductoId = id });
                    }

                    return Page();
                }
                catch (Exception ex)
                {

                    return Content(ex.Message);
                }

            }

            public async Task<IActionResult> OnPostAsync()
            {

                try
                {
                    if (Entity.ProductoId.HasValue)
                    {
                        //Actualizar 
                        var result = await productoService.Update(Entity);

                        if (result.CodeError != 0) throw new Exception(result.MsgError);
                        TempData["Msg"] = "Se actualizó correctamente";
                    }
                    else
                    {
                        //Nuevo 
                        var result = await productoService.Create(Entity);

                        if (result.CodeError != 0) throw new Exception(result.MsgError);
                        TempData["Msg"] = "Se agregó correctamente";

                    }

                    return RedirectToPage("Grid");
                }



                catch (Exception ex)
                {

                    return Content(ex.Message);
                }

            }
        }
}
