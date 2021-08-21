using Entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WBL;
namespace WebApiRest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly IProductoService productoService;

        public ProductoController(IProductoService productoService)
        {
            this.productoService = productoService;
        }

        [HttpGet("Lista")]
        public async Task<IEnumerable<ProductoEntity>> GetLista()
        {
            try
            {
                return await productoService.GetLista();
            }
            catch (Exception ex)
            {

                return new List<ProductoEntity>();
            }
        }
    }
}
