#pragma strict

var pupu : GameObject;

private var nowTime : float ;
private var beforeTime : float ;

var upVector : Vector3;
var xVector : float;

private var copyPupu : GameObject;

function Start () {
	nowTime = Time.time;
	beforeTime = nowTime;
	
}

function Update () {
	nowTime = Time.time;
	if(nowTime >= beforeTime + 1)
	{
		beforeTime = nowTime;
		xVector = Random.Range(-5f,5f);
		copyPupu = GameObject.Instantiate(pupu,Vector3(xVector,-6.5,7),Quaternion(0,0,0,0));
		copyPupu.rigidbody.isKinematic = false;
		upVector.x = Random.Range(-150f,150f);
		upVector.y = Random.Range(500f,700f);
		copyPupu.rigidbody.AddForce(upVector);
		copyPupu.rigidbody.AddTorque(Random.Range(-200f,200f),Random.Range(-200f,200f),Random.Range(-200f,200f));
	}
}