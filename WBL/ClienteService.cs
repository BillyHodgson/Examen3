using BD;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WBL
{
    
        public interface IClienteService
        {
            Task<DBEntity> Create(ClienteEntity entity);
            Task<DBEntity> Delete(ClienteEntity entity);
            Task<IEnumerable<ClienteEntity>> Get();
            Task<ClienteEntity> GetById(ClienteEntity entity);
            Task<DBEntity> Update(ClienteEntity entity);
            Task<IEnumerable<ClienteEntity>> GetLista();
        }

        public class ClientesService : IClienteService
        {
            private readonly IDataAccess sql;

            public ClientesService(IDataAccess _sql)
            {
                sql = _sql;
            }

            public async Task<IEnumerable<ClienteEntity>> Get()
            {
                try
                {
                    var result = sql.QueryAsync<ClienteEntity>("ClientesObtener");

                    return await result;

                }
                catch (Exception)
                {

                    throw;
                }



            }

            public async Task<IEnumerable<ClienteEntity>> GetLista()
            {
                try
                {
                    var result = sql.QueryAsync<ClienteEntity>("ClientesLista");

                    return await result;
                }
                catch (Exception EX)
                {

                    throw;
                }
            }



            public async Task<ClienteEntity> GetById(ClienteEntity entity)
            {
                try
                {
                    var result = sql.QueryFirstAsync<ClienteEntity>("ClientesObtener", new
                    {
                        entity.ClientesId
                    });

                    return await result;
                }
                catch (Exception)
                {

                    throw;
                }


            }

            public async Task<DBEntity> Create(ClienteEntity entity)
            {
                try
                {
                    var result = sql.ExecuteAsync("ClientesInsertar", new
                    {
                        entity.NombreCompleto,
                        entity.Direccion,
                        entity.Telefono,
                        entity.Estado
                    });

                    return await result;
                }
                catch (Exception)
                {

                    throw;
                }


            }

            public async Task<DBEntity> Update(ClienteEntity entity)
            {
                try
                {
                    var result = sql.ExecuteAsync("ClientesActualizar", new
                    {
                        entity.ClientesId,
                        entity.NombreCompleto,
                        entity.Direccion,
                        entity.Telefono,
                        entity.Estado
                    });

                    return await result;
                }
                catch (Exception)
                {

                    throw;
                }


            }

            public async Task<DBEntity> Delete(ClienteEntity entity)
            {
                try
                {
                    var result = sql.ExecuteAsync("ClientesEliminar", new
                    {
                        entity.ClientesId
                    });

                    return await result;
                }
                catch (Exception)
                {

                    throw;
                }


            }
        }
}
