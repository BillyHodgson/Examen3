CREATE PROCEDURE [dbo].[CompraObtener]
	@IdCompra INT=NULL

AS BEGIN
	SET NOCOUNT ON

	SELECT
			A.IdCompra
		,   A.FechaCompra
		,   A.Monto
		,   A.Impuesto
		,   A.Total
		,   A.Observaciones
		,   A.Estado

		,   A.ClientesId
		,	C.NombreCompleto

		,   A.ProductoId	
		,	V.Descripcion
				

	FROM dbo.Compra A
	 INNER JOIN dbo.Clientes C
         ON A.ClientesId = C.ClientesId
     INNER JOIN dbo.Producto V
         ON A.ProductoId = V.ProductoId
	 
	WHERE
	     (@IdCompra IS NULL OR A.IdCompra=@IdCompra)

END