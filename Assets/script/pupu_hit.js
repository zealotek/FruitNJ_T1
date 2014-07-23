#pragma strict

private var child : Component[];

var check : int;

function Start () {

}

function Update () {
	if(Input.GetMouseButton(0))
	{
		check = 1;
	}
	if(Input.GetMouseButtonUp(0))
	{
		check = 0;
	}
	/*
	if(gameObject.transform.position.y <= 10)
	{
		Destroy(gameObject);
	}
	
	if(child[1].transform.position.y <= 10)
	{
		Destroy(gameObject);
	}
	*/
}

function OnTriggerEnter (other : Collider)
{
	if(other.tag == "pupu")
	{
		if(check == 1)
		{
			Debug.Log("131365213213213");
			//gameObject.rigidbody.isKinematic = true;
			//gameObject.collider.isTrigger = true;
			
			//child = gameObject.GetComponentsInChildren(Transform);
			
			other.rigidbody.isKinematic = true;
			other.collider.isTrigger = true;
			child = other.GetComponentsInChildren(Transform);
			
			child[1].collider.isTrigger = false;
			child[2].collider.isTrigger = false;
			child[1].rigidbody.isKinematic = false;
			child[2].rigidbody.isKinematic = false;
			
			child[1].rigidbody.AddRelativeForce(Random.Range(-1,1),Random.Range(-1,1),Random.Range(-1,1));
			child[2].rigidbody.AddRelativeForce(Random.Range(-1,1),Random.Range(-1,1),Random.Range(-1,1));
			
		}
	}
}
/*



*/

























