CREATE PROCEDURE [dbo].[ProductoLista]
	AS
	BEGIN
	SET NOCOUNT ON


	SELECT
	 ProductoId,
	 Descripcion
	FROM Producto
	WHERE Estado=1


	END