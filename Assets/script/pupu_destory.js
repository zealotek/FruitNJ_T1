#pragma strict

private var child : Component[];

function Start () {

}

function Update () {
	
	if(gameObject.rigidbody.isKinematic == false)
	{
		if(gameObject.transform.position.y <= -7)
		{
			Destroy(gameObject);
		}
	}
	else if(gameObject.rigidbody.isKinematic == true)
	{
		child = gameObject.GetComponentsInChildren(Transform);
		if(child[1].transform.position.y <= -7)
		{
			Destroy(gameObject);
		}
	}
	
	
}