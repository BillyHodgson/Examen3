CREATE PROCEDURE [dbo].[ProductoObtener]
		@ProductoId INT= null
AS
	begin
	SET NOCOUNT ON


	 SELECT
	 ProductoId,
	 Descripcion,
	 Estado

	 FROM dbo.Producto
	 WHERE

	 (@ProductoId IS NULL OR ProductoId=@ProductoId)



	end