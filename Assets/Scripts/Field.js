	public var CellPrefab : FieldCell;

public class Field extends MonoBehaviour
{
		var size : Vector3;

//	public var PassagePrefab : FieldPassage;
	public var WallPrefab : FieldWall;


	function Start () {

		size = new Vector3(20,20,20);
//		Instantiate(WallPrefab, new Vector3(0,0,0), transform.rotation);
	}

	public function Generate()
	{
		var cells = new Array(size.x);
		cells[0] = new Array(size.y);
		cells[0][0] = new Array(size.z);


		//Inner field
		for(var x : int = 0; x < size.x; x++)
		{
			for(var y : int = 0; y < size.y; y++)
			{
				for(var z : int = 0; z < size.z; z++)
				{
//					cells[x][y][z] = CellPrefab.Instantiate();
				}
			}
		}
		
		//Outer edges
			for( y  = 0; y < size.y; y++)
			{
				for( z  = 0; z < size.z; z++)
				{
	//				cells[0][y][z] = WallPrefab.Instantiate();
				}
			}
				for( x  = 0; x < size.x; x++)
			{
				for( z = 0; z < size.z; z++)
				{
//					cells[x][0][z] = WallPrefab.Instantiate();
				}
			}
				for( x  = 0; x < size.x; x++)
			{
				for(y = 0; y < size.y; y++)
				{
	//				cells[x][y][0] = WallPrefab.Instantiate();
				}
			}
		return;
	}

	function Update () {

	}

}