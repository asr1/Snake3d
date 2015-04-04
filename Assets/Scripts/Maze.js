#pragma strict

function createArray(length : int) {
    var arr = new Array(length || 0);
       var i = length;

    if (length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}


function Start () {
var size : Vector3;
size = new Vector3(20,20,20);
var field = createArray(size.x,size.y,size.z);

for(var x =0; x < size.x; x++)
{
	for(var y = 0; y < size.y; y++)
	{
		for(var z = 0; z < size.z; z++)
		{
			field[x,y,z] = new MazeCell();
		}
	} 
} 

}

function Update () {

}