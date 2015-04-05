#pragma strict

public class FieldCell extends MonoBehaviour
{
	var coordinates : IntVector3;
	
	function FieldeCell(x: int, y : int, z : int)
	{
		coordinates.x = x;
		coordinates.y = y;
		coordinates.z = z;
	}
}