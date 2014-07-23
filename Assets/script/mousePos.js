#pragma strict

var ball : GameObject;

private var ray : Ray;

var hit : RaycastHit;
private var hits : RaycastHit[];

function Start () {

}

function Update () {
	if(Input.GetMouseButton(0))
	{
		
		ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		
		//Debug.DrawRay(Camera.main.transform.position,ray.direction,Color.red);
		
		hits = Physics.RaycastAll(Camera.main.transform.position,ray.direction,50);
		var i : int;
		for(i = 0; i < hits.Length; i++)
		{
			hit=hits[i];
			if(hit.collider.tag=="screen")
			{
				ball.transform.position = hit.point;
			}
		}
	}
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
