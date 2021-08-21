CREATE PROCEDURE [dbo].[ProductoActualizar]
	@ProductoId INT,
	@Descripcion VARCHAR(500),
    @Estado BIT
	
	
AS BEGIN
SET NOCOUNT ON

	BEGIN TRANSACTION TRASA

	BEGIN TRY

		
		update dbo.Producto set     
	      Descripcion=@Descripcion,
		  Estado=@Estado
		where ProductoId=@ProductoId


		COMMIT TRANSACTION TRASA
		
		SELECT 0 AS CodeError, '' AS MsgError



	END TRY

	BEGIN CATCH
		SELECT 
				ERROR_NUMBER() AS CodeError
			,	ERROR_MESSAGE() AS MsgError

			ROLLBACK TRANSACTION TRASA
	END CATCH


END